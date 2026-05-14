import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

# Vinculación de los nuevos nodos a conceptos existentes
actualizaciones = {
    "Solidaridad_Cosmica": ["primer-rayo-de-luz_esencia.json#190: El Universo solidarizado."],
    "Comunismo_Espiritual": ["primer-rayo-de-luz_esencia.json#192: El Mundo todo comunizado."],
    "Unidad_de_Sustancia": ["primer-rayo-de-luz_esencia.json#194: La Ley es una; la sustancia una."],
    "Magnetismo_Espiritual": ["primer-rayo-de-luz_esencia.json#201: Todo es Magnetismo Espiritual."]
}

for k, nodes in actualizaciones.items():
    if k in dic["CONCEPTOS"]:
        for node in nodes:
            if node not in dic["CONCEPTOS"][k]["nodos_sinapticos"]:
                dic["CONCEPTOS"][k]["nodos_sinapticos"].append(node)

# Nuevo concepto
if "Juez_Imparcial" not in dic["CONCEPTOS"]:
    dic["CONCEPTOS"]["Juez_Imparcial"] = {
        "palabras_clave": ["razón", "neutralidad", "lógica", "veredicto", "trincado"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#174: Prólogo"],
        "contexto_real": "Posición del autor al analizar los sistemas sociales y religiosos, basándose únicamente en la sabiduría racional sin prejuicios."
    }

with open(dic_path, 'w', encoding='utf-8') as f:
    json.dump(dic, f, indent=2, ensure_ascii=False)

print("Diccionario sináptico Rayo Tanda 3 actualizado.")
