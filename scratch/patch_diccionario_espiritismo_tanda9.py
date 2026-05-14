import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Regimen_del_Espiritismo": {
        "palabras_clave": ["régimen", "espiritismo", "comunismo", "ley social", "justicia"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#6294: CAPTULO DIEZ: EL RGIMEN DEL ESPIRITISMO"],
        "contexto_real": "El sistema político, económico y social que necesariamente se derivará de la comprensión y aplicación de la ley del amor y la justicia, es decir, el comunismo racional."
    },
    "Comunismo_Espiritual": {
        "palabras_clave": ["comunismo", "espiritual", "amor", "justicia", "tierra"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#6294: CAPTULO DIEZ: EL RGIMEN DEL ESPIRITISMO"],
        "contexto_real": "El régimen socioeconómico ineludible dictado por el espiritismo (El Mundo Todo Comunizado) fundamentado en la justicia, el amor y la abolición de la propiedad exclusiva de la tierra."
    },
    "Justicia_vs_Caridad": {
        "palabras_clave": ["justicia", "caridad", "derecho", "limosna", "equidad"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#6294: CAPTULO DIEZ: EL RGIMEN DEL ESPIRITISMO"],
        "contexto_real": "La confrontación filosófica entre la caridad denigrante (limosna que no soluciona el problema) y la justicia distributiva que entrega a cada uno lo que le corresponde por ley."
    },
    "Paz_y_Pan": {
        "palabras_clave": ["paz", "pan", "derecho", "libertad", "subsistencia"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#6318: en El Espiritismo en su Asiento"],
        "contexto_real": "La promesa básica y fundamental del régimen del Espiritismo: asegurar la subsistencia material (Pan) y la armonía social (Paz) para permitir la educación espiritual de todos los hombres."
    },
    "Fin_del_Libertinaje": {
        "palabras_clave": ["fin", "libertinaje", "orden", "ley", "abusos"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#6318: en El Espiritismo en su Asiento"],
        "contexto_real": "La eliminación de los abusos y excesos egoístas que la vieja sociedad llamaba 'libertad', y que será reemplazada por el orden justo de la ley espiritual."
    },
    "Triunfo_Inevitable": {
        "palabras_clave": ["triunfo", "inevitable", "espiritismo", "victoria", "ley"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#6318: en El Espiritismo en su Asiento"],
        "contexto_real": "El axioma de que el establecimiento del régimen de amor, justicia y comunismo en la Tierra es matemáticamente ineludible y ninguna fuerza puede detenerlo."
    },
    "Facultades_Medianimicas": {
        "palabras_clave": ["facultades", "medianímicas", "herramientas", "médium", "ciencia práctica"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#6546: TERCERA PARTE: FACULTADES MEDIANMICAS"],
        "contexto_real": "El conjunto de herramientas orgánicas y fluídicas que el espíritu desarrolla para interactuar de forma sensible e inteligente entre los diferentes planos vibratorios de la materia."
    },
    "Mecanica_Espiritual": {
        "palabras_clave": ["mecánica", "espiritual", "laboratorio", "leyes físicas", "fenómenos"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#6546: TERCERA PARTE: FACULTADES MEDIANMICAS"],
        "contexto_real": "El estudio riguroso y científico del 'cómo' funcionan los fenómenos medianímicos, sujetos a leyes tan inmutables como la gravedad o la termodinámica."
    },
    "Practica_Racional": {
        "palabras_clave": ["práctica", "racional", "ciencia", "estudio", "higiene"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#6546: TERCERA PARTE: FACULTADES MEDIANMICAS"],
        "contexto_real": "El método riguroso de ejercer la mediumnidad desprovista de misticismos, supercherías y emocionalismo dogmático, aplicándola como ciencia experimental."
    },
    "Abolicion_de_Ritos": {
        "palabras_clave": ["abolición", "ritos", "oraciones", "altares", "prohibición"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#6550: CAPTULO PRIMERO: QUE SON FACULTADES MEDIANMICAS Y FORMA RACIONAL DE PRACTICAR EL"],
        "contexto_real": "El mandato higiénico y racional de la Escuela que prohíbe tajantemente el uso de oraciones, altares, persignaciones y nombres místicos en las prácticas medianímicas."
    },
    "Falsedad_del_Espiritualismo": {
        "palabras_clave": ["falsedad", "espiritualismo", "amalgama", "religión", "engaño"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#6550: CAPTULO PRIMERO: QUE SON FACULTADES MEDIANMICAS Y FORMA RACIONAL DE PRACTICAR EL"],
        "contexto_real": "La denuncia y desautorización de aquellos que bajo el nombre de espiritismo mezclan prácticas católicas o esotéricas, engañando a la humanidad."
    },
    "Ciencia_Pura": {
        "palabras_clave": ["ciencia", "pura", "espiritismo", "racional", "sin dogmas"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#6550: CAPTULO PRIMERO: QUE SON FACULTADES MEDIANMICAS Y FORMA RACIONAL DE PRACTICAR EL"],
        "contexto_real": "El objetivo final de Trincado al depurar las escuelas: restaurar el conocimiento espiritual a su estatus original como la ciencia exacta y fundamental del universo."
    },
    "Carta_Organica": {
        "palabras_clave": ["carta", "orgánica", "ley primordial", "constitución", "1911"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#6646: PRRAFO II: CARTA ORGNICA Autorizado como maestro fundador de la Escuela Magntico-Espiritual de la"],
        "contexto_real": "El conjunto de leyes y estatutos dictados por los Consejos Supremos en 1911, que regula el funcionamiento de las cátedras, la práctica de las mediumnidades y la disciplina de los estudiantes."
    },
    "Ley_de_Mediumnidades": {
        "palabras_clave": ["ley", "mediumnidades", "protección", "reglamento", "práctica"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#6646: PRRAFO II: CARTA ORGNICA Autorizado como maestro fundador de la Escuela Magntico-Espiritual de la"],
        "contexto_real": "La jurisprudencia universal que dicta las condiciones técnicas y morales exactas para el desarrollo y uso de las facultades medianímicas sin riesgo de obsesión o fraude."
    },
    "Regulacion_Practica": {
        "palabras_clave": ["regulación", "práctica", "jurisprudencia", "cátedras", "seguridad"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#6646: PRRAFO II: CARTA ORGNICA Autorizado como maestro fundador de la Escuela Magntico-Espiritual de la"],
        "contexto_real": "El marco normativo estricto impuesto por la Escuela para asegurar la higiene mental y la responsabilidad en todo contacto con el plano espiritual."
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

print("Diccionario Tanda 9 actualizado.")
