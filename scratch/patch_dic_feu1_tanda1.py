import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Mision_Kardeciana": {
        "palabras_clave": ["misión", "kardeciana", "precursor", "allan kardec", "espiritismo", "moral", "escuela"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#30: PR LOGO - JOAQU N TRINCADO"],
        "contexto_real": "El rol precursor de Allan Kardec de introducir el espiritismo básico y moral, anunciando la futura fundación de la Escuela para revelar la ciencia."
    },
    "Velo_de_Moises": {
        "palabras_clave": ["velo", "moisés", "ocultamiento", "verdades", "espirituales", "símbolos", "inmadurez"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#30: PR LOGO - JOAQU N TRINCADO"],
        "contexto_real": "El ocultamiento deliberado de las verdades espirituales profundas tras símbolos y dogmas, necesario por la inmadurez de la humanidad antigua."
    },
    "Escuela_Magnetico_Espiritual": {
        "palabras_clave": ["escuela", "magnético", "espiritual", "institución", "trincado", "doctrina", "universal"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#30: PR LOGO - JOAQU N TRINCADO"],
        "contexto_real": "La institución definitiva fundada por Joaquín Trincado para enseñar la doctrina universal sin velos, culminando el espiritismo luz y verdad."
    },
    "Condescendencia_Semantica": {
        "palabras_clave": ["condescendencia", "semántica", "temporal", "términos", "religiosos", "guías", "educar"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#150: INTROITO Y PROLEG MENO"],
        "contexto_real": "El uso temporal de términos religiosos (Dios, Virgen) por parte de los guías de luz para poder comunicarse y educar a espíritus fanáticos."
    },
    "Progreso_Doctrinal": {
        "palabras_clave": ["progreso", "doctrinal", "evolución", "lenguaje", "metáforas", "científica", "creador"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#150: INTROITO Y PROLEG MENO"],
        "contexto_real": "La evolución en el lenguaje de la Escuela, que pasa de usar metáforas religiosas comprensibles a terminología estrictamente científica (El Creador, Éter)."
    },
    "Respeto_Actas_Originales": {
        "palabras_clave": ["respeto", "actas", "originales", "política", "maestro", "alterar", "registros"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#150: INTROITO Y PROLEG MENO"],
        "contexto_real": "La política del Maestro de no alterar los registros mediúmnicos, manteniendo las palabras originales para documentar la ignorancia inicial y el progreso de los comunicantes."
    },
    "Sometimiento_a_la_Ley": {
        "palabras_clave": ["sometimiento", "ley", "acatar", "conscientemente", "universales", "resistencia", "ego"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#225: Febrero 9 de 1910"],
        "contexto_real": "La actitud racional de acatar conscientemente las leyes universales, eliminando la resistencia del ego o el capricho personal."
    },
    "Capricho_Humano": {
        "palabras_clave": ["capricho", "humano", "intento", "irracional", "imponer", "voluntad", "inmutables"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#225: Febrero 9 de 1910"],
        "contexto_real": "El intento vano e irracional de imponer la voluntad individual o social en contra de los decretos inmutables de la naturaleza."
    },
    "Fe_Racional": {
        "palabras_clave": ["fe", "racional", "certeza", "inquebrantable", "dogma", "estudio", "comprobación"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#225: Febrero 9 de 1910"],
        "contexto_real": "La certeza inquebrantable que no nace del dogma, sino del estudio, la comprobación y la comprensión matemática del universo."
    },
    "Esfuerzo_Educador": {
        "palabras_clave": ["esfuerzo", "educador", "exigencia", "ley", "obligar", "conocimientos", "mérito"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#259: Febrero 11 de 1910"],
        "contexto_real": "La exigencia de la ley universal que obliga al espíritu encarnado a conseguir sus conocimientos por su propia investigación y mérito."
    },
    "Inspiracion_Tematica": {
        "palabras_clave": ["inspiración", "temática", "método", "guías", "idea", "base", "cerebro"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#259: Febrero 11 de 1910"],
        "contexto_real": "El método por el cual los Guías proporcionan una idea base al cerebro del médium o estudioso, obligándolo a desarrollar el concepto con su propio trabajo."
    },
    "Gimnasio_Karmico": {
        "palabras_clave": ["gimnasio", "kármico", "conceptualización", "vida", "pruebas", "sufrimientos", "musculación"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#259: Febrero 11 de 1910"],
        "contexto_real": "La conceptualización de la vida material y sus pruebas y sufrimientos como el entorno necesario para la musculación de la conciencia."
    },
    "Ceguera_Post_Mortem": {
        "palabras_clave": ["ceguera", "post mortem", "oscuridad", "incomprensión", "espíritus", "desencarnados", "pasiones"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#292: Febrero 13 de 1910"],
        "contexto_real": "El estado de oscuridad e incomprensión de los espíritus recién desencarnados que vivieron apegados a pasiones, odios o materialismo."
    },
    "Ataduras_Terrenales": {
        "palabras_clave": ["ataduras", "terrenales", "lazos", "afecto", "rencor", "vibración", "Tierra"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#292: Febrero 13 de 1910"],
        "contexto_real": "Los lazos de afecto irracional o de rencor que mantienen al espíritu ligado a la vibración pesada de la Tierra, impidiendo su progreso."
    },
    "Catedra_Aclaratoria": {
        "palabras_clave": ["cátedra", "aclaratoria", "acción", "espiritismo", "desengañar", "educar", "confusión"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#292: Febrero 13 de 1910"],
        "contexto_real": "La acción del espiritismo luz orientada a desengañar y educar a los espíritus desencarnados que vagan en confusión por falta de filosofía."
    }
}

for k, v in nuevos_conceptos.items():
    dic['CONCEPTOS'][k] = v

with open(dic_path, 'w', encoding='utf-8') as f:
    json.dump(dic, f, indent=2, ensure_ascii=False)

print("Diccionario Tanda 1 (FEU 1) actualizado: " + str(len(nuevos_conceptos)) + " conceptos precisos.")
