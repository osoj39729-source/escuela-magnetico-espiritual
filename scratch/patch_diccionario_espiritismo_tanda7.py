import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Ciencias_Materiales": {
        "palabras_clave": ["ciencias", "materia", "herramientas", "efectos", "sin causa"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#4037: CAPITULO II: LAS CIENCIAS ANTE EL ESPIRITISMO"],
        "contexto_real": "El conjunto de disciplinas que estudian la mecánica de la materia pero que, sin el espiritismo, resultan incompletas al ignorar el motor inteligente (el espíritu) que las rige."
    },
    "Efecto_sin_Causa": {
        "palabras_clave": ["efecto", "causa", "ciencia", "materialismo", "ceguera"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#4037: CAPITULO II: LAS CIENCIAS ANTE EL ESPIRITISMO"],
        "contexto_real": "La falacia de la ciencia materialista de pretender estudiar los fenómenos del universo (efectos) negando tajantemente al espíritu (la causa)."
    },
    "Origen_de_la_Ciencia": {
        "palabras_clave": ["origen", "ciencia", "espíritu", "facultades", "escoria"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#4037: CAPITULO II: LAS CIENCIAS ANTE EL ESPIRITISMO"],
        "contexto_real": "La afirmación de que toda ciencia es el subproducto (escoria) del ejercicio de las facultades del espíritu sobre la materia."
    },
    "Falsa_Dicotomia": {
        "palabras_clave": ["dicotomía", "materialismo", "espiritualismo", "separación", "error"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#4115: PARRAFO II: MATERIALISTAS Y ESPIRITUALISTAS..."],
        "contexto_real": "El error filosófico de enfrentar a la materia y al espíritu como enemigos o entidades excluyentes, cuando en realidad son obrero y herramienta."
    },
    "Sintesis_Racional": {
        "palabras_clave": ["síntesis", "racional", "unión", "materia", "espíritu"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#4115: PARRAFO II: MATERIALISTAS Y ESPIRITUALISTAS..."],
        "contexto_real": "La postura filosófica del Espiritismo que unifica la materia y el espíritu como realidades interdependientes e inseparables para la evolución, rechazando tanto el materialismo ateo como el espiritualismo místico."
    },
    "Error_del_Materialismo": {
        "palabras_clave": ["error", "materialismo", "negación", "inteligencia", "ceguera"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#4115: PARRAFO II: MATERIALISTAS Y ESPIRITUALISTAS..."],
        "contexto_real": "La creencia ilógica de que la materia inerte puede organizarse a sí misma con inteligencia sin la dirección de un principio espiritual activo."
    },
    "Antagonismo_Religioso": {
        "palabras_clave": ["antagonismo", "religión", "espiritismo", "oposición", "choque"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#4387: CAPTULO TERCERO: LAS RELIGIONES ANTE EL ESPIRITISMO"],
        "contexto_real": "La oposición existencial inevitable entre el sistema de creencias basado en el misterio, el dogma y el temor (religiones) y la ciencia basada en la ley, el análisis y la fraternidad (Espiritismo)."
    },
    "Fin_del_Milagro": {
        "palabras_clave": ["fin", "milagro", "ley natural", "magia", "explicación"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#4387: CAPTULO TERCERO: LAS RELIGIONES ANTE EL ESPIRITISMO"],
        "contexto_real": "La destrucción del concepto de milagro (violación divina de la ley natural) al demostrar que todo fenómeno inusual obedece a leyes magnéticas o espirituales precisas."
    },
    "Condenacion_Dogmatica": {
        "palabras_clave": ["condena", "dogma", "ciencia", "misterio", "defensa"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#4387: CAPTULO TERCERO: LAS RELIGIONES ANTE EL ESPIRITISMO"],
        "contexto_real": "La tendencia histórica de las religiones a condenar y perseguir todo avance científico que exponga la falsedad o los trucos detrás de sus rituales."
    },
    "Detractores_del_Espiritismo": {
        "palabras_clave": ["detractores", "críticos", "interés", "privilegios", "ataque"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#4588: CAPITULO CUARTO: LOS QUE PROTESTAN DEL ESPIRITISMO"],
        "contexto_real": "Grupos de interés (sacerdotes, políticos, seudo-científicos) que combaten la difusión de la verdad espiritual exclusivamente para proteger los privilegios económicos y de dominación que extraen de la ignorancia popular."
    },
    "Defensa_de_Privilegios": {
        "palabras_clave": ["defensa", "privilegios", "lucro", "misterio", "pan"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#4588: CAPITULO CUARTO: LOS QUE PROTESTAN DEL ESPIRITISMO"],
        "contexto_real": "La verdadera motivación detrás de los ataques al espiritismo: el miedo de las castas dominantes a perder su control y sus ingresos."
    },
    "Lucro_sobre_la_Ignorancia": {
        "palabras_clave": ["lucro", "ignorancia", "engaño", "negocio", "misterio"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#4588: CAPITULO CUARTO: LOS QUE PROTESTAN DEL ESPIRITISMO"],
        "contexto_real": "El sistema económico-religioso de explotar el miedo y la falta de conocimiento de las masas, sistema que el espiritismo viene a desmantelar iluminando conciencias."
    },
    "Medicina_Materialista": {
        "palabras_clave": ["medicina", "materialista", "cadáveres", "efectos", "ignorancia"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#4789: CAPITULO QUINTO: LA MEDICINA ANTE EL ESPIRITISMO"],
        "contexto_real": "La ciencia médica que, al ignorar la constitución tripartita del hombre (cuerpo, alma, espíritu) y las leyes del magnetismo, fracasa en sus diagnósticos al confundir los efectos físicos con las causas espirituales."
    },
    "Autopsia_como_Profanacion": {
        "palabras_clave": ["autopsia", "profanación", "cadáver", "espíritu", "dolor"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#4789: CAPITULO QUINTO: LA MEDICINA ANTE EL ESPIRITISMO"],
        "contexto_real": "La disección innecesaria de cuerpos humanos que, por ignorancia de los lazos magnéticos persistentes, causa dolor y desesperación al espíritu recién desencarnado."
    },
    "Medicina_del_Futuro": {
        "palabras_clave": ["medicina", "futuro", "magnetismo", "espíritu", "paracelso"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#4789: CAPITULO QUINTO: LA MEDICINA ANTE EL ESPIRITISMO"],
        "contexto_real": "La práctica médica que integrará el uso del magnetismo y la mediúmnidad curativa (como Jesús y Paracelso) para tratar al espíritu, verdadera sede de la vida y la enfermedad."
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

print("Diccionario Tanda 7 actualizado.")
