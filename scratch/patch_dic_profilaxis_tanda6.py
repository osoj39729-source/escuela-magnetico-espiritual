import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Error_Familias_Naciones": {
        "palabras_clave": ["error", "familias", "naciones", "división", "tribu", "exclusividad", "obstáculo"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#6830: Cap TUlo deCiMopriMero: lo errado del CoNCepTo"],
        "contexto_real": "La identificación doctrinal de las divisiones familiares y nacionales como causa del mal mundial y obstáculo a la fraternidad universal."
    },
    "Enseñanza_Comunal": {
        "palabras_clave": ["enseñanza", "comunal", "transmisión", "principios", "responsabilidad", "maestro"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#7184: Cap TUlo deCiMoseGUNdo: eNse aNza de los priNCipios CoMUNales"],
        "contexto_real": "La transmisión activa de los principios de la vida en común como deber de todo espíritu que ha comprendido la ley."
    },
    "Promesa_de_Helli": {
        "palabras_clave": ["promesa", "Hellí", "padre", "hijos", "luz", "recuperar", "fieles"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#7184: Cap TUlo deCiMoseGUNdo: eNse aNza de los priNCipios CoMUNales"],
        "contexto_real": "El decreto del Padre por el que los espíritus de luz tienen la misión de recuperar a los espíritus rezagados."
    },
    "Palmera_Solitaria": {
        "palabras_clave": ["palmera", "solitaria", "misionero", "solo", "incomprendido", "inicio", "siembra"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#7184: Cap TUlo deCiMoseGUNdo: eNse aNza de los priNCipios CoMUNales"],
        "contexto_real": "Símbolo del momento inicial del misionero que trabaja solo y sin reconocimiento antes de que su doctrina sea comprendida."
    },
    "Supersticion_Religiosa": {
        "palabras_clave": ["superstición", "religiosa", "número", "miedo", "irracional", "creencia", "dogma"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#7366: Cap TUlo deCiMoTerCero: por QU exisTe el deseQUiliBrio"],
        "contexto_real": "Las creencias irracionales inducidas por las religiones para evitar el pensamiento crítico y mantener el control sobre las conciencias."
    },
    "Diagnostico_Desequilibrio": {
        "palabras_clave": ["diagnóstico", "desequilibrio", "causa", "social", "espiritual", "precisión", "profilaxis"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#7366: Cap TUlo deCiMoTerCero: por QU exisTe el deseQUiliBrio"],
        "contexto_real": "La identificación precisa de las causas del desorden social y espiritual en la Tierra como primer paso de la profilaxis colectiva."
    },
    "Justicia_Necesaria": {
        "palabras_clave": ["justicia", "necesaria", "inexorable", "consecuencia", "ley", "universal", "causalidad"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#7366: Cap TUlo deCiMoTerCero: por QU exisTe el deseQUiliBrio"],
        "contexto_real": "El principio de que las consecuencias inevitables de los errores son expresiones de la justicia universal, no de la fatalidad caprichosa."
    },
    "Religion_Causa_del_Mal": {
        "palabras_clave": ["religión", "causa", "mal", "mundial", "desequilibrio", "sistema", "corrupción"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#7668: Cap TUlo deCiMoCUarTo: las CaUsas del Mal MUNdial"],
        "contexto_real": "La tesis doctrinal que identifica al sistema religioso institucionalizado como el principal agente de desequilibrio en la civilización humana."
    },
    "Tergiversacion_Escrituras": {
        "palabras_clave": ["tergiversación", "escrituras", "manipulación", "clero", "deliberada", "control", "sagrado"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#7668: Cap TUlo deCiMoCUarTo: las CaUsas del Mal MUNdial"],
        "contexto_real": "La manipulación deliberada de los textos sagrados por parte del clero para mantener el control sobre las conciencias."
    },
    "Bienestar_Profilactico": {
        "palabras_clave": ["bienestar", "profiláctico", "salud", "integral", "prevención", "vida", "ley"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#8103: Cap TUlo deCiMoQUiNTo: CoN la profilaxis se oBTieNe el BieNesTar"],
        "contexto_real": "El estado de salud integral que resulta de aplicar conscientemente las leyes de la vida antes de que el error produzca enfermedad."
    },
    "Purificacion_sin_Sufrimiento": {
        "palabras_clave": ["purificación", "sin sufrimiento", "profilaxis", "activa", "limpieza", "espíritu", "prevención"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#8103: Cap TUlo deCiMoQUiNTo: CoN la profilaxis se oBTieNe el BieNesTar"],
        "contexto_real": "El principio de que la purificación espiritual puede lograrse mediante la profilaxis activa sin necesidad de pasar por el dolor."
    },
    "Prevencion_vs_Curacion": {
        "palabras_clave": ["prevención", "curación", "profilaxis", "superior", "daño", "anticipación", "ley"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#8103: Cap TUlo deCiMoQUiNTo: CoN la profilaxis se oBTieNe el BieNesTar"],
        "contexto_real": "La superioridad doctrinal de la prevención profiláctica sobre la curación posterior al daño."
    }
}

for k, v in nuevos_conceptos.items():
    dic['CONCEPTOS'][k] = v

with open(dic_path, 'w', encoding='utf-8') as f:
    json.dump(dic, f, indent=2, ensure_ascii=False)

print("Diccionario Tanda 6 actualizado: " + str(len(nuevos_conceptos)) + " conceptos precisos.")
