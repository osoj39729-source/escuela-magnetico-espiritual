import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Codigo_de_Amor_Universal": {
        "palabras_clave": ["código", "amor", "universal", "constitución", "ley"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#6653: CDIGO DE AMOR UNIVERSAL"],
        "contexto_real": "La ley suprema dictada por el Espiritismo para regir la vida social, moral y económica de la Tierra bajo el sistema de la Comuna Universal, sustituyendo todas las leyes anteriores."
    },
    "Ley_Suprema": {
        "palabras_clave": ["ley", "suprema", "código", "espiritismo", "universo"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#6653: CDIGO DE AMOR UNIVERSAL"],
        "contexto_real": "El reconocimiento de que el gobierno humano debe someterse a las leyes inmutables del Creador (Justicia y Amor) para evitar su autodestrucción."
    },
    "Constitucion_Comunal": {
        "palabras_clave": ["constitución", "comuna", "código", "leyes", "humanidad"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#6653: CDIGO DE AMOR UNIVERSAL"],
        "contexto_real": "El cuerpo legal definitivo que estructura el funcionamiento de la sociedad humana en una sola nación sin fronteras ni propiedad privada excluyente."
    },
    "Proclamacion_de_la_Comuna": {
        "palabras_clave": ["proclamación", "comuna", "decreto", "tierra", "gobierno"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#6657: CAPTULO PRIMERO: Constitucin por la que se hace la proclamacin de la comuna en la Tierra. Ley"],
        "contexto_real": "El decreto emitido por el gobierno espiritual que declara oficialmente caduco el sistema de propiedad privada y nacionalismos, ordenando la unificación de la Tierra."
    },
    "Decreto_Espiritual": {
        "palabras_clave": ["decreto", "espiritual", "gobierno", "mandato", "ley"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#6657: CAPTULO PRIMERO: Constitucin por la que se hace la proclamacin de la comuna en la Tierra. Ley"],
        "contexto_real": "La intervención directa y legislativa de los Consejos Supremos del Espacio sobre el orden político y social de la Tierra."
    },
    "Era_de_Redencion": {
        "palabras_clave": ["era", "redención", "comuna", "espiritismo", "regeneración"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#6657: CAPTULO PRIMERO: Constitucin por la que se hace la proclamacin de la comuna en la Tierra. Ley"],
        "contexto_real": "El periodo histórico, inaugurado por la proclamación de la Comuna, en el que la humanidad se libera del engaño y comienza su ascenso como mundo de luz."
    },
    "Decretos_Comunales": {
        "palabras_clave": ["decretos", "comunales", "tierra", "trabajo", "abolición"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#6672: DECRETAMOS:"],
        "contexto_real": "Los mandatos específicos que anulan la propiedad privada de la tierra, la moneda fiduciaria y las religiones, devolviendo el planeta al usufructo común."
    },
    "Abolicion_de_Monopolios": {
        "palabras_clave": ["abolición", "monopolios", "propiedad", "tierra", "exclusiva"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#6672: DECRETAMOS:"],
        "contexto_real": "La destrucción legal de todos los acaparamientos capitalistas que privan a la mayoría de los recursos naturales que pertenecen a toda la humanidad."
    },
    "Trabajo_como_Moneda": {
        "palabras_clave": ["trabajo", "moneda", "intercambio", "valor", "economía"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#6672: DECRETAMOS:"],
        "contexto_real": "El principio económico del Código de Amor Universal donde se abole el dinero fiduciario, siendo el trabajo productivo y solidario el único medio legítimo de intercambio y subsistencia."
    },
    "Estatuto_Medianimico": {
        "palabras_clave": ["estatuto", "medianímico", "ley", "regulación", "mediumnidad"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#6749: PRRAFO III: LEY DE LAS MEDIUMIDADES EN GENERAL (1)"],
        "contexto_real": "El conjunto de reglas de estricto cumplimiento que organiza la práctica de las facultades mediúmnicas como un servicio científico y moral público, prohibiendo su comercialización."
    },
    "Regulacion_Tecnica": {
        "palabras_clave": ["regulación", "técnica", "mediumnidad", "práctica", "orden"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#6749: PRRAFO III: LEY DE LAS MEDIUMIDADES EN GENERAL (1)"],
        "contexto_real": "Las normativas precisas sobre cómo, cuándo y para qué se deben establecer comunicaciones espirituales, eliminando la improvisación y el fanatismo."
    },
    "Comunicacion_Consciente": {
        "palabras_clave": ["comunicación", "consciente", "espíritu", "ley", "razón"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#6749: PRRAFO III: LEY DE LAS MEDIUMIDADES EN GENERAL (1)"],
        "contexto_real": "El trato inteligente y ordenado entre encarnados y desencarnados, sujeto al escrutinio de la razón y a la verificación del contenido de los mensajes."
    },
    "Mediumnidad_Natural": {
        "palabras_clave": ["mediumnidad", "natural", "facultad", "espíritu", "histerismo"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#6753: PREFACIO"],
        "contexto_real": "La comprensión de que la mediúmnidad no es un don sobrenatural ni una enfermedad, sino una facultad biológica y espiritual inherente a la evolución del ser humano."
    },
    "Rechazo_del_Histerismo": {
        "palabras_clave": ["rechazo", "histerismo", "medicina", "psiquiatría", "error"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#6753: PREFACIO"],
        "contexto_real": "La refutación de la tesis psiquiátrica materialista que confunde la mediumnidad con enfermedades nerviosas o locura, demostrando que es una capacidad sensorial evolutiva."
    },
    "Higiene_Medianimica": {
        "palabras_clave": ["higiene", "medianímica", "salud", "desarrollo", "prevención"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#6753: PREFACIO"],
        "contexto_real": "La necesidad de educar y desarrollar correctamente las facultades para prevenir desequilibrios nerviosos, los cuales ocurren precisamente por reprimir o ignorar la facultad."
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

print("Diccionario Tanda 10 actualizado.")
