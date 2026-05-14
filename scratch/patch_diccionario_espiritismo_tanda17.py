import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Falsa_Magia": {
        "palabras_clave": ["magia", "falsa", "adivinación", "engaño", "lucro"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#13390: CAPTULO OCTAVO: LOS FALSOS MAGOS, AGOREROS Y ADIVINAS"],
        "contexto_real": "Prácticas de engaño y superstición que pretenden manipular leyes espirituales para obtener beneficios materiales o predecir el futuro."
    },
    "Comercio_Espiritual": {
        "palabras_clave": ["comercio", "espiritual", "lucro", "dinero", "estafa"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#13390: CAPTULO OCTAVO: LOS FALSOS MAGOS, AGOREROS Y ADIVINAS"],
        "contexto_real": "El acto delictivo de cobrar por servicios espirituales, mediumnidad o supuestas curaciones, traicionando la ley del amor."
    },
    "Explotacion_de_la_Fe": {
        "palabras_clave": ["explotación", "fe", "necesidad", "engaño", "víctima"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#13390: CAPTULO OCTAVO: LOS FALSOS MAGOS, AGOREROS Y ADIVINAS"],
        "contexto_real": "El aprovechamiento de la debilidad moral o el sufrimiento ajeno para obtener dominio o recursos mediante falsas promesas espirituales."
    },
    "Pseudo_Sabios": {
        "palabras_clave": ["pseudo", "sabios", "soberbia", "intelectual", "error"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#13566: CAPTULO NUEVE: LOS FALACES, PSEUDO SABIOS Y PSEUDO CIENTFICOS"],
        "contexto_real": "Individuos que ostentan conocimientos académicos pero carecen de la sabiduría espiritual necesaria para comprender las leyes de la vida."
    },
    "Soberbia_Intelectual": {
        "palabras_clave": ["soberbia", "intelectual", "orgullo", "ciencia", "negación"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#13566: CAPTULO NUEVE: LOS FALACES, PSEUDO SABIOS Y PSEUDO CIENTFICOS"],
        "contexto_real": "La actitud de superioridad que impide al erudito aceptar verdades espirituales que no encajan en sus esquemas materialistas."
    },
    "Ciencia_vs_Espiritu": {
        "palabras_clave": ["ciencia", "espíritu", "conflicto", "verdad", "síntesis"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#13566: CAPTULO NUEVE: LOS FALACES, PSEUDO SABIOS Y PSEUDO CIENTFICOS"],
        "contexto_real": "El falso antagonismo creado por el materialismo, que el Espiritismo Racional resuelve al demostrar que el espíritu es la base de toda ciencia."
    },
    "Ley_del_Trabajo": {
        "palabras_clave": ["ley", "trabajo", "progreso", "producción", "deber"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#13751: CAPTULO DIEZ: LOS ENEMIGOS DEL TRABAJO Y DEL TRABAJADOR"],
        "contexto_real": "Principio universal que establece la acción productiva como el medio ineludible para el sustento material y el progreso espiritual."
    },
    "Parasitismo_Social": {
        "palabras_clave": ["parasitismo", "social", "vago", "explotador", "atraso"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#13751: CAPTULO DIEZ: LOS ENEMIGOS DEL TRABAJO Y DEL TRABAJADOR"],
        "contexto_real": "La condición de quienes viven del esfuerzo ajeno sin aportar trabajo propio, considerada una de las mayores lacras de la humanidad."
    },
    "Dignidad_del_Obrero": {
        "palabras_clave": ["dignidad", "obrero", "trabajador", "derecho", "valor"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#13751: CAPTULO DIEZ: LOS ENEMIGOS DEL TRABAJO Y DEL TRABAJADOR"],
        "contexto_real": "El reconocimiento del valor supremo del trabajador como creador y sostenedor de la vida social, por encima de cualquier capital."
    },
    "Instrucciones_de_Sesion": {
        "palabras_clave": ["instrucciones", "sesión", "protocolo", "seriedad", "escuela"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#13929: APNDICE: LLAMADA I"],
        "contexto_real": "El conjunto de normas éticas y técnicas para el correcto funcionamiento de las asambleas espirituales de la EMECU."
    },
    "Cadena_Fluidica": {
        "palabras_clave": ["cadena", "fluídica", "unión", "fluidos", "concentración"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#13929: APNDICE: LLAMADA I"],
        "contexto_real": "Círculo de personas que, unidas por las manos o por el pensamiento, armonizan sus fluidos para facilitar las manifestaciones espirituales de luz."
    },
    "Valor_del_Hombre": {
        "palabras_clave": ["valor", "hombre", "moneda", "creación", "fraternidad"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#13929: APNDICE: LLAMADA I"],
        "contexto_real": "El postulado final de Trincado que establece al ser humano como la única riqueza real, por encima del oro y las posesiones materiales."
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

print("Diccionario Tanda 17 (FINAL) actualizado.")
