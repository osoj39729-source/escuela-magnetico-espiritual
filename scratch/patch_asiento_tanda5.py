import json

esencia_path = 'F:/trincado/public/data/contents/espiritismo-en-su-asiento_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "699: CAPTULO II: Lo que abarca el espiritismo": {
        "PilotoDeCoherencia": "El espiritismo no es una parcela del saber, sino la síntesis total que abarca todas las ciencias, artes y leyes del universo bajo el prisma del espíritu.",
        "CitaInelutable": "Lo que abarca el espiritismo... nada hay que no sea un fenómeno del espiritismo.",
        "EjemploPedagogico": "La luz blanca que contiene todos los colores del arcoíris. El espiritismo es esa luz blanca que unifica todas las ramas del conocimiento humano.",
        "IdeasPrincipales": ["Amplitud Doctrinal", "Ciencia Universal", "Fenomenología Total"],
        "PuntosImportantes": [
            "Abarca lo visible y lo invisible, la materia y el espíritu",
            "Es la base de la justicia, la sociología y la física universal",
            "Nada queda fuera de su jurisdicción porque todo emana de la misma Ley"
        ],
        "NodosSinapticos": ["Amplitud_Doctrinal", "Ciencia_Universal", "Fenomenologia_Total"],
        "ContextoDiccionario": {
            "Amplitud_Doctrinal": "La característica del Espiritismo Racional de no tener límites en su estudio, abarcando todas las dimensiones de la existencia."
        }
    },
    "845: CAPTULO III: Cmo se estudia el espiritismo": {
        "PilotoDeCoherencia": "El estudio del espiritismo exige una higiene mental absoluta: desechar prejuicios dogmáticos y aplicar una razón fría y matemática sobre los hechos demostrables.",
        "CitaInelutable": "Cómo se estudia el espiritismo... con la razón sana y sin prejuicios.",
        "EjemploPedagogico": "Limpiar un cristal empañado antes de mirar a través de él. Los prejuicios son el vapor; la razón es el paño que limpia para ver la verdad clara.",
        "IdeasPrincipales": ["Estudio Racional", "Higiene Mental", "Análisis de Hechos"],
        "PuntosImportantes": [
            "Se estudia observando la vida diaria, no solo en libros",
            "Exige valentía para abandonar creencias cómodas pero falsas",
            "La duda metódica es preferible a la fe ciega"
        ],
        "NodosSinapticos": ["Estudio_Racional", "Higiene_Mental", "Analisis_de_Hechos"],
        "ContextoDiccionario": {
            "Higiene_Mental": "El proceso de limpieza de la conciencia de prejuicios, miedos y dogmas para permitir el libre ejercicio de la razón."
        }
    },
    "1078: CAPTULO IV: Cmo es necio negar el Espiritismo": {
        "PilotoDeCoherencia": "Denuncia de la necedad materialista: negar el espíritu es un acto irracional de quien disfruta de la vida (efecto) mientras cierra los ojos a su causa (espíritu).",
        "CitaInelutable": "Cómo es necio negar el Espiritismo... porque es la vida.",
        "EjemploPedagogico": "Un orador que usa su voz para decir que el aire no existe. El negador usa su espíritu para decir que el espíritu no existe; es una contradicción viviente.",
        "IdeasPrincipales": ["Necedad del Negador", "Evidencia de la Vida", "Soberbia Materialista"],
        "PuntosImportantes": [
            "La negación nace a menudo del miedo a la responsabilidad ante la Ley",
            "Es imposible explicar la inteligencia sin el factor espiritual",
            "El negador se priva a sí mismo de la luz del camino"
        ],
        "NodosSinapticos": ["Necedad_del_Negador", "Evidencia_de_la_Vida", "Soberbia_Materialista"],
        "ContextoDiccionario": {
            "Necedad_Materialista": "La postura irracional de quienes niegan la existencia del espíritu a pesar de ser la causa evidente de su propia inteligencia."
        }
    },
    "1187: CAPTULO V: Todo el universo es el espiritismo y su maestro, Elo": {
        "PilotoDeCoherencia": "Visión cosmogónica de la Escuela: el universo es una gran institución educativa donde cada mundo es un aula y Eloí es el único Maestro y Padre común.",
        "CitaInelutable": "Todo el universo es el espiritismo y su maestro, Eloí... El universo es sólo un colegio.",
        "EjemploPedagogico": "Un sistema universitario intergaláctico. Los planetas son campus y los espíritus son estudiantes que van pasando de grado según su esfuerzo y saber.",
        "IdeasPrincipales": ["Universo Escuela", "Maestro Eloí", "Solidaridad Cósmica"],
        "PuntosImportantes": [
            "Todos los seres estamos bajo un contrato de solidaridad universal",
            "Eloí no es un dios religioso, sino el Rector Supremo de la Vida",
            "La meta del estudio es la graduación del espíritu en la sabiduría plena"
        ],
        "NodosSinapticos": ["Universo_Escuela", "Maestro_Eloi", "Solidaridad_Cosmica"],
        "ContextoDiccionario": {
            "Universo_Escuela": "Metáfora trincadista que define al cosmos como un sistema educativo infinito para el progreso de los espíritus."
        }
    },
    "1438: SEGUNDA PARTE": {
        "PilotoDeCoherencia": "Introducción a la aplicación práctica de los principios: pasar de la ontología y cosmogonía a la sociología y ética del espíritu en acción.",
        "CitaInelutable": "SEGUNDA PARTE.",
        "EjemploPedagogico": "Pasar de estudiar la teoría del motor a empezar a conducir el vehículo. La segunda parte es la 'conducción' de la vida bajo leyes espirituales.",
        "IdeasPrincipales": ["Transición Doctrinal", "Aplicación de Leyes", "Grados de Estudio"],
        "PuntosImportantes": [
            "La teoría debe convertirse en obra para ser espiritismo",
            "Se profundiza en la responsabilidad del hombre como ciudadano del universo",
            "Prepara para el estudio de la mediumnidad y la comuna"
        ],
        "NodosSinapticos": ["Transicion_Doctrinal", "Aplicacion_de_Leyes", "Grados_de_Estudio"],
        "ContextoDiccionario": {
            "Transición_Doctrinal": "El paso metódico de la fundamentación teórica a la implementación práctica de la doctrina en la vida humana."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Asiento Tanda 5 aplicado exitosamente.")
