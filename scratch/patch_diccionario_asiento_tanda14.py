import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Mensaje_Solar": {
        "palabras_clave": ["mensaje", "solar", "sol", "vibración", "astrónomo", "luz"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#6547: Acotaciones:"],
        "contexto_real": "Las comunicaciones de alta vibración procedentes de los espíritus que habitan en los centros solares de los sistemas."
    },
    "Triunfo_de_la_Luz": {
        "palabras_clave": ["triunfo", "luz", "victoria", "razón", "fin", "oscuridad"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#6563: V (escribe y proclama la ley y el axioma.)"],
        "contexto_real": "El momento histórico-espiritual donde la verdad racional se impone sobre los dogmas y mitos religiosos."
    },
    "Caida_del_Mito_Cristo": {
        "palabras_clave": ["caída", "mito", "cristo", "religión", "dogma", "derribo"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#6563: V (escribe y proclama la ley y el axioma.)"],
        "contexto_real": "El proceso de desmitificación de la figura divina de Cristo para rescatar la realidad del hombre Jesús."
    },
    "Jesus_Hombre": {
        "palabras_clave": ["jesús", "hombre", "misionero", "maestro", "nasarot", "humano"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#6563: V (escribe y proclama la ley y el axioma.)"],
        "contexto_real": "La figura histórica de Jesús de Nazaret despojada de atributos divinos y reconocida como un gran misionero y maestro."
    },
    "Mundo_Yale": {
        "palabras_clave": ["mundo", "yale", "orión", "destierro", "primitivo", "fragua"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#6919: VI (escribe y proclama la ley y el axioma.)"],
        "contexto_real": "Planeta rudimentario en la constelación de Orión utilizado como destino de destierro para los espíritus prevaricadores de la Tierra."
    },
    "Destierro_en_Orion": {
        "palabras_clave": ["destierro", "orión", "expulsión", "alejamiento", "distancia"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#6919: VI (escribe y proclama la ley y el axioma.)"],
        "contexto_real": "El proceso de trasladar espíritus a sistemas distantes para que purguen sus errores en condiciones rudimentarias."
    },
    "Mundo_de_Fragua": {
        "palabras_clave": ["mundo", "fragua", "rudimentario", "esfuerzo", "naturaleza", "calor"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#6919: VI (escribe y proclama la ley y el axioma.)"],
        "contexto_real": "Planetas en estados geológicos primarios destinados al aprendizaje rudo y físico de los espíritus."
    },
    "Calculo_Cosmogonico": {
        "palabras_clave": ["cálculo", "cosmogónico", "distancia", "tiempo", "astronomía", "matemática"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#7034: Acotaciones:"],
        "contexto_real": "La determinación precisa de las distancias y tiempos universales basados en la ley de causalidad espiritual."
    },
    "Justicia_Matematica": {
        "palabras_clave": ["justicia", "matemática", "exactitud", "proporción", "ley", "causa"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#7034: Acotaciones:"],
        "contexto_real": "El principio de que las consecuencias de los actos espirituales son proporcionales y calculables según leyes universales."
    },
    "Ciclos_de_Expulsion": {
        "palabras_clave": ["ciclos", "expulsión", "destierro", "millones", "siglos", "tiempo"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#7034: Acotaciones:"],
        "contexto_real": "Los periodos de tiempo astronómicos que un espíritu debe pasar fuera de su mundo original para rectificar su vibración."
    },
    "Mundo_Samur": {
        "palabras_clave": ["mundo", "samur", "destierro", "intermedio", "proceso", "justicia"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#7044: VII (escribe y proclama la ley y el axioma.)"],
        "contexto_real": "Destino de destierro intermedio para espíritus que, sin ser criminales de alta escala, se opusieron al progreso racional."
    },
    "Grados_de_Expulsion": {
        "palabras_clave": ["grados", "expulsión", "variedad", "justicia", "afinidad"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#7044: VII (escribe y proclama la ley y el axioma.)"],
        "contexto_real": "La clasificación de los destinos de destierro según la gravedad de la prevaricación de cada espíritu."
    },
    "Progreso_Interplanetario": {
        "palabras_clave": ["progreso", "interplanetario", "ayuda", "conocimiento", "mundos", "solidaridad"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#7044: VII (escribe y proclama la ley y el axioma.)"],
        "contexto_real": "La transferencia de conocimientos y vibraciones de mundos superiores a inferiores para acelerar su evolución."
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

print("Diccionario Tanda 14 (Asiento) actualizado.")
