import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Materialismo_Ciego": {
        "palabras_clave": ["materialismo", "ciego", "negación", "espíritu", "responsabilidad"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#12818: CAPTULO TERCERO: EL MATERIALISMO Y SU COHORTE"],
        "contexto_real": "La postura filosófica que niega la existencia del espíritu y la supervivencia de la conciencia, limitando la realidad a lo tangible y perecedero."
    },
    "Responsabilidad_Espiritual": {
        "palabras_clave": ["responsabilidad", "espiritual", "conciencia", "juicio", "deber"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#12818: CAPTULO TERCERO: EL MATERIALISMO Y SU COHORTE"],
        "contexto_real": "El reconocimiento del espíritu sobre las consecuencias de sus actos a través de múltiples existencias, regido por la ley de justicia."
    },
    "Negacionismo": {
        "palabras_clave": ["negacionismo", "verdad", "ignorancia", "obstinación", "ciego"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#12818: CAPTULO TERCERO: EL MATERIALISMO Y SU COHORTE"],
        "contexto_real": "La actitud de rechazo sistemático a las evidencias del espíritu por miedo a las implicaciones morales de la verdad."
    },
    "Fanatismo_Ignorante": {
        "palabras_clave": ["fanatismo", "ignorante", "violencia", "dogma", "obcecación"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#12931: CAPTULO CUARTO: EL FANATISMO"],
        "contexto_real": "Estado de exaltación irracional y defensa violenta de un dogma o idea, carente de examen lógico y respetuoso."
    },
    "Obcecacion_Mental": {
        "palabras_clave": ["obcecación", "mental", "ceguera", "razón", "error"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#12931: CAPTULO CUARTO: EL FANATISMO"],
        "contexto_real": "La incapacidad del individuo para percibir la verdad debido a prejuicios profundamente arraigados o estados emocionales extremos."
    },
    "Peligro_Social": {
        "palabras_clave": ["peligro", "social", "fanatismo", "desorden", "atraso"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#12931: CAPTULO CUARTO: EL FANATISMO"],
        "contexto_real": "La amenaza que representan los individuos o grupos fanatizados para la convivencia armónica y el progreso de la civilización."
    },
    "Misticismo_Esteril": {
        "palabras_clave": ["misticismo", "estéril", "contemplación", "parálisis", "santidad"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#13059: CAPTULO QUINTO: EL MISTICISMO"],
        "contexto_real": "Actitud contemplativa y estéril que busca la unión con lo divino a través del sentimiento subjetivo, rechazando el trabajo activo y la razón."
    },
    "Enfermedad_del_Alma": {
        "palabras_clave": ["enfermedad", "alma", "tisis", "debilidad", "misticismo"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#13059: CAPTULO QUINTO: EL MISTICISMO"],
        "contexto_real": "Metáfora utilizada por Trincado para describir estados espirituales de postración y alejamiento de la realidad productiva."
    },
    "Contemplacion_vs_Accion": {
        "palabras_clave": ["contemplación", "acción", "deber", "trabajo", "progreso"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#13059: CAPTULO QUINTO: EL MISTICISMO"],
        "contexto_real": "El contraste fundamental entre la pasividad mística y el dinamismo productivo que exige el Espiritismo Luz y Verdad."
    },
    "Mixtificacion_Espiritual": {
        "palabras_clave": ["mixtificación", "espiritual", "fraude", "engaño", "nombre falso"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#13175: CAPTULO SEXTO: LA MIXTIFICACIN"],
        "contexto_real": "El acto por el cual un espíritu engaña a los asistentes de una sesión mediúmnica asumiendo una identidad falsa de alto progreso."
    },
    "Engaño_Sutil": {
        "palabras_clave": ["engaño", "sutil", "disfraz", "mentira", "persuasión"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#13175: CAPTULO SEXTO: LA MIXTIFICACIN"],
        "contexto_real": "La táctica de los espíritus mixtificadores de usar palabras dulces y verdades parciales para ocultar su falta de elevación."
    },
    "Falsos_Guias": {
        "palabras_clave": ["falsos", "guías", "ídolos", "engaño", "mixtificación"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#13175: CAPTULO SEXTO: LA MIXTIFICACIN"],
        "contexto_real": "Entidades que se presentan como protectores o maestros para ejercer dominio sobre los encarnados."
    },
    "Supercheria_Mediunimica": {
        "palabras_clave": ["superchería", "medianímica", "fraude", "truco", "engaño consciente"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#13340: CAPTULO SPTIMO: LA SUPERCHERA"],
        "contexto_real": "El fraude material y consciente realizado por médiums o directores mediante trucos físicos para simular manifestaciones espirituales."
    },
    "Fraude_Consciente": {
        "palabras_clave": ["fraude", "consciente", "delito", "engaño", "traición"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#13340: CAPTULO SPTIMO: LA SUPERCHERA"],
        "contexto_real": "El engaño realizado con pleno conocimiento de su falsedad, con el fin de obtener lucro o reconocimiento."
    },
    "Miserable_Vergüenza": {
        "palabras_clave": ["miserable", "vergüenza", "condena", "superchería", "espiritismo"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#13340: CAPTULO SPTIMO: LA SUPERCHERA"],
        "contexto_real": "La calificación moral más baja que otorga Trincado a quienes comercian o engañan con las facultades mediúmnicas."
    }
}

for k, v in nuevos_conceptos.items():
    if k not in dic["CONCEPTOS"]:
        dic["CONCEPTOS"][k] = v
    else:
        for node in v["nodos_sinapticos"]:
            if node not in dic["CONCEPTOS"][k]["nodos_sinapticos"]:
                dic["CONCEPTOS"][k]["nodos_sinapticos"].append(node)

with open(dic_path, 'w', encoding='utf-8') as f:
    json.dump(dic, f, indent=2, ensure_ascii=False)

print("Diccionario Tanda 16 actualizado.")
