import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Progreso_es_Espiritismo": {
        "palabras_clave": ["progreso", "ciencia", "espiritismo", "avance", "humanidad"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#3291: CAPTULO DIEZ: TODO EL PROGRESO ES EL ESPIRITISMO"],
        "contexto_real": "El axioma de que todo avance genuino de la humanidad es la expresión del espíritu evolucionando conforme a la ley de afinidad y amor universal."
    },
    "Ciencia_como_Espiritismo": {
        "palabras_clave": ["ciencia", "espiritismo", "huella", "materia", "progreso"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#3291: CAPTULO DIEZ: TODO EL PROGRESO ES EL ESPIRITISMO"],
        "contexto_real": "La comprensión de que la ciencia material no es opuesta al espiritismo, sino el resultado tangible de la actividad del espíritu sobre la materia."
    },
    "Espiritu_Motor_del_Avance": {
        "palabras_clave": ["espíritu", "motor", "avance", "acción", "evolución"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#3291: CAPTULO DIEZ: TODO EL PROGRESO ES EL ESPIRITISMO"],
        "contexto_real": "El principio de que la materia inerte no crea progreso; es siempre el espíritu encarnado el agente activo de toda mejora."
    },
    "Continuidad_del_Corpus": {
        "palabras_clave": ["continuidad", "corpus", "doctrina", "primer rayo", "filosofía"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#3318: En nuestra Filosofa Austera Racional y en El Primer Rayo de luz:  lanzamos un"],
        "contexto_real": "La interdependencia de todos los libros del Maestro Trincado, que deben estudiarse como un conjunto coherente y no como obras aisladas."
    },
    "Evolucion_Doctrinal": {
        "palabras_clave": ["evolución", "doctrina", "desarrollo", "enseñanza", "axiomas"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#3318: En nuestra Filosofa Austera Racional y en El Primer Rayo de luz:  lanzamos un"],
        "contexto_real": "El proceso pedagógico por el cual cada nueva obra de la Escuela profundiza y expande los principios establecidos en los libros anteriores."
    },
    "Sistema_Trincado": {
        "palabras_clave": ["sistema", "trincado", "escuela", "doctrina", "unidad"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#3318: En nuestra Filosofa Austera Racional y en El Primer Rayo de luz:  lanzamos un"],
        "contexto_real": "El conjunto coherente y progresivo de obras del Maestro Trincado que forman un solo cuerpo doctrinal integrado, desde el Primer Rayo de Luz hasta los Códigos."
    },
    "Facultades_del_Espiritismo": {
        "palabras_clave": ["facultades", "espiritismo", "capacidades", "práctica", "fenómenos"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#3641: SEGUNDA PARTE: LAS FACULTADES DEL ESPIRITISMO"],
        "contexto_real": "Las capacidades prácticas del espíritu desarrolladas a través de la evolución: videncia, desdoblamiento, mediumnidad consciente, entre otras."
    },
    "Fenomenologia_Espiritual": {
        "palabras_clave": ["fenomenología", "espiritual", "manifestación", "estudio", "mecánica"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#3641: SEGUNDA PARTE: LAS FACULTADES DEL ESPIRITISMO"],
        "contexto_real": "El estudio científico y racional de las manifestaciones y mecánicas de las facultades del espíritu, alejándolas del misticismo."
    },
    "Ciencia_Practica_Espiritual": {
        "palabras_clave": ["ciencia", "práctica", "espiritual", "laboratorio", "habilidades"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#3641: SEGUNDA PARTE: LAS FACULTADES DEL ESPIRITISMO"],
        "contexto_real": "La aplicación de los principios teóricos del espiritismo (ontología) a través del ejercicio consciente de las facultades del espíritu."
    },
    "Sabiduria_Espiritual": {
        "palabras_clave": ["sabiduría", "espiritual", "conocimiento", "ley universal", "amor"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#3645: CAPITULO PRIMERO: LA SABIDURIA DEL ESPIRITISMO"],
        "contexto_real": "La facultad suprema del espíritu evolucionado de comprender la ley universal y actuar siempre en armonía con ella, distinguiéndose de la mera erudición."
    },
    "Inteligencia_Universal": {
        "palabras_clave": ["inteligencia", "universal", "sabiduría", "aplicación", "ley"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#3645: CAPITULO PRIMERO: LA SABIDURIA DEL ESPIRITISMO"],
        "contexto_real": "La manifestación de la sabiduría como la capacidad de discernir y aplicar la ley de afinidad en todas las situaciones de la existencia."
    },
    "Maestro_vs_Estudiante": {
        "palabras_clave": ["maestro", "estudiante", "sabiduría", "erudición", "aplicación"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#3645: CAPITULO PRIMERO: LA SABIDURIA DEL ESPIRITISMO"],
        "contexto_real": "La distinción entre el espíritu que ha integrado la ley universal (maestro) y el que aún solo acumula conocimientos intelectuales sin aplicarlos (estudiante)."
    },
    "Elasticidad_del_Alma": {
        "palabras_clave": ["elasticidad", "alma", "periespíritu", "cuerpo etéreo", "desdoblamiento"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#3862: PRRAFO II: ELASTICIDAD DEL ALMA Aun cuando este punto corresponde al captulo Desdoblamiento, aqu lo"],
        "contexto_real": "La propiedad física del periespíritu (cuerpo etéreo) de expandirse y contraerse, permitiendo al espíritu desdoblar su presencia a lugares remotos durante el sueño o la vigilia."
    },
    "Periespiritismo": {
        "palabras_clave": ["periespíritu", "alma", "materia", "fotografía", "aparición"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#3862: PRRAFO II: ELASTICIDAD DEL ALMA Aun cuando este punto corresponde al captulo Desdoblamiento, aqu lo"],
        "contexto_real": "El estudio de la naturaleza material del alma (periespíritu) y sus propiedades físicas, que explican fenómenos como las materializaciones y apariciones."
    },
    "Desdoblamiento_Consciente": {
        "palabras_clave": ["desdoblamiento", "consciente", "vigilia", "excursión", "voluntad"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#3862: PRRAFO II: ELASTICIDAD DEL ALMA Aun cuando este punto corresponde al captulo Desdoblamiento, aqu lo"],
        "contexto_real": "La capacidad del espíritu evolucionado de dirigir intencionalmente sus excursiones fuera del cuerpo físico, reteniendo plena conciencia y memoria de las mismas."
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

print("Diccionario Tanda 6 actualizado.")
