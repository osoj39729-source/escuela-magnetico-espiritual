import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

parche_sinapsis = {
    "Mito_de_Cain_y_Abel": {
        "palabras_clave": ["caín", "abel", "trabajo", "parasitismo", "símbolo", "mito"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#724: PRRAFO II: CAN Y ABEL..."],
        "contexto_real": "Alegoría de la lucha entre el hombre materialista que trabaja y progresa (Caín) y el hombre dogmático que vive a expensas de los demás (Abel)."
    },
    "Trabajo_vs_Parasitismo": {
        "palabras_clave": ["trabajo", "esfuerzo", "parasitismo", "mística", "caín"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#724: PRRAFO II: CAN Y ABEL..."],
        "contexto_real": "La oposición entre el espíritu que progresa mediante el trabajo activo (Caín) y el que se estanca esperando la gracia divina (Abel)."
    },
    "Mandato_de_Evolucion": {
        "palabras_clave": ["mandato", "evolución", "progreso", "eloi", "trabajo obligatorio"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#888: CAPTULO TERCERO: MANDATO DEL PADRE CREADOR A SUS HIJOS"],
        "contexto_real": "La orden inmutable del Padre a los espíritus de encarnar, trabajar y dominar la materia para autoconquistar su progreso en amor y sabiduría."
    },
    "Progreso_Obligatorio": {
        "palabras_clave": ["progreso", "ley", "evolución", "ineludible", "destino"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#888: CAPTULO TERCERO: MANDATO DEL PADRE CREADOR A SUS HIJOS"],
        "contexto_real": "El avance evolutivo del espíritu no es opcional; es una consecuencia natural de la ley de afinidad que lo impulsa hacia grados superiores."
    },
    "Ausencia_de_Castigo_Divino": {
        "palabras_clave": ["castigo", "dios", "corrección", "ley natural", "consecuencia"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#888: CAPTULO TERCERO: MANDATO DEL PADRE CREADOR A SUS HIJOS"],
        "contexto_real": "El rechazo a la idea de un Dios vengativo: la ley natural corrige automáticamente sin necesidad de castigos arbitrarios externos."
    },
    "Mundo_de_Expiacion": {
        "palabras_clave": ["expiación", "tierra", "dolor", "escuela", "espíritus rebeldes"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#971: PRRAFO II: EL MUNDO DE EXPIACIN..."],
        "contexto_real": "Categoría evolutiva de un planeta (como la Tierra durante la era adámica) destinado a recibir espíritus que necesitan aprender mediante el dolor y el choque material."
    },
    "Escuela_del_Dolor": {
        "palabras_clave": ["dolor", "sufrimiento", "aprendizaje", "materia", "expiación"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#971: PRRAFO II: EL MUNDO DE EXPIACIN..."],
        "contexto_real": "La comprensión de que el sufrimiento en mundos de expiación no es castigo sino el mecanismo pedagógico más eficaz para corregir la rebelión espiritual."
    },
    "Luz_por_el_Trabajo": {
        "palabras_clave": ["luz", "trabajo", "progreso", "esfuerzo", "materia"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#971: PRRAFO II: EL MUNDO DE EXPIACIN..."],
        "contexto_real": "El principio de que solo a través del trabajo consciente en la materia el espíritu gana la luz (conocimiento y grado) que le permite ascender."
    },
    "Sangre_Adamica": {
        "palabras_clave": ["sangre", "57 siglos", "violencia", "millones", "sacrificio"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#1165: PRRAFO III: LA SANGRE DERRAMADA EN 57 SIGLOS..."],
        "contexto_real": "Metáfora y realidad histórica de los crímenes cometidos en nombre de deidades a lo largo de los 57 siglos de existencia de las religiones en la Tierra."
    },
    "Violencia_Dogmatica": {
        "palabras_clave": ["violencia", "dogma", "inquisición", "guerras santas", "crimen"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#1165: PRRAFO III: LA SANGRE DERRAMADA EN 57 SIGLOS..."],
        "contexto_real": "La violencia sistémica y estructural ejercida durante milenios por las instituciones religiosas para mantener su poder."
    },
    "Fin_de_la_Supremacia": {
        "palabras_clave": ["supremacía", "fin", "fraternidad", "igualdad", "nueva era"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#1165: PRRAFO III: LA SANGRE DERRAMADA EN 57 SIGLOS..."],
        "contexto_real": "El anuncio del término del ciclo de supremacías religiosas y políticas, marcando el inicio de la era de fraternidad universal."
    },
    "Cuerpo_del_Espiritismo": {
        "palabras_clave": ["cuerpo", "anatomía", "leyes", "amor", "estructura"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#1438: CAPTULO CUARTO: LEY NICA DEL ESPIRITISMO: EL AMOR"],
        "contexto_real": "La metáfora anatómica que describe el Espiritismo como un cuerpo vivo donde el Amor es cabeza y las leyes derivadas son sus extremidades funcionales."
    },
    "Afinidad_y_Justicia": {
        "palabras_clave": ["afinidad", "justicia", "brazos", "ejecutores", "amor"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#1438: CAPTULO CUARTO: LEY NICA DEL ESPIRITISMO: EL AMOR"],
        "contexto_real": "Las dos leyes ejecutoras del Amor: la afinidad que agrupa y la justicia que corrige, actuando como brazos del cuerpo del Espiritismo."
    }
}

for k, v in parche_sinapsis.items():
    if k not in dic["CONCEPTOS"]:
        dic["CONCEPTOS"][k] = v

with open(dic_path, 'w', encoding='utf-8') as f:
    json.dump(dic, f, indent=2, ensure_ascii=False)

print("Parche de brecha sináptica Tanda 3 aplicado. Todos los nodos ahora enlazados.")
