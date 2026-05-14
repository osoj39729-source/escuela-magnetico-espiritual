import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Urgencia_Profilactica": {
        "palabras_clave": ["urgencia", "profiláctica", "necesidad", "prevención", "higiene", "doctrinal"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#77: pr loGo"],
        "contexto_real": "El estado de necesidad extrema que impulsa al espíritu a adoptar la higiene doctrinal antes de que el error se vuelva irreversible."
    },
    "Momento_Historico": {
        "palabras_clave": ["momento", "histórico", "cronología", "cósmica", "decretado", "tiempo"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#77: pr loGo"],
        "contexto_real": "El punto preciso en la cronología cósmica donde el Espíritu de Verdad entrega la ley definitiva para la regeneración humana."
    },
    "Profilaxis_Espiritual": {
        "palabras_clave": ["profilaxis", "espiritual", "higiene", "moral", "prevención", "salud"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#77: pr loGo"],
        "contexto_real": "La ciencia de prevenir el deterioro moral y espiritual mediante el conocimiento racional de las leyes universales."
    },
    "Proximidad_de_la_Comuna": {
        "palabras_clave": ["proximidad", "comuna", "inminencia", "tiempo", "establecimiento", "realidad"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#78: Pocos a os y pocas generaciones"],
        "contexto_real": "La inminencia temporal del establecimiento del régimen comunal de amor y justicia en la Tierra."
    },
    "Codigo_de_Amor_Universal": {
        "palabras_clave": ["código", "amor", "universal", "ley", "educación", "pauta"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#78: Pocos a os y pocas generaciones"],
        "contexto_real": "La ley suprema entregada por el Espíritu de Verdad que rige la vida social, moral y espiritual en la era de la Comuna."
    },
    "Familia_Universal": {
        "palabras_clave": ["familia", "universal", "humanidad", "fraternidad", "hogar", "único"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#78: Pocos a os y pocas generaciones"],
        "contexto_real": "La concepción de toda la humanidad como una sola familia sin fronteras, guiada por el amor y la fraternidad."
    },
    "Plan_Multisecular": {
        "palabras_clave": ["plan", "multisecular", "siglos", "diseño", "estratégico", "misión"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#254: afirmara Jes s, por mandato que tra a."],
        "contexto_real": "El diseño estratégico de encarnaciones y misiones que el Espíritu de Verdad ejecuta a lo largo de siglos para cumplir el plan del Padre."
    },
    "Reencarnaciones_del_Misionero": {
        "palabras_clave": ["reencarnaciones", "misionero", "vidas", "misión", "siembra", "verdad"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#254: afirmara Jes s, por mandato que tra a."],
        "contexto_real": "Las múltiples vidas físicas que toma un espíritu de alta misión para preparar, sembrar y cosechar la verdad en diferentes épocas y culturas."
    },
    "Axioma_de_Hermandad": {
        "palabras_clave": ["axioma", "hermandad", "hermanos", "fraternidad", "universal", "demostrado"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#254: afirmara Jes s, por mandato que tra a."],
        "contexto_real": "La verdad universal demostrada de que todos los seres son hijos del mismo Creador y por tanto hermanos."
    },
    "Profilaxis_Molecular": {
        "palabras_clave": ["profilaxis", "molecular", "molécula", "yon", "impulso", "vida"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#409: todas las religiones son causa."],
        "contexto_real": "El principio inscrito en cada partícula de materia que la impulsa hacia la reproducción, la unión y el ascenso."
    },
    "Ley_de_Reproduccion": {
        "palabras_clave": ["ley", "reproducción", "vida", "perpetuación", "natural", "unión"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#409: todas las religiones son causa."],
        "contexto_real": "La ley universal que establece que todo ser vivo tiene el deber y el derecho de perpetuar la vida mediante la unión natural."
    },
    "Fracaso_del_Celibato": {
        "palabras_clave": ["fracaso", "celibato", "represión", "aberración", "degeneración", "natural"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#409: todas las religiones son causa."],
        "contexto_real": "La demostración de que la represión del impulso natural de vida produce aberración y degeneración moral en lugar de santidad."
    }
}

# Actualizar con precision (reemplazar stubs con definiciones reales)
for k, v in nuevos_conceptos.items():
    dic['CONCEPTOS'][k] = v

with open(dic_path, 'w', encoding='utf-8') as f:
    json.dump(dic, f, indent=2, ensure_ascii=False)

print("Diccionario Profilaxis Tanda 1 actualizado con " + str(len(nuevos_conceptos)) + " conceptos precisos.")
