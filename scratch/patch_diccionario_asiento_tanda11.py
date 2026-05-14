import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Hombre_Resumen": {
        "palabras_clave": ["hombre", "resumen", "universo", "microcosmos", "leyes"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#4394: PRRAFO II: Definicin del hombre"],
        "contexto_real": "Concepto que define al ser humano como la síntesis de todas las leyes físicas y espirituales del cosmos en un solo organismo."
    },
    "Actor_Evolutivo": {
        "palabras_clave": ["actor", "evolutivo", "progreso", "espíritu", "protagonista"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#4394: PRRAFO II: Definicin del hombre"],
        "contexto_real": "El papel del espíritu como el único motor consciente del progreso en todos los planos de la existencia."
    },
    "Responsabilidad_Ante_Tribunales": {
        "palabras_clave": ["responsabilidad", "tribunales", "justicia", "rendición", "cuentas"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#4546: Acotaciones:"],
        "contexto_real": "La obligación de cada espíritu de responder por sus actos ante los consejos superiores del universo."
    },
    "Acta_de_Conciencia": {
        "palabras_clave": ["acta", "conciencia", "registro", "archivo", "obras", "juicio"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#4546: Acotaciones:"],
        "contexto_real": "El registro indeleble de cada pensamiento y obra que el espíritu lleva consigo y que sirve de base para su juicio."
    },
    "Origen_del_Espiritu": {
        "palabras_clave": ["origen", "espíritu", "emanación", "divinidad", "comienzo"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#4564: PRRAFO III: De dnde viene?"],
        "contexto_real": "La procedencia del espíritu como una chispa divina emanada directamente de la Sustancia Única."
    },
    "Sustancia_Unica": {
        "palabras_clave": ["sustancia", "única", "eloi", "fuente", "principio", "todo"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#4564: PRRAFO III: De dnde viene?"],
        "contexto_real": "Axioma que identifica a Eloí como la fuente primordial de la cual emana toda la energía, materia y vida del universo."
    },
    "Emanacion_Divina": {
        "palabras_clave": ["emanación", "divina", "chispa", "hálito", "proyección"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#4564: PRRAFO III: De dnde viene?"],
        "contexto_real": "El proceso por el cual el Creador lanza a los espíritus a la existencia individual conservando su esencia divina."
    },
    "Finalidad_de_la_Encarnacion": {
        "palabras_clave": ["finalidad", "encarnación", "propósito", "meta", "misión", "tierra"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#4694: PRRAFO IV: Para qu estamos aqu?"],
        "contexto_real": "El propósito del espíritu al tomar un cuerpo físico: progresar, pagar deudas y adquirir sabiduría a través del trabajo."
    },
    "Trabajo_y_Progreso": {
        "palabras_clave": ["trabajo", "progreso", "evolución", "esfuerzo", "ley"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#4694: PRRAFO IV: Para qu estamos aqu?"],
        "contexto_real": "El binomio fundamental que rige la vida espiritual: solo mediante la actividad útil se alcanza la elevación."
    },
    "Adquisicion_de_Saber": {
        "palabras_clave": ["adquisición", "saber", "conocimiento", "experiencia", "archivo"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#4694: PRRAFO IV: Para qu estamos aqu?"],
        "contexto_real": "El objetivo intelectual de la vida: acumular experiencias que se conviertan en sabiduría eterna para el espíritu."
    },
    "Destino_del_Espiritu": {
        "palabras_clave": ["destino", "espíritu", "centro", "final", "meta", "ascenso"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#4790: PRRAFO V: A dnde va?"],
        "contexto_real": "La trayectoria ascendente del ser hacia planos de mayor luz y perfección hasta su reintegración consciente con el Todo."
    },
    "Patria_Espiritual": {
        "palabras_clave": ["patria", "espiritual", "hogar", "espacio", "desencarnado"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#4790: PRRAFO V: A dnde va?"],
        "contexto_real": "El plano de existencia vibratoria que corresponde al grado de progreso de un espíritu cuando no está encarnado."
    },
    "Inexistencia_de_la_Muerte": {
        "palabras_clave": ["inexistencia", "muerte", "vida", "eterna", "ficción", "transición"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#4790: PRRAFO V: A dnde va?"],
        "contexto_real": "Axioma que sostiene que la destrucción del cuerpo físico no interrumpe la continuidad de la vida consciente del espíritu."
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

print("Diccionario Tanda 11 (Asiento) actualizado.")
