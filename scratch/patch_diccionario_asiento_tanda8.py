import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Eterna_Verdad": {
        "palabras_clave": ["eterna", "verdad", "descubrimiento", "realidad", "ley"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#2820: CAPTULO III: El descubrimiento de la eterna verdad"],
        "contexto_real": "El conjunto de leyes y realidades del universo que permanecen inalterables ante el tiempo y el espacio."
    },
    "Descubrimiento_Espiritual": {
        "palabras_clave": ["descubrimiento", "espiritual", "hallazgo", "reconocimiento", "ser"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#2820: CAPTULO III: El descubrimiento de la eterna verdad"],
        "contexto_real": "El proceso por el cual el espíritu reconoce su propia naturaleza y su conexión con el Creador tras superar la ignorancia."
    },
    "Comuna_de_Amor_y_Ley": {
        "palabras_clave": ["comuna", "amor", "ley", "régimen", "justicia", "fraternidad"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#2917: CAPTULO IV: La comuna es el rmen nico del espiritismo"],
        "contexto_real": "El régimen social definitivo de la Tierra regenerada donde impera la fraternidad absoluta y la propiedad común."
    },
    "Decreto_Divino": {
        "palabras_clave": ["decreto", "divino", "eloi", "mandato", "inevitable"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#2917: CAPTULO IV: La comuna es el rmen nico del espiritismo"],
        "contexto_real": "La voluntad absoluta del Creador que rige la evolución de los mundos y la instauración de la justicia."
    },
    "Justicia_Social_Espiritual": {
        "palabras_clave": ["justicia", "social", "espiritual", "igualdad", "fraternidad", "comuna"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#2917: CAPTULO IV: La comuna es el rmen nico del espiritismo"],
        "contexto_real": "La organización de la sociedad basada en el reconocimiento de la igualdad espiritual de todos los hombres."
    },
    "Mandato_Inexorable": {
        "palabras_clave": ["mandato", "inexorable", "ley", "justicia", "fuerza"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#2988: resistira a su mandato?"],
        "contexto_real": "La voluntad suprema del Creador que garantiza el progreso de todos los seres hacia la perfección, sin admitir resistencia."
    },
    "Futilidad_de_la_Resistencia": {
        "palabras_clave": ["futilidad", "resistencia", "oposición", "progreso", "vano"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#2988: resistira a su mandato?"],
        "contexto_real": "La imposibilidad de detener las leyes universales, donde cualquier oposición solo genera dolor al que resiste."
    },
    "Creacion_Eterna": {
        "palabras_clave": ["creación", "eterna", "infinito", "proceso", "continuo"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#3119: CAPITULO V: La creacin es eterna por el espiritismo"],
        "contexto_real": "Axioma que define al universo como un proceso infinito de manifestación de la vida sin principio ni fin."
    },
    "Eter_Universal": {
        "palabras_clave": ["éter", "universal", "sustancia", "pensamiento", "eloi", "fluido"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#3119: CAPITULO V: La creacin es eterna por el espiritismo"],
        "contexto_real": "La sustancia primordial y pensante de la cual el espíritu toma los elementos para crear todas las formas tangibles."
    },
    "Trinidad_Humana": {
        "palabras_clave": ["trinidad", "humana", "cuerpo", "alma", "espíritu", "tres"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#3119: CAPITULO V: La creacin es eterna por el espiritismo"],
        "contexto_real": "La constitución del hombre como un ser compuesto de tres entidades inseparables: espíritu (actor), alma (vehículo) y cuerpo (herramienta)."
    },
    "Misioneros_de_Luz": {
        "palabras_clave": ["misioneros", "luz", "guía", "maestros", "misión", "redentores"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#3198: tus misioneros, conforme a tu mandato."],
        "contexto_real": "Espíritus de alta jerarquía que encarnan o actúan desde el espacio para dirigir el progreso de los mundos inferiores."
    },
    "Satisfaccion_del_Deber": {
        "palabras_clave": ["satisfacción", "deber", "cumplimiento", "conciencia", "paz"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#3198: tus misioneros, conforme a tu mandato."],
        "contexto_real": "El estado de paz y equilibrio que alcanza el espíritu tras haber cumplido fielmente con su misión y con la ley."
    },
    "Consumatum_Est": {
        "palabras_clave": ["consumatum est", "terminado", "finalización", "misión", "justicia"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#3198: tus misioneros, conforme a tu mandato."],
        "contexto_real": "Sentencia que marca la finalización exitosa de una misión espiritual o de un ciclo de justicia universal."
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

print("Diccionario Tanda 8 (Asiento) actualizado.")
