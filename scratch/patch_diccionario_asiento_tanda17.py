import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Universo_Vivo": {
        "palabras_clave": ["universo", "vivo", "organismo", "vida", "vibración", "solidaridad"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#9091: V (CAPTULO V: Explicacin del espiritismo)"],
        "contexto_real": "El concepto de que toda la creación posee una esencia espiritual activa y en constante evolución."
    },
    "Solidaridad_Cosmica": {
        "palabras_clave": ["solidaridad", "cósmica", "unión", "mundos", "interconexión", "ley"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#9091: V (CAPTULO V: Explicacin del espiritismo)"],
        "contexto_real": "La ley universal que vincula a todos los seres y mundos en una red de ayuda mutua y progreso común."
    },
    "Estados_Vibratorios": {
        "palabras_clave": ["estados", "vibratorios", "frecuencia", "cambio", "espíritu", "materia"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#9091: V (CAPTULO V: Explicacin del espiritismo)"],
        "contexto_real": "Las diferentes densidades y frecuencias en las que se manifiesta la sustancia única (espíritu)."
    },
    "Cuidado_del_Medium": {
        "palabras_clave": ["cuidado", "médium", "herramienta", "estudio", "ética", "pureza"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#9201: ver is, ser el consejo que recibir is."],
        "contexto_real": "El conjunto de disciplinas físicas y morales necesarias para mantener la salud y fidelidad de la facultad mediúmnica."
    },
    "Herramienta_Espiritual": {
        "palabras_clave": ["herramienta", "espiritual", "médium", "canal", "instrumento", "misión"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#9201: ver is, ser el consejo que recibir is."],
        "contexto_real": "La consideración del cuerpo y la mente del médium como un instrumento al servicio del mundo espiritual superior."
    },
    "Estudio_Mediunico": {
        "palabras_clave": ["estudio", "mediúmnico", "razón", "ciencia", "formación", "conocimiento"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#9201: ver is, ser el consejo que recibir is."],
        "contexto_real": "La preparación intelectual necesaria para comprender y filtrar correctamente las comunicaciones del mundo invisible."
    },
    "Revelacion_del_Espiritu_de_Verdad": {
        "palabras_clave": ["revelación", "espíritu", "verdad", "prometido", "confirmación", "profecía"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#9225: VI (CAPTULO V: Explicacin del espiritismo)"],
        "contexto_real": "El proceso histórico-doctrinal de entrega de la luz racional prometida por los grandes misioneros."
    },
    "Reinado_de_la_Razon": {
        "palabras_clave": ["reinado", "razón", "fin", "dogma", "luz", "consciencia"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#9225: VI (CAPTULO V: Explicacin del espiritismo)"],
        "contexto_real": "La etapa evolutiva donde el pensamiento lógico y la verdad demostrada guían la conducta humana."
    },
    "Confirmacion_Profetica": {
        "palabras_clave": ["confirmación", "profética", "cumplimiento", "misioneros", "jesús", "tiempos"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#9225: VI (CAPTULO V: Explicacin del espiritismo)"],
        "contexto_real": "La validación de las advertencias y promesas hechas por los antiguos profetas mediante los hechos actuales."
    },
    "Reglamento_de_Cátedras": {
        "palabras_clave": ["reglamento", "cátedras", "escuela", "emecu", "orden", "funcionamiento"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#9232: PRIMER CONSEJO DE MEDIUMS"],
        "contexto_real": "El conjunto de normas que rigen el funcionamiento de los centros de estudio de la Escuela Magnético-Espiritual."
    },
    "Consejo_de_Médiums": {
        "palabras_clave": ["consejo", "médiums", "dirección", "pureza", "vigilancia", "doctrina"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#9232: PRIMER CONSEJO DE MEDIUMS"],
        "contexto_real": "El organismo encargado de velar por la fidelidad y seriedad de las comunicaciones espirituales en la Escuela."
    },
    "Orden_Doctrinario": {
        "palabras_clave": ["orden", "doctrinario", "rigor", "ciencia", "estructura", "seriedad"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#9232: PRIMER CONSEJO DE MEDIUMS"],
        "contexto_real": "La organización metódica de los conocimientos y prácticas del espiritismo para evitar el misticismo."
    },
    "Fin_del_Error": {
        "palabras_clave": ["fin", "error", "ignorancia", "religión", "dogma", "oscuridad"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#9580: EP LOGO"],
        "contexto_real": "El término del periodo de predominio de las religiones y los dogmas en la evolución humana."
    },
    "Septimo_Dia": {
        "palabras_clave": ["séptimo", "día", "descanso", "luz", "era", "regeneración"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#9580: EP LOGO"],
        "contexto_real": "La etapa de progreso y paz definitiva en la Tierra tras haber superado las luchas de la ignorancia."
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

print("Diccionario Tanda 17 (FINAL) actualizado.")
