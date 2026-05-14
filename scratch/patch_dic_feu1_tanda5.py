import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Mercantilismo_Espiritual": {
        "palabras_clave": ["mercantilismo", "espiritual", "corrupto", "facultades", "mediúmnicas", "conocimiento", "lucro", "ventajas"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#896: Junio 6 - fe en Dios y constancia."],
        "contexto_real": "El acto corrupto de utilizar las facultades mediúmnicas o el conocimiento espiritual para obtener lucro o ventajas materiales."
    },
    "Gratuidad_Mediumnica": {
        "palabras_clave": ["gratuidad", "mediúmnica", "ley", "inquebrantable", "escuela", "gratis", "espacio", "facultades", "humanidad"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#896: Junio 6 - fe en Dios y constancia."],
        "contexto_real": "La ley inquebrantable de la Escuela que establece que lo que se recibe gratis del espacio (facultades, instrucción) debe darse gratis a la humanidad."
    },
    "Desobediencia_Misionera": {
        "palabras_clave": ["desobediencia", "misionera", "desviación", "encarnado", "misión", "luz", "engrandecimiento", "personal"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#896: Junio 6 - fe en Dios y constancia."],
        "contexto_real": "La desviación de un encarnado que, teniendo una misión asignada de luz, elige usar sus dones para el engrandecimiento personal."
    },
    "Dominacion_Magnetica_Encarnada": {
        "palabras_clave": ["dominación", "magnética", "encarnada", "control", "pasiones", "médium", "débil", "influencia", "fluídica"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#915: Junio 7 de 1910 - tiene en las comunicaciones."],
        "contexto_real": "El control que una persona de bajas pasiones ejerce sobre un médium débil o inexperto a través de la influencia fluídica."
    },
    "Extravio_Mediumnico": {
        "palabras_clave": ["extravío", "mediúmnico", "pérdida", "rumbo", "doctrinal", "protector", "médium", "sugestionar"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#915: Junio 7 de 1910 - tiene en las comunicaciones."],
        "contexto_real": "La pérdida del rumbo doctrinal y protector de un médium que se deja sugestionar por espíritus o personas sin luz."
    },
    "Libre_Albedrio_Mediumnico": {
        "palabras_clave": ["libre", "albedrío", "mediúmnico", "principio", "guías", "respetan", "decisión", "malas", "influencias"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#915: Junio 7 de 1910 - tiene en las comunicaciones."],
        "contexto_real": "El principio por el cual los guías de luz respetan la decisión del médium, incluso cuando este elige dejarse dominar por malas influencias."
    },
    "Inexorabilidad_del_Progreso": {
        "palabras_clave": ["inexorabilidad", "progreso", "garantía", "absoluta", "leyes", "matemáticas", "evolución", "cumplirán"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#945: Junio 12 - Francisco Xavier."],
        "contexto_real": "La garantía absoluta de que las leyes matemáticas del universo y los planes de evolución se cumplirán, sin importar la resistencia de los individuos."
    },
    "Sustitucion_Misionera": {
        "palabras_clave": ["sustitución", "misionera", "acción", "justicia", "cósmica", "reemplazar", "instrumento", "humano", "traicionado"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#945: Junio 12 - Francisco Xavier."],
        "contexto_real": "La acción de la justicia cósmica de reemplazar a un instrumento humano que ha fallado o traicionado su misión, dándole el cargo a otro más afín."
    },
    "Firmeza_Racional": {
        "palabras_clave": ["firmeza", "racional", "actitud", "inquebrantable", "espiritista", "matemáticamente", "fuerza", "obra"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#945: Junio 12 - Francisco Xavier."],
        "contexto_real": "La actitud inquebrantable que debe mantener el espiritista, sabiendo matemáticamente que ninguna fuerza baja puede detener la obra de la luz."
    },
    "Disciplina_Espiritual": {
        "palabras_clave": ["disciplina", "espiritual", "orden", "inquebrantable", "respeto", "acatamiento", "permisos", "operaciones"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#966: Junio 21 de 1910 - Raro fen meno"],
        "contexto_real": "El orden inquebrantable de respeto y acatamiento de permisos que rige las operaciones de los espíritus de luz en el espacio."
    },
    "Guias_Subordinados": {
        "palabras_clave": ["guías", "subordinados", "espíritus", "luz", "elevada", "sabiduría", "mando", "directores"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#966: Junio 21 de 1910 - Raro fen meno"],
        "contexto_real": "Espíritus de luz elevada que, a pesar de su sabiduría, operan bajo el mando directo de Directores Mayores de misiones planetarias."
    },
    "Estructura_Piramidal": {
        "palabras_clave": ["estructura", "piramidal", "organización", "fuerzas", "autoridad", "creador", "armonía", "matemática"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#966: Junio 21 de 1910 - Raro fen meno"],
        "contexto_real": "La organización de las fuerzas del progreso, donde la autoridad desciende desde el Creador hasta el espíritu más pequeño en perfecta armonía matemática."
    },
    "Materializacion_Tangible": {
        "palabras_clave": ["materialización", "tangible", "fenómeno", "físico", "espíritu", "condensa", "fluidos", "corpóreo", "vigilia"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#1015: Junio 22 de 1910 - Estando  la  m"],
        "contexto_real": "El fenómeno físico mediante el cual un espíritu condensa fluidos para hacerse visible y corpóreo a los ojos de una persona en estado de vigilia."
    },
    "Voz_Directa": {
        "palabras_clave": ["voz", "directa", "sonidos", "articulados", "audibles", "cuerdas", "vocales", "trance", "magnéticamente"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#1015: Junio 22 de 1910 - Estando  la  m"],
        "contexto_real": "La producción de sonidos articulados audibles físicamente (sin usar las cuerdas vocales de un médium en trance) generados magnéticamente por un espíritu."
    },
    "Mandato_Imperativo": {
        "palabras_clave": ["mandato", "imperativo", "orden", "firme", "enérgica", "superior", "encarnado", "indisciplinado", "probatorio"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#1015: Junio 22 de 1910 - Estando  la  m"],
        "contexto_real": "La orden firme y enérgica dada por un espíritu superior a un encarnado indisciplinado o dudoso, con el fin de obligarlo a presenciar un hecho probatorio."
    }
}

for k, v in nuevos_conceptos.items():
    dic['CONCEPTOS'][k] = v

with open(dic_path, 'w', encoding='utf-8') as f:
    json.dump(dic, f, indent=2, ensure_ascii=False)

print("Diccionario Tanda 5 (FEU 1) actualizado: " + str(len(nuevos_conceptos)) + " conceptos precisos.")
