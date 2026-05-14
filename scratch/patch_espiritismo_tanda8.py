import json

esencia_path = 'F:/trincado/public/data/contents/el-espiritismo-estudiado_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "5139: CAPTULO SEXTO: LA QUMICA ANTE EL ESPIRITISMO": {
        "PilotoDeCoherencia": "Reivindicación de la Química (derivada de la Alquimia) como la ciencia material que más se acerca a la verdad del Espiritismo al demostrar matemáticamente la transformación eterna y la indestructibilidad de la sustancia.",
        "CitaInelutable": "La Química no puede crear ni destruir nada, solo transforma. Es la comprobación matemática de la eternidad de la materia.",
        "EjemploPedagogico": "El ciclo del agua: se evapora, se condensa y se congela, cambiando de apariencia pero sin perder jamás una sola de sus moléculas esenciales. Así opera la evolución espiritual sobre la materia.",
        "IdeasPrincipales": ["Química Universal", "Transformación Material", "Indestructibilidad de la Sustancia"],
        "PuntosImportantes": [
            "La química humana es un reflejo rudimentario de la química espiritual que forma los mundos",
            "Destruye el concepto teológico de 'creación de la nada' y 'aniquilación'",
            "Demuestra que todo es transformación regida por la ley de afinidad"
        ],
        "NodosSinapticos": ["Quimica_Universal", "Transformacion_Material", "Alquimia_Espiritual"],
        "ContextoDiccionario": {
            "Química_Universal": "La ciencia divina y natural que, mediante la ley de afinidad, combina, separa y transforma incesantemente la materia para servir de herramienta evolutiva al espíritu."
        }
    },
    "5439: CAPITULO SPTIMO: LA ASTRONOMA ANTE EL ESPIRITISMO": {
        "PilotoDeCoherencia": "Integración de la Astronomía como el 'telescopio material' del espiritismo, confirmando físicamente el axioma filosófico de la pluralidad de mundos habitados y la pequeñez de la Tierra.",
        "CitaInelutable": "La Astronomía demuestra que la Tierra es solo un grano de arena en la infinitud de mundos poblados por espíritus.",
        "EjemploPedagogico": "Creer que la Tierra es el único mundo con vida inteligente es como sacar una gota del océano y afirmar que el resto del mar está vacío.",
        "IdeasPrincipales": ["Astronomía Espiritual", "Pluralidad de Mundos Habitados", "Infinitud del Cosmos"],
        "PuntosImportantes": [
            "La astronomía derribó el geocentrismo dogmático que ponía a la Tierra como centro del universo",
            "Confirma que no hay 'arriba' (Cielo) ni 'abajo' (Infierno) geográficos",
            "Cada mundo es una escuela de diferente grado evolutivo para el espíritu"
        ],
        "NodosSinapticos": ["Astronomia_Espiritual", "Pluralidad_de_Mundos", "Fin_del_Geocentrismo"],
        "ContextoDiccionario": {
            "Pluralidad_de_Mundos": "El axioma espiritista, comprobado por la astronomía, de que todos los cuerpos celestes del universo están habitados por espíritus en distintos grados de evolución."
        }
    },
    "5691: CAPTULO OCTAVO: LA ELECTRICIDAD Y EL ESPIRITISMO": {
        "PilotoDeCoherencia": "Definición de la Electricidad (Éter/Pantógeno) no solo como fuerza física, sino como la sustancia primordial del universo y el vehículo directo de la voluntad y pensamiento del espíritu.",
        "CitaInelutable": "La electricidad es la fuerza omnipotente y madre de todo lo creado; es el vehículo de la inteligencia espiritual.",
        "EjemploPedagogico": "El sistema nervioso humano utiliza impulsos eléctricos para que la voluntad inmaterial (pensamiento) mueva el músculo físico. El universo entero funciona como este sistema nervioso eléctrico.",
        "IdeasPrincipales": ["Electricidad Universal", "Vehículo del Pensamiento", "Materia Prima Cósmica"],
        "PuntosImportantes": [
            "La electricidad es la forma más sutil de la materia materializada (Éter)",
            "Es el medio a través del cual operan el magnetismo y la telepatía",
            "El dominio de la electricidad marca el fin del aislamiento de los mundos"
        ],
        "NodosSinapticos": ["Electricidad_Universal", "Vehiculo_del_Espiritu", "Fuerza_Omnipotente"],
        "ContextoDiccionario": {
            "Electricidad_Universal": "La sustancia primordial y fuerza omnipresente (Éter) que sirve como materia prima para toda la creación y vehículo inmediato del pensamiento y la voluntad del espíritu."
        }
    },
    "5993: CAPITULO NOVENO: LA PATRIA DEL ESPIRITISMO": {
        "PilotoDeCoherencia": "Establecimiento del Universo como la única patria real del espíritu, sin fronteras, pero reconociendo la 'patria chica' (nación natal) como el primer escalón pedagógico necesario para aprender la solidaridad.",
        "CitaInelutable": "Nuestra patria es el Universo, pero no se puede amar lo infinito si no se sabe amar primero la tierra donde se nace y los hermanos que la habitan.",
        "EjemploPedagogico": "Un niño primero debe aprender a amar a su propia familia en su casa (patria chica) para luego poder comprender y amar a toda la humanidad (patria universal). No se puede saltar el primer paso.",
        "IdeasPrincipales": ["Patria Universal", "Solidaridad Gradual", "Universalismo"],
        "PuntosImportantes": [
            "El espiritismo rechaza las fronteras divisorias, pero no reniega del origen",
            "El objetivo evolutivo es 'El Mundo Todo Comunizado' y solidario",
            "La unificación mundial comenzará por la raza hispana como núcleo magnético"
        ],
        "NodosSinapticos": ["Patria_Universal", "Solidaridad_Gradual", "Fin_de_las_Fronteras"],
        "ContextoDiccionario": {
            "Patria_Universal": "El concepto de que todo el universo es el hogar del espíritu inmortal, hacia cuya unidad y fraternidad tienden todos los mundos y naciones superando las divisiones territoriales."
        }
    },
    "6064: PRRAFO II: EL PATRIOTISMO ES LEY INELUDIBLE Millones de puos vemos levantados amenazantes por el epgrafe de este prrafo.": {
        "PilotoDeCoherencia": "Distinción categórica entre el verdadero Patriotismo (que defiende la dignidad, el progreso y ama a su pueblo) y el Patrioterismo (el odio fanático que provoca guerras y vive del egoísmo).",
        "CitaInelutable": "El patriotismo es del espiritismo y lleva el progreso. El patrioterismo es del espiritualismo y lleva la intriga, la guerra y el odio.",
        "EjemploPedagogico": "El buen ciudadano que cuida su barrio y ayuda a sus vecinos sin molestar a los barrios contiguos (Patriota), versus el pandillero que ataca a otros barrios solo por ser diferentes (Patriotero).",
        "IdeasPrincipales": ["Patriotismo vs Patrioterismo", "Defensa Justa", "Odio Nacionalista"],
        "PuntosImportantes": [
            "El patriota jamás inicia una guerra de conquista, pero jamás retrocede en la defensa justa",
            "El patrioterismo es alimentado por religiones y castas políticas para su propio lucro",
            "El internacionalismo anarquista falla por ser 'híbrido' y carecer de amor a la raíz"
        ],
        "NodosSinapticos": ["Patriotismo_vs_Patrioterismo", "Defensa_Justa", "Progreso_Nacional"],
        "ContextoDiccionario": {
            "Patriotismo_Racional": "El amor natural por la tierra natal y sus habitantes que impulsa el progreso, la educación y la defensa justa, sin jamás incurrir en odio o agresión contra otras naciones (patrioterismo)."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Espiritismo Tanda 8 aplicado exitosamente.")
