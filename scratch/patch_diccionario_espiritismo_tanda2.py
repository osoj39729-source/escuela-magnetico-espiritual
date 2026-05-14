import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Magnetismo_Espiritual": {
        "palabras_clave": ["fuerza", "atracción", "imán", "éter", "eloi", "amor"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#58: Todo es Magnetismo Espiritual."],
        "contexto_real": "La fuerza atractiva y repulsiva, derivada del amor de Eloí, que mantiene el equilibrio y la evolución de toda la materia y el espíritu en el cosmos."
    },
    "Existencia_del_Espiritismo": {
        "palabras_clave": ["estudio", "vida", "causa", "efecto", "ciencia"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#340: PRIMERA PARTE: EXISTENCIA DEL ESPIRITISMO"],
        "contexto_real": "Axioma que declara que el espiritismo no es una religión inventada, sino la naturaleza misma de las cosas y la relación eterna entre causa y efecto."
    },
    "Trinidad_Racional": {
        "palabras_clave": ["creador", "universo", "espíritu", "todo", "principios"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#346: CAPTULO PRIMERO: LO QUE FORMA Y SE LLAMA ESPIRITISMO"],
        "contexto_real": "Los tres principios inseparables que forman el Todo: Eloí (causa), el Universo (escuela) y el Espíritu (estudiante)."
    },
    "Trabajo_Encarnado": {
        "palabras_clave": ["materia", "taller", "progreso", "esfuerzo", "solidaridad"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#473: PRRAFO II: CMO SE FORMA EL ESPIRITISMO..."],
        "contexto_real": "La acción consciente del espíritu sobre la materia durante su vida física, considerada como la única forma real de pagar deudas y adquirir progreso."
    },
    "Paternidad_Unica": {
        "palabras_clave": ["padre", "dioses", "hermanos", "igualdad", "derecho divino"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#592: CAPTULO SEGUNDO: PATERNIDAD DE LOS ESPRITUS"],
        "contexto_real": "Axioma que establece que todos los espíritus, sin excepción de mundos o razas, fueron emanados por el mismo Creador (Eloí), haciéndolos iguales en derechos y deberes."
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

print("Diccionario sináptico Espiritismo Estudiado Tanda 2 actualizado.")
