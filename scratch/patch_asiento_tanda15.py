import json

esencia_path = 'F:/trincado/public/data/contents/espiritismo-en-su-asiento_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "7566: EL MAESTRO JUEZ: IX": {
        "PilotoDeCoherencia": "Renovación planetaria: la unión de la potencia espiritual y material forzará el cambio social hacia la justicia, obligando a los poderosos a escuchar la voz del pueblo.",
        "CitaInelutable": "El espíritu impone a la materia la espera... la tierra será renovada en toda su faz. Esto es lo que presienten el monarca y el pueblo.",
        "EjemploPedagogico": "Un barco que navega por la corriente de un gran río. Los timoneles (monarcas) pueden intentar resistir, pero la corriente (conciencia del pueblo) es tan fuerte que terminará llevándolos al océano de la justicia.",
        "IdeasPrincipales": ["Unión de Potencias", "Voz del Pueblo", "Renovación de la Tierra"],
        "PuntosImportantes": [
            "El presagio del cambio social es una intuición espiritual compartida por todas las clases",
            "La justicia del Padre no admite más dilaciones en la redención de los oprimidos",
            "Los gobiernos plutocráticos caerán ante la marea del espiritismo racional"
        ],
        "NodosSinapticos": ["Union_de_Potencias", "Voz_del_Pueblo", "Renovacion_de_la_Tierra"],
        "ContextoDiccionario": {
            "Unión_de_Potencias": "La convergencia de la voluntad espiritual y la acción material para transformar la realidad social."
        }
    },
    "7931: X (escribe y proclama la ley y el axioma.)": {
        "PilotoDeCoherencia": "Condena de la desnaturalización: el celibato es denunciado como un crimen contra la vida y una violación flagrante de la ley universal de procreación.",
        "CitaInelutable": "El celibato, consagra la destrucción de la humanidad... es el antítesis de la ley de la procreación.",
        "EjemploPedagogico": "Un motor al que se le prohíbe girar para lo que fue diseñado. El motor se oxida y se rompe; el celibato oxida y rompe la moralidad y la salud del espíritu.",
        "IdeasPrincipales": ["Condena del Celibato", "Ley de Procreación", "Desnaturalización Humana"],
        "PuntosImportantes": [
            "El celibato es la base de la corrupción y el desequilibrio de las castas religiosas",
            "Quien se opone a la procreación se opone al plan de encarnación del Creador",
            "La verdadera virtud no es la abstinencia irracional, sino el amor fecundo y responsable"
        ],
        "NodosSinapticos": ["Condena_del_Celibato", "Ley_de_Procreacion", "Desnaturalizacion_Humana"],
        "ContextoDiccionario": {
            "Condena_del_Celibato": "Postura de la EMECU que identifica al celibato como una de las mayores causas de aberración y estancamiento espiritual."
        }
    },
    "7964: curso eterno y llega a hacer el axioma.": {
        "PilotoDeCoherencia": "El ciclo de vida en la Comuna: una organización social donde la educación, el trabajo y la vejez están garantizados, eliminando el miedo a la carencia y a la muerte.",
        "CitaInelutable": "El hombre, ya no mirará la muerte con temor; sabrá que es una ficción... un cambio de posición al más.",
        "EjemploPedagogico": "Una familia bien organizada donde el abuelo cuenta historias, el padre trabaja la tierra y el hijo estudia. Nadie teme el mañana porque la familia (la comuna) es el respaldo de todos.",
        "IdeasPrincipales": ["Instrucción Comunal", "Muerte Ficción", "Seguridad Social Comuna"],
        "PuntosImportantes": [
            "La educación integral es el primer paso para una comuna exitosa",
            "La muerte deja de ser un tabú para convertirse en una 'graduación' espiritual",
            "La seguridad social en la comuna nace del trabajo solidario de 'todos para todos'"
        ],
        "NodosSinapticos": ["Instrucción_Comunal", "Muerte_Ficcion", "Seguridad_Social_Comuna"],
        "ContextoDiccionario": {
            "Instrucción_Comunal": "El sistema educativo de la Comuna de Amor y Ley que forma ciudadanos libres, conscientes y productivos."
        }
    },
    "8153: Acotaciones:": {
        "PilotoDeCoherencia": "Fraternidad interplanetaria: la confirmación de que somos visitados por hermanos de otros mundos que traen sabiduría y amor, no dogmas ni peticiones.",
        "CitaInelutable": "No creáis que los espíritus somos vampiros... somos los hombres de ayer... Amor de los Martenianos.",
        "EjemploPedagogico": "Un intercambio estudiantil a escala cósmica. Los 'estudiantes' de Marte vienen a la Tierra a compartir sus apuntes y a ver cómo progresamos.",
        "IdeasPrincipales": ["Hermanos de Marten", "Inexistencia de Santos", "Reciprocidad Cósmica"],
        "PuntosImportantes": [
            "Marten (Marte) es un mundo de maestros que colaboran con el misionero de la Tierra",
            "La santidad es un concepto falso; solo Eloí es santo en su pureza absoluta",
            "La única jerarquía real en el universo es la de la sabiduría adquirida por el trabajo"
        ],
        "NodosSinapticos": ["Hermanos_de_Marten", "Inexistencia_de_Santos", "Reciprocidad_Cosmica"],
        "ContextoDiccionario": {
            "Hermanos_de_Marten": "Los espíritus maestros procedentes de Marte que asisten en la dirección espiritual de la Tierra."
        }
    },
    "8306: CAPTULO V: Explicacin del espiritismo": {
        "PilotoDeCoherencia": "Definición final del Espiritismo: la ciencia integral que sintetiza todas las leyes universales, despojada de misticismo y religión.",
        "CitaInelutable": "CAPÍTULO V: Explicación del espiritismo.",
        "EjemploPedagogico": "Una enciclopedia universal que contiene todas las respuestas sobre la vida. El espiritismo es esa enciclopedia que el hombre puede consultar con su razón.",
        "IdeasPrincipales": ["Ciencia Espiritismo", "Síntesis Doctrinal", "Universalidad del Espiritismo"],
        "PuntosImportantes": [
            "El espiritismo no es algo que se 'cree', sino algo que se 'estudia' y se 'vive'",
            "Es la filosofía única que unifica a todos los mundos de la creación",
            "Este capítulo cierra el libro asentando las bases racionales definitivas"
        ],
        "NodosSinapticos": ["Ciencia_Espiritismo", "Sintesis_Doctrinal", "Universalidad_del_Espiritismo"],
        "ContextoDiccionario": {
            "Ciencia_Espiritismo": "La definición del espiritismo como el estudio metódico y racional de las leyes del espíritu y el universo."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Asiento Tanda 15 aplicado exitosamente.")
