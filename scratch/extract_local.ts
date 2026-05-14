import fs from 'fs';
import path from 'path';

const TEXTS_DIR = 'f:/proyectos 2/trincado descargado de github/scratch/texts';
const LIBRARY_FILE = 'f:/proyectos 2/trincado descargado de github/src/data/library.ts';

const ORDINALS = 'PRIMERO|PRIMERA|SEGUNDO|SEGUNDA|TERCERO|TERCERA|CUARTO|CUARTA|QUINTO|QUINTA|SEXTO|SEXTA|S\u00C9PTIMO|S\u00C9PTIMA|OCTAVO|OCTAVA|NOVENO|NOVENA|D\u00C9CIMO|D\u00C9CIMA|UND\u00C9CIMO|DUOD\u00C9CIMO|DECIMOPRIMERO|DECIMOSEGUNDO|DECIMOTERCERO|DECIMOCUARTO|DECIMOCUAR|DECIMOQUINTO|DECIMOSEXTO|DECIMOS\u00C9PTIMO|DECIMOSEPTIMO|DECIMOOCTAVO|DECIMOOCTAV|DECIMOCTAVO|DECIMOCTAV|DECIMONOVENO|VIG\u00C9SIMO|TREINTA|CUARENTA|CINCUENTA|I|II|III|IV|V|VI|VII|VIII|IX|X|XI|XII|XIII|XIV|XV|XVI|XVII|XVIII|XIX|XX|UNO|DOS|TRES|CUATRO|CINCO|SEIS|SIETE|OCHO|NUEVE|DIEZ|ONCE|DOCE|TRECE|CATORCE|QUINCE|DIECIS\u00C9IS|DIECISEIS|DIECISIETE|DIECIOCHO|DIECINUEVE|VEINTE';

const CAP = 'CAP[\u00CDI]TULO';
const PAR = 'P[\u00C1A]RRAFO';
const AP = 'AP[\u00C9E]NDICE';
const ART = 'ART[\u00CDI]CULO';
const PRO = 'PR[\u00D3O]LOGO';
const INT = 'INTRODUCCI[\u00D3O]N';
const EPI = 'EP[\u00CDI]LOGO';
const CON = 'CONCLUSI[\u00D3O]N';
const CUE = 'CUESTIONARIO';
const LEC = 'LECCI[\u00D3O]N';
const PRE = 'PRESENTACI[\u00D3O]N';
const GRA = 'GRADO';
const REG = 'REGLA';

