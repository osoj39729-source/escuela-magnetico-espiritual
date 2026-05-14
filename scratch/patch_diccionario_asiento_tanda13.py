import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Fracaso_del_Espiritualismo": {
        "palabras_clave": ["fracaso", "espiritualismo", "error", "misticismo", "venda", "dogma"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#5639: I: Mayo 3 de 1912. Un espiritualista."],
        "contexto_real": "La incapacidad de las doctrinas espiritualistas para ofrecer una solución racional y social a los problemas de la humanidad."
    },
    "Testimonio_de_Ultratumba": {
        "palabras_clave": ["testimonio", "ultratumba", "espíritu", "rectificación", "comunicación"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#5639: I: Mayo 3 de 1912. Un espiritualista."],
        "contexto_real": "Las declaraciones de seres desencarnados que sirven para confirmar las verdades doctrinales y corregir errores pasados."
    },
    "Rectificación_Espiritual": {
        "palabras_clave": ["rectificación", "espiritual", "cambio", "error", "verdad", "reconocer"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#5639: I: Mayo 3 de 1912. Un espiritualista."],
        "contexto_real": "El proceso por el cual un espíritu reconoce sus errores pasados y se alinea con la verdad racional."
    },
    "Amor_Accion": {
        "palabras_clave": ["amor", "acción", "voluntad", "servicio", "hechos", "trabajo"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#5693: II (PARTE TERCERA: El derecho de los esp ritos: Alta leccin)"],
        "contexto_real": "La definición trincadista del amor como un acto de voluntad orientado al servicio y bienestar del prójimo."
    },
    "Amor_Comunal": {
        "palabras_clave": ["amor", "comunal", "comuna", "todos", "fraternidad", "unidad"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#5693: II (PARTE TERCERA: El derecho de los esp ritos: Alta leccin)"],
        "contexto_real": "La manifestación social del amor donde el bienestar de la colectividad es el objetivo de cada individuo."
    },
    "Desvirtuacion_de_la_Familia": {
        "palabras_clave": ["desvirtuación", "familia", "egoísmo", "carne", "forma", "error"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#5693: II (PARTE TERCERA: El derecho de los esp ritos: Alta leccin)"],
        "contexto_real": "La crítica a la estructura familiar cerrada y egoísta que impide la fraternidad universal."
    },
    "Condena_de_la_Caridad": {
        "palabras_clave": ["condena", "caridad", "hipocresía", "limosna", "derecho", "justicia"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#5981: escribe y proclama la ley y el axioma."],
        "contexto_real": "Postura doctrinal que rechaza la limosna por considerarla un sustituto injusto del derecho y la igualdad social."
    },
    "Abolicion_de_Fronteras": {
        "palabras_clave": ["abolición", "fronteras", "rayas", "naciones", "unidad", "tierra"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#5981: escribe y proclama la ley y el axioma."],
        "contexto_real": "El fin de las divisiones geográficas y políticas para formar una sola nación humana bajo la ley de amor."
    },
    "Unidad_en_la_Comuna": {
        "palabras_clave": ["unidad", "comuna", "estado", "natural", "ley", "amor"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#5981: escribe y proclama la ley y el axioma."],
        "contexto_real": "La organización definitiva de la humanidad donde todos los seres viven bajo una sola ley de justicia y propiedad común."
    },
    "Ley_del_Trabajo": {
        "palabras_clave": ["ley", "trabajo", "esfuerzo", "sustento", "progreso", "único"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#6062: Acotaciones:"],
        "contexto_real": "Axioma universal que establece que la actividad útil es el único medio de progreso y sustento para todo ser."
    },
    "Comuna_Solidaria": {
        "palabras_clave": ["comuna", "solidaria", "ayuda", "universo", "infinito", "orden"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#6062: Acotaciones:"],
        "contexto_real": "La interdependencia de todos los mundos y seres del universo bajo la ley de amor del Creador."
    },
    "Metafora_de_las_Alas": {
        "palabras_clave": ["metáfora", "alas", "libertad", "espíritu", "vuelo", "éter"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#6062: Acotaciones:"],
        "contexto_real": "Símbolo de la potencia vibratoria y la libertad de movimiento del espíritu en el espacio infinito."
    },
    "Destino_de_los_Obstinados": {
        "palabras_clave": ["destino", "obstinados", "prevaricadores", "destierro", "juicio", "expiación"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#6319: IV (escribe y proclama la ley y el axioma.)"],
        "contexto_real": "El proceso de selección espiritual donde los seres que se oponen al progreso son trasladados a mundos inferiores."
    },
    "Mundos_de_Expiacion": {
        "palabras_clave": ["mundos", "expiación", "dolor", "aprendizaje", "rudimentario", "selva"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#6319: IV (escribe y proclama la ley y el axioma.)"],
        "contexto_real": "Planetas de baja vibración destinados a recibir espíritus que deben aprender mediante el esfuerzo rudo y el sufrimiento."
    },
    "Justicia_sin_Misericordia": {
        "palabras_clave": ["justicia", "misericordia", "causalidad", "ley", "fría", "consecuencia"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#6319: IV (escribe y proclama la ley y el axioma.)"],
        "contexto_real": "Principio que establece que ante la ley de causa y efecto no hay perdón arbitrario, sino cumplimiento riguroso de la deuda."
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

print("Diccionario Tanda 13 (Asiento) actualizado.")
