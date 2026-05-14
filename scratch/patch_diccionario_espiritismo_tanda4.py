import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Ley_de_Afinidad": {
        "palabras_clave": ["afinidad", "semejanza", "magnetismo", "agrupación", "evolución"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#1512: PRRAFO II: LEY DE AFINIDAD..."],
        "contexto_real": "Primera ley derivada del Amor: agrupa a los seres por semejanza vibracional, generando el orden evolutivo del universo sin intervención caprichosa."
    },
    "Ley_de_Justicia": {
        "palabras_clave": ["justicia", "reflejo", "consecuencia", "ley", "compensación"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#1593: PRRAFO III: LEY DE JUSTICIA..."],
        "contexto_real": "Segunda ley derivada del Amor: el mecanismo automático del universo que garantiza que cada acto produce su consecuencia exacta en el espíritu que lo ejecutó."
    },
    "Antiguedad_del_Espiritismo": {
        "palabras_clave": ["antigüedad", "manú", "kardec", "moderno", "ciencia primordial"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#1735: CAPTULO QUINTO.: ANTIGEDAD DEL ESPIRITISMO"],
        "contexto_real": "La afirmación histórica de que el estudio de la vida espiritual comenzó con la aparición del primer hombre, siendo anterior a toda religión y dogma."
    },
    "Cosmogonia_Racional": {
        "palabras_clave": ["creación", "materia eterna", "cosmos", "transformación", "niilismo"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#1800: LIBRO I.: LA CREACIN"],
        "contexto_real": "La explicación científica del origen y funcionamiento del universo basada en la eternidad de la materia y la transformación cíclica, opuesta al creacionismo bíblico."
    },
    "Gobierno_Espiritual": {
        "palabras_clave": ["gobierno", "moisés", "jerarquía", "espíritus", "acuerdo", "prohibición"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#1937: CAPTULO SEXTO.: POR QU Y CMO MOISS PROHIBI EL USO DEL ESPIRITISMO"],
        "contexto_real": "La jerarquía de espíritus evolucionados que administra la evolución de los mundos y toma acuerdos colectivos sobre el progreso y la instrucción de las razas."
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

print("Diccionario sináptico Espiritismo Tanda 4 actualizado.")
