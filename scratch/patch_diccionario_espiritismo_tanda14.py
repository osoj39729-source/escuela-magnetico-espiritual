import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Audicion_Espiritual": {
        "palabras_clave": ["audición", "espiritual", "oído", "vibración", "clariaudiencia"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#10482: CAPTULO QUINTO: FENMENO DE AUDICIN, INTUICIN E INSPIRACIN"],
        "contexto_real": "La percepción de sonidos o voces articuladas por espíritus directamente en los centros sensoriales del cerebro, sin intervención del oído físico."
    },
    "Intuicion_Racional": {
        "palabras_clave": ["intuición", "racional", "ideas", "pensamiento", "espíritu"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#10482: CAPTULO QUINTO: FENMENO DE AUDICIN, INTUICIN E INSPIRACIN"],
        "contexto_real": "La captación inmediata de una verdad o idea transmitida por un espíritu afín, que el individuo asimila como un conocimiento propio."
    },
    "Levitacion_Magnetica": {
        "palabras_clave": ["levitación", "magnética", "gravedad", "fluido", "espíritu"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#10573: CAPTULO SEXTO: FENMENOS DE LEVITACIN Y TRASLACIN"],
        "contexto_real": "Fenómeno físico donde un objeto o persona se eleva y sostiene en el aire mediante la aplicación de fluidos magnéticos dirigidos por el espíritu."
    },
    "Traslacion_de_Objetos": {
        "palabras_clave": ["traslación", "objetos", "movimiento", "fluido", "espíritu"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#10573: CAPTULO SEXTO: FENMENOS DE LEVITACIN Y TRASLACIN"],
        "contexto_real": "El desplazamiento físico de objetos sólidos mediante la acción de la voluntad espiritual sobre los fluidos del médium."
    },
    "Aporte_Material": {
        "palabras_clave": ["aporte", "material", "desmaterialización", "objeto", "transporte"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#10735: CAPTULO SPTIMO: EL FENMENO DE APORTE Y MATERIALIZACIN"],
        "contexto_real": "Fenómeno de transporte de un objeto a través de cuerpos sólidos, previa desmaterialización atómica por acción de los espíritus."
    },
    "Materializacion_Fluidica": {
        "palabras_clave": ["materialización", "fluídica", "forma", "espíritu", "visibilidad"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#10735: CAPTULO SPTIMO: EL FENMENO DE APORTE Y MATERIALIZACIN"],
        "contexto_real": "La condensación de fluidos periespirituales hasta el grado de visibilidad y tangibilidad física temporal."
    },
    "Influencia_Espiritual": {
        "palabras_clave": ["influencia", "espiritual", "afinidad", "sugestión", "ambiente"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#11106: CAPTULO OCTAVO: LA INFLUENCIA DE LOS ESPRITUS"],
        "contexto_real": "La acción persistente de los pensamientos y fluidos de los espíritus sobre la voluntad y el estado emocional de los encarnados."
    },
    "Reencarnacion_como_Deber": {
        "palabras_clave": ["reencarnación", "deber", "obligación", "misión", "retorno"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#11256: CAPTULO NOVENO: LA PARTICIPACIN DE LOS ESPRITUS EN LOS HECHOS DE LOS HOMBRES"],
        "contexto_real": "El principio que establece la vuelta del espíritu a la materia como una obligación ineludible para su educación y para el progreso del planeta."
    },
    "Intervencion_Historica": {
        "palabras_clave": ["intervención", "histórica", "hechos", "hombres", "espíritus"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#11256: CAPTULO NOVENO: LA PARTICIPACIN DE LOS ESPRITUS EN LOS HECHOS DE LOS HOMBRES"],
        "contexto_real": "La participación activa y consciente de los espíritus en los procesos sociales y políticos de la humanidad para guiar su evolución."
    },
    "Fisica_Espiritual": {
        "palabras_clave": ["física", "espiritual", "fluido", "fuerza", "leyes"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#10573: CAPTULO SEXTO: FENMENOS DE LEVITACIN Y TRASLACIN"],
        "contexto_real": "El estudio de las leyes mecánicas y dinámicas que rigen la acción del espíritu y sus fluidos sobre la materia densa."
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

print("Diccionario Tanda 14 actualizado.")
