import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Batalla_Interior": {
        "palabras_clave": ["batalla", "interior", "interna", "lucha", "sí mismo", "espíritu", "vencer"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#5269: Cap TUlo s pTiMo: la edUCaCi N GeNeral"],
        "contexto_real": "El combate espiritual que cada ser debe librar contra sus propias inclinaciones negativas antes de aspirar a corregir las ajenas."
    },
    "Autoexamen_Previo": {
        "palabras_clave": ["autoexamen", "previo", "conciencia", "joroba", "viga", "ojo", "espejo"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#5269: Cap TUlo s pTiMo: la edUCaCi N GeNeral"],
        "contexto_real": "La práctica de examinar la propia conciencia como primer paso obligatorio antes de emitir cualquier juicio sobre los demás."
    },
    "Deberes_Filiales": {
        "palabras_clave": ["deberes", "filiales", "hijo", "padres", "moral", "reciprocidad", "gratitud"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#5669: Cap TUlo oCTavo: deBeres del HiJo Y de los padres"],
        "contexto_real": "Las obligaciones morales que el hijo contrae con sus padres como reflejo de la ley de reciprocidad y gratitud universal."
    },
    "Critica_sin_Demagogia": {
        "palabras_clave": ["crítica", "sin demagogia", "valentía", "verdad", "precisión", "honestidad"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#5669: Cap TUlo oCTavo: deBeres del HiJo Y de los padres"],
        "contexto_real": "La capacidad de señalar los errores con precisión y valentía sin caer en el adulto ni en la denuncia vacía."
    },
    "Herencia_Espiritual": {
        "palabras_clave": ["herencia", "espiritual", "sabiduría", "amor", "patrimonio", "virtud", "espíritu"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#6044: Cap TUlo NoveNo: el reparTo de los BieNes"],
        "contexto_real": "Los atributos de sabiduría, amor y capacidad adquiridos por el espíritu en sus existencias previas, que constituyen su verdadero patrimonio."
    },
    "Abolicion_Herencia_Material": {
        "palabras_clave": ["abolición", "herencia", "material", "bienes", "igualdad", "comunal", "egoísmo"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#6044: Cap TUlo NoveNo: el reparTo de los BieNes"],
        "contexto_real": "El principio comunal que elimina la transmisión de bienes materiales entre generaciones para garantizar la igualdad universal."
    },
    "Decreto_de_Justicia": {
        "palabras_clave": ["decreto", "justicia", "padre", "consejo", "orden", "transformación", "social"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#6392: causa del desequilibrio que hoy reina."],
        "contexto_real": "La orden emanada del Consejo del Padre que desencadena el proceso de transformación social hacia la Comuna."
    },
    "Misioneros_Simultaneos": {
        "palabras_clave": ["misioneros", "simultáneos", "global", "misma", "doctrina", "apóstoles", "decreto"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#6392: causa del desequilibrio que hoy reina."],
        "contexto_real": "El fenómeno por el cual diferentes espíritus en distintos puntos del mundo reciben y transmiten la misma doctrina al mismo tiempo."
    },
    "Tradicion_Traicion": {
        "palabras_clave": ["tradición", "traición", "progreso", "costumbre", "pasado", "fosilizado", "obstáculo"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#6576: Cap TUlo d CiMo: la TradiCi N es UNa TraiCi N"],
        "contexto_real": "El axioma que identifica la perpetuación acrítica de costumbres pasadas como un obstáculo activo al progreso espiritual y social."
    },
    "Letra_vs_Espiritu": {
        "palabras_clave": ["letra", "espíritu", "ley", "aplicación", "literal", "vivo", "doctrina"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#6576: Cap TUlo d CiMo: la TradiCi N es UNa TraiCi N"],
        "contexto_real": "La oposición entre la aplicación literal de una doctrina y la comprensión viva de su espíritu y finalidad."
    },
    "Progreso_sobre_Costumbre": {
        "palabras_clave": ["progreso", "costumbre", "avance", "ruptura", "conciencia", "prioridad", "hábito"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#6576: Cap TUlo d CiMo: la TradiCi N es UNa TraiCi N"],
        "contexto_real": "El principio de que el avance de la conciencia tiene prioridad sobre cualquier práctica establecida por el hábito o la tradición."
    }
}

for k, v in nuevos_conceptos.items():
    dic['CONCEPTOS'][k] = v

with open(dic_path, 'w', encoding='utf-8') as f:
    json.dump(dic, f, indent=2, ensure_ascii=False)

print("Diccionario Tanda 5 actualizado: " + str(len(nuevos_conceptos)) + " conceptos precisos.")
