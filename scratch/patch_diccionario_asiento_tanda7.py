import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Responsabilidad_Personal": {
        "palabras_clave": ["responsabilidad", "personal", "actos", "conciencia", "autor"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#2156: religiones y lo recomiendan as."],
        "contexto_real": "El principio de que cada espíritu es el único autor y responsable de sus actos ante la ley de justicia."
    },
    "Libertad_de_Conciencia": {
        "palabras_clave": ["libertad", "conciencia", "pensamiento", "libre", "razón"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#2156: religiones y lo recomiendan as."],
        "contexto_real": "El derecho inalienable del espíritu a razonar y decidir por sí mismo, sin imposiciones dogmáticas."
    },
    "Contraste_Doctrinal": {
        "palabras_clave": ["contraste", "doctrina", "religión", "error", "verdad"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#2156: religiones y lo recomiendan as."],
        "contexto_real": "La diferenciación clara entre las enseñanzas de la EMECU y las de las religiones tradicionales."
    },
    "Derechos_y_Deberes": {
        "palabras_clave": ["derechos", "deberes", "balanza", "justicia", "mérito"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#2269: CAPTULO V: El bien que trae y a lo que obliga el Espiritismo"],
        "contexto_real": "La balanza de justicia donde el espíritu solo adquiere derechos tras haber cumplido con sus deberes correspondientes."
    },
    "Amor_al_Hermano": {
        "palabras_clave": ["amor", "hermano", "prójimo", "fraternidad", "caridad"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#2269: CAPTULO V: El bien que trae y a lo que obliga el Espiritismo"],
        "contexto_real": "El mandato supremo de reconocer y ayudar a cada ser humano como un hermano igual ante el Padre."
    },
    "Consumacion_Doctrinal": {
        "palabras_clave": ["consumación", "doctrinal", "juicio", "final", "regreso"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#2490: PARTE TERCERA"],
        "contexto_real": "El cumplimiento histórico de las profecías y la instauración definitiva del espiritismo en la Tierra."
    },
    "Nueva_Era": {
        "palabras_clave": ["nueva", "era", "regeneración", "luz", "juicio", "después"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#2490: PARTE TERCERA"],
        "contexto_real": "El periodo que se inicia tras el Juicio de Mayoría, caracterizado por el predominio de la razón y el amor sobre el dogma."
    },
    "Regimen_de_Luz": {
        "palabras_clave": ["régimen", "luz", "gobierno", "espíritu", "justicia"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#2490: PARTE TERCERA"],
        "contexto_real": "La organización social y espiritual de la Tierra regenerada bajo las leyes del Espiritismo Luz y Verdad."
    },
    "Reinado_del_Espiritu": {
        "palabras_clave": ["reinado", "espíritu", "hegemonía", "razón", "amor", "dominio"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#2493: CAPTULO I: El reinado del Espiritismo"],
        "contexto_real": "El estado de la humanidad donde el espíritu domina sus instintos y rige sus actos por la ley de amor."
    },
    "Hegemonia_de_la_Razon": {
        "palabras_clave": ["hegemonía", "razón", "superioridad", "análisis", "verdad"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#2493: CAPTULO I: El reinado del Espiritismo"],
        "contexto_real": "La primacía de la inteligencia racional sobre las pasiones materiales y los errores religiosos."
    },
    "Fin_del_Crepusculo": {
        "palabras_clave": ["fin", "crepúsculo", "sombras", "oscuridad", "dogma", "religión"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#2493: CAPTULO I: El reinado del Espiritismo"],
        "contexto_real": "El momento histórico en que la ignorancia y el prejuicio religioso dejan de dominar el pensamiento humano."
    },
    "Juicio_de_Mayoria": {
        "palabras_clave": ["juicio", "mayoría", "1912", "examen", "pesaje", "obras"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#2654: CAPTULO II: El juicio final y universal"],
        "contexto_real": "El examen colectivo de la humanidad donde se evalúa el progreso de los espíritus para determinar su destino planetario."
    },
    "Tribunales_Espirituales": {
        "palabras_clave": ["tribunales", "espirituales", "jueces", "justicia", "siún", "verdad"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#2654: CAPTULO II: El juicio final y universal"],
        "contexto_real": "Las asambleas de espíritus maestros que presiden los procesos de justicia y organización del universo."
    },
    "Justicia_Inexorable": {
        "palabras_clave": ["justicia", "inexorable", "ley", "obras", "pagar", "merecido"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#2654: CAPTULO II: El juicio final y universal"],
        "contexto_real": "La ley de compensación perfecta que da a cada uno exactamente lo que sus obras han ganado, sin excepciones."
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

print("Diccionario Tanda 7 (Asiento) actualizado.")
