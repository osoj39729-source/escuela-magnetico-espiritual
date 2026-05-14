import json

esencia_path = 'F:/trincado/public/data/contents/el-espiritismo-estudiado_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "6653: CDIGO DE AMOR UNIVERSAL": {
        "PilotoDeCoherencia": "Presentación del 'Código de Amor Universal' como la constitución definitiva e inalterable que regirá la convivencia humana bajo el régimen del espiritismo (la Comuna).",
        "CitaInelutable": "CÓDIGO DE AMOR UNIVERSAL.",
        "EjemploPedagogico": "Así como un país unifica sus leyes en una sola Constitución para evitar el caos, el mundo entero unificará su moral y su economía bajo este único Código para abolir guerras e injusticias.",
        "IdeasPrincipales": ["Código de Amor Universal", "Ley Suprema", "Constitución Comunal"],
        "PuntosImportantes": [
            "Reemplaza todas las legislaciones civiles y religiosas divisivas",
            "No es una creación humana, sino la transcripción de la ley del universo adaptada a la Tierra",
            "Su adopción marca el ingreso del planeta a la categoría de mundo de regeneración"
        ],
        "NodosSinapticos": ["Codigo_de_Amor_Universal", "Ley_Suprema", "Constitucion_Comunal"],
        "ContextoDiccionario": {
            "Código_de_Amor_Universal": "La ley suprema dictada por el Espiritismo para regir la vida social, moral y económica de la Tierra bajo el sistema de la Comuna Universal, sustituyendo todas las leyes anteriores."
        }
    },
    "6657: CAPTULO PRIMERO: Constitucin por la que se hace la proclamacin de la comuna en la Tierra. Ley": {
        "PilotoDeCoherencia": "El acto oficial y espiritual de proclamar la Comuna en la Tierra, no como una utopía política, sino como un decreto ejecutorio del Gobierno del Espiritismo.",
        "CitaInelutable": "Constitución por la que se hace la proclamación de la comuna en la Tierra.",
        "EjemploPedagogico": "La declaración de independencia de una colonia que expulsa al imperio dominante (la ignorancia y la explotación) para instaurar una república libre (la Comuna).",
        "IdeasPrincipales": ["Proclamación de la Comuna", "Decreto Espiritual", "Fin del Exilio"],
        "PuntosImportantes": [
            "Es el inicio oficial de la redención social del planeta",
            "Anula legalmente el dominio de la plutocracia y las religiones",
            "Establece a Joaquín Trincado como el promulgador de este mandato cósmico"
        ],
        "NodosSinapticos": ["Proclamacion_de_la_Comuna", "Decreto_Espiritual", "Era_de_Redencion"],
        "ContextoDiccionario": {
            "Proclamación_de_la_Comuna": "El decreto emitido por el gobierno espiritual que declara oficialmente caduco el sistema de propiedad privada y nacionalismos, ordenando la unificación de la Tierra."
        }
    },
    "6672: DECRETAMOS:": {
        "PilotoDeCoherencia": "Exposición de los decretos fundamentales que anulan las fronteras, los monopolios y las religiones, estableciendo que la Tierra es patrimonio común y el trabajo la única ley económica.",
        "CitaInelutable": "DECRETAMOS: Que la tierra es para el usufructo de todos... Que se anulan las fronteras... Que el trabajo es la única moneda.",
        "EjemploPedagogico": "Un bando militar tras liberar una ciudad: se confiscan los bienes robados por el dictador y se reparten equitativamente entre quienes verdaderamente trabajan.",
        "IdeasPrincipales": ["Decretos Comunales", "Abolición de Monopolios", "Trabajo como Moneda"],
        "PuntosImportantes": [
            "Nadie tiene derecho a vender o poseer en exclusiva un pedazo del planeta",
            "El dinero metálico y la usura son eliminados; el valor reside en el trabajo aportado",
            "Cese inmediato de todas las barreras que dividen a los hombres (idioma, nación, fe)"
        ],
        "NodosSinapticos": ["Decretos_Comunales", "Abolicion_de_Monopolios", "Trabajo_como_Moneda"],
        "ContextoDiccionario": {
            "Trabajo_como_Moneda": "El principio económico del Código de Amor Universal donde se abole el dinero fiduciario, siendo el trabajo productivo y solidario el único medio legítimo de intercambio y subsistencia."
        }
    },
    "6749: PRRAFO III: LEY DE LAS MEDIUMIDADES EN GENERAL (1)": {
        "PilotoDeCoherencia": "Formalización de la 'Ley de Mediumnidades' como un estatuto técnico inquebrantable para regular la comunicación entre encarnados y desencarnados, protegiendo a ambos.",
        "CitaInelutable": "PÁRRAFO III: LEY DE LAS MEDIUMIDADES EN GENERAL",
        "EjemploPedagogico": "Las normas internacionales de telecomunicaciones: no cualquiera puede operar una antena potente sin licencia y sin reglas, para evitar interferencias y daños en la red.",
        "IdeasPrincipales": ["Estatuto Medianímico", "Regulación Técnica", "Protección del Médium"],
        "PuntosImportantes": [
            "La mediumnidad no es un juego, es una responsabilidad regulada por ley",
            "El médium pertenece a la comunidad (es un servidor), no a sí mismo",
            "Se prohíbe terminantemente el lucro o el uso de la facultad para adivinanzas"
        ],
        "NodosSinapticos": ["Estatuto_Medianimico", "Regulacion_Tecnica", "Comunicacion_Consciente"],
        "ContextoDiccionario": {
            "Estatuto_Medianímico": "El conjunto de reglas de estricto cumplimiento que organiza la práctica de las facultades mediúmnicas como un servicio científico y moral público, prohibiendo su comercialización."
        }
    },
    "6753: PREFACIO": {
        "PilotoDeCoherencia": "Reivindicación científica de la mediumnidad frente a la medicina materialista, demostrando que no es una enfermedad (histerismo) sino una facultad evolutiva natural del espíritu.",
        "CitaInelutable": "Las mediumnidades no son efectos de histerismo, como la ciencia médica ha querido sostener... Jamás un médium desarrollado ha perdido su razón.",
        "EjemploPedagogico": "Un médico antiguo diagnosticando 'locura' a alguien que usa un teléfono celular porque habla 'solo'. Así diagnostica la medicina materialista al médium por ignorar el 'teléfono' espiritual.",
        "IdeasPrincipales": ["Mediumnidad Natural", "Rechazo del Histerismo", "Cura Espiritual"],
        "PuntosImportantes": [
            "La falta de desarrollo de la facultad es lo que causa desequilibrios nerviosos, no su ejercicio",
            "La psiquiatría materialista daña al médium al tratarlo como enfermo mental",
            "Curar al espíritu (educando la facultad) es el único modo de sanar la materia"
        ],
        "NodosSinapticos": ["Mediumnidad_Natural", "Rechazo_del_Histerismo", "Higiene_Medianimica"],
        "ContextoDiccionario": {
            "Rechazo_del_Histerismo": "La refutación de la tesis psiquiátrica materialista que confunde la mediumnidad con enfermedades nerviosas o locura, demostrando que es una capacidad sensorial evolutiva."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Espiritismo Tanda 10 aplicado exitosamente.")
