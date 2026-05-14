import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Juicio_Final_Racional": {
        "palabras_clave": ["juicio", "conciencia", "sentencia", "orden universal", "ley"],
        "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#10484: Párrafo III: LLAMADAAJUICIOALOS ESPÍRITUSYLOS HOMBRES"],
        "contexto_real": "Proceso ineludible de evaluación moral de cada ser ante su propia conciencia y la ley de amor, marcando el fin de la era de ignorancia."
    },
    "Dios_en_el_Corazon": {
        "palabras_clave": ["corazón", "asiento", "amor", "eloí", "encuentro"],
        "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#10699: EPÍLOGO"],
        "contexto_real": "Sustanciación del propósito espiritual humano: reconocer a la divinidad en la práctica del amor fraternal, sin necesidad de intermediarios."
    },
    "Fin_de_la_Bestia_666": {
        "palabras_clave": ["bestia", "religión", "dogma", "fin", "sol de justicia"],
        "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#11305: PUNTO FINAL. LA BESTIA 666 (Párrafo III: SORPRESA, PEDIDOYPROMESA Teníamos una reunión en la que había no menos de veinte personas. Dí lectura al capítulo 14 de)"],
        "contexto_real": "Anulación definitiva de los sistemas de opresión religiosa ante la llegada de la luz de la verdad racional y la justicia de Eloí."
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

print("Diccionario sináptico FINAL de Buscando a Dios actualizado.")
