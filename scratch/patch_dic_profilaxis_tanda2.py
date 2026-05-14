import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Agotamiento_Generacional": {
        "palabras_clave": ["agotamiento", "generacional", "pasiones", "desperdiicio", "instintos", "potencial"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#564: Agotando generaciones,"],
        "contexto_real": "El fenómeno por el cual las generaciones desperdician su potencial espiritual en pasiones y dogmas en lugar de en progreso consciente."
    },
    "Instinto_vs_Razon": {
        "palabras_clave": ["instinto", "razón", "animal", "espiritual", "conducta", "oposición"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#564: Agotando generaciones,"],
        "contexto_real": "La oposición doctrinal entre la conducta animal guiada por el instinto y la conducta espiritual guiada por la razón iluminada."
    },
    "Autoconocimiento": {
        "palabras_clave": ["autoconocimiento", "conocerse", "hombre", "sí mismo", "naturaleza", "trinitaria"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#564: Agotando generaciones,"],
        "contexto_real": "El primer imperativo de la profilaxis espiritual: conocer la propia naturaleza trinitaria para actuar en consecuencia."
    },
    "Origen_Solar_Tierra": {
        "palabras_clave": ["origen", "solar", "tierra", "sol", "cometa", "éter", "nacimiento"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#565: Que nadan en las pasiones."],
        "contexto_real": "La cosmogonía que establece que la Tierra se formó del Sol y evolucionó bañada en el Éter hasta convertirse en un mundo habitado."
    },
    "Hombre_Arca_Universal": {
        "palabras_clave": ["hombre", "arca", "síntesis", "leyes", "universo", "microcosmos"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#565: Que nadan en las pasiones."],
        "contexto_real": "La visión del ser humano como la síntesis viviente de todas las leyes del cosmos, portador de la totalidad de la creación en miniatura."
    },
    "Eter_Sustancia_Madre": {
        "palabras_clave": ["éter", "sustancia", "madre", "primordial", "invisible", "matriz", "vida"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#565: Que nadan en las pasiones."],
        "contexto_real": "La sustancia invisible y omnipresente que actúa como matriz nutritiva de toda la vida y el pensamiento en el universo."
    },
    "Educacion_Prenatal": {
        "palabras_clave": ["educación", "prenatal", "antes", "nacer", "concepción", "madre", "espíritu"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#1119: pr loGo a los edUCadores"],
        "contexto_real": "El sistema de cuidados morales y espirituales que deben proveer los padres desde la concepción para garantizar el óptimo desarrollo del espíritu encarnante."
    },
    "Ley_Homeopatica_Moral": {
        "palabras_clave": ["ley", "homeopática", "moral", "semejante", "curar", "amor", "razón"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#1119: pr loGo a los edUCadores"],
        "contexto_real": "La aplicación del principio 'los semejantes curan a sus semejantes' al campo de la educación moral y espiritual."
    },
    "Educador_Profilactico": {
        "palabras_clave": ["educador", "profiláctico", "maestro", "preventivo", "transmisión", "consciente"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#1119: pr loGo a los edUCadores"],
        "contexto_real": "El maestro o padre que actúa como agente preventivo de la degeneración espiritual mediante la transmisión consciente de la ley."
    },
    "Concepcion_Cosmogonico": {
        "palabras_clave": ["concepción", "cosmogónico", "acto", "creación", "sagrado", "consciente"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#1226: Cap TUlo priMero: la CoNCepCi N de los seres"],
        "contexto_real": "El acto de generación de un nuevo ser como participación consciente en la renovación perpetua de la creación."
    },
    "Registro_del_Creador": {
        "palabras_clave": ["registro", "creador", "libro", "universal", "vida", "anotado", "azar"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#1226: Cap TUlo priMero: la CoNCepCi N de los seres"],
        "contexto_real": "El principio de que cada ser que toma forma física queda registrado en el libro universal de la vida desde el momento de su concepción."
    },
    "Renovacion_de_la_Creacion": {
        "palabras_clave": ["renovación", "creación", "perpetua", "ascensión", "belleza", "progreso"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#1226: Cap TUlo priMero: la CoNCepCi N de los seres"],
        "contexto_real": "El proceso continuo por el cual la vida se perpetúa y eleva a través de cada nueva generación de seres encarnados."
    },
    "Cuidados_Prenatales": {
        "palabras_clave": ["cuidados", "prenatales", "embarazo", "físicos", "morales", "espirituales"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#1793: Cap TUlo seGUNdo: CUidados de la Madre"],
        "contexto_real": "El conjunto de prácticas físicas, morales y espirituales que la madre debe observar desde la concepción para garantizar la salud integral del nuevo ser."
    },
    "Quinto_Mes_Critico": {
        "palabras_clave": ["quinto", "mes", "crítico", "gestación", "vinculación", "espíritu", "materia"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#1793: Cap TUlo seGUNdo: CUidados de la Madre"],
        "contexto_real": "El periodo gestacional a partir del cual el espíritu encarnante establece una vinculación más profunda con su cuerpo físico."
    },
    "Templo_Materno": {
        "palabras_clave": ["templo", "materno", "vientre", "sagrado", "espíritu", "adaptación", "vida"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#1793: Cap TUlo seGUNdo: CUidados de la Madre"],
        "contexto_real": "La concepción del vientre materno como el primer espacio sagrado donde el espíritu inicia su adaptación a la vida material."
    }
}

for k, v in nuevos_conceptos.items():
    dic['CONCEPTOS'][k] = v

with open(dic_path, 'w', encoding='utf-8') as f:
    json.dump(dic, f, indent=2, ensure_ascii=False)

print("Diccionario Tanda 2 actualizado: " + str(len(nuevos_conceptos)) + " conceptos precisos.")
