import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Economixtificacion": {
        "palabras_clave": ["economixtificación", "economía", "falsa", "fraude", "capitalista", "burgués", "usura", "explotación"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11596: ap NdiCe: eCoNoM a Y eCoNoMixTifiCaCi N"],
        "contexto_real": "Término doctrinal que define el sistema económico capitalista y burgués como un fraude o mistificación basado en la usura y la explotación."
    },
    "Economia_Verdadera": {
        "palabras_clave": ["economía", "verdadera", "administración", "matemática", "recursos", "abundancia", "comuna"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11596: ap NdiCe: eCoNoM a Y eCoNoMixTifiCaCi N"],
        "contexto_real": "La administración matemática y racional de los recursos universales sin dinero, usura ni propiedad privada exclusiva."
    },
    "Administracion_Comunal": {
        "palabras_clave": ["administración", "comunal", "gestión", "bienes", "bienestar", "trabajo", "todos"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11596: ap NdiCe: eCoNoM a Y eCoNoMixTifiCaCi N"],
        "contexto_real": "El sistema de gestión de los bienes en la Comuna, donde el trabajo de todos garantiza el bienestar material de cada individuo."
    },
    "Economia_del_Tiempo": {
        "palabras_clave": ["economía", "tiempo", "administración", "horas", "progreso", "estudio", "descanso"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11626: Cap TUlo priMero: eCoNoM a del TieMpo"],
        "contexto_real": "La administración consciente y disciplinada de las horas de encarnación para maximizar el progreso espiritual y comunal."
    },
    "Distribucion_Matematica": {
        "palabras_clave": ["distribución", "matemática", "tiempo", "código", "actividades", "diarias", "armonía"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11626: Cap TUlo priMero: eCoNoM a del TieMpo"],
        "contexto_real": "La organización precisa y sin excesos de las actividades diarias estipulada en el Código para evitar el agotamiento y el ocio."
    },
    "Trabajo_Armonico": {
        "palabras_clave": ["trabajo", "armónico", "agrado", "sin prisa", "obligaciones", "tiempo", "hastío"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11626: Cap TUlo priMero: eCoNoM a del TieMpo"],
        "contexto_real": "El desempeño de las obligaciones materiales con agrado y sin prisa, derivado de una correcta economía del tiempo."
    },
    "Economia_Artistica": {
        "palabras_clave": ["economía", "artística", "orden", "puesto", "armonía", "belleza", "funcionalidad"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11656: Cap TUlo seGUNdo: eCoNoM a arT sTiCa"],
        "contexto_real": "La aplicación de las leyes de armonía y orden del universo a la organización de la vida material, desde el hogar hasta la ciudad."
    },
    "Orden_Cosmico": {
        "palabras_clave": ["orden", "cósmico", "equilibrio", "mundos", "sistema", "planetas", "sociedad"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11656: Cap TUlo seGUNdo: eCoNoM a arT sTiCa"],
        "contexto_real": "El equilibrio matemático que rige el movimiento de los mundos y que debe ser imitado por la sociedad humana."
    },
    "Armonia_Estetica": {
        "palabras_clave": ["armonía", "estética", "belleza", "función", "lujo", "orden", "perfecta"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11656: Cap TUlo seGUNdo: eCoNoM a arT sTiCa"],
        "contexto_real": "La belleza derivada de la funcionalidad perfecta y el orden, oponiéndose al lujo innecesario o desordenado."
    },
    "Economia_Animal": {
        "palabras_clave": ["economía", "animal", "fisiología", "organismo", "cuerpo", "energía", "desgaste"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11682: Cap TUlo TerCero: eCoNoM a aNiMal"],
        "contexto_real": "El conocimiento práctico de las funciones fisiológicas del cuerpo humano para administrar su energía vital sin desgaste prematuro."
    },
    "Conocimiento_Organico": {
        "palabras_clave": ["conocimiento", "orgánico", "necesidades", "materia", "vehículo", "espíritu", "ritmos"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11682: Cap TUlo TerCero: eCoNoM a aNiMal"],
        "contexto_real": "La comprensión racional de las necesidades, ritmos y capacidades de la materia física que sirve de vehículo al espíritu."
    },
    "Conocete_a_ti_Mismo": {
        "palabras_clave": ["conócete", "ti mismo", "estudio", "espíritu", "alma", "cuerpo", "doctrina"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11682: Cap TUlo TerCero: eCoNoM a aNiMal"],
        "contexto_real": "El mandato socrático adoptado por la doctrina para designar el estudio profundo de la relación entre el espíritu, el alma y el cuerpo."
    },
    "Roles_Complementarios": {
        "palabras_clave": ["roles", "complementarios", "hombre", "mujer", "función", "armonía", "biología"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11688: las funciones fisiol gicas d"],
        "contexto_real": "La distribución armónica de funciones fisiológicas y sociales entre el hombre y la mujer según la ley natural."
    },
    "Arca_Santa": {
        "palabras_clave": ["arca", "santa", "mujer", "maternidad", "santuario", "encarna", "espíritu"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11688: las funciones fisiol gicas d"],
        "contexto_real": "El concepto doctrinal que eleva el cuerpo y la función materna de la mujer a la categoría de santuario biológico donde encarna el espíritu."
    },
    "Inversion_Irracional": {
        "palabras_clave": ["inversión", "irracional", "factores", "violación", "géneros", "naturaleza", "economía vital"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11688: las funciones fisiol gicas d"],
        "contexto_real": "El error social de forzar a los géneros a desempeñar funciones contrarias a su naturaleza biológica y energética."
    }
}

for k, v in nuevos_conceptos.items():
    dic['CONCEPTOS'][k] = v

with open(dic_path, 'w', encoding='utf-8') as f:
    json.dump(dic, f, indent=2, ensure_ascii=False)

print("Diccionario Tanda 10 actualizado: " + str(len(nuevos_conceptos)) + " conceptos precisos.")
