import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Muerte_de_la_Muerte": {
        "palabras_clave": ["muerte", "de la muerte", "demostración", "vida", "continua", "parto", "axioma"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#2154: Cap TUlo TerCero: el aCTo del alUMBraMieNTo"],
        "contexto_real": "El axioma doctrinal que demuestra mediante la biología del alumbramiento que la vida no cesa, solo cambia de forma."
    },
    "Parto_Demostracion": {
        "palabras_clave": ["parto", "demostración", "alumbramiento", "vida", "prueba", "experimental"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#2154: Cap TUlo TerCero: el aCTo del alUMBraMieNTo"],
        "contexto_real": "El acto del alumbramiento como prueba experimental y cotidiana de la indestructibilidad de la vida."
    },
    "Homeopatia_del_Parto": {
        "palabras_clave": ["homeopatía", "parto", "secale", "árnica", "remedio", "natural", "profilaxis"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#2261: las condiciones de oportunidad."],
        "contexto_real": "La aplicación de remedios homeopáticos durante el alumbramiento para asistir el proceso natural sin violentar las leyes vitales."
    },
    "Medicina_Profilactica": {
        "palabras_clave": ["medicina", "profiláctica", "preventiva", "natural", "vida", "armonía"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#2261: las condiciones de oportunidad."],
        "contexto_real": "El uso de remedios y prácticas orientados a prevenir la enfermedad y fortalecer los procesos naturales de la vida."
    },
    "Lactancia_Profilactica": {
        "palabras_clave": ["lactancia", "profiláctica", "pecho", "materno", "nutrición", "espíritu", "leche"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#2590: Cap TUlo CUarTo: laCTaNCia Y CriaNza del iNfaNTe"],
        "contexto_real": "La práctica de la lactancia materna como continuación de los cuidados prenatales y primer alimento del espíritu encarnante."
    },
    "Nutricion_Integral": {
        "palabras_clave": ["nutrición", "integral", "física", "emocional", "espiritual", "alimentación", "ser"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#2590: Cap TUlo CUarTo: laCTaNCia Y CriaNza del iNfaNTe"],
        "contexto_real": "El sistema de alimentación que considera simultáneamente las necesidades físicas, emocionales y espirituales del ser."
    },
    "Economia_Alimentaria": {
        "palabras_clave": ["economía", "alimentaria", "nutrientes", "simple", "natural", "máximo", "mínimo"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#2897: 7.- S mola bajo varias adiciones."],
        "contexto_real": "El principio de seleccionar y preparar los alimentos de manera que maximicen la vida con el mínimo de recursos."
    },
    "Nutricion_Natural": {
        "palabras_clave": ["nutrición", "natural", "sin procesar", "biológico", "espiritual", "orgánico"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#2897: 7.- S mola bajo varias adiciones."],
        "contexto_real": "El sistema de alimentación basado en productos no procesados que respetan las leyes biológicas y espirituales del organismo."
    },
    "Higiene_del_Habito": {
        "palabras_clave": ["higiene", "hábito", "costumbre", "examen", "eleva", "destruye", "consciente"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#3220: Consideraciones del mate"],
        "contexto_real": "La práctica de examinar conscientemente cada costumbre para determinar si eleva o destruye la economía vital del ser."
    },
    "Economia_del_Tiempo": {
        "palabras_clave": ["economía", "tiempo", "hábito", "vicio", "pérdida", "inversión", "vital"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#3220: Consideraciones del mate"],
        "contexto_real": "El principio de que el tiempo es el recurso más valioso del espíritu y debe invertirse en actividades que generen progreso real."
    }
}

for k, v in nuevos_conceptos.items():
    dic['CONCEPTOS'][k] = v

with open(dic_path, 'w', encoding='utf-8') as f:
    json.dump(dic, f, indent=2, ensure_ascii=False)

print("Diccionario Tanda 3 actualizado: " + str(len(nuevos_conceptos)) + " conceptos precisos.")