const KEYWORD_PATTERNS = [
    new RegExp(`^${AP}`, 'i'), 
    /^PREMISA/i, 
    /^Mis [Oo]bservaciones/i,
    /^(?:\d+[aáª]\.?\s+)?(?:Exposici[oó]n|R[eé]plica)(?:\s+(?:del?|de\s+la|contrarr[eé]plica|de\s+C\.|[\d].*)|$)/i, 
    new RegExp(`^(?:PARTE\\s+(?:${ORDINALS})|(?:${ORDINALS})\\s+PARTE)`, 'i'),
    new RegExp(`^(?:${CAP}\\s+(?:${ORDINALS}|\\d+)|(?:${ORDINALS})\\s+${CAP})`, 'i'),
    /^CAP\.\s+\d+/i, 
    new RegExp(`^(?:${PAR}\\s+(?:${ORDINALS}|\\d+)|(?:${ORDINALS})\\s+${PAR})`, 'i'),
    new RegExp(`^P[\u00C1A]R\.\\s+(?:${ORDINALS}|\\d+)`, 'i'), 
    new RegExp(`^${PRO}`, 'i'),
    new RegExp(`^${INT}`, 'i'), 
    new RegExp(`^${EPI}`, 'i'), 
    /^PUNTO\s+FINAL/i, 
    new RegExp(`^${CON}`, 'i'),
    new RegExp(`^${CUE}`, 'i'), 
    new RegExp(`^${LEC}`, 'i'), 
    /^PREFACIO/i, 
    /^NOTA\s+A\s+LA/i, 
    /^DEDICATORIA/i,
    /^PROCLAMA(?:\s|:|$)/i, 
    /^APOTEGMAS/i, 
    /^CONSEJOS/i, 
    /^RECOMENDACIONES/i, 
    new RegExp(`^${PRE}`, 'i'), 
    new RegExp(`^${ART}\\s+\\d+`, 'i'),
    new RegExp(`^PUNTO\\s+(?:${ORDINALS})`, 'i'),
    new RegExp(`^(?:LIBRO\\s+(?:${ORDINALS})|(?:${ORDINALS})\\s+LIBRO)`, 'i'),
    new RegExp(`^${GRA}\\s+(?:${ORDINALS}|\\d+)`, 'i'),
    new RegExp(`^${REG}\\s+(?:${ORDINALS}|\\d+|GENERAL)`, 'i'),
    /^INICIACI\u00D3N/i,
    /^ESLAB\u00D3N/i,
    /^CORONA\s+FINAL/i,
    /^INGREDIENTES\s+DEL\s+MUNDO/i,
    /^SIEMPRE\s+M\u00C1S\s+ALL\u00C1/i,
    /^LA\s+LEY\s+ES\s+UNA/i,
    /^EL\s+UNIVERSO\s+SOLIDARIZADO/i,
    /^EL\s+MUNDO\s+TODO\s+COMUNIZADO/i,
    /^TODO\s+ES\s+MAGNETISMO\s+ESPIRITUAL/i,
    /^\u00C1TOMOS/i,
    /^MOL\u00C9CULAS/i,
    /^IONES/i,
    /^ELECTRONES/i,
    /^\u201CI\u00F3n\u201D\s+\u201CIonizaci\u00F3n\u201D/i,
    /^M\u00C1XIMA:/i,
    /^CONSEJO:/i,
    /^MANDATOS?:/i,
    /^AXIOMA:/i,
    /^D\s*E\s*C\s*R\s*E\s*T\s*A\s*M\s*O\s*S/i,
    /^P\s*R\s*E\s*S\s*E\s*N\s*T\s*A\s*C\s*I\s*[\u00D3O]\s*N/i,
    /^Jes\u00FAs de Nazareth/i,
    /^JUAN EL SOLITARIO/i,
    /^JUAN Y JES\u00DAS NO SON HOMBRES SOBRENATURALES/i,
    /^PERSECUCI\u00D3N DE LOS SACERDOTES A JES\u00DAS/i,
    /^FUNDACI\u00D3N DE LA IGLESIA CRISTIANA/i,
    /^LA RELIGI\u00D3N CRISTIANA Y LA IGLESIA CAT\u00D3LICA/i,
    /^JES\u00DAS NI SUS APOSTOLES NO LEVANTARON TEMPLOS/i,
    /^TOMA FORMA LA IGLESIA CAT\u00D3LICA/i,
    /^PREMEDITACI\u00D3N INAUDITA/i,
    /^LA FALACIA Y LA FUERZA BRUTA JUNTAS/i,
    /^PRUEBAS AUTENTICAS PARA FUERZA Y JUSTICIA DE LA SENTENCIA/i
];

function getUppercaseRatio(s: string): number {
    if (!s) return 0;
    const upper = s.replace(/[^A-Z\u00C0-\u00DC]/g, '').length;
    return upper / s.length;
}

function getPartNumber(title: string): number {
    const t = title.toUpperCase();
    if (t.includes('PRIMER')) return 1;
    if (t.includes('SEGUND')) return 2;
    if (t.includes('TERCER')) return 3;
    if (t.includes('CUART')) return 4;
    if (t.includes('QUINT')) return 5;
    if (t.includes(' SEXT')) return 6;
    if (t.includes(' SEPT')) return 7;
    return 0;
}

function normalizeTitle(s: string): string {
    return s.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^A-Z]/g, '');
}

