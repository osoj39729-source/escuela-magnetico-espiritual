import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Facultades_Humanas": {
        "palabras_clave": ["razón", "voluntad", "conciencia", "espíritu", "trinomio"],
        "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#650: CAPITULO CUARTO: EL HOMBREYSUS FACULTADES"],
        "contexto_real": "Capacidades intrínsecas del ser fúlico que le permiten comprender y aplicar las leyes universales para su propio progreso."
    },
    "Decalogo_Moisico": {
        "palabras_clave": ["moisés", "mandamientos", "ley", "amor", "decalogo"],
        "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#1413: Párrafo IV: LA LEY ESCRITAODECALOGO DE MOISES"],
        "contexto_real": "Codificación de la ley natural de amor para la convivencia humana, cuya esencia única es la fraternidad universal."
    },
    "Tragedia_Moisica": {
        "palabras_clave": ["moisés", "becerro de oro", "idolatría", "pueblo", "tragedia"],
        "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#1489: Párrafo V: TRAGEDIA ENTRE MOISESYEL PUEBLO Editado electrónicamente por la Cátedra \"Maestro Nato Juan Donato Trincado\""],
        "contexto_real": "Conflicto entre el mensajero de la verdad y la ceguera materialista de las masas que prefieren el ídolo a la idea espiritual."
    },
    "Budismo_Critica": {
        "palabras_clave": ["buda", "nirvana", "pasividad", "misticismo", "dolor"],
        "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#1637: Párrafo VII: LA RELIGION BUDAOIGLESIA BUDA"],
        "contexto_real": "Análisis de la doctrina de Buda como una vía de liberación que degeneró en inacción espiritual y nuevas estructuras dogmáticas."
    },
    "Arca_de_la_Ley": {
        "palabras_clave": ["israel", "arca", "ley", "corazón", "idolatría"],
        "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#1692: Párrafo VIII: LA LEY DE MOISESYEL PUEBLO DE ISRAEL"],
        "contexto_real": "Símbolo de la materialización de lo sagrado, donde la ley se guarda en un objeto mientras se niega en la práctica del amor fraternal."
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

print("Diccionario sináptico Tanda 8 actualizado.")
