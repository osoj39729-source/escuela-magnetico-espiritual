import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Fenomenos_Raros": {
        "palabras_clave": ["fenómenos", "raros", "bicorporeidad", "invisibilidad", "premonición"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#11350: CAPTULO DIEZ: GRANDES Y RAROS FENMENOS"],
        "contexto_real": "Manifestaciones excepcionales de la potencia espiritual que desafían las leyes físicas ordinarias, explicadas racionalmente por el magnetismo y la voluntad."
    },
    "Bicorporeidad": {
        "palabras_clave": ["bicorporeidad", "presencia", "doble", "aparición", "materialización"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#11350: CAPTULO DIEZ: GRANDES Y RAROS FENMENOS"],
        "contexto_real": "Fenómeno por el cual un espíritu encarnado se materializa en un lugar distante de su cuerpo físico, pudiendo ser visto y tocado simultáneamente."
    },
    "Invisibilidad_Fluidica": {
        "palabras_clave": ["invisibilidad", "fluídica", "ocultamiento", "luz", "vibración"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#11350: CAPTULO DIEZ: GRANDES Y RAROS FENMENOS"],
        "contexto_real": "La capacidad de un espíritu de envolverse en fluidos que refractan o desvían la luz física, haciéndose invisible a los ojos materiales."
    },
    "Detractores_del_Espiritismo": {
        "palabras_clave": ["detractores", "enemigos", "ataque", "calumnia", "ignorancia"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#12527: QUINTA PARTE: DETRACTORES DEL ESPIRITISMO"],
        "contexto_real": "Entidades o individuos que, por odio, miedo o interés material, atacan o desvirtúan las verdades del Espiritismo Racional."
    },
    "Enemigos_del_Progreso": {
        "palabras_clave": ["enemigos", "progreso", "estancamiento", "atraso", "miedo"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#12527: QUINTA PARTE: DETRACTORES DEL ESPIRITISMO"],
        "contexto_real": "Aquellas fuerzas o ideas que buscan mantener a la humanidad en la ignorancia y el prejuicio para perpetuar sistemas de dominio."
    },
    "Pureza_Doctrinal": {
        "palabras_clave": ["pureza", "doctrinal", "luz", "verdad", "integridad"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#12527: QUINTA PARTE: DETRACTORES DEL ESPIRITISMO"],
        "contexto_real": "La preservación de los principios espíritas originales, libres de las contaminaciones del misticismo religioso y el espiritualismo."
    },
    "Dogma_Religioso": {
        "palabras_clave": ["dogma", "religioso", "fe ciega", "imposición", "error"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#12530: CAPTULO PRIMERO: LAS RELIGIONES"],
        "contexto_real": "Verdad impuesta por la autoridad religiosa sin demostración racional, que anula el juicio crítico del individuo."
    },
    "Dominio_Mental": {
        "palabras_clave": ["dominio", "mental", "control", "esclavitud", "miedo"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#12530: CAPTULO PRIMERO: LAS RELIGIONES"],
        "contexto_real": "La sujeción del pensamiento humano a través del miedo al castigo divino y la dependencia de intermediarios religiosos."
    },
    "Error_Teologico": {
        "palabras_clave": ["error", "teológico", "falso dios", "perdón", "gracia"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#12530: CAPTULO PRIMERO: LAS RELIGIONES"],
        "contexto_real": "Conceptos erróneos sobre la naturaleza del Creador y las leyes de justicia, basados en la antropomorfización de la divinidad."
    },
    "Espiritualismo_vs_Espiritismo": {
        "palabras_clave": ["espiritualismo", "espiritismo", "antagonismo", "diferencia", "lucha"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#12630: CAPTULO SEGUNDO: EL ESPIRITUALISMO"],
        "contexto_real": "La distinción fundamental entre el estudio racional de las leyes del espíritu (Espiritismo) y las creencias místicas que mantienen ritos y dogmas (Espiritualismo)."
    },
    "Amalgama_Mistica": {
        "palabras_clave": ["amalgama", "mística", "mezcla", "rito", "confusión"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#12630: CAPTULO SEGUNDO: EL ESPIRITUALISMO"],
        "contexto_real": "La mezcla confusa de principios espíritas con prácticas religiosas, que el Espiritismo Racional busca erradicar."
    },
    "Prevaricacion_Doctrinal": {
        "palabras_clave": ["prevaricación", "doctrinal", "traición", "error", "lucro"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#12630: CAPTULO SEGUNDO: EL ESPIRITUALISMO"],
        "contexto_real": "La distorsión consciente de la verdad espiritual por parte de quienes deberían enseñarla, generalmente por intereses materiales o de poder."
    },
    "Gratitud_Racional": {
        "palabras_clave": ["gratitud", "racional", "reconocimiento", "ley", "justicia"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#12660: En nuestra Filosofa Austera Racional..."],
        "contexto_real": "Agradecimiento dirigido a la Ley Universal y al Creador, reconociendo que los beneficios recibidos no son 'gracias' personales de un individuo."
    },
    "Veneracion_al_Creador": {
        "palabras_clave": ["veneración", "creador", "padre", "amor", "justicia"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#12660: En nuestra Filosofa Austera Racional..."],
        "contexto_real": "El único sentimiento de adoración permitido en el Espiritismo Racional, basado en el reconocimiento de la sabiduría suprema del Padre."
    },
    "Filosofia_Austera": {
        "palabras_clave": ["filosofía", "austera", "racional", "base", "doctrina"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#12660: En nuestra Filosofa Austera Racional..."],
        "contexto_real": "El cuerpo de conocimientos que fundamenta el Espiritismo Racional, caracterizado por su rigor lógico y su rechazo a todo misticismo."
    },
    "Agradecimiento_Tacaño": {
        "palabras_clave": ["agradecimiento", "tacaño", "idolatría", "médium", "fanatismo"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#12660: En nuestra Filosofa Austera Racional..."],
        "contexto_real": "Veneración errónea dirigida al médium o director de un centro, ignorando que el beneficio recibido proviene de la Ley Universal."
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

print("Diccionario Tanda 15 actualizado.")
