import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Medium_Parlante": {
        "palabras_clave": ["médium", "parlante", "órganos", "fonéticos", "transmisión", "discursiva"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#8653: CAPTULO SEXTO: LOS MDIUMS PARLANTES"],
        "contexto_real": "El individuo que cede temporalmente sus órganos fonéticos y vitales a un espíritu desencarnado para transmitir la sabiduría y los consejos del plano espiritual de forma directa y discursiva."
    },
    "Estacion_Inalambrica": {
        "palabras_clave": ["estación", "inalámbrica", "médium", "comunicación", "radio"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#8653: CAPTULO SEXTO: LOS MDIUMS PARLANTES"],
        "contexto_real": "La metáfora utilizada por Trincado para describir la fisiología de la facultad mediúmnica, capaz de recibir y transmitir mensajes desde cualquier punto del universo sin tecnología física."
    },
    "Posesion_Entera": {
        "palabras_clave": ["posesión", "entera", "lucidez", "control", "médium"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#8653: CAPTULO SEXTO: LOS MDIUMS PARLANTES"],
        "contexto_real": "El estado óptimo de la mediumnidad parlante en el cual el espíritu comunicante asume control total y armonioso del cuerpo del médium, garantizando que el mensaje fluya sin interrupciones o contradicciones."
    },
    "Efectos_Fisicos": {
        "palabras_clave": ["efectos", "físicos", "materia", "materializaciones", "ruidos", "levitaciones"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#8952: CAPITULO SPTIMO: LOS MDIUMS DE EFECTOS FSICOS"],
        "contexto_real": "La categoría de facultades mediúmnicas que producen alteraciones comprobables en la materia densa (golpes, levitaciones, materializaciones), utilizadas como rudimentos para llamar la atención del mundo científico."
    },
    "Fenomeno_vs_Razon": {
        "palabras_clave": ["fenómeno", "razón", "convicción", "demostración", "filosofía"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#8952: CAPITULO SPTIMO: LOS MDIUMS DE EFECTOS FSICOS"],
        "contexto_real": "El postulado que afirma que la observación material del fenómeno físico jamás es suficiente para convencer al intelecto, si éste carece del fundamento racional y filosófico que lo explique."
    },
    "Espada_Reluciente": {
        "palabras_clave": ["espada", "reluciente", "justicia", "escuela", "trincado"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#8952: CAPITULO SPTIMO: LOS MDIUMS DE EFECTOS FSICOS"],
        "contexto_real": "Símbolo del poder espiritual invencible concedido a Joaquín Trincado y a su Escuela para juzgar los errores de las religiones y establecer la ley del Amor con estricta justicia."
    },
    "Medium_de_Aportes": {
        "palabras_clave": ["médium", "aportes", "desmaterialización", "objeto", "distancia"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#9101: CAPITULO OCTAVO: LOS MDIUMS DE APORTES Y OTROS"],
        "contexto_real": "Aquel que posee la facultad de extraer, desmaterializar y rematerializar objetos físicos sin importar la distancia, facultad altamente vigilada por las entidades de luz."
    },
    "Prohibicion_del_Aporte": {
        "palabras_clave": ["prohibición", "aporte", "gobierno", "espiritismo", "robo"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#9101: CAPITULO OCTAVO: LOS MDIUMS DE APORTES Y OTROS"],
        "contexto_real": "La restricción absoluta impuesta a los médiums de aporte para evitar que la facultad sea utilizada para la vagancia o el hurto, garantizando el respeto al trabajo ajeno."
    },
    "Ley_de_Propiedad_Espiritual": {
        "palabras_clave": ["ley", "propiedad", "espiritual", "usufructo", "robo"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#9101: CAPITULO OCTAVO: LOS MDIUMS DE APORTES Y OTROS"],
        "contexto_real": "El principio universal que prohíbe tomar el fruto del trabajo ajeno contra su voluntad, aplicable tanto en la legislación humana como en la dinámica de las facultades mediúmnicas."
    },
    "Magnetismo_Espiritual": {
        "palabras_clave": ["magnetismo", "espiritual", "vanguardia", "fuerza", "curación"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#9250: CAPITULO NOVENO: EL MAGNETISMO Y EL SONAMBULISMO"],
        "contexto_real": "La manipulación consciente de la electricidad vital (fluidos) por parte del espíritu a través de su cuerpo, utilizada como fuerza motriz para curar, dormir (sonambulismo) o mover objetos."
    },
    "Sonambulismo_Magnetico": {
        "palabras_clave": ["sonambulismo", "magnético", "sueño", "provocado", "liberación"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#9250: CAPITULO NOVENO: EL MAGNETISMO Y EL SONAMBULISMO"],
        "contexto_real": "El estado inducido mediante la transmisión de fluidos magnéticos que aletarga la materia densa y libera temporalmente al periespíritu, permitiendo la exploración de dimensiones superiores."
    },
    "Electricidad_Vital": {
        "palabras_clave": ["electricidad", "vital", "energía", "vida", "fluido"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#9250: CAPITULO NOVENO: EL MAGNETISMO Y EL SONAMBULISMO"],
        "contexto_real": "La manifestación universal condensada en el cuerpo físico que conforma el pensamiento, la vida y las sensibilidades del alma, siendo la base de todo fenómeno magnético."
    },
    "Telepatia_como_Desdoblamiento": {
        "palabras_clave": ["telepatía", "desdoblamiento", "alma", "transmisión", "pensamiento"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#9534: CAPITULO DIEZ: LA SUGESTIN Y LA TELEPATA"],
        "contexto_real": "La demostración de que la llamada telepatía materialista es un error conceptual, pues el pensamiento no viaja solo; es el alma desdoblada del individuo la que se traslada y ejecuta la acción."
    },
    "Falsa_Sugestion": {
        "palabras_clave": ["falsa", "sugestión", "engaño", "hipnotismo", "voluntad"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#9534: CAPITULO DIEZ: LA SUGESTIN Y LA TELEPATA"],
        "contexto_real": "La manipulación psicológica y moralmente equívoca de la voluntad ajena, diferenciada tajantemente del magnetismo que busca la curación y el progreso espiritual."
    },
    "Accion_del_Pensamiento": {
        "palabras_clave": ["acción", "pensamiento", "amor", "odio", "desplazamiento"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#9534: CAPITULO DIEZ: LA SUGESTIN Y LA TELEPATA"],
        "contexto_real": "La ley espiritual ('donde amas u odias, llega tu acción') que explica cómo el desdoblamiento del alma se dirige invariablemente hacia los focos de sus afectos o rencores intensos."
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

print("Diccionario Tanda 12 actualizado.")
