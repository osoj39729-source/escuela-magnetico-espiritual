import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Proteccion_Espiritual": {
        "palabras_clave": ["protección", "espiritual", "asistencia", "espíritus", "luz", "encarnados", "justicia"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#319: Febrero 16 - Francisco Xavier"],
        "contexto_real": "La asistencia velada y constante de los espíritus de luz hacia los encarnados que trabajan activamente por el progreso y la justicia."
    },
    "Justicia_Reciproca": {
        "palabras_clave": ["justicia", "recíproca", "universo", "provee", "matemáticamente", "esfuerzo", "bienestar"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#319: Febrero 16 - Francisco Xavier"],
        "contexto_real": "La ley por la cual el universo provee matemática y materialmente a quienes entregan su esfuerzo al bienestar de los demás."
    },
    "Resignacion_Activa": {
        "palabras_clave": ["resignación", "activa", "aceptación", "racional", "pruebas", "materiales", "trabajando"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#319: Febrero 16 - Francisco Xavier"],
        "contexto_real": "La aceptación racional de las pruebas materiales, no como un castigo pasivo, sino como un trámite necesario mientras se sigue trabajando."
    },
    "Evocacion_por_Caridad": {
        "palabras_clave": ["evocación", "caridad", "llamado", "mediúmnico", "espíritus", "atrasados", "desengañar"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#353: Febrero 18 de 1910 - tinieblas."],
        "contexto_real": "El llamado mediúmnico a espíritus atrasados o criminales con el único propósito de desengañarlos y ofrecerles la luz del progreso."
    },
    "Ceguera_Fanatica": {
        "palabras_clave": ["ceguera", "fanática", "autoengaño", "espíritus", "religiosos", "espacio", "divinidad"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#353: Febrero 18 de 1910 - tinieblas."],
        "contexto_real": "El autoengaño de los espíritus religiosos que, incluso en el espacio, creen actuar bajo el mandato de una divinidad ilusoria."
    },
    "Clinica_Espiritual": {
        "palabras_clave": ["clínica", "espiritual", "hospital", "almas", "diagnostica", "ignorancia", "desencarnados"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#353: Febrero 18 de 1910 - tinieblas."],
        "contexto_real": "La función del espiritismo como hospital de almas, donde se diagnostica y trata la ignorancia de los espíritus desencarnados."
    },
    "Multiplicacion_de_Luz": {
        "palabras_clave": ["multiplicación", "luz", "ley", "expansión", "espíritu", "iluminado", "foco"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#424: Febrero 18 de 1910 - Francisco Xavier"],
        "contexto_real": "La ley de expansión por la cual cada espíritu iluminado se convierte automáticamente en un foco de iluminación para otros."
    },
    "Trabajo_Redentor": {
        "palabras_clave": ["trabajo", "redentor", "condición", "justicia", "pagar", "rescate", "afines"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#424: Febrero 18 de 1910 - Francisco Xavier"],
        "contexto_real": "La condición exigida por la justicia universal para pagar la ayuda recibida: trabajar en el rescate de otros espíritus afines."
    },
    "Rescatistas_Interplanetarios": {
        "palabras_clave": ["rescatistas", "interplanetarios", "brigada", "desencarnados", "espacio", "rezagados"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#424: Febrero 18 de 1910 - Francisco Xavier"],
        "contexto_real": "La brigada de espíritus desencarnados que, tras recibir la luz en la Tierra, viajan por el espacio buscando hermanos rezagados."
    },
    "Unidad_de_Pensamiento": {
        "palabras_clave": ["unidad", "pensamiento", "sintonización", "armónica", "asistentes", "sesión", "propósito"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#443: Abril 5 de 1910 - despert la m dium."],
        "contexto_real": "La sintonización armónica y seria de todos los asistentes en una sesión de la Escuela para lograr un propósito común sin distracciones."
    },
    "Sesion_Austera": {
        "palabras_clave": ["sesión", "austera", "práctica", "mediúmnica", "misticismo", "estudio", "consuelo"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#443: Abril 5 de 1910 - despert la m dium."],
        "contexto_real": "La práctica mediúmnica desprovista de misticismo, morbo o curiosidad vana, enfocada estrictamente en el estudio y el consuelo."
    },
    "Canal_Magnetico": {
        "palabras_clave": ["canal", "magnético", "vía", "comunicación", "material", "espiritual", "afinidad"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#443: Abril 5 de 1910 - despert la m dium."],
        "contexto_real": "La vía de comunicación limpia que se establece entre el plano material y espiritual gracias a la afinidad de intenciones de los presentes."
    },
    "Filtro_Racional": {
        "palabras_clave": ["filtro", "racional", "aplicación", "lógica", "comunicación", "sentimentalismo"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#545: Aclaraciones a las comunicaciones anteriores - Joaqu N Trincado"],
        "contexto_real": "La aplicación implacable de la lógica y la ley universal para analizar cualquier comunicación mediúmnica, descartando el sentimentalismo."
    },
    "Rechazo_de_Mixtificacion": {
        "palabras_clave": ["rechazo", "mixtificación", "postura", "espiritista", "engaños", "simulaciones", "error"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#545: Aclaraciones a las comunicaciones anteriores - Joaqu N Trincado"],
        "contexto_real": "La postura vigilante del espiritista verdadero que no acepta engaños, simulaciones ni discursos vacíos de los espíritus del error."
    },
    "Identidad_por_Luz": {
        "palabras_clave": ["identidad", "luz", "parentesco", "jerarquía", "espacio", "sabiduría", "amor"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#545: Aclaraciones a las comunicaciones anteriores - Joaqu N Trincado"],
        "contexto_real": "El principio que establece que el parentesco y la jerarquía en el espacio no se miden por nombres terrestres, sino por el grado de sabiduría y amor demostrado."
    }
}

for k, v in nuevos_conceptos.items():
    dic['CONCEPTOS'][k] = v

with open(dic_path, 'w', encoding='utf-8') as f:
    json.dump(dic, f, indent=2, ensure_ascii=False)

print("Diccionario Tanda 2 (FEU 1) actualizado: " + str(len(nuevos_conceptos)) + " conceptos precisos.")
