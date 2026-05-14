import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Economia_Publica": {
        "palabras_clave": ["economía", "pública", "gestión", "administrativa", "matemática", "recursos", "región", "producción"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11944: Cap TUlo NoveNo: eCoNoM a p BliCa"],
        "contexto_real": "La gestión administrativa y matemática de los recursos de una región para garantizar la producción y el consumo sin escasez."
    },
    "Administracion_Distributiva": {
        "palabras_clave": ["administración", "distributiva", "comunal", "comercio", "equitativamente", "individuos"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11944: Cap TUlo NoveNo: eCoNoM a p BliCa"],
        "contexto_real": "El mecanismo comunal que reemplaza al comercio especulativo, asegurando que los bienes lleguen equitativamente a todos los individuos."
    },
    "Erradicacion_Miseria": {
        "palabras_clave": ["erradicación", "miseria", "objetivo", "resultado", "aplicación", "economía", "comuna"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11944: Cap TUlo NoveNo: eCoNoM a p BliCa"],
        "contexto_real": "El objetivo principal y resultado ineludible de la aplicación de la economía pública racionalizada en la Comuna."
    },
    "Economia_Industrial": {
        "palabras_clave": ["economía", "industrial", "ciencias", "producción", "masiva", "bienes", "esfuerzo"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11983: Cap TUlo d CiMo: eCoNoM a iNdUsTrial"],
        "contexto_real": "La aplicación de todas las ciencias y artes para organizar la producción masiva de bienes con el mínimo desgaste de recursos y esfuerzo humano."
    },
    "Eficiencia_Productiva": {
        "palabras_clave": ["eficiencia", "productiva", "satisfactores", "energía", "tiempo", "colectividad", "beneficio"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11983: Cap TUlo d CiMo: eCoNoM a iNdUsTrial"],
        "contexto_real": "El principio de producir más y mejores satisfactores utilizando la menor cantidad de energía y tiempo, en beneficio exclusivo de la colectividad."
    },
    "Sintesis_Productiva": {
        "palabras_clave": ["síntesis", "productiva", "unión", "moral", "científica", "industrial", "técnica"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11983: Cap TUlo d CiMo: eCoNoM a iNdUsTrial"],
        "contexto_real": "La unión indispensable de la economía moral (ideación) y científica (técnica) dentro del proceso industrial."
    },
    "Economia_Geografica": {
        "palabras_clave": ["economía", "geográfica", "intercambio", "vocación", "productiva", "región", "fronteras"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#12028: Cap TUlo deCiMopriMero: eCoNoM a pol TiCa"],
        "contexto_real": "El sistema de intercambio global basado exclusivamente en la vocación productiva natural de cada región de la Tierra, libre de fronteras."
    },
    "Intercambio_Natural": {
        "palabras_clave": ["intercambio", "natural", "movimiento", "distributivo", "climáticas", "especulación", "aduanas"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#12028: Cap TUlo deCiMopriMero: eCoNoM a pol TiCa"],
        "contexto_real": "El movimiento distributivo de recursos entre diferentes zonas climáticas y geográficas sin especulación financiera ni aduanas."
    },
    "Abolicion_Fronteriza": {
        "palabras_clave": ["abolición", "fronteriza", "desaparecen", "divisiones", "políticas", "comuna", "nación"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#12028: Cap TUlo deCiMopriMero: eCoNoM a pol TiCa"],
        "contexto_real": "El proceso derivado de la Comuna mediante el cual desaparecen las divisiones políticas, quedando la Tierra como una sola nación."
    },
    "Economia_Social": {
        "palabras_clave": ["economía", "social", "derechos", "obligaciones", "intereses", "armónica", "humanidad"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#12048: Cap TUlo deCiMoseGUNdo: eCoNoM a soCial"],
        "contexto_real": "La ciencia comunal que administra los derechos, obligaciones e intereses morales y materiales para asegurar la evolución armónica de la humanidad."
    },
    "Progreso_Incesante": {
        "palabras_clave": ["progreso", "incesante", "educación", "elevación", "belleza", "perfección", "cósmico"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#12048: Cap TUlo deCiMoseGUNdo: eCoNoM a soCial"],
        "contexto_real": "El principio cósmico de que la educación y la elevación del ser no se detienen nunca, avanzando siempre hacia mayor belleza y perfección."
    },
    "Individuo_Universal": {
        "palabras_clave": ["individuo", "universal", "pieza", "fundamental", "engranaje", "progreso", "cósmico"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#12048: Cap TUlo deCiMoseGUNdo: eCoNoM a soCial"],
        "contexto_real": "La concepción de que cada ser humano es una pieza fundamental y no descartable dentro del engranaje del progreso cósmico."
    },
    "Economia_Espiritual": {
        "palabras_clave": ["economía", "espiritual", "alineación", "pensamiento", "telepáticas", "magnéticas", "constructivas"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#12074: Cap TUlo deCiMoTerCero: eCoNoM a espiriTUal"],
        "contexto_real": "La alineación y concentración del pensamiento colectivo de la humanidad para generar fuerzas magnéticas y telepáticas constructivas."
    },
    "Esfuerzo_Psiquico": {
        "palabras_clave": ["esfuerzo", "psíquico", "energía", "mental", "espiritual", "transformar", "materia"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#12074: Cap TUlo deCiMoTerCero: eCoNoM a espiriTUal"],
        "contexto_real": "La aplicación consciente de la energía mental y espiritual para transformar la materia o apoyar el progreso, de acuerdo a la Ley Mayor."
    },
    "Fuerza_Racional_Unificada": {
        "palabras_clave": ["fuerza", "racional", "unificada", "poder", "superior", "mentes", "telepático"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#12074: Cap TUlo deCiMoTerCero: eCoNoM a espiriTUal"],
        "contexto_real": "El poder superior que resulta cuando las mentes de la humanidad dejan el egoísmo (fuerza bruta) y actúan como un solo bloque telepático."
    },
    "Economia_Universal": {
        "palabras_clave": ["economía", "universal", "grado", "supremo", "organización", "solidaridad", "mundos"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#12124: Cap TUlo deCiMoCUarTo: eCoNoM a UNiversal"],
        "contexto_real": "El grado supremo de organización espiritual donde la humanidad entera actúa en solidaridad consciente con los seres de otros mundos del universo."
    },
    "Omnipotencia_Solidaria": {
        "palabras_clave": ["omnipotencia", "solidaria", "poder", "creador", "magnético", "espíritus", "cosmos"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#12124: Cap TUlo deCiMoCUarTo: eCoNoM a UNiversal"],
        "contexto_real": "El inmenso poder creador y magnético que se alcanza cuando los espíritus de la Tierra se unen telepáticamente con los del cosmos."
    },
    "Solidaridad_Interplanetaria": {
        "palabras_clave": ["solidaridad", "interplanetaria", "fraternidad", "universo", "hermanos", "creación", "Tierra"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#12124: Cap TUlo deCiMoCUarTo: eCoNoM a UNiversal"],
        "contexto_real": "El principio de fraternidad extendido más allá de la Tierra, reconociendo a todos los habitantes del universo como hermanos de una misma creación."
    },
    "Eficiencia_Interplanetaria": {
        "palabras_clave": ["eficiencia", "interplanetaria", "conocimiento", "avances", "telepáticamente", "transferidos", "duplicidad"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#12144: mixtificada por todas las Religiones."],
        "contexto_real": "El mecanismo por el cual el conocimiento y los avances logrados en un mundo son telepáticamente transferidos a otros, evitando la duplicidad de investigaciones."
    },
    "Suma_de_Fuerzas_Cosmicas": {
        "palabras_clave": ["suma", "fuerzas", "cósmicas", "unificación", "magnética", "voluntades", "transformaciones"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#12144: mixtificada por todas las Religiones."],
        "contexto_real": "La unificación magnética de las voluntades de los espíritus de diferentes mundos para realizar grandes transformaciones en la creación."
    },
    "Economia_de_Fuerzas": {
        "palabras_clave": ["economía", "fuerzas", "aplicación", "suprema", "maravillas", "mínimo", "gasto", "energético"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#12144: mixtificada por todas las Religiones."],
        "contexto_real": "La aplicación suprema de la eficiencia cósmica, logrando maravillas universales con el mínimo gasto energético de los espíritus creadores."
    }
}

for k, v in nuevos_conceptos.items():
    dic['CONCEPTOS'][k] = v

with open(dic_path, 'w', encoding='utf-8') as f:
    json.dump(dic, f, indent=2, ensure_ascii=False)

print("Diccionario Tanda 12 actualizado: " + str(len(nuevos_conceptos)) + " conceptos precisos.")
