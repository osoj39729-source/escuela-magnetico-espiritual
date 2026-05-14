import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Preexistencia_del_Espiritu": {
        "palabras_clave": ["preexistencia", "espíritu", "antes", "nacer", "ontología"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#8317: I (CAPTULO V: Explicacin del espiritismo)"],
        "contexto_real": "La realidad ontológica de que el ser inteligente existe antes de tomar cualquier forma material."
    },
    "Instrumentalidad_de_la_Materia": {
        "palabras_clave": ["instrumentalidad", "materia", "cuerpo", "herramienta", "medio"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#8317: I (CAPTULO V: Explicacin del espiritismo)"],
        "contexto_real": "La función de la materia como simple vehículo o herramienta para que el espíritu se manifieste y progrese."
    },
    "Error_como_Ignorancia": {
        "palabras_clave": ["error", "ignorancia", "falta", "luz", "mal", "inexistencia"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#8317: I (CAPTULO V: Explicacin del espiritismo)"],
        "contexto_real": "La visión doctrinal de que el mal no existe por sí mismo, sino que es el resultado de la falta de conocimiento."
    },
    "Mediumnidad_Universal": {
        "palabras_clave": ["mediumnidad", "universal", "facultad", "orgánica", "todos", "potencia"],
        "nodos_sinapticos": ["espiritismo-en-su-asional_esencia.json#8466: II (CAPTULO V: Explicacin del espiritismo)"],
        "contexto_real": "El principio de que todo ser humano posee la capacidad latente de percibir y transmitir vibraciones espirituales."
    },
    "Comunicacion_Intermundos": {
        "palabras_clave": ["comunicación", "intermundos", "invisible", "espíritus", "diálogo"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#8466: II (CAPTULO V: Explicacin del espiritismo)"],
        "contexto_real": "El intercambio de información y afectos entre los seres encarnados y los desencarnados de diferentes planos."
    },
    "Ausencia_de_Ritos": {
        "palabras_clave": ["ausencia", "ritos", "ceremonias", "fórmulas", "natural", "simplicidad"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#8466: II (CAPTULO V: Explicacin del espiritismo)"],
        "contexto_real": "La característica del espiritismo racional de prescindir de cualquier forma de liturgia o rito místico."
    },
    "Educacion_desde_el_Pecho": {
        "palabras_clave": ["educación", "pecho", "madre", "lactancia", "ejemplo", "vibración"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#8651: MACTHEUIX."],
        "contexto_real": "La fase crítica de formación moral donde el lactante recibe no solo leche, sino la vibración afectiva de sus progenitores."
    },
    "Uso_de_la_Razon": {
        "palabras_clave": ["uso", "razón", "siete", "años", "encierro", "consciencia"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#8651: MACTHEUIX."],
        "contexto_real": "La etapa del desarrollo humano (alrededor de los 7 años) donde el espíritu asume el control pleno de su materia."
    },
    "Vibracion_Parental": {
        "palabras_clave": ["vibración", "parental", "padres", "hogar", "influencia", "ambiente"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#8651: MACTHEUIX."],
        "contexto_real": "El conjunto de ondas mentales y afectivas que los padres proyectan sobre sus hijos, moldeando su psiquismo."
    },
    "Ley_de_Reparacion": {
        "palabras_clave": ["ley", "reparación", "retorno", "lugar", "falta", "trabajo"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#8668: III (CAPTULO V: Explicacin del espiritismo)"],
        "contexto_real": "Principio universal que establece que todo daño causado debe ser compensado por el mismo ser mediante el trabajo útil."
    },
    "Reencarnacion_Necesaria": {
        "palabras_clave": ["reencarnación", "necesaria", "obligatoria", "progreso", "oportunidad"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#8668: III (CAPTULO V: Explicacin del espiritismo)"],
        "contexto_real": "La exigencia biológica y espiritual de tomar nuevos cuerpos físicos para cumplir con las leyes de progreso y justicia."
    },
    "Plan_de_Progreso": {
        "palabras_clave": ["plan", "progreso", "evolución", "rigor", "estudio", "ascenso"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#8668: III (CAPTULO V: Explicacin del espiritismo)"],
        "contexto_real": "El diseño evolutivo de cada espíritu que coordina sus encarnaciones, pruebas y aprendizajes."
    },
    "Fraternidad_Universal": {
        "palabras_clave": ["fraternidad", "universal", "unidad", "paz", "solidaridad", "hermandad"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#8867: IV (CAPTULO V: Explicacin del espiritismo)"],
        "contexto_real": "El estado de convivencia humana basado en el reconocimiento del origen común y la solidaridad absoluta."
    },
    "Gratuidad_de_la_Verdad": {
        "palabras_clave": ["gratuidad", "verdad", "común", "lucro", "regalo", "enseñanza"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#8867: IV (CAPTULO V: Explicacin del espiritismo)"],
        "contexto_real": "El principio de que el conocimiento espiritual no debe ser vendido ni comercializado, pues pertenece a la humanidad."
    },
    "Meta_Comunal": {
        "palabras_clave": ["meta", "comunal", "fin", "comuna", "ideal", "futuro"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#8867: IV (CAPTULO V: Explicacin del espiritismo)"],
        "contexto_real": "El objetivo final del espiritismo: la instauración de una sociedad sin clases, sin propiedad privada y en amor absoluto."
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

print("Diccionario Tanda 16 (Asiento) actualizado.")
