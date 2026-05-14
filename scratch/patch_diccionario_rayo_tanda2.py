import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Magnetismo_Espiritual": {
        "palabras_clave": ["fuerza", "fluido", "vida", "pensamiento", "omnipresente"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#69: Todo es Magnetismo Espiritual"],
        "contexto_real": "Energía primordial y consciente que emana del Creador y constituye la base de toda vida y ley en el universo."
    },
    "Nueva_Era": {
        "palabras_clave": ["era", "libertad", "justicia", "trincado", "juicio"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#: JOAQUIN TRINCADO. Buenos Aires, 23 de Febrero de 1932, Era Vulgar, Día 4 del Mes 6 del año 21. Nueva Era."],
        "contexto_real": "Período de despertar espiritual y social iniciado en el siglo XX, caracterizado por la caída del dogma y la implantación de la ley de amor."
    },
    "Siempre_Mas_Alla": {
        "palabras_clave": ["lema", "progreso", "infinito", "evolución", "movimiento"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#: JOAQUIN TRINCADO. Buenos Aires, 23 de Febrero de 1932, Era Vulgar, Día 4 del Mes 6 del año 21. Nueva Era."],
        "contexto_real": "Lema dinámico que impulsa al espíritu a la búsqueda constante de la perfección sin detenerse nunca."
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

print("Diccionario sináptico Rayo Tanda 2 actualizado.")
