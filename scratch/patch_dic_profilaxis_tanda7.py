import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Escarmiento_Necesario": {
        "palabras_clave": ["escarmiento", "necesario", "dolor", "corrección", "espíritu", "ley", "rechazo"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#8373: Cap TUlo deCiMosexTolos: HoMBres"],
        "contexto_real": "La acción correctiva y dolorosa de la ley universal que obliga al espíritu a reconocer su error cuando rechaza la profilaxis racional."
    },
    "Ruptura_Tradicion": {
        "palabras_clave": ["ruptura", "tradición", "abandono", "costumbres", "erradas", "pasado", "doloroso"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#8373: Cap TUlo deCiMosexTolos: HoMBres"],
        "contexto_real": "El acto doloroso pero necesario de abandonar las costumbres erradas del pasado tras haber sufrido sus consecuencias."
    },
    "Responsabilidad_Espiritual": {
        "palabras_clave": ["responsabilidad", "espiritual", "consciencia", "actos", "instrumentos", "cuerpo", "alma"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#8373: Cap TUlo deCiMosexTolos: HoMBres"],
        "contexto_real": "El axioma de que solo el espíritu consciente es responsable de los actos, siendo el cuerpo y el alma animal meros instrumentos."
    },
    "Familia_de_Noe": {
        "palabras_clave": ["familia", "Noé", "misioneros", "encarnados", "liquidación", "kármica", "civilización"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#8490: cuales atribuciones y"],
        "contexto_real": "La agrupación estratégica de los 28 misioneros mayores encarnados simultáneamente para reiniciar la civilización tras la liquidación kármica."
    },
    "Misioneros_Mayores": {
        "palabras_clave": ["misioneros", "mayores", "espíritus", "luz", "encargo", "Consejo", "humanidad"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#8490: cuales atribuciones y"],
        "contexto_real": "Los espíritus de alta luz encargados directamente por el Consejo del Padre para dirigir las grandes etapas de la humanidad."
    },
    "Comuna_Original": {
        "palabras_clave": ["comuna", "original", "núcleo", "fundacional", "sistema", "semilla", "futuro"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#8490: cuales atribuciones y"],
        "contexto_real": "El núcleo fundacional del sistema comunal establecido por los misioneros en la época de Noé como semilla para el futuro."
    },
    "Liquidacion_Planetaria": {
        "palabras_clave": ["liquidación", "planetaria", "saldo", "cuentas", "kármicas", "destrucción", "error"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#8632: Cap TUlo deCiMos pTiMo: NeCesidad de UNa liQUidaCi N"],
        "contexto_real": "El proceso de saldo de cuentas kármicas y destrucción de los sistemas de error necesario para instaurar la Comuna."
    },
    "Transicion_Decisiva": {
        "palabras_clave": ["transición", "decisiva", "crisis", "aguda", "egoísmo", "sexto", "séptimo"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#8632: Cap TUlo deCiMos pTiMo: NeCesidad de UNa liQUidaCi N"],
        "contexto_real": "El periodo de crisis aguda que separa la era del egoísmo (sexto día) de la era de luz y paz (séptimo día)."
    },
    "Juicio_Practico": {
        "palabras_clave": ["juicio", "práctico", "aplicación", "material", "justicia", "obras", "derecho"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#8632: Cap TUlo deCiMos pTiMo: NeCesidad de UNa liQUidaCi N"],
        "contexto_real": "La aplicación material y social de la justicia universal, donde las obras de cada espíritu determinan su derecho a permanecer en la Tierra."
    },
    "Obras_vs_Fe": {
        "palabras_clave": ["obras", "fe", "supremacía", "trabajo", "útil", "ético", "dogma"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#9153: Cap TUlo deCiMoCTavo: de la profilaxis de UNos MisioNeros"],
        "contexto_real": "El principio doctrinal que establece la supremacía del trabajo útil y el comportamiento ético sobre la creencia ciega y el dogma."
    },
    "Historia_Profilactica": {
        "palabras_clave": ["historia", "profiláctica", "recuento", "intervenciones", "misioneros", "luz", "sanar"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#9153: Cap TUlo deCiMoCTavo: de la profilaxis de UNos MisioNeros"],
        "contexto_real": "El recuento de las intervenciones de los misioneros de luz a lo largo de los siglos para sanar y elevar a la humanidad."
    },
    "Continuidad_Misionera": {
        "palabras_clave": ["continuidad", "misionera", "línea", "ininterrumpida", "enviados", "progreso", "Consejo"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#9153: Cap TUlo deCiMoCTavo: de la profilaxis de UNos MisioNeros"],
        "contexto_real": "La ley por la cual el Consejo del Padre mantiene una línea ininterrumpida de enviados para garantizar el cumplimiento del progreso."
    },
    "Progreso_Dosificado": {
        "palabras_clave": ["progreso", "dosificado", "entrega", "gradual", "ciencia", "leyes", "moral"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#9418: Cap TUlo deCiMoNoveNo: pUede el MUNdo Gozar"],
        "contexto_real": "La entrega gradual de descubrimientos científicos y leyes universales en proporción a la capacidad moral de la humanidad para usarlos."
    },
    "Tecnologia_y_Moral": {
        "palabras_clave": ["tecnología", "moral", "avance", "mecánico", "ética", "destrucción", "peligro"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#9418: Cap TUlo deCiMoNoveNo: pUede el MUNdo Gozar"],
        "contexto_real": "El principio que advierte que el avance mecánico sin una correspondiente elevación ética conduce a la destrucción."
    },
    "Madurez_Humana": {
        "palabras_clave": ["madurez", "humana", "evolutivo", "comprender", "fuerzas", "naturaleza", "pacíficos"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#9418: Cap TUlo deCiMoNoveNo: pUede el MUNdo Gozar"],
        "contexto_real": "El estado evolutivo en el cual la humanidad es capaz de comprender y utilizar las fuerzas de la naturaleza con fines puramente comunales y pacíficos."
    }
}

for k, v in nuevos_conceptos.items():
    dic['CONCEPTOS'][k] = v

with open(dic_path, 'w', encoding='utf-8') as f:
    json.dump(dic, f, indent=2, ensure_ascii=False)

print("Diccionario Tanda 7 actualizado: " + str(len(nuevos_conceptos)) + " conceptos precisos.")
