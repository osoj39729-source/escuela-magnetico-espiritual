import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Reglamento_de_Catedras": {
        "palabras_clave": ["reglamento", "cátedras", "disciplina", "orden", "estudio", "normas"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#3655: Acotaciones:"],
        "contexto_real": "El conjunto de normas de conducta y organización que rigen el funcionamiento de los centros de estudio de la EMECU."
    },
    "Disciplina_Doctrinal": {
        "palabras_clave": ["disciplina", "doctrinal", "rigor", "estudio", "seriedad"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#3655: Acotaciones:"],
        "contexto_real": "La actitud de respeto y compromiso con la ley que se exige a todo estudiante del espiritismo racional."
    },
    "Instrucciones_Maestras": {
        "palabras_clave": ["instrucciones", "maestras", "guía", "maestros", "espacio"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#3655: Acotaciones:"],
        "contexto_real": "Las directrices enviadas por los espíritus de luz para la correcta conducción de la Escuela en la Tierra."
    },
    "Vigilancia_Espiritual": {
        "palabras_clave": ["vigilancia", "espiritual", "ojo", "justicia", "control", "guía"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#4067: Acotaciones:"],
        "contexto_real": "La supervisión constante que los espíritus superiores ejercen sobre las obras y pensamientos de los encarnados."
    },
    "Semilla_Nueva": {
        "palabras_clave": ["semilla", "nueva", "niños", "misioneros", "futuro", "generación"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#4067: Acotaciones:"],
        "contexto_real": "Metáfora que designa a las nuevas generaciones de espíritus que encarnan con la misión de consolidar la Comuna Universal."
    },
    "Juicio_de_Obras": {
        "palabras_clave": ["juicio", "obras", "pesaje", "justicia", "valor", "hechos"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#4067: Acotaciones:"],
        "contexto_real": "El proceso por el cual se evalúa la utilidad y moralidad de los actos de cada individuo ante la ley universal."
    },
    "Ley_de_Aportes": {
        "palabras_clave": ["ley", "aportes", "materialización", "transporte", "éter", "condensación"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#4078: CAPITULO II: LEY DE APORTES"],
        "contexto_real": "La ley natural que explica la materialización de objetos distantes mediante la acción de los espíritus sobre el Éter."
    },
    "Condensacion_de_Materia": {
        "palabras_clave": ["condensación", "materia", "fluido", "sólido", "formación"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#4078: CAPITULO II: LEY DE APORTES"],
        "contexto_real": "El proceso químico-espiritual de convertir fluidos etéreos en formas tangibles y pesadas."
    },
    "Quimica_Espiritual": {
        "palabras_clave": ["química", "espiritual", "leyes", "fluido", "transformación"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#4078: CAPITULO II: LEY DE APORTES"],
        "contexto_real": "El estudio de las leyes que rigen la transformación de las energías y fluidos del universo por la voluntad del espíritu."
    },
    "Limite_del_Saber": {
        "palabras_clave": ["límite", "saber", "máximo", "todo", "infinito", "espiritismo"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#4298: CAPITULO III: No se puede ir ms all del espiritismo"],
        "contexto_real": "El concepto de que el Espiritismo representa la síntesis final y total de todo conocimiento posible para el espíritu."
    },
    "Inmutabilidad_Doctrinal": {
        "palabras_clave": ["inmutabilidad", "doctrinal", "eterno", "verdad", "siempre"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#4298: CAPITULO III: No se puede ir ms all del espiritismo"],
        "contexto_real": "La cualidad del espiritismo de ser una verdad eterna que no cambia, aunque cambie la comprensión humana de ella."
    },
    "Simil_del_Diamante": {
        "palabras_clave": ["símil", "diamante", "pulimento", "luz", "brillo", "piedra"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#4304: PRRAFO I (CAPITULO III: No se puede ir ms all del espiritismo)"],
        "contexto_real": "Metáfora trincadista que compara al espíritu y su doctrina con una piedra preciosa cuyo valor es eterno pero cuya luz requiere trabajo para manifestarse."
    },
    "Pulimento_del_Espiritu": {
        "palabras_clave": ["pulimento", "espíritu", "trabajo", "estudio", "perfección"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#4304: PRRAFO I (CAPITULO III: No se puede ir ms all del espiritismo)"],
        "contexto_real": "El proceso de autoperfeccionamiento y adquisición de sabiduría que el espíritu realiza a través de sus existencias."
    },
    "Valor_Intrinseco": {
        "palabras_clave": ["valor", "intrínseco", "naturaleza", "ser", "divino"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#4304: PRRAFO I (CAPITULO III: No se puede ir ms all del espiritismo)"],
        "contexto_real": "La riqueza espiritual inalienable que posee cada ser por el simple hecho de ser una chispa de la divinidad."
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

print("Diccionario Tanda 10 (Asiento) actualizado.")