function extractFilosofiaIndexFromText(text: string, bookId: string = ''): string[] {
    const useSeparatorDetection = bookId.includes('tomo-2') || bookId.includes('tomo_2');
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
        } else if (afterSeparator && useSeparatorDetection) {
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

function extractIndexFromText(text: string, bookId: string = ''): string[] {
    if (bookId.includes('filosofia-enciclopedica')) {
        return extractFilosofiaIndexFromText(text, bookId);
    }
    const lines = text.split('\n');
    const index: string[] = [];
    let currentMajorSection = "";
    let currentPartNum = 0;
    let inApendice = false;
    
    const isConocete = bookId.includes('conocete-a-ti-mismo-1');
    const isMagnetismo = bookId.includes('magnetismo');
    const isAsiento = bookId.includes('asiento');
    const simplifiedBookTitle = normalizeTitle(bookId);
    const isCuestionario = bookId.includes('cuestionario-espirita-racional') || bookId.includes('cuestionario_espirita_racional');
    const isAmorUniversal = simplifiedBookTitle.includes('AMORUNIVERSALTOMOI') || simplifiedBookTitle.includes('AMORUNIVERSALTOMO1');
    const isStrossmayer = bookId.includes('strossmayer');
    const isPrimerRayo = bookId.includes('primer-rayo');
    const isProfilaxis = bookId.includes('profilaxis-de-la-vida');
    const isExtremos = bookId.includes('los-extremos-se-tocan');
    
    // Extra patterns specific to Primer Rayo de Luz (debate sections)
    const PRIMER_RAYO_PATTERNS = [
        /^O\s+b\s+s\s+e\s+r\s+v\s+a\s+c\s+i\s+o\s+n\s+e\s+s/i, // spaced-out title
        /^Controversia\s+Cat[oó]lic/i,
        /^EXPOSICI[ÓO]N\s+DE\s+CESAR/i,
        /^Exposici[oó]n\s+\d+/i,
        /^(?:\d+[aáª]\.?\s*)?(?:R[eé]plica|Exposici[oó]n|Contrarr[eé]plica)/i,
        /^CONCLUSI[ÓO]N\s*$/i,
        /^Mis\s+[Oo]bservaciones/i,
    ];

    const AMOR_UNIVERSAL_PATTERNS = [
        /^P[ÁA]rrAFo\s+/i,
        /^CAP\u00CDTUlo\s+/i,
        /^P\s+R\s+E\s+S\s+E\s+N\s+T\s+A\s+C\s+I\s+\u00D3\s+N/i,
        /^PR[OÓ]CLAMA/i,
    ];

    const CUESTIONARIO_PATTERNS = [
        /^PREGUNTA\s+\d+/i,
        /^VEAMOS\s+OTRAS\s+PREGUNTAS/i,
        /^\u00BF/i, // ¿
        /^(?:Qu[eé]|Qui[eé]n|C[oó]mo|Cu[aá]nto|Cu[aá]ndo|D[oó]nde|Por\s+qu[eé]|Entonces)\b/i,
    ];

    const STROSSMAYER_PATTERNS = [
        /^JURAMENTO\s+DE\s+LOS\s+CABALLEROS/i,
        /^DISCURSO\s+DEL\s+OBISPO\s+STROSSMAYER$/i,
        /^PROLOGO$/i,
        /^EPILOGO$/i,
        /^A\s+LOS\s+HOMBRES\s+LIBRES/i,
        /^LLAMADA\s+ULTIMA/i,
        /^JURAMENTO\s+DE\s+JESUCRISTO/i,
        /^HASTA\s+LA\s+IGNOMINIA/i,
    ];

    const EXTREMOS_PATTERNS = [
        /^P\s*R\s*E\s*M\s*I\s*S\s*A/i,
        /^P\s*R\s*E\s*F\s*A\s*C\s*I\s*O/i,
        /^P\s*R\s*O\s*L\s*O\s*G\s*O/i,
    ];

    const allowedThemes = [
        'EL UNIVERSO SOLIDARIZADO', 'EL MUNDO TODO COMUNIZADO', 'LA LEY ES UNA', 'TODO ES MAGNETISMO ESPIRITUAL',
        'ATOMOS', 'MOLECULAS', 'IONES', 'ELECTRONES', 'MANDATOS', 'MANDATO', 'CONSEJO', 'MAXIMA', 'AXIOMA',
        'LOS DOS POLOS', 'EL DESEQUILIBRIO', 'EL EQUILIBRIO'
    ];

    for (let i = 0; i < lines.length; i++) {
        if (isConocete && i < 520) continue;

        let line = lines[i].trim();
        
        // Handle split headers in Profilaxis (e.g., 'C' on one line, 'apÍTUlo' on the next)
        if (isProfilaxis && line.length === 1 && i + 1 < lines.length) {
            const nextLine = lines[i + 1].trim();
            const upperLine = line.toUpperCase();
            if (upperLine === 'C' && (nextLine.toLowerCase().startsWith('ap\u00EDtulo') || nextLine.toLowerCase().startsWith('ap\u00EDtu'))) {
                line = line + nextLine;
                i++; 
            } else if (i > 0 && lines[i-1].trim().endsWith('-')) {
                // This is a split word from previous line, definitely not a header
                continue;
            }
        }

        // Join split chapters like 'CapÍTUlo deCiMoCUar' + 'To' or 'oCT' + 'a' + 'vo'
        if (isProfilaxis && (line.toLowerCase().startsWith('cap\u00EDtulo') || line.toLowerCase().startsWith('cap\u00EDtu')) && i + 1 < lines.length) {
            let nextIdx = i + 1;
            while (nextIdx < lines.length) {
                const next = lines[nextIdx].trim();
                if (next.length > 0 && next.length <= 3 && /^[a-z\u00C1\u00C9\u00CD\u00D3\u00DA\u00F1]+$/i.test(next)) {
                    line += next;
                    nextIdx++;
                } else {
                    break;
                }
            }
            i = nextIdx - 1;
        }

        if (line.length > 200 || line.length === 0) continue;
        
        const normalizedLine = line.normalize("NFC");
        if (line.includes('....') || (line.match(/\./g) || []).length > 8) continue;
        
        if (isStrossmayer && line.includes('|')) continue;

        let isMatch = KEYWORD_PATTERNS.some(p => p.test(normalizedLine));
        
        // Primer Rayo de Luz: detect debate section headers
        let isPrimerRayoMatch = false;
        if (isPrimerRayo && !isMatch) {
            isPrimerRayoMatch = PRIMER_RAYO_PATTERNS.some(p => p.test(normalizedLine));
            if (isPrimerRayoMatch) isMatch = true;
        }

        // Cuestionario: detect questions
        let isCuestionarioMatch = false;
        if (isCuestionario && !isMatch) {
            isCuestionarioMatch = CUESTIONARIO_PATTERNS.some(p => p.test(line));
            if (isCuestionarioMatch) isMatch = true;
        }

        // Strossmayer: detect sections
        let isStrossmayerMatch = false;
        if (isStrossmayer && !isMatch) {
            if (!line.includes('|')) {
                isStrossmayerMatch = STROSSMAYER_PATTERNS.some(p => p.test(line));
                if (isStrossmayerMatch) isMatch = true;
            }
        }

        // Amor Universal: detect stylized headers
        let isAmorUniversalMatch = false;
        if (isAmorUniversal && !isMatch) {
            isAmorUniversalMatch = AMOR_UNIVERSAL_PATTERNS.some(p => p.test(line));
            if (isAmorUniversalMatch) isMatch = true;
        }

        let isExtremosMatch = false;
        if (isExtremos && !isMatch) {
            isExtremosMatch = EXTREMOS_PATTERNS.some(p => p.test(normalizedLine));
            if (isExtremosMatch) isMatch = true;
        }

        if (!isMatch) {
            const upperLine = line.toUpperCase();
            if (/^(?:PRIMERA|SEGUNDA|TERCERA|CUARTA|QUINTA|SEXTA|S\u00C9PTIMA|OCTAVA|NOVENA|D\u00C9CIMA)\s*$/.test(upperLine)) {
                if (isMagnetismo || isAsiento || isProfilaxis || isExtremos || isPrimerRayo || isAmorUniversal) isMatch = true;
            }
            if (/^(?:I|II|III|IV|V|VI|VII|VIII|IX|X|XI|XII|XIII|XIV|XV)\s*$/.test(upperLine)) {
                if (isAsiento || ((isProfilaxis || isExtremos) && line.length > 1)) isMatch = true;
            }
        }

        if (!isMatch && (isMagnetismo || isAsiento || isProfilaxis || isExtremos || isPrimerRayo || isAmorUniversal)) {
            const ratio = getUppercaseRatio(line);
            const normLine = line.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            if (allowedThemes.some(t => normLine.includes(t)) || line.includes('\u201CI\u00F3n\u201D')) {
                isMatch = true;
            } else if (ratio > 0.8 && line.length > 8 && line.length < 65 && !line.includes('JOAQU\u00CDN') && !line.includes('Buenos Aires') && !/^[0-9\s]+$/.test(line) && !isProfilaxis) {
                const nextLine = (lines[i+1] || '').trim();
                if (nextLine.length === 0 || getUppercaseRatio(nextLine) > 0.5 || nextLine.length < 30) {
                    isMatch = true;
                }
            }
            if (line.includes('Corona Final') || line.includes('Ingredientes del Mundo') || line.includes('Siempre m\u00E1s all\u00E1')) {
                isMatch = true;
            }
        }

        const otherBooks = ['C\u00D3DIGO DE AMOR UNIVERSAL', 'FILOSOF\u00CDA AUSTERA RACIONAL', 'EL ESPIRITISMO EN SU ASIENTO', 'CON\u00D3CETE A TI MISMO'];
        const simplifiedLine = normalizeTitle(line);
        const isReferringOther = otherBooks.some(b => simplifiedLine.includes(normalizeTitle(b))) && !simplifiedLine.includes(simplifiedBookTitle);
        if (line.toLowerCase().includes('copio:') || line.includes('\u00AB') || (isReferringOther && line.length < 120)) {
            if (isReferringOther && !KEYWORD_PATTERNS.some(p => p.test(normalizedLine)) && !isCuestionario) {
                isMatch = true;
            }
        }

        if (isMatch) {
            if (/^[a-z]/.test(line) && line.endsWith('.') && line.length < 30) continue;
            
            const lineRatio = getUppercaseRatio(line);
            if (lineRatio < 0.08 && line.length > 40) continue;
            if (line.length > 130 && (line.match(/,/g) || []).length > 4) continue;
            
            // Filter out low-ratio lines in Profilaxis that are not keywords
            if (isProfilaxis && !KEYWORD_PATTERNS.some(p => p.test(normalizedLine)) && !allowedThemes.some(t => normalizedLine.toUpperCase().includes(t)) && getUppercaseRatio(line) < 0.15) continue;
            
            if (line.toUpperCase().includes('ESCUELA-MAGN\u00C9TICO-ESPIRITUAL')) continue;
            if (isAmorUniversal && i < 420) continue; // Skip ToC
            if (line.toUpperCase().includes('JOAQU\u00CDN TRINCADO') && line.length < 40) continue;
            if (line.toUpperCase().includes('C\u00C9SAR MONTEMAYOR') && line.length < 30) continue;
            if (line.toUpperCase().includes('J.B. PODEST\u00C1') && line.length < 30) continue;
            if (isAmorUniversal && line.toUpperCase().includes('C\u00D3DIGo DE AMoR UNIVERSAL') && line.length < 45) continue;
            if (line.toLowerCase().includes('http://') || line.toLowerCase().includes('tripod.com')) continue;
            
            const cleanLineForCheck = line.replace(/[:"“”«»']/g, '').trim().toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /g, '');
            const simplifiedBookTitleNoSpaces = simplifiedBookTitle.replace(/ /g, '');
            if (cleanLineForCheck === simplifiedBookTitleNoSpaces || cleanLineForCheck === 'EL' + simplifiedBookTitleNoSpaces || cleanLineForCheck === 'ELESPIRITISMOENSUASIENTO' || cleanLineForCheck === 'ESPIRITISMOENSUASIENTO') continue;

            let titlePart = line;
            let lineNum = i + 1;

            const isProtected = allowedThemes.some(t => normalizeTitle(line).includes(normalizeTitle(t))) || line.includes('\u201CI\u00F3n\u201D') || [/^M\u00C1XIMA:/, /^CONSEJO:/, /^MANDATOS?:/, /^AXIOMA:/].some(r => r.test(line));

            if (!isProtected) {
                const isChapterHeader = [CAP, 'PARTE', 'LIBRO'].some(k => new RegExp(k, 'i').test(line));
                for (let j = i + 1; j < Math.min(i + 15, lines.length); j++) {
                    const nextLine = lines[j].trim();
                    if (nextLine.length === 0) continue;
                    if (/^\d+$/.test(nextLine)) continue;
                    
                    const upperNext = nextLine.toUpperCase();
                    if (upperNext.includes('JOAQU\u00CDN TRINCADO')) continue;
                    if (upperNext.includes('STROSSMAYER')) {
                        if (isStrossmayer && !titlePart.includes('DISCURSO')) continue;
                    }
                    if (upperNext.includes('P \u00C1 G I N A')) continue;
                    if (upperNext.includes('C\u00D3DIGO DE AMOR UNIVERSAL')) continue;
                    if (upperNext.includes('ESCUELA-MAGN\u00C9TICO-ESPIRITUAL')) continue;
                    if (upperNext.includes('C\u00C9SAR MONTEMAYOR')) continue;
                    if (upperNext.includes('J.B. PODEST\u00C1')) continue;
                    if (upperNext.includes('BIBLIOTECA VIRTUAL')) continue;
                    if (upperNext.includes('RESPUESTA')) break;
                    if (upperNext.includes('SIGUIENTE')) break;
                    if (upperNext.includes('ANTERIOR')) break;
                    if (nextLine.includes('----------')) continue;
                    if (nextLine.toLowerCase().includes('http://') || nextLine.toLowerCase().includes('tripod.com')) continue;
                    if (nextLine.toLowerCase().includes('derechos reservados')) continue;

                    const startsWithKeyword = KEYWORD_PATTERNS.some(p => p.test(nextLine.normalize("NFC")));
                    if (startsWithKeyword) break;

                    // For Primer Rayo de Luz: also stop if next line is a debate section header
                    if (isPrimerRayo && PRIMER_RAYO_PATTERNS.some(p => p.test(nextLine))) break;

                    const ratio = getUppercaseRatio(nextLine);
                    const isShort = nextLine.length < 95;
                    // Profilaxis, Extremos and Primer Rayo have weird mixed-case typography
                    const ratioThreshold = (isProfilaxis || isExtremos || isPrimerRayo || isAmorUniversal || isCuestionario || isStrossmayer) ? 0.05 : (isChapterHeader ? 0.02 : 0.12);
                    const isStylized = ratio > ratioThreshold || (/^[a-z]/.test(nextLine) && (isProfilaxis || isExtremos || isAmorUniversal || isStrossmayer));
                    
                    const needsMore = !titlePart.includes(':') || titlePart.length < 50 || isProfilaxis || isExtremos || isPrimerRayo || (isCuestionario && !titlePart.includes('PREGUNTA')) || isStrossmayer;

                    const isGenericParr = /^(?:P[\u00C1A]RRAFO|P[\u00C1A]rrAFo|CAP\u00CDTUlo)\s+(?:\d+|[IVX]+)/i.test(titlePart);

                    if (needsMore && isShort && (isStylized || nextLine.length < 35 || isGenericParr || isCuestionario)) {
                        if (startsWithKeyword && !isGenericParr && !isCuestionario) break;
                        
                        // Stop if we hit prose in Amor Universal or Cuestionario
                        if ((isAmorUniversal || isCuestionario || isStrossmayer) && !isStylized && ratio < 0.1 && nextLine.length > 40) break;
                        
                        // Cuestionario specific: stop merging at question ends
                        if (isCuestionario && titlePart.includes('?') && !nextLine.includes('PREGUNTA')) break;

                        titlePart = titlePart.includes(':') ? `${titlePart} ${nextLine}` : `${titlePart}: ${nextLine}`;
                        i = j;
                        if (isChapterHeader && !(isProfilaxis || isExtremos || isPrimerRayo)) break;
                        if (titlePart.length > 200) break;
                        continue;
                    }
                    break;
                }
            }

            // Specific merging for Primer Rayo's Proclama
            if (isPrimerRayo && (titlePart.includes('Universo Solidarizado') || titlePart.includes('Mundo todo Comunizado'))) {
                for (let j = i + 1; j < Math.min(i + 5, lines.length); j++) {
                    const nextLine = lines[j].trim();
                    if (nextLine.length === 0) continue;
                    if (allowedThemes.some(t => nextLine.toUpperCase().includes(t))) {
                        titlePart += ': ' + nextLine;
                        i = j;
                    } else {
                        break;
                    }
                }
            }


            let cleanTitle = titlePart.replace(/\s+/g, ' ').trim();
            if (cleanTitle.endsWith('----------')) cleanTitle = cleanTitle.replace(/----------$/, '').trim();
            
            // Deduplication for Cuestionario (each question appears twice)
            if (isCuestionario) {
                const qNumMatch = cleanTitle.match(/PREGUNTA\s+(\d+)/i);
                if (qNumMatch) {
                    const qNum = qNumMatch[1];
                    if (index.some(e => e.includes(`PREGUNTA ${qNum}`) || e.includes(`Pregunta ${qNum}`))) continue;
                }
                // Final cleanup for Cuestionario titles
                cleanTitle = cleanTitle
                    .replace(/RESPUESTA/gi, '')
                    .replace(/SIGUIENTE/gi, '')
                    .replace(/ANTERIOR/gi, '')
                    .replace(/SIGUIENTEANTERIOR/gi, '')
                    .replace(/\s+/g, ' ')
                    .trim();
                
                // Re-format to "Pregunta X: Text"
                const qMatch = cleanTitle.match(/(.*)PREGUNTA\s+(\d+)(.*)/i);
                if (qMatch) {
                    const textBefore = qMatch[1].trim();
                    const num = qMatch[2];
                    const textAfter = qMatch[3].trim();
                    const questionText = (textBefore + ' ' + textAfter).replace(/[:\s]+$/, '').trim();
                    cleanTitle = `Pregunta ${num}: ${questionText}`;
                }
            }
            const upperTitle = cleanTitle.toUpperCase();

            if (upperTitle.includes('PARTE')) {
                const newPart = getPartNumber(upperTitle);
                if (newPart > 0) {
                    if (newPart < currentPartNum) continue; 
                    currentPartNum = newPart;
                }
            }

            if (isConocete && upperTitle.includes('CUESTIONARIO') && lineNum > 18800) break;

            const isApendiceHeader = upperTitle.includes('APENDICE') || upperTitle.includes('AP\u00C9NDICE');
            if (isApendiceHeader) inApendice = true;

            const isMajor = [
                'CAPITULO', 'CAP\u00CDTULO', 'LIBRO', 'PARTE', 'PROCLAMA', 
                'PRESENTACION', 'PRESENTACI\u00D3N', 'PREMISA', 'APENDICE', 'AP\u00C9NDICE',
                'PROLOGO', 'PR\u00D3LOGO', 'PREFACIO', 'CORONA FINAL', 'INGREDIENTES DEL MUNDO'
            ].some(k => upperTitle.includes(k));
            
            if (isMajor && cleanTitle.length > 5) {
                currentMajorSection = cleanTitle;
            }

            let finalEntryTitle = cleanTitle;
            if (currentMajorSection && cleanTitle !== currentMajorSection) {
                const isGeneric = [
                    'PARRAFO', 'P\u00C1RRAFO', 'PUNTO', 'ARTICULO', 'ART\u00CDCULO', 'GRADO', 'LECCI\u00D3N', 'LECCION'
                ].some(k => upperTitle.includes(k)) || /^(?:I|II|III|IV|V|VI|VII|VIII|IX|X|XI|XII|XIII|XIV|XV)\s*$/.test(upperTitle);
                
                const titleContent = cleanTitle.includes(':') ? cleanTitle.split(': ')[1] : '';
                if (isGeneric && (!titleContent || titleContent.length < 15)) {
                    finalEntryTitle = `${cleanTitle} (${currentMajorSection})`;
                }
            }
            
            const escapedTitle = finalEntryTitle.replace(/"/g, '\\"');
            index.push(`${lineNum}: ${escapedTitle}`);
        }
    }
    return index;
}

function updateLibraryFile(bookId: string, index: string[]) {
    let content = fs.readFileSync(LIBRARY_FILE, 'utf8');
    const startIdx = content.indexOf(`"id": "${bookId}"`);
    if (startIdx === -1) return false;
    
    const indexKey = '"index": [';
    const indexStart = content.indexOf(indexKey, startIdx);
    if (indexStart === -1) return false;
    
    const indexEnd = content.indexOf(']', indexStart);
    if (indexEnd === -1) return false;
    
    const newIndexStr = index.map(item => `      "${item}"`).join(',\n');
    const updatedContent = content.slice(0, indexStart + indexKey.length) + 
                           (index.length > 0 ? '\n' + newIndexStr + '\n    ' : '') + 
                           content.slice(indexEnd);
    
    fs.writeFileSync(LIBRARY_FILE, updatedContent);
    return true;
}

function main() {
    const files = fs.readdirSync(TEXTS_DIR).filter(f => f.endsWith('.txt'));
    for (const file of files) {
        // if (file.includes('alfaqui-vademecum') || file.includes('buscando-a-dios')) continue;
        const bookId = file.replace('.txt', '').replace(/_/g, '-');
        const text = fs.readFileSync(path.join(TEXTS_DIR, file), 'utf-8');
        const index = extractIndexFromText(text, bookId);
        console.log(`Procesando ${file} (${index.length} temas)...`);
        const idsToTry = [bookId, bookId.replace(/-1$/, '')];
        for (const id of idsToTry) {
            if (updateLibraryFile(id, index)) {
                console.log(`   ✅ Inyectado en ${id}`);
                break;
            }
        }
    }
}
main();

