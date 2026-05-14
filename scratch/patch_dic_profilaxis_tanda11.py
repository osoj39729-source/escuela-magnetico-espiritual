import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Economia_Moral": {
        "palabras_clave": ["economía", "moral", "planificación", "mente", "energía", "desgaste", "idea"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11720: Cap TUlo CUarTo: eCoNoM a Moral"],
        "contexto_real": "La disciplina de estructurar racional y mentalmente cualquier acción antes de su ejecución para evitar el desgaste inútil de energía."
    },
    "Planificacion_Previa": {
        "palabras_clave": ["planificación", "previa", "reconcentración", "espiritual", "visualizar", "resultado", "obra"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11720: Cap TUlo CUarTo: eCoNoM a Moral"],
        "contexto_real": "El acto de reconcentración espiritual que permite visualizar el resultado y método de una obra antes de iniciarla."
    },
    "Ahorro_de_Fuerzas": {
        "palabras_clave": ["ahorro", "fuerzas", "profiláctico", "beneficio", "energía", "desperdicio", "máximo"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11720: Cap TUlo CUarTo: eCoNoM a Moral"],
        "contexto_real": "El principio profiláctico de lograr el máximo beneficio comunal invirtiendo la cantidad exacta de energía requerida, sin desperdicio."
    },
    "Economia_Cientifica": {
        "palabras_clave": ["economía", "científica", "técnicos", "físicos", "materializar", "exactitud", "ideas"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11752: Cap TUlo QUiNTo: eCoNoM a CieNT fiCa"],
        "contexto_real": "La aplicación de conocimientos técnicos y físicos para materializar con exactitud las ideas concebidas por la economía moral."
    },
    "Voluntad_Ejecutora": {
        "palabras_clave": ["voluntad", "ejecutora", "fuerza", "espíritu", "transforma", "abstracto", "tangible"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11752: Cap TUlo QUiNTo: eCoNoM a CieNT fiCa"],
        "contexto_real": "La fuerza activa del espíritu que transforma el pensamiento abstracto en una realidad tangible."
    },
    "Dualidad_Creadora": {
        "palabras_clave": ["dualidad", "creadora", "pensamiento", "voluntad", "idealización", "ejecución", "obra"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11752: Cap TUlo QUiNTo: eCoNoM a CieNT fiCa"],
        "contexto_real": "La acción complementaria del pensamiento (idealización) y la voluntad (ejecución) necesaria para cualquier obra."
    },
    "Economia_Domestica": {
        "palabras_clave": ["economía", "doméstica", "administración", "matemática", "hogar", "bienestar", "familia"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11794: Cap TUlo sexTo: eCoNoM a doM sTiCa"],
        "contexto_real": "La administración matemática de los recursos del hogar para garantizar el bienestar y el progreso continuo de la familia."
    },
    "Regla_Ascendente": {
        "palabras_clave": ["regla", "ascendente", "planificación", "mejorar", "nivel de vida", "deudas", "excesos"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11794: Cap TUlo sexTo: eCoNoM a doM sTiCa"],
        "contexto_real": "La planificación económica que busca mejorar gradualmente el nivel de vida sin incurrir en deudas ni excesos irracionales."
    },
    "Administracion_Familiar": {
        "palabras_clave": ["administración", "familiar", "rol", "mujer", "hogar", "proveedor", "hombre"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11794: Cap TUlo sexTo: eCoNoM a doM sTiCa"],
        "contexto_real": "El rol organizativo fundamental dentro del hogar, asignado doctrinalmente a la mujer como contraparte del hombre proveedor."
    },
    "Economia_Organica": {
        "palabras_clave": ["economía", "orgánica", "armónica", "seres", "elementos", "Tierra", "bienestar"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11840: Cap TUlo s pTiMo: eCoNoM a orG NiCa"],
        "contexto_real": "La organización armónica de todos los seres y elementos de la Tierra para generar un bienestar comunal sin explotaciones."
    },
    "Colectividad_Beneficiosa": {
        "palabras_clave": ["colectividad", "beneficiosa", "conjunto", "garantiza", "individuo", "matemáticamente"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11840: Cap TUlo s pTiMo: eCoNoM a orG NiCa"],
        "contexto_real": "El principio doctrinal que establece que el bien del conjunto garantiza automática y matemáticamente el bien del individuo."
    },
    "Armonia_de_Reinos": {
        "palabras_clave": ["armonía", "reinos", "minerales", "vegetales", "animales", "protectora", "hombre"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11840: Cap TUlo s pTiMo: eCoNoM a orG NiCa"],
        "contexto_real": "El aprovechamiento racional e incruento de los minerales, vegetales y animales bajo la dirección protectora del hombre."
    },
    "Economia_Agricola": {
        "palabras_clave": ["economía", "agrícola", "ciencia", "moral", "cultivo", "tierra", "rendimiento"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11880: Cap TUlo oCTavo: eCoNoM a rUral Y aGr CoLa"],
        "contexto_real": "La aplicación conjunta de la ciencia y la moral al cultivo de la tierra para obtener el máximo rendimiento sin agotarla."
    },
    "Agricultura_Base": {
        "palabras_clave": ["agricultura", "base", "alimentos", "cimiento", "civilización", "sana"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11880: Cap TUlo oCTavo: eCoNoM a rUral Y aGr CoLa"],
        "contexto_real": "El axioma económico que sitúa a la producción de alimentos como el cimiento indispensable de cualquier civilización sana."
    },
    "Descuido_Cientifico": {
        "palabras_clave": ["descuido", "científico", "crítica", "ciencia", "bélica", "suntuaria", "agrícola"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11880: Cap TUlo oCTavo: eCoNoM a rUral Y aGr CoLa"],
        "contexto_real": "La crítica a la ciencia moderna por haber priorizado la industria bélica o suntuaria en detrimento de la tecnología agrícola."
    }
}

for k, v in nuevos_conceptos.items():
    dic['CONCEPTOS'][k] = v

with open(dic_path, 'w', encoding='utf-8') as f:
    json.dump(dic, f, indent=2, ensure_ascii=False)

print("Diccionario Tanda 11 actualizado: " + str(len(nuevos_conceptos)) + " conceptos precisos.")
