import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Identificacion_Vibratoria": {
        "palabras_clave": ["identificación", "vibratoria", "reconocer", "entidad", "magnetismo", "doctrina", "nombre"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#580: Abril 12 de 1910 - Desconocido"],
        "contexto_real": "La capacidad desarrollada por el espiritista de reconocer a una entidad por la calidad de su magnetismo y doctrina, independientemente del nombre que use."
    },
    "Prevencion_de_Enganos": {
        "palabras_clave": ["prevención", "engaños", "profilaxis", "mental", "cátedra", "comunicante", "escrutinio"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#580: Abril 12 de 1910 - Desconocido"],
        "contexto_real": "La profilaxis mental exigida en la cátedra para no aceptar automáticamente la supuesta identidad de un comunicante sin someterlo a escrutinio."
    },
    "Firma_Espiritual": {
        "palabras_clave": ["firma", "espiritual", "sello", "inconfundible", "sabiduría", "paz", "austeridad", "superiores"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#580: Abril 12 de 1910 - Desconocido"],
        "contexto_real": "El sello inconfundible de sabiduría, paz y austeridad que caracteriza los mensajes de los espíritus superiores."
    },
    "Jerarquia_Espiritual": {
        "palabras_clave": ["jerarquía", "espiritual", "orden", "natural", "universo", "sabiduría", "progreso"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#663: Abril 15 de 1910 - Joaqu n Trincado"],
        "contexto_real": "El orden natural en el universo basado en el grado de sabiduría y progreso, donde los más adelantados dirigen a los menores."
    },
    "Ejercitos_de_Luz": {
        "palabras_clave": ["ejércitos", "luz", "legiones", "espíritus", "desencarnados", "trabajan", "guías", "progreso"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#663: Abril 15 de 1910 - Joaqu n Trincado"],
        "contexto_real": "Las legiones inmensas de espíritus desencarnados que trabajan coordinadamente bajo la dirección de Guías Mayores para acelerar el progreso planetario."
    },
    "Cadena_de_Mando_Cosmica": {
        "palabras_clave": ["cadena", "mando", "cósmica", "sistema", "administrativo", "creador", "órdenes"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#663: Abril 15 de 1910 - Joaqu n Trincado"],
        "contexto_real": "El sistema administrativo del Creador donde cada espíritu recibe órdenes de uno superior y guía a los que están por debajo de él en conocimiento."
    },
    "Merito_vs_Titulo": {
        "palabras_clave": ["mérito", "título", "luz", "espiritual", "trabajo", "moralidad", "rangos", "terrenales"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#726: Abril 20 de 1910 - Abril 20 de 1910"],
        "contexto_real": "El principio doctrinal que establece que la luz espiritual se gana únicamente por el trabajo y la moralidad, siendo irrelevantes los rangos terrenales."
    },
    "Vanidad_Religiosa": {
        "palabras_clave": ["vanidad", "religiosa", "prestigio", "eclesiástico", "dinero", "adulación", "tinieblas"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#726: Abril 20 de 1910 - Abril 20 de 1910"],
        "contexto_real": "El uso del prestigio eclesiástico y el dinero para obtener adulación social, acción que invariablemente arrastra al espíritu a las tinieblas post-mortem."
    },
    "Justicia_Desnuda": {
        "palabras_clave": ["justicia", "desnuda", "ley", "creador", "investiduras", "humanas", "conciencia", "obras"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#726: Abril 20 de 1910 - Abril 20 de 1910"],
        "contexto_real": "La aplicación de la ley del Creador sin miramientos por investiduras humanas, evaluando al espíritu exclusivamente por su conciencia y obras."
    },
    "Punto_de_Apoyo_Cosmico": {
        "palabras_clave": ["punto", "apoyo", "cósmico", "rol", "misionero", "Tierra", "trabajo", "espíritus"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#744: Mayo 1 de  1910 - Antonio de Padua."],
        "contexto_real": "El rol fundamental que juega un misionero clave en la Tierra, cuyo trabajo material sostiene y da sentido a las operaciones de los espíritus de luz."
    },
    "Responsabilidad_Misionera": {
        "palabras_clave": ["responsabilidad", "misionera", "peso", "kármico", "moral", "enviados", "renunciar", "retroceder"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#744: Mayo 1 de  1910 - Antonio de Padua."],
        "contexto_real": "El peso kármico y moral asumido por los enviados, quienes no pueden renunciar ni retroceder sin causar graves daños al plan general."
    },
    "Solidaridad_Bidireccional": {
        "palabras_clave": ["solidaridad", "bidireccional", "dependencia", "encarnados", "desencarnados", "guía", "operador"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#744: Mayo 1 de  1910 - Antonio de Padua."],
        "contexto_real": "La dependencia mutua entre los espíritus encarnados (que necesitan guía) y los desencarnados (que necesitan un operador material para cumplir la ley)."
    },
    "Voluntad_Ilimitada": {
        "palabras_clave": ["voluntad", "ilimitada", "fuerza", "espíritu", "encarnado", "armonía", "progreso", "barrera"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#775: Mayo 2 - incendio."],
        "contexto_real": "La fuerza del espíritu encarnado que, al estar en armonía con el progreso, supera cualquier barrera o escepticismo material."
    },
    "Profilaxis_Social": {
        "palabras_clave": ["profilaxis", "social", "acciones", "políticas", "doctrinales", "escuela", "sangre"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#775: Mayo 2 - incendio."],
        "contexto_real": "Las acciones políticas y doctrinales emprendidas por la Escuela para prevenir el derramamiento de sangre y la crueldad en las transiciones históricas."
    },
    "Respaldo_Superior": {
        "palabras_clave": ["respaldo", "superior", "garantía", "éxito", "intervención", "magnética", "planes", "bien común"],
        "nodos_sinapticos": ["filosofia-enciclopedica-universal-tomo-1_esencia.json#775: Mayo 2 - incendio."],
        "contexto_real": "La garantía de éxito e intervención magnética otorgada por los Guías a los planes audaces que buscan el bien común."
    }
}

for k, v in nuevos_conceptos.items():
    dic['CONCEPTOS'][k] = v

with open(dic_path, 'w', encoding='utf-8') as f:
    json.dump(dic, f, indent=2, ensure_ascii=False)

print("Diccionario Tanda 3 (FEU 1) actualizado: " + str(len(nuevos_conceptos)) + " conceptos precisos.")
