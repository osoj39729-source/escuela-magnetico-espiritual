import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Amplitud_Doctrinal": {
        "palabras_clave": ["amplitud", "doctrinal", "todo", "universo", "ciencia"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#699: CAPTULO II: Lo que abarca el espiritismo"],
        "contexto_real": "La característica del Espiritismo Racional de no tener límites en su estudio, abarcando todas las dimensiones de la existencia."
    },
    "Ciencia_Universal": {
        "palabras_clave": ["ciencia", "universal", "síntesis", "conocimiento", "espíritu"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#699: CAPTULO II: Lo que abarca el espiritismo"],
        "contexto_real": "El Espiritismo como la ciencia madre que unifica y explica todas las leyes de la vida y la materia."
    },
    "Fenomenologia_Total": {
        "palabras_clave": ["fenomenología", "total", "hechos", "fenómenos", "realidad"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#699: CAPTULO II: Lo que abarca el espiritismo"],
        "contexto_real": "El estudio integral de todas las manifestaciones de la vida, ya sean físicas, psíquicas o espirituales."
    },
    "Estudio_Racional": {
        "palabras_clave": ["estudio", "racional", "razón", "análisis", "frío"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#845: CAPTULO III: Cmo se estudia el espiritismo"],
        "contexto_real": "El método de aprendizaje basado en la observación, el razonamiento y la exclusión de todo sentimiento místico."
    },
    "Higiene_Mental": {
        "palabras_clave": ["higiene", "mental", "limpieza", "prejuicios", "dogmas"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#845: CAPTULO III: Cmo se estudia el espiritismo"],
        "contexto_real": "El proceso de limpieza de la conciencia de prejuicios, miedos y dogmas para permitir el libre ejercicio de la razón."
    },
    "Analisis_de_Hechos": {
        "palabras_clave": ["análisis", "hechos", "realidad", "evidencia", "vida"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#845: CAPTULO III: Cmo se estudia el espiritismo"],
        "contexto_real": "La práctica de basar las conclusiones espirituales en la observación de los sucesos de la vida y la naturaleza."
    },
    "Necedad_del_Negador": {
        "palabras_clave": ["necedad", "negador", "materialista", "ceguera", "soberbia"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#1078: CAPTULO IV: Cmo es necio negar el Espiritismo"],
        "contexto_real": "La postura irracional de quienes niegan la existencia del espíritu a pesar de ser la causa evidente de su propia inteligencia."
    },
    "Evidencia_de_la_Vida": {
        "palabras_clave": ["evidencia", "vida", "espíritu", "causa", "existencia"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#1078: CAPTULO IV: Cmo es necio negar el Espiritismo"],
        "contexto_real": "El hecho innegable de la vida inteligente que sirve como prueba suprema de la realidad del espíritu."
    },
    "Soberbia_Materialista": {
        "palabras_clave": ["soberbia", "materialista", "orgullo", "negación", "ego"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#1078: CAPTULO IV: Cmo es necio negar el Espiritismo"],
        "contexto_real": "La actitud del individuo que se aferra a la materia por orgullo, ignorando deliberadamente la luz de la razón espiritual."
    },
    "Universo_Escuela": {
        "palabras_clave": ["universo", "escuela", "colegio", "aula", "progreso"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#1187: CAPTULO V: Todo el universo es el espiritismo y su maestro, Elo"],
        "contexto_real": "Metáfora trincadista que define al cosmos como un sistema educativo infinito para el progreso de los espíritus."
    },
    "Maestro_Eloi": {
        "palabras_clave": ["maestro", "eloi", "rector", "padre", "creador"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#1187: CAPTULO V: Todo el universo es el espiritismo y su maestro, Elo"],
        "contexto_real": "El Creador Universal visto como el Supremo Educador que rige la evolución de todos sus hijos."
    },
    "Transicion_Doctrinal": {
        "palabras_clave": ["transición", "doctrinal", "paso", "teoría", "práctica"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#1438: SEGUNDA PARTE"],
        "contexto_real": "El paso metódico de la fundamentación teórica a la implementación práctica de la doctrina en la vida humana."
    },
    "Aplicacion_de_Leyes": {
        "palabras_clave": ["aplicación", "leyes", "obras", "acción", "vida"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#1438: SEGUNDA PARTE"],
        "contexto_real": "La puesta en práctica de los principios espirituales en la conducta diaria y la organización social."
    },
    "Grados_de_Estudio": {
        "palabras_clave": ["grados", "estudio", "progreso", "niveles", "aula"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#1438: SEGUNDA PARTE"],
        "contexto_real": "Las etapas sucesivas de conocimiento y responsabilidad que el espíritu atraviesa en su evolución."
    }
}

for k, v in nuevos_conceptos.items():
    if k not in dic["CONCEPTOS"]:
        dic["CONCEPTOS"][k] = v
    else:
        for node in v["nodos_sinapticos"]:
            if node not in dic["CONCEPTOS"][k]["nodos_sinapticos"]:
                dic["CONCEPTOS"][k]["nodos_sinapticos"].append(node)

with open(dic_path, 'w', encoding='utf-8') as f:
    json.dump(dic, f, indent=2, ensure_ascii=False)

print("Diccionario Tanda 5 (Asiento) actualizado.")
