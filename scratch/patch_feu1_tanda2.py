import json

esencia_path = 'F:/trincado/public/data/contents/filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "319: Febrero 16 - Francisco Xavier": {
        "PilotoDeCoherencia": "Protección condicionada al trabajo: el Guía protector confirma que la provisión material y espiritual está asegurada (no faltará lo necesario) mientras el misionero siga pidiendo justicia y trabajando por el consuelo de los espíritus necesitados.",
        "CitaInelutable": "Pides todos los días el reino de Dios y su justicia; ayudas a cuantos pobres espíritus te piden consuelo. ¿Y no te he de ayudar a ti que tengo especial encargo de velar y protegerte? ...Ten un poco más de paciencia y resígnate con las pruebas.",
        "EjemploPedagogico": "El soldado en el frente y el comandante de abastecimiento. Mientras el soldado siga combatiendo (dando consuelo), el comandante (el guía) se asegurará de que le lleguen raciones y municiones. La protección es el salario del trabajo espiritual.",
        "IdeasPrincipales": ["Protección Espiritual", "Trabajo y Justicia", "Paciencia en la Prueba"],
        "PuntosImportantes": [
            "La asistencia de los guías espirituales no es favoritismo, sino reciprocidad por la labor realizada",
            "Lo necesario para la vida y la misión nunca falta cuando se obra en ley",
            "Las quejas por las pruebas materiales demuestran impaciencia, pero el Guía reconforta exigiendo resignación activa"
        ],
        "NodosSinapticos": ["Proteccion_Espiritual", "Justicia_Reciproca", "Resignacion_Activa"],
        "ContextoDiccionario": {
            "Proteccion_Espiritual": "La asistencia velada y constante de los espíritus de luz hacia los encarnados que trabajan activamente por el progreso y la justicia.",
            "Justicia_Reciproca": "La ley por la cual el universo provee matemática y materialmente a quienes entregan su esfuerzo al bienestar de los demás.",
            "Resignacion_Activa": "La aceptación racional de las pruebas materiales, no como un castigo pasivo, sino como un trámite necesario mientras se sigue trabajando."
        }
    },
    "353: Febrero 18 de 1910 - tinieblas.": {
        "PilotoDeCoherencia": "Evocación pedagógica de la oscuridad: el Maestro atrae al espíritu de Torquemada no por morbo, sino por estricta 'Caridad' (justicia) para comprobar su estado de ceguera (creía ser enviado por la divinidad) y ofrecerle luz mediante la refutación racional.",
        "CitaInelutable": "Obtuvimos comunicación del espíritu de Torquemada... y por sus palabras primeras, pues dijo: 'Me habéis llamado? Aquí estoy; la divinidad me envía.' ...Yo le contesté: Sí, amado hermano, te hemos llamado por 'Caridad' para saber, primero, si tienes luz.",
        "EjemploPedagogico": "Un médico llamando a un paciente psiquiátrico que cree ser el rey de España. El médico no lo llama para rendirle honores, sino para diagnosticar su locura y curarlo. La evocación espírita de inquisidores tiene ese fin clínico-espiritual.",
        "IdeasPrincipales": ["Evocación por Caridad", "Ceguera del Fanático", "Diagnóstico Espiritual"],
        "PuntosImportantes": [
            "Los grandes criminales religiosos desencarnan convencidos de que sus actos fueron divinos",
            "El espiritismo luz no teme al contacto con entidades oscuras, pues las domina con la razón",
            "Llamar por 'caridad' significa someter al espíritu al tribunal del amor y la verdad para que despierte"
        ],
        "NodosSinapticos": ["Evocacion_por_Caridad", "Ceguera_Fanatica", "Clinica_Espiritual"],
        "ContextoDiccionario": {
            "Evocacion_por_Caridad": "El llamado mediúmnico a espíritus atrasados o criminales con el único propósito de desengañarlos y ofrecerles la luz del progreso.",
            "Ceguera_Fanatica": "El autoengaño de los espíritus religiosos que, incluso en el espacio, creen actuar bajo el mandato de una divinidad ilusoria.",
            "Clinica_Espiritual": "La función del espiritismo como hospital de almas, donde se diagnostica y trata la ignorancia de los espíritus desencarnados."
        }
    },
    "424: Febrero 18 de 1910 - Francisco Xavier": {
        "PilotoDeCoherencia": "El espiritismo como multiplicador de obreros: el protector explica que cada espíritu oscuro que recibe la luz en la cátedra se convierte inmediatamente en un misionero que va de mundo en mundo buscando a otros 'huérfanos' para pagar su deuda.",
        "CitaInelutable": "Cada uno solo dice más que una biblioteca... y cada uno de los que consiguen la luz por vuestro medio, cumplen luego tu encargo (que tampoco les ayudas de balde) y van de mundo en mundo, buscando a los espíritus olvidados y 'Huérfanos'.",
        "EjemploPedagogico": "Un esquema piramidal, pero de luz. Rescatas a una persona de ahogarse, la entrenas como salvavidas, y ella va a rescatar a otros diez. El esfuerzo del espiritista en la Tierra repercute en todo el universo.",
        "IdeasPrincipales": ["Multiplicación de Obreros", "Pago de la Deuda", "Repercusión Cósmica"],
        "PuntosImportantes": [
            "La ayuda dada a los espíritus sufrientes no es gratuita; se les cobra en trabajo a favor del universo",
            "Un solo ejemplo práctico de redención espiritual enseña más que bibliotecas enteras de teoría",
            "Los espíritus liberados de la ignorancia se transforman en rescatistas interplanetarios"
        ],
        "NodosSinapticos": ["Multiplicacion_de_Luz", "Trabajo_Redentor", "Rescatistas_Interplanetarios"],
        "ContextoDiccionario": {
            "Multiplicacion_de_Luz": "La ley de expansión por la cual cada espíritu iluminado se convierte automáticamente en un foco de iluminación para otros.",
            "Trabajo_Redentor": "La condición exigida por la justicia universal para pagar la ayuda recibida: trabajar en el rescate de otros espíritus afines.",
            "Rescatistas_Interplanetarios": "La brigada de espíritus desencarnados que, tras recibir la luz en la Tierra, viajan por el espacio buscando hermanos rezagados."
        }
    },
    "443: Abril 5 de 1910 - despert la m dium.": {
        "PilotoDeCoherencia": "Unidad de pensamiento como llave: el Maestro impone rigor en la sesión prohibiendo preguntas capciosas para unificar el pensamiento, lo cual permite atraer a un espíritu elevado (incógnito) que confirma la asistencia protectora.",
        "CitaInelutable": "Impuse a los asistentes la gran necesidad de la unidad de ideas y pensamientos y prohibí las preguntas capciosas... Francisco Xavier... me ha mandado manifestarte... porque aunque no soy de vuestros familiares, veo en ti progreso.",
        "EjemploPedagogico": "Un telescopio que requiere que todos los lentes estén perfectamente alineados (unidad de ideas). Si un lente está chueco (preguntas capciosas o morbo), la imagen se distorsiona o no se ve nada. La unidad atrae la luz.",
        "IdeasPrincipales": ["Unidad de Pensamiento", "Rechazo de Capciosidades", "Atracción de Luz Elevada"],
        "PuntosImportantes": [
            "La frivolidad y la duda morbosa en una sesión espírita bloquean la comunicación con entidades superiores",
            "La unidad de ideas de los asistentes forma un canal magnético que atrae instrucción verdadera",
            "Los espíritus de luz asisten a quienes demuestran intención sincera de progreso, aunque no sean familiares"
        ],
        "NodosSinapticos": ["Unidad_de_Pensamiento", "Sesion_Austera", "Canal_Magnetico"],
        "ContextoDiccionario": {
            "Unidad_de_Pensamiento": "La sintonización armónica y seria de todos los asistentes en una sesión de la Escuela para lograr un propósito común sin distracciones.",
            "Sesion_Austera": "La práctica mediúmnica desprovista de misticismo, morbo o curiosidad vana, enfocada estrictamente en el estudio y el consuelo.",
            "Canal_Magnetico": "La vía de comunicación limpia que se establece entre el plano material y espiritual gracias a la afinidad de intenciones de los presentes."
        }
    },
    "545: Aclaraciones a las comunicaciones anteriores - Joaqu N Trincado": {
        "PilotoDeCoherencia": "Racionalismo contra la mixtificación: el Maestro aclara que nunca creyó a ciegas a los comunicantes. Afirma su deber de discernir y rechazar las mentiras (mixtificaciones) incluso si los espíritus afirman ser familiares o seres elevados.",
        "CitaInelutable": "Desde el primer instante yo no comulgué con ruedas de molino: que noté siempre la mixtificación y no sólo eso, sino aún las demasías de los familiares... y aunque me dijeran soy tu padre, soy tu madre, para mí, si no traían luz, no lo eran.",
        "EjemploPedagogico": "El empleado del banco revisando billetes. Por más que un billete tenga impresa la cara de un prócer y diga '100', el cajero usa la luz ultravioleta (racionalismo) para verificar si es falso. El Maestro aplicó esa luz a cada espíritu comunicante.",
        "IdeasPrincipales": ["Rechazo de Mixtificaciones", "Filtro Racional", "Identidad por la Luz"],
        "PuntosImportantes": [
            "El investigador no debe dejarse engañar por nombres ilustres o títulos familiares usados por espíritus atrasados",
            "La única prueba válida de la identidad espiritual es el nivel de luz, doctrina y lógica de su mensaje",
            "Comulgar 'con ruedas de molino' (creer ingenuamente) es el mayor peligro en el estudio del espiritismo"
        ],
        "NodosSinapticos": ["Filtro_Racional", "Rechazo_de_Mixtificacion", "Identidad_por_Luz"],
        "ContextoDiccionario": {
            "Filtro_Racional": "La aplicación implacable de la lógica y la ley universal para analizar cualquier comunicación mediúmnica, descartando el sentimentalismo.",
            "Rechazo_de_Mixtificacion": "La postura vigilante del espiritista verdadero que no acepta engaños, simulaciones ni discursos vacíos de los espíritus del error.",
            "Identidad_por_Luz": "El principio que establece que el parentesco y la jerarquía en el espacio no se miden por nombres terrestres, sino por el grado de sabiduría y amor demostrado."
        }
    }
}

for clave_nueva, contenido in nuevos_nodos.items():
    num = clave_nueva.split(':')[0]
    claves_viejas = [k for k in esencia.keys() if k.startswith(num)]
    for cv in claves_viejas:
        del esencia[cv]
    esencia[clave_nueva] = contenido

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Tanda 2 FEU 1 re-destilada: 5 nodos.")
