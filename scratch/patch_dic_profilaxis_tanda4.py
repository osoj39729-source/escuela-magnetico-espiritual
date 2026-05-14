import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Moda_como_Patologia": {
        "palabras_clave": ["moda", "patología", "enfermedad", "deformación", "cuerpo", "antinatural"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#3306: lecci n y seguid vuestra exposici n."],
        "contexto_real": "La identificación de las modas indumentarias irracionales como agentes de enfermedad que violan las leyes de profilaxis natural."
    },
    "Profilaxis_Corporal": {
        "palabras_clave": ["profilaxis", "corporal", "higiene", "cuerpo", "hábitos", "instrumento"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#3306: lecci n y seguid vuestra exposici n."],
        "contexto_real": "El conjunto de prácticas de higiene y hábitos que preservan la integridad física del organismo como instrumento del espíritu."
    },
    "Deuda_Procreacion": {
        "palabras_clave": ["deuda", "procreación", "consecuencia", "fisiológica", "represión", "enfermedad"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#3306: lecci n y seguid vuestra exposici n."],
        "contexto_real": "Las consecuencias fisiológicas negativas que sufre el cuerpo cuando se le impide cumplir su función natural de reproducción."
    },
    "Protocolo_del_Enfermo": {
        "palabras_clave": ["protocolo", "enfermo", "cuidado", "signos", "vitales", "registro", "método"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#3526: todos sus detalles, sin limitaciones."],
        "contexto_real": "El conjunto de medidas ordenadas y metódicas que deben seguirse para asistir al convaleciente sin interrumpir su proceso natural de recuperación."
    },
    "Higiene_del_Ambiente": {
        "palabras_clave": ["higiene", "ambiente", "entorno", "aire", "limpieza", "salud", "vida"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#3526: todos sus detalles, sin limitaciones."],
        "contexto_real": "La ciencia de mantener el entorno físico del ser humano en condiciones que favorezcan la vida y prevengan la enfermedad."
    },
    "Ley_Natural_vs_Tinta": {
        "palabras_clave": ["ley", "natural", "tinta", "oposición", "humana", "universo", "norma"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#4193: p rrafo seGUNdo"],
        "contexto_real": "La oposición entre las leyes universales grabadas en cada ser y las normas humanas arbitrarias que intentan contradecirlas."
    },
    "Procreacion_Divina": {
        "palabras_clave": ["procreación", "divina", "mandato", "sagrado", "Creador", "molécula", "vida"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#4193: p rrafo seGUNdo"],
        "contexto_real": "La función de reproducción como mandato sagrado inscrito por el Creador en cada molécula de vida."
    },
    "Cuerpo_Instrumento": {
        "palabras_clave": ["cuerpo", "instrumento", "espíritu", "herramienta", "rebelde", "canal", "obra"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#4351: Cap TUlo QUiNTo: la CorreCCi N"],
        "contexto_real": "La visión doctrinal del cuerpo físico como herramienta del espíritu que debe ser cuidada, afinada y nunca mortificada."
    },
    "Correccion_Temprana": {
        "palabras_clave": ["corrección", "temprana", "infancia", "inclinaciones", "amor", "orientación"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#4351: Cap TUlo QUiNTo: la CorreCCi N"],
        "contexto_real": "La intervención profiláctica en las inclinaciones del niño durante los primeros años para orientarlas hacia la ley del amor."
    },
    "Axioma_de_Javier": {
        "palabras_clave": ["axioma", "javier", "quid prodest", "alma", "mundo", "primacía", "espíritu"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#5046: Cap TUlo sexTo: la edUCaCi N Moral"],
        "contexto_real": "El principio universal enunciado por Francisco Javier que establece la primacía del bien espiritual sobre cualquier ganancia material."
    },
    "Educacion_Moral": {
        "palabras_clave": ["educación", "moral", "permanente", "amor", "justicia", "universal", "facultades"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#5046: Cap TUlo sexTo: la edUCaCi N Moral"],
        "contexto_real": "El proceso permanente de orientar las facultades del ser hacia el cumplimiento de la ley de amor y justicia universal."
    },
    "Freno_Concupiscencias": {
        "palabras_clave": ["freno", "concupiscencias", "razón", "impulsos", "instintos", "servicio", "comunal"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#5046: Cap TUlo sexTo: la edUCaCi N Moral"],
        "contexto_real": "La capacidad de la razón iluminada para redirigir los impulsos instintivos hacia el servicio comunal constructivo."
    }
}

for k, v in nuevos_conceptos.items():
    dic['CONCEPTOS'][k] = v

with open(dic_path, 'w', encoding='utf-8') as f:
    json.dump(dic, f, indent=2, ensure_ascii=False)

print("Diccionario Tanda 4 actualizado: " + str(len(nuevos_conceptos)) + " conceptos precisos.")
