import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Claridad_Doctrinal": {
        "palabras_clave": ["claridad", "doctrinal", "requisito", "comunicación", "lógica", "comprensible", "misticismos"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#795: Mayo 24 - Mayo 24"],
        "contexto_real": "El requisito indispensable de que toda comunicación espiritual en la Escuela sea lógica, comprensible y libre de misticismos inútiles."
    },
    "Filtro_Mediumnico": {
        "palabras_clave": ["filtro", "mediúmnico", "evaluación", "racional", "director", "facultades", "descartando"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#795: Mayo 24 - Mayo 24"],
        "contexto_real": "La evaluación racional y estricta que el director de cátedra hace sobre las facultades y mensajes, descartando lo que no instruye."
    },
    "Expresion_Confusa": {
        "palabras_clave": ["expresión", "confusa", "espíritus", "engañadores", "jerigonza", "altisonantes", "contenido"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#795: Mayo 24 - Mayo 24"],
        "contexto_real": "La forma de hablar de los espíritus engañadores o atrasados, que usan jerigonza o palabras altisonantes sin contenido real."
    },
    "Huestes_de_Luz": {
        "palabras_clave": ["huestes", "luz", "agrupaciones", "legiones", "espíritus", "organizados", "progreso"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#801: Mayo 25 - Desconocido"],
        "contexto_real": "Las agrupaciones o legiones de espíritus organizados bajo el mando de un director para ejecutar tareas específicas en favor del progreso."
    },
    "Obediencia_Espiritual": {
        "palabras_clave": ["obediencia", "espiritual", "acatamiento", "voluntario", "directrices", "elevados", "jerarquía"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#801: Mayo 25 - Desconocido"],
        "contexto_real": "El acatamiento voluntario y consciente de las directrices de espíritus más elevados dentro de la jerarquía universal."
    },
    "Administracion_Cosmica": {
        "palabras_clave": ["administración", "cósmica", "estructura", "organizacional", "universo", "deber", "obediencia"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#801: Mayo 25 - Desconocido"],
        "contexto_real": "La estructura organizacional perfecta del universo, donde cada entidad cumple su deber en obediencia a la ley y a sus superiores."
    },
    "Magnetismo_Negativo": {
        "palabras_clave": ["magnetismo", "negativo", "fuerza", "envidiosas", "espíritus", "atrasados", "perjudicar"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#832: Mayo 28 - e contest : Tienes que luchar mucho,"],
        "contexto_real": "El uso desviado de la fuerza magnética por parte de personas envidiosas o espíritus atrasados para dominar o perjudicar a otros."
    },
    "Celos_Espirituales": {
        "palabras_clave": ["celos", "espirituales", "pasión", "envidiar", "facultades", "progreso", "tinieblas"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#832: Mayo 28 - e contest : Tienes que luchar mucho,"],
        "contexto_real": "La pasión baja que lleva a un médium a envidiar las facultades o el progreso de otro, convirtiéndose en un foco de tinieblas."
    },
    "Defensa_Magnetica": {
        "palabras_clave": ["defensa", "magnética", "protectora", "voluntad", "pensamiento", "repeler", "ataque"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#832: Mayo 28 - e contest : Tienes que luchar mucho,"],
        "contexto_real": "La acción protectora generada por la voluntad firme y el pensamiento unificado en la luz, capaz de repeler cualquier ataque fluido."
    },
    "Alteracion_Karmica": {
        "palabras_clave": ["alteración", "kármica", "voluntad", "modificar", "plazos", "karma", "responsabilidad"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#872: Mayo 29 - Pues bien.- Adi s."],
        "contexto_real": "La capacidad de una voluntad poderosa y amorosa de modificar plazos o condiciones impuestas por el karma, asumiendo la responsabilidad."
    },
    "Asuncion_de_Cargas": {
        "palabras_clave": ["asunción", "cargas", "acto", "amor", "encarnado", "sufrimiento", "cuidado"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#872: Mayo 29 - Pues bien.- Adi s."],
        "contexto_real": "El acto de amor supremo donde un espíritu encarnado decide tomar sobre sí el sufrimiento o el cuidado que le correspondía a otro."
    },
    "Fatalismo_Anulado": {
        "palabras_clave": ["fatalismo", "anulado", "principio", "rechaza", "resignación", "destino", "adversidad"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#872: Mayo 29 - Pues bien.- Adi s."],
        "contexto_real": "El principio doctrinal que rechaza la resignación pasiva ante el destino, enseñando que el trabajo y la voluntad pueden vencer la adversidad."
    },
    "Ataque_Fluidico": {
        "palabras_clave": ["ataque", "fluídico", "descarga", "magnetismo", "negativo", "daño", "físico", "mental"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#883: Mayo 31 - Comunicaci n de Francisco Xavier escrita"],
        "contexto_real": "La descarga agresiva de magnetismo negativo y pesado sobre otra persona con la intención de causarle daño físico o mental."
    },
    "Choque_Magnetico": {
        "palabras_clave": ["choque", "magnético", "perturbación", "sistema", "nervioso", "aura", "fluidos", "odio"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#883: Mayo 31 - Comunicaci n de Francisco Xavier escrita"],
        "contexto_real": "La perturbación del sistema nervioso que ocurre cuando el aura de una persona pura es invadida por fluidos densos o cargados de odio."
    },
    "Toxina_Envidiosa": {
        "palabras_clave": ["toxina", "envidiosa", "sustancia", "material", "pensamiento", "enfermar", "sensibles"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#883: Mayo 31 - Comunicaci n de Francisco Xavier escrita"],
        "contexto_real": "La sustancia material y vibratoria que emana del pensamiento envidioso, capaz de enfermar el entorno y a los individuos sensibles."
    }
}

for k, v in nuevos_conceptos.items():
    dic['CONCEPTOS'][k] = v

with open(dic_path, 'w', encoding='utf-8') as f:
    json.dump(dic, f, indent=2, ensure_ascii=False)

print("Diccionario Tanda 4 (FEU 1) actualizado: " + str(len(nuevos_conceptos)) + " conceptos precisos.")
