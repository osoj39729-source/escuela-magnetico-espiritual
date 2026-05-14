import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Fenomenologia_Espiritual": {
        "palabras_clave": ["fenómeno", "espiritual", "ley", "naturaleza", "demostración"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#9682: CUARTA PARTE: FENMENOS ESPIRITUALES:"],
        "contexto_real": "El estudio científico y racional de las manifestaciones del espíritu sobre la materia, despojado de interpretaciones místicas o religiosas."
    },
    "Videncia_Espiritual": {
        "palabras_clave": ["videncia", "espiritual", "vista del alma", "éter", "visión"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#9688: CAPITULO PRIMERO: FENMENOS DE VIDENCIA"],
        "contexto_real": "La facultad de percepción visual del espíritu que trasciende la luz física, permitiendo ver entidades, fluidos y eventos en el Éter."
    },
    "Posesion_Parlante": {
        "palabras_clave": ["posesión", "parlante", "médium", "control", "comunicación"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#10077: CAPITULO SEGUNDO: FENMENO DE LA POSESIN PARLANTE"],
        "contexto_real": "Fenómeno en el cual un espíritu utiliza los órganos de fonación de un médium para transmitir mensajes inteligentes de forma verbal."
    },
    "Psicografia": {
        "palabras_clave": ["psicografía", "escritura", "médium", "espíritu", "mecánica"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#10278: CAPTULO TERCERO: FENMENOS DE LA ESCRITURA, PINTURA Y DIBUJO"],
        "contexto_real": "La facultad mediúmnica de escribir bajo la influencia directa de un espíritu, ya sea de forma mecánica (sin conciencia) o intuitiva."
    },
    "Elasticidad_del_Alma": {
        "palabras_clave": ["elasticidad", "alma", "periespíritu", "distancia", "vínculo"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#10347: CAPTULO CUARTO: FENMENO DEL DESDOBLAMIENTO"],
        "contexto_real": "La propiedad del periespíritu de estirarse indefinidamente, permitiendo al espíritu alejarse del cuerpo físico sin romper el vínculo vital."
    },
    "Centinela_de_Luz": {
        "palabras_clave": ["centinela", "luz", "protección", "vidente", "defensa"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#9688: CAPITULO PRIMERO: FENMENOS DE VIDENCIA"],
        "contexto_real": "La función del vidente dentro de un centro espírita como vigilante de los fluidos y presencias de espíritus detractores."
    },
    "Control_Medianimico": {
        "palabras_clave": ["control", "medianímico", "voluntad", "médium", "espíritu"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#10077: CAPITULO SEGUNDO: FENMENO DE LA POSESIN PARLANTE"],
        "contexto_real": "La capacidad de un médium o de un espíritu comunicante para dirigir y estabilizar la conexión fluídica durante una manifestación."
    },
    "Escritura_Mecanica": {
        "palabras_clave": ["escritura", "mecánica", "mano", "médium", "sin conciencia"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#10278: CAPTULO TERCERO: FENMENOS DE LA ESCRITURA, PINTURA Y DIBUJO"],
        "contexto_real": "Tipo de psicografía donde el médium no tiene conciencia de lo que escribe, siendo su mano movida directamente por la fuerza del espíritu."
    },
    "Hebra_de_Plata": {
        "palabras_clave": ["hebra", "plata", "hilo", "luz", "vínculo", "vital"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#10347: CAPTULO CUARTO: FENMENO DEL DESDOBLAMIENTO"],
        "contexto_real": "El cordón fluídico y vital que une al espíritu con su cuerpo físico durante el desdoblamiento o el sueño."
    },
    "Desdoblamiento_Consciente": {
        "palabras_clave": ["desdoblamiento", "consciente", "alma", "viaje", "periespíritu"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#10347: CAPTULO CUARTO: FENMENO DEL DESDOBLAMIENTO"],
        "contexto_real": "La capacidad del espíritu de desprenderse voluntariamente de la materia densa para actuar o investigar en el plano espiritual mientras el cuerpo permanece con vida."
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

print("Diccionario Tanda 13 actualizado.")
