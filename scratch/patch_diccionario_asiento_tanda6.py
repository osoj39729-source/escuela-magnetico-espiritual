import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Enemigos_Internos": {
        "palabras_clave": ["enemigos", "internos", "misticismo", "ignorancia", "microbio", "tisis"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#1442: CAPTULO I: Enemigos del espiritismo"],
        "contexto_real": "Término que designa a los adeptos que, por ignorancia o misticismo, desvirtúan la doctrina y causan su desprestigio."
    },
    "Misticismo_Destructivo": {
        "palabras_clave": ["misticismo", "destructivo", "religión", "error", "venda"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#1442: CAPTULO I: Enemigos del espiritismo"],
        "contexto_real": "La tendencia a interpretar fenómenos espirituales desde una óptica religiosa o mágica, nublando la razón."
    },
    "Religiones_Externas": {
        "palabras_clave": ["religiones", "externas", "oposición", "ataque", "dogma"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#1442: CAPTULO I: Enemigos del espiritismo"],
        "contexto_real": "Las instituciones que se oponen al Espiritismo por temor a perder su control social y espiritual."
    },
    "Mediumnidad_Racional": {
        "palabras_clave": ["mediumnidad", "racional", "facultad", "médium", "control", "estudio"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#1616: CAPITULO II: Los mdiums; lo que son y sus cualidades"],
        "contexto_real": "La práctica de la comunicación espiritual basada en leyes naturales y controlada rigurosamente por la razón humana."
    },
    "Puente_Vibratorio": {
        "palabras_clave": ["puente", "vibratorio", "médium", "comunicación", "fluido"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#1616: CAPITULO II: Los mdiums; lo que son y sus cualidades"],
        "contexto_real": "Metáfora que describe al médium como el vínculo energético que permite el intercambio entre el plano físico y el espiritual."
    },
    "Cualidades_Mediunicas": {
        "palabras_clave": ["cualidades", "mediúnicas", "moral", "higiene", "preparación"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#1616: CAPITULO II: Los mdiums; lo que son y sus cualidades"],
        "contexto_real": "El conjunto de condiciones morales y físicas necesarias para ser un canal de comunicación de alta luz."
    },
    "Armonia_Vibratoria": {
        "palabras_clave": ["armonía", "vibratoria", "paz", "unión", "centro", "reunión"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#1720: discusiones, les estorba la facultad."],
        "contexto_real": "El estado de equilibrio y paz colectiva necesario para que se produzcan fenómenos mediúnicos de alta luz."
    },
    "Bloqueo_Mediunico": {
        "palabras_clave": ["bloqueo", "mediúnico", "estorbo", "discusión", "ego", "odio"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#1720: discusiones, les estorba la facultad."],
        "contexto_real": "La interrupción de la facultad mediúnica causada por estados emocionales bajos o falta de armonía en el ambiente."
    },
    "Ego_en_el_Centro": {
        "palabras_clave": ["ego", "centro", "protagonismo", "orgullo", "vanidad"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#1720: discusiones, les estorba la facultad."],
        "contexto_real": "La interferencia personalista que desvirtúa la labor de la Escuela y atrae espíritus de baja vibración."
    },
    "Analisis_de_Comunicaciones": {
        "palabras_clave": ["análisis", "comunicaciones", "validación", "razón", "mensajes"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#1796: CAPTULO III: Las comunicaciones y manifestaciones"],
        "contexto_real": "El proceso crítico de examinar cada mensaje espiritual para verificar su coherencia con la ley universal."
    },
    "Fondo_sobre_Forma": {
        "palabras_clave": ["fondo", "forma", "nombre", "contenido", "autoridad", "verdad"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#1796: CAPTULO III: Las comunicaciones y manifestaciones"],
        "contexto_real": "Principio crítico que prioriza el contenido moral e intelectual de una comunicación sobre la identidad pretendida del espíritu."
    },
    "Manifestaciones_Espirituales": {
        "palabras_clave": ["manifestaciones", "espirituales", "fenómenos", "pruebas", "luz"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#1796: CAPTULO III: Las comunicaciones y manifestaciones"],
        "contexto_real": "Las diversas formas en que el mundo espiritual actúa sobre el plano físico para dar testimonio de su existencia."
    },
    "Mal_Uso_del_Espiritismo": {
        "palabras_clave": ["mal uso", "espiritismo", "lucro", "curiosidad", "misticismo", "engaño"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#1996: CAPTULO IV: Consecuencias del mal uso del espiritismo"],
        "contexto_real": "La desviación de la doctrina para fines egoístas o supersticiosos, lo cual conduce al estancamiento espiritual."
    },
    "Obsesion_Espiritual": {
        "palabras_clave": ["obsesión", "espiritual", "influencia", "baja", "esclavitud", "autómata"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#1996: CAPTULO IV: Consecuencias del mal uso del espiritismo"],
        "contexto_real": "El estado de dominio de espíritus atrasados sobre individuos que no usan su razón o tienen debilidades morales."
    },
    "Muerte_Moral": {
        "palabras_clave": ["muerte", "moral", "degradación", "caída", "responsabilidad"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#1996: CAPTULO IV: Consecuencias del mal uso del espiritismo"],
        "contexto_real": "Estado de degradación de la conciencia que ocurre cuando el individuo utiliza conocimientos superiores para fines egoístas o místicos."
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

print("Diccionario Tanda 6 (Asiento) actualizado.")
