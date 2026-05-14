import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Fundamentacion_Ontologica": {
        "palabras_clave": ["fundamentación", "ontológica", "ser", "realidad", "base", "cimiento"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#3209: FIN DEL LIBRO PRIMERO"],
        "contexto_real": "El establecimiento de los principios sobre el ser y la realidad que sustentan toda la doctrina espiritista."
    },
    "Cierre_de_Ciclo": {
        "palabras_clave": ["cierre", "ciclo", "etapa", "fin", "conclusión"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#3209: FIN DEL LIBRO PRIMERO"],
        "contexto_real": "La culminación de una fase de estudio o de un proceso evolutivo para dar paso a uno superior."
    },
    "Arquitectura_Doctrinal": {
        "palabras_clave": ["arquitectura", "doctrinal", "estructura", "orden", "lógica", "edificio"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#3209: FIN DEL LIBRO PRIMERO"],
        "contexto_real": "La disposición sistemática y coherente de los conocimientos que forman el cuerpo del Espiritismo Luz y Verdad."
    },
    "Leyes_Fenomenicas": {
        "palabras_clave": ["leyes", "fenoménicas", "fenómeno", "natural", "manifestación", "física"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#3217: LIBRO SEGUNDO: LEYES, PRUEBAS Y MANIFESTACIONES"],
        "contexto_real": "El conjunto de reglas naturales que rigen los fenómenos físicos y psíquicos producidos por la acción de los espíritus."
    },
    "Pruebas_Espirituales": {
        "palabras_clave": ["pruebas", "espirituales", "demostración", "evidencia", "hechos"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#3217: LIBRO SEGUNDO: LEYES, PRUEBAS Y MANIFESTACIONES"],
        "contexto_real": "Las manifestaciones tangibles que sirven para confirmar la existencia y acción del mundo espiritual."
    },
    "Metodo_Experimental": {
        "palabras_clave": ["método", "experimental", "ciencia", "observación", "control", "estudio"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#3217: LIBRO SEGUNDO: LEYES, PRUEBAS Y MANIFESTACIONES"],
        "contexto_real": "El procedimiento científico basado en la observación y experimentación rigurosa de los fenómenos mediúnicos."
    },
    "Mediumnidad_Universal": {
        "palabras_clave": ["mediumnidad", "universal", "facultad", "común", "natural"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#3225: CAPITULO I: Ley de las mediumnidades en general(1)"],
        "contexto_real": "La capacidad inherente a todo espíritu de interactuar con diferentes planos de vibración."
    },
    "Poder_Psiquico": {
        "palabras_clave": ["poder", "psíquico", "fuerza", "dinámica", "alma", "voluntad"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#3225: CAPITULO I: Ley de las mediumnidades en general(1)"],
        "contexto_real": "La fuerza dinámica del alma, dirigida por el espíritu, capaz de influir sobre la materia y comunicarse con otros seres."
    },
    "Vibracion_Espiritual": {
        "palabras_clave": ["vibración", "espiritual", "frecuencia", "onda", "fluido", "luz"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#3225: CAPITULO I: Ley de las mediumnidades en general(1)"],
        "contexto_real": "El estado energético del espíritu que determina su grado de luz y su capacidad de acción en el universo."
    },
    "Rigor_Cientifico_Mediunico": {
        "palabras_clave": ["rigor", "científico", "mediúnico", "exactitud", "análisis", "frío"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#3233: PREFACIO"],
        "contexto_real": "La aplicación de estándares de control estrictos para validar la autenticidad y utilidad de los fenómenos espirituales."
    },
    "Higiene_Facultativa": {
        "palabras_clave": ["higiene", "facultativa", "limpieza", "moral", "mental", "médium"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#3233: PREFACIO"],
        "contexto_real": "El conjunto de prácticas morales y mentales necesarias para mantener limpia y pura la facultad mediúnica."
    },
    "Control_de_Calidad": {
        "palabras_clave": ["control", "calidad", "validación", "veracidad", "útil"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#3233: PREFACIO"],
        "contexto_real": "El proceso de filtrado de comunicaciones para asegurar que solo la sabiduría de alta luz llegue a la cátedra."
    },
    "Psiquis_Espiritual": {
        "palabras_clave": ["psiquis", "espiritual", "alma", "dominio", "sabiduría", "proyección"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#3267: todas direcciones?"],
        "contexto_real": "La manifestación de la inteligencia y voluntad del espíritu a través del periespíritu o alma."
    },
    "Expansion_de_la_Facultad": {
        "palabras_clave": ["expansión", "facultad", "crecimiento", "desarrollo", "sabiduría"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#3267: todas direcciones?"],
        "contexto_real": "El proceso de aumento de la capacidad perceptiva y operativa del espíritu según progresa en el estudio."
    },
    "Dominio_del_Alma": {
        "palabras_clave": ["dominio", "alma", "voluntad", "control", "espíritu", "periespíritu"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#3267: todas direcciones?"],
        "contexto_real": "La sujeción de las pasiones e instintos del alma bajo el mando racional del espíritu inmortal."
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

print("Diccionario Tanda 9 (Asiento) actualizado.")
