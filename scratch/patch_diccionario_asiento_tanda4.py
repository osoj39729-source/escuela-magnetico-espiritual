import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Progreso_Infinito": {
        "palabras_clave": ["progreso", "infinito", "evolución", "eterna", "siempre más allá"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#137: Siempre ms all"],
        "contexto_real": "La ley universal que impulsa al espíritu a una superación constante y eterna en todos los planos de la existencia."
    },
    "Superacion_Espiritual": {
        "palabras_clave": ["superación", "espiritual", "voluntad", "meta", "grado"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#137: Siempre ms all"],
        "contexto_real": "El esfuerzo consciente del espíritu por vencer sus limitaciones y adquirir nuevos niveles de sabiduría y amor."
    },
    "Evolucion_Eterna": {
        "palabras_clave": ["evolución", "eterna", "vida", "continuada", "infinito"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#137: Siempre ms all"],
        "contexto_real": "El proceso incesante de cambio y mejora que define la naturaleza misma del espíritu inmortal."
    },
    "Logica_Trincadista": {
        "palabras_clave": ["lógica", "trincadista", "razón", "análisis", "causa", "efecto"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#148: Premisa"],
        "contexto_real": "El método de razonamiento austero y matemático que parte de los efectos visibles para deducir las causas espirituales."
    },
    "Existencia_del_Espiritu": {
        "palabras_clave": ["existencia", "espíritu", "realidad", "causa", "vida"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#148: Premisa"],
        "contexto_real": "El axioma fundamental que establece al espíritu como la única realidad eterna y el motor de toda vida inteligente."
    },
    "Inspiracion_Misionera": {
        "palabras_clave": ["inspiración", "misionera", "misioneros", "guía", "enseñanza"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#334: PREFACIO"],
        "contexto_real": "La asistencia directa de los espíritus maestros (misioneros) en la transmisión de la verdad a la humanidad."
    },
    "Archivo_del_Espiritu": {
        "palabras_clave": ["archivo", "espíritu", "memoria", "eterna", "experiencia"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#334: PREFACIO"],
        "contexto_real": "La memoria eterna e indestructible de cada ser donde se registran todas sus experiencias y conocimientos de vidas pasadas."
    },
    "Conocimiento_Revelado": {
        "palabras_clave": ["conocimiento", "revelado", "verdad", "descubrimiento", "estudio"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#334: PREFACIO"],
        "contexto_real": "El conjunto de verdades universales que son descubiertas por el espíritu a través del estudio y la limpieza de la razón."
    },
    "Estructura_Doctrinal": {
        "palabras_clave": ["estructura", "doctrinal", "organización", "estudio", "libro"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#584: LIBRO PRIMERO  PARTE PRIMERA"],
        "contexto_real": "La organización sistemática y lógica del cuerpo de doctrinas de la EMECU para su correcto aprendizaje."
    },
    "Metafisica_Racional": {
        "palabras_clave": ["metafísica", "racional", "ciencia", "espíritu", "causa"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#584: LIBRO PRIMERO  PARTE PRIMERA"],
        "contexto_real": "El estudio científico y lógico de las realidades que trascienden la materia densa, basado en la evidencia del espíritu."
    },
    "Definicion_del_Espiritismo": {
        "palabras_clave": ["definición", "espiritismo", "vida", "sabiduría", "omnipotencia"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#588: CAPTULO I: Qu es el espiritismo?"],
        "contexto_real": "Axioma que establece al Espiritismo como la vida eterna y continuada, y la sabiduría omnipotente de la creación solidarizada."
    },
    "Vida_Real": {
        "palabras_clave": ["vida", "real", "racional", "espíritu", "existencia"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#588: CAPTULO I: Qu es el espiritismo?"],
        "contexto_real": "La existencia consciente y racional del espíritu, que es la única vida verdadera frente a la transitoriedad de la materia."
    },
    "Omnipotencia_Solidarizada": {
        "palabras_clave": ["omnipotencia", "solidarizada", "potencia", "espíritus", "unión"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#588: CAPTULO I: Qu es el espiritismo?"],
        "contexto_real": "La suma de las potencias de todos los espíritus de luz que actúan en armonía bajo la ley del Creador."
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

print("Diccionario Tanda 4 (Asiento) actualizado.")
