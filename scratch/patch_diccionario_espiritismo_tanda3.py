import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Símbolo_Caín_y_Abel": {
        "palabras_clave": ["caín", "abel", "trabajo", "parasitismo", "materia", "símbolo"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#724: PRRAFO II: CAN Y ABEL..."],
        "contexto_real": "Alegoría de la lucha entre el hombre materialista que trabaja y progresa (Caín) y el hombre dogmático que vive a expensas de los demás (Abel)."
    },
    "Mandato_Creador": {
        "palabras_clave": ["mandato", "eloi", "trabajo", "evolución", "progreso", "tierra"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#888: CAPTULO TERCERO: MANDATO DEL PADRE CREADOR A SUS HIJOS"],
        "contexto_real": "La orden inmutable del Padre a los espíritus de encarnar, trabajar y dominar la materia para autoconquistar su progreso en amor y sabiduría."
    },
    "Mundo_de_Expiación": {
        "palabras_clave": ["expiación", "tierra", "escuela", "dolor", "trabajo", "adámico"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#971: PRRAFO II: EL MUNDO DE EXPIACIN..."],
        "contexto_real": "Categoría evolutiva de un planeta (como la Tierra durante la era adámica) destinado a recibir espíritus que necesitan aprender mediante el dolor y el choque material."
    },
    "Sangre_Adámica": {
        "palabras_clave": ["sangre", "57 siglos", "violencia", "religión", "sacrificios", "víctimas"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#1165: PRRAFO III: LA SANGRE DERRAMADA EN 57 SIGLOS..."],
        "contexto_real": "Metáfora y realidad histórica de los crímenes cometidos en nombre de deidades a lo largo de los 57 siglos de existencia de las religiones en la Tierra."
    },
    "Ley_de_Amor": {
        "palabras_clave": ["amor", "ley única", "afinidad", "justicia", "libertad", "compensación"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#1438: CAPTULO CUARTO: LEY NICA DEL ESPIRITISMO: EL AMOR"],
        "contexto_real": "La máxima ley del Espiritismo Racional, que actúa como centro de gravedad universal, manifestándose activamente a través de la justicia, la libertad, la afinidad y la compensación."
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

print("Diccionario sináptico Espiritismo Estudiado Tanda 3 actualizado.")
