import json

esencia_path = 'F:/trincado/public/data/contents/el-espiritismo-estudiado_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "3291: CAPTULO DIEZ: TODO EL PROGRESO ES EL ESPIRITISMO": {
        "PilotoDeCoherencia": "Declaración culminante de la Primera Parte: todo avance científico, social y moral de la humanidad es, en su esencia, el espiritismo operando a través del espíritu encarnado.",
        "CitaInelutable": "Todo progreso humano, científico o social, es el espiritismo en acción; porque es el espíritu el que progresa y progresa por la ley del espiritismo.",
        "EjemploPedagogico": "La electricidad, los aviones, la medicina: ninguno fue inventado por la materia inerte sino por espíritus encarnados que actuaron movidos por la ley de afinidad y el mandato de su progreso.",
        "IdeasPrincipales": ["Progreso es Espiritismo", "Ciencia como Espiritismo", "Espíritu Motor del Avance"],
        "PuntosImportantes": [
            "El áteo que construye un hospital está practicando la ley espiritual sin saberlo",
            "No hay progreso fuera del espiritismo, porque el espíritu es el agente de toda mejora",
            "La ciencia y el espiritismo no se oponen: la ciencia es la huella del espiritismo en la materia"
        ],
        "NodosSinapticos": ["Progreso_es_Espiritismo", "Ciencia_como_Espiritismo", "Espiritu_Motor_del_Avance"],
        "ContextoDiccionario": {
            "Progreso_es_Espiritismo": "El axioma de que todo avance genuino de la humanidad es la expresión del espíritu evolucionando conforme a la ley de afinidad y amor universal."
        }
    },
    "3318: En nuestra Filosofa Austera Racional y en El Primer Rayo de luz:  lanzamos un": {
        "PilotoDeCoherencia": "Vinculación explícita de 'El Espiritismo Estudiado' con las obras anteriores, estableciendo la continuidad y unidad del corpus doctrinal de la Escuela.",
        "CitaInelutable": "En nuestra Filosofía Austera Racional y en El Primer Rayo de Luz lanzamos las primeras semillas de esta verdad que hoy desarrollamos.",
        "EjemploPedagogico": "Un árbol cuyas raíces están en 'El Primer Rayo de Luz', el tronco en 'Filosofía Austera Racional' y cuyas ramas florecen en 'El Espiritismo Estudiado'.",
        "IdeasPrincipales": ["Continuidad del Corpus", "Evolución Doctrinal", "Unidad de la Escuela"],
        "PuntosImportantes": [
            "El pensamiento del Maestro es un sistema coherente, no una colección de textos aislados",
            "Cada libro de la Escuela profundiza en los axiomas del anterior",
            "El estudiante debe leer la obra completa para comprender el sistema total"
        ],
        "NodosSinapticos": ["Continuidad_del_Corpus", "Evolucion_Doctrinal", "Sistema_Trincado"],
        "ContextoDiccionario": {
            "Sistema_Trincado": "El conjunto coherente y progresivo de obras del Maestro Trincado que forman un solo cuerpo doctrinal integrado, desde el Primer Rayo de Luz hasta los Códigos."
        }
    },
    "3641: SEGUNDA PARTE: LAS FACULTADES DEL ESPIRITISMO": {
        "PilotoDeCoherencia": "Apertura de la Segunda Parte de la obra, que pasa de la ontología del espiritismo a su fenomenología: las facultades concretas que el espíritu desarrolla en su evolución.",
        "CitaInelutable": "SEGUNDA PARTE: LAS FACULTADES DEL ESPIRITISMO.",
        "EjemploPedagogico": "La transición de un manual de física teórica a un manual de laboratorio: ya sabemos qué es la electricidad, ahora aprenderemos a medirla, generarla y usarla.",
        "IdeasPrincipales": ["Fenomenología del Espiritismo", "Facultades Espirituales", "Ciencia Práctica"],
        "PuntosImportantes": [
            "Las facultades no son dones místicos: son habilidades evolutivas adquiridas",
            "Cada facultad tiene su ley, su mecánica y su grado de desarrollo",
            "El estudio de las facultades permite distinguir el espiritismo de la superstición"
        ],
        "NodosSinapticos": ["Facultades_del_Espiritismo", "Fenomenologia_Espiritual", "Ciencia_Practica_Espiritual"],
        "ContextoDiccionario": {
            "Facultades_del_Espiritismo": "Las capacidades prácticas del espíritu desarrolladas a través de la evolución: videncia, desdoblamiento, mediumnidad consciente, entre otras."
        }
    },
    "3645: CAPITULO PRIMERO: LA SABIDURIA DEL ESPIRITISMO": {
        "PilotoDeCoherencia": "Definición de la Sabiduría como la primera y más alta facultad del espiritismo: la capacidad del espíritu de comprender la ley universal y actuar en consecuencia.",
        "CitaInelutable": "La sabiduría del espiritismo no es acumulación de datos, es la facultad de actuar siempre conforme a la ley universal del amor.",
        "EjemploPedagogico": "Un médico sabio no es el que memorizó más libros sino el que aplica el conocimiento exacto en el momento preciso para curar al paciente — la ciencia al servicio de la vida.",
        "IdeasPrincipales": ["Sabiduría como Facultad", "Acción Conforme a la Ley", "Inteligencia Espiritual"],
        "PuntosImportantes": [
            "Diferencia entre conocimiento acumulado (erudición) y sabiduría (aplicación de la ley)",
            "La sabiduría permite al espíritu navegar los mundos de expiación sin perderse",
            "Es la facultad que distingue al maestro del estudiante"
        ],
        "NodosSinapticos": ["Sabiduria_Espiritual", "Inteligencia_Universal", "Maestro_vs_Estudiante"],
        "ContextoDiccionario": {
            "Sabiduría_Espiritual": "La facultad suprema del espíritu evolucionado de comprender la ley universal y actuar siempre en armonía con ella, distinguiéndose de la mera erudición."
        }
    },
    "3862: PRRAFO II: ELASTICIDAD DEL ALMA Aun cuando este punto corresponde al captulo Desdoblamiento, aqu lo": {
        "PilotoDeCoherencia": "Explicación científica del desdoblamiento espiritual: el alma es un cuerpo etéreo elástico que puede expandirse y contraerse, permitiendo al espíritu visitar otros espacios mientras el cuerpo duerme o en vigilia.",
        "CitaInelutable": "El alma es materia etérea elástica; sin alma el espíritu no puede tomar figura. La elasticidad del alma es la condición del desdoblamiento.",
        "EjemploPedagogico": "Un globo de goma que puede inflarse hasta ocupar una habitación o desinflarse hasta caber en el bolsillo, manteniendo siempre su forma básica y composición.",
        "IdeasPrincipales": ["Elasticidad del Alma", "Periespíritu", "Desdoblamiento Consciente"],
        "PuntosImportantes": [
            "Los sueños son desdoblamientos inconscientes del espíritu",
            "El alma (periespíritu) es materia y por eso puede fotografiarse",
            "La pureza del alma determina hasta dónde puede llegar en sus excursiones"
        ],
        "NodosSinapticos": ["Elasticidad_del_Alma", "Periespiritismo", "Desdoblamiento_Consciente"],
        "ContextoDiccionario": {
            "Elasticidad_del_Alma": "La propiedad física del periespíritu (cuerpo etéreo) de expandirse y contraerse, permitiendo al espíritu desdoblar su presencia a lugares remotos durante el sueño o la vigilia."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Espiritismo Tanda 6 aplicado.")
