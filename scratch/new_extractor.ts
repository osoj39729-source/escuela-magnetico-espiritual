function extractFilosofiaIndexFromText(text: string): string[] {
    const lines = text.split('\n');
    const index: string[] = [];
    const datePattern = /^(?:Sesión del |)[0-9]*\s*(Enero|Febrero|Marzo|Abril|Mayo|Junio|Julio|Agosto|Septiembre|Octubre|Noviembre|Diciembre)\s*[0-9]+(?:\s*de\s*[0-9]+)?|^\d+\s*de\s*(Enero|Febrero|Marzo|Abril|Mayo|Junio|Julio|Agosto|Septiembre|Octubre|Noviembre|Diciembre)/i;
    
    let currentSession: { startLine: number, dateStr: string } | null = null;
    let afterSeparator = false;

    const closeSession = (endIndex: number) => {
        if (!currentSession) return;
        let name = 'Desconocido';
        for (let j = endIndex - 1; j >= Math.max(0, endIndex - 30); j--) {
            const prev = lines[j].trim();
            if (prev && !prev.includes('_____') && prev.length < 50
                && !prev.match(/^Adiós/i) && !prev.toLowerCase().includes('nota')
                && !prev.match(/^[Pp]ág/)) {
                name = prev.replace(/[()]/g, '').trim();
                break;
            }
        }
        const escapedTitle = `${currentSession.dateStr} - ${name}`.replace(/"/g, '\\"');
        index.push(`${currentSession.startLine}: ${escapedTitle}`);
        currentSession = null;
    };
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        if (line.includes('_____')) {
            afterSeparator = true;
            continue;
        }

        if (line.length === 0) continue;

        let isHeader = false;
        let headerTitle = '';

        if (line.toUpperCase().includes('AL LECTOR:')
            || line.toLowerCase().startsWith('introito y')
            || line.toLowerCase().startsWith('aclaraciones a las')
            || line.toUpperCase() === 'PRÓLOGO') {
            isHeader = true;
            headerTitle = line.replace(/[.:]/g, '').trim();
        } else if (afterSeparator) {
            isHeader = true;
            headerTitle = line.replace(/[.:]/g, '').trim();
        } else if (line.match(datePattern)) {
            isHeader = true;
            headerTitle = line.replace(/[.:]/g, '').trim();
        }

        afterSeparator = false;

        if (isHeader) {
            closeSession(i);
            currentSession = { startLine: i + 1, dateStr: headerTitle };
        }
    }
    
    closeSession(lines.length);
    
    return index;
}
