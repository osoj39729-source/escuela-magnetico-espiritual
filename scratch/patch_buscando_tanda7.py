import json

esencia_path = 'F:/trincado/public/data/contents/buscando-a-dios-joaquin-trincado_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "6305: Párrafo XV: SAVONAROLA": {
        "PilotoDeCoherencia": "La figura de Savonarola como el precursor que intentó purificar la Iglesia desde dentro, enfrentando la corrupción de Alejandro VI.",
        "CitaInelutable": "Savonarola fue la voz que clamó en el desierto del vicio romano; lo quemaron para callar la verdad, pero sus cenizas encendieron la hoguera del pensamiento.",
        "EjemploPedagogico": "Un médico que intenta curar una gangrena en un paciente que prefiere matar al médico antes que reconocer su propia enfermedad terminal.",
        "IdeasPrincipales": [
            "Lucha de Savonarola contra los Borgia",
            "El martirio como precio de la verdad",
            "La reforma moral frustrada por la jerarquía"
        ],
        "PuntosImportantes": [
            "Savonarola como instrumento de justicia espiritual",
            "La hoguera de las vanidades vs la hoguera de la inquisición",
            "El legado de resistencia contra el papado corrupto"
        ],
        "NodosSinapticos": [
            "Savonarola_Precursor",
            "Reforma_Moral",
            "Mártir_de_la_Verdad"
        ],
        "ContextoDiccionario": {
            "Savonarola": "Espíritu valiente que intentó una reforma ética en el corazón del catolicismo, siendo sacrificado por el poder dogmático."
        }
    },
    "6582: Párrafo XVI: MUERTE DE LA CONDESAYESTUPRO DE VALENCIA.": {
        "PilotoDeCoherencia": "El trágico desenlace de las víctimas de la malicia Borgia, simbolizando la inocencia sacrificada por la ambición de poder.",
        "CitaInelutable": "La muerte de la inocencia es el último escalón del crimen clerical; Valencia es el símbolo de la humanidad violada por el dogma.",
        "EjemploPedagogico": "Una flor pisoteada por una bota de hierro; la flor representa la inocencia humana y la bota la estructura criminal de la religión.",
        "IdeasPrincipales": [
            "Tragedia final de las víctimas de Borgia",
            "El abuso del poder absoluto sobre la debilidad",
            "El dolor humano causado por la prevaricación religiosa"
        ],
        "PuntosImportantes": [
            "Valencia como arquetipo de la humanidad oprimida",
            "El fin sangriento de los vínculos familiares secretos",
            "La vergüenza histórica de los actos de Alejandro VI"
        ],
        "NodosSinapticos": [
            "Víctimas_del_Clero",
            "Tragedia_Borgia_Final",
            "Violacion_de_la_Conciencia"
        ],
        "ContextoDiccionario": {
            "Victimas_del_Clero": "Almas que sufrieron directamente las consecuencias de la amoralidad y los crímenes de las jerarquías religiosas en su búsqueda de dominio."
        }
    },
    "6975: Párrafo XVII: MUERTE DE JUANUCHO, VALENCIAYADUCIO": {
        "PilotoDeCoherencia": "El cierre del capítulo de horror Borgia con la muerte de los instrumentos de justicia y las víctimas, preparándolos para el juicio espiritual.",
        "CitaInelutable": "Sus muertes son el sello de una era de tinieblas; pero sus espíritus se levantan para testificar en el gran juicio contra la Bestia.",
        "EjemploPedagogico": "Los testigos de un crimen que son silenciados en la tierra, pero que hablan con voz de trueno ante el tribunal de justicia de Eloí.",
        "IdeasPrincipales": [
            "Fin de la narrativa histórica de los Borgia",
            "Trascendencia espiritual de las víctimas",
            "Preparación para el juicio de la historia"
        ],
        "PuntosImportantes": [
            "El testimonio post-mortem de los oprimidos",
            "La justicia que trasciende la tumba material",
            "Cierre de un ciclo de prevaricación extrema"
        ],
        "NodosSinapticos": [
            "Juicio_Espiritual",
            "Testimonio_de_Victimas",
            "Cierre_de_Ciclo_Borgia"
        ],
        "ContextoDiccionario": {
            "Juicio_Espiritual": "Evaluación ineludible de las acciones humanas ante la ley de amor, donde las víctimas actúan como acusadores naturales."
        }
    },
    "7089: Párrafo XVIII: LA SANTIDAD DE LOS PONTIFICES": {
        "PilotoDeCoherencia": "Ironía amarga sobre el título de 'Santidad' aplicado a hombres viciosos, desnudando la falsedad del lenguaje religioso institucional.",
        "CitaInelutable": "Llamar santos a quienes solo supieron odiar y pecar es la burla más grande al Dios de Amor; su 'santidad' es solo la máscara de su maldad.",
        "EjemploPedagogico": "Poner un letrero de 'Agua Pura' en un pozo de veneno; el letrero es el título honorífico y el veneno es la realidad del pontífice.",
        "IdeasPrincipales": [
            "Crítica a los títulos eclesiásticos",
            "Disonancia entre santidad y realidad papal",
            "El lenguaje como herramienta de engaño dogmático"
        ],
        "PuntosImportantes": [
            "La desmitificación de la figura papal",
            "Uso indebido de términos sagrados por la jerarquía",
            "Llamado a la sinceridad y la transparencia moral"
        ],
        "NodosSinapticos": [
            "Falsa_Santidad",
            "Ironia_Doctrinal",
            "Desmitificacion_Papal"
        ],
        "ContextoDiccionario": {
            "Santidad_Falsa": "Atributo auto-otorgado por la jerarquía católica para blindar su imagen ante la crítica racional y ocultar sus prevaricaciones."
        }
    },
    "7398: Capítulo Duodécimo: LA RAZÓN TIENE RAZÓN, LA IGLESIA CATÓLICA MIENTE": {
        "PilotoDeCoherencia": "Axioma fundamental que establece la supremacía de la razón sobre el dogma y declara la falsedad absoluta de la institución católica.",
        "CitaInelutable": "La razón tiene razón porque es la chispa de Eloí; la iglesia miente porque es la sombra del antagonista.",
        "EjemploPedagogico": "El sol que sale (la razón) y disipa las sombras de la noche (la iglesia); la luz de la verdad no necesita permiso para iluminar.",
        "IdeasPrincipales": [
            "Primacía de la razón en el espiritismo",
            "Denuncia de la mentira institucionalizada",
            "Declaración de independencia del espíritu"
        ],
        "PuntosImportantes": [
            "La razón como voz de Eloí en el hombre",
            "La Iglesia como obstáculo al progreso universal",
            "Sentencia final de la exégesis crítica del catolicismo"
        ],
        "NodosSinapticos": [
            "Supremacia_de_la_Razon",
            "Verdad_vs_Mentira",
            "Sentencia_Doctrinal"
        ],
        "ContextoDiccionario": {
            "Razon_Suprema": "Facultad del espíritu que permite discernir la verdad de la mentira, siendo el único juez válido para el progreso humano."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Tanda 7 aplicado exitosamente.")
