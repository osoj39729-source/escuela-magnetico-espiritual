import json

esencia_path = 'F:/trincado/public/data/contents/espiritismo-en-su-asiento_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "4394: PRRAFO II: Definicin del hombre Voy a dar una breve definicin del hombre, pero firme y asentada para tener fundamento": {
        "PilotoDeCoherencia": "Definición trinitaria del hombre: no es solo un animal evolucionado, sino un espíritu eterno que utiliza el alma y el cuerpo para manifestar la inteligencia en la materia.",
        "CitaInelutable": "Definición del hombre... breve pero firme... resumen de todo el universo.",
        "EjemploPedagogico": "Un barco (cuerpo) movido por el viento (alma) y dirigido por el timonel (espíritu). Sin el timonel, el barco va a la deriva; sin el barco, el timonel no cruza el mar.",
        "IdeasPrincipales": ["Trinidad Humana", "Hombre Resumen", "Actor Evolutivo"],
        "PuntosImportantes": [
            "El hombre resume en su cuerpo todas las leyes de la química y la física",
            "El espíritu es el único actor y autor de la vida inteligente",
            "La trinidad cuerpo-alma-espíritu es indivisible durante la encarnación"
        ],
        "NodosSinapticos": ["Trinidad_Humana", "Hombre_Resumen", "Actor_Evolutivo"],
        "ContextoDiccionario": {
            "Trinidad_Humana": "La constitución del ser humano como una unidad de tres entidades: espíritu (causa), alma (puente) y cuerpo (efecto)."
        }
    },
    "4546: Acotaciones:": {
        "PilotoDeCoherencia": "Recordatorio de la omnisciencia de la ley: cada pensamiento y acto humano queda registrado en el archivo del espíritu y es juzgado por los tribunales superiores.",
        "CitaInelutable": "Acotaciones... no hay ni para los espíritus, ni para los hombres que formaron el tribunal.",
        "EjemploPedagogico": "Escribir un diario con tinta invisible que solo se revela bajo la luz del sol. El juicio es esa luz que muestra todo lo que escribimos en la vida.",
        "IdeasPrincipales": ["Responsabilidad Ante Tribunales", "Justicia del Pensamiento", "Acta de Conciencia"],
        "PuntosImportantes": [
            "La justicia universal no admite sobornos ni engaños",
            "El tribunal permanente de la humanidad vigila el progreso de la Tierra",
            "Cada hombre es su propio fiscal al leer su archivo en el juicio"
        ],
        "NodosSinapticos": ["Responsabilidad_Ante_Tribunales", "Justicia_del_Pensamiento", "Acta_de_Conciencia"],
        "ContextoDiccionario": {
            "Justicia_del_Pensamiento": "El principio de que la ley de responsabilidad abarca no solo las obras físicas, sino también las intenciones y deseos del espíritu."
        }
    },
    "4564: PRRAFO III: De dnde viene? Ya queda contestada esta pregunta arriba. De la substancia nica. Pero hay que razonar": {
        "PilotoDeCoherencia": "Origen divino del espíritu: emanación directa de la Sustancia Única (Eloí) a través del Éter universal, proyectado a la forma para adquirir conciencia individual.",
        "CitaInelutable": "¿De dónde viene? De la substancia única. De Eloí.",
        "EjemploPedagogico": "Un rayo de luz que sale del sol. El rayo es diferente al sol porque tiene una dirección y un punto de impacto, pero su esencia es la luz solar pura.",
        "IdeasPrincipales": ["Origen del Espíritu", "Sustancia Única", "Emanación Divina"],
        "PuntosImportantes": [
            "El espíritu no es creado de la nada, sino que emana del Creador",
            "Su origen es eterno y su destino es el infinito",
            "Viene a la materia para transformar la ignorancia en sabiduría mediante el trabajo"
        ],
        "NodosSinapticos": ["Origen_del_Espiritu", "Sustancia_Unica", "Emanacion_Divina"],
        "ContextoDiccionario": {
            "Sustancia_Única": "Axioma que identifica a Eloí como la fuente primordial de la cual emana toda la energía, materia y vida del universo."
        }
    },
    "4694: PRRAFO IV: Para qu estamos aqu? Ni la tierra ni los mundos que compone el sistema solar; ni todos los de las constelaciones": {
        "PilotoDeCoherencia": "Misión de la existencia: estamos en la Tierra para progresar a través del trabajo, dominando los instintos y adquiriendo el saber necesario para ser ciudadanos del universo.",
        "CitaInelutable": "¿Para qué estamos aquí? Para el trabajo... para ganar sabiduría.",
        "EjemploPedagogico": "Un aprendiz en un taller de orfebrería. Está allí para aprender a manejar las herramientas y el fuego hasta que sea capaz de crear una obra maestra.",
        "IdeasPrincipales": ["Finalidad de la Encarnación", "Trabajo y Progreso", "Adquisición de Saber"],
        "PuntosImportantes": [
            "La Tierra es solo un aula en el inmenso colegio del universo",
            "El dolor es solo un aviso de que nos hemos desviado de la ley de trabajo",
            "Ninguna existencia es en vano; toda experiencia suma al archivo eterno"
        ],
        "NodosSinapticos": ["Finalidad_de_la_Encarnacion", "Trabajo_y_Progreso", "Adquisicion_de_Saber"],
        "ContextoDiccionario": {
            "Finalidad_de_la_Encarnación": "El propósito del espíritu al tomar un cuerpo físico: progresar, pagar deudas y adquirir sabiduría a través del trabajo."
        }
    },
    "4790: PRRAFO V: A dnde va? De lo expuesto est ya contestada esta pregunta. El espritu va a su centro, con su archivo": {
        "PilotoDeCoherencia": "Destino trascendente: el espíritu camina hacia la unión con el Todo (Eloí), pasando por mundos de luz creciente a medida que su archivo se enriquece de amor y sabiduría.",
        "CitaInelutable": "¿A dónde va? El espíritu va a su centro... la muerte no existe; sólo es una ficción.",
        "EjemploPedagogico": "Un río que corre hacia el mar. Puede pasar por túneles oscuros o campos soleados, pero su destino final es fundirse en la inmensidad del océano.",
        "IdeasPrincipales": ["Destino del Espíritu", "Patria Espiritual", "Inexistencia de la Muerte"],
        "PuntosImportantes": [
            "La reencarnación es el mecanismo de ascenso hacia mundos superiores",
            "El espíritu no se distancia de lo que ama; el amor es su ley de gravedad",
            "La verdadera patria del espíritu es el espacio infinito, no la Tierra"
        ],
        "NodosSinapticos": ["Destino_del_Espiritu", "Patria_Espiritual", "Inexistencia_de_la_Muerte"],
        "ContextoDiccionario": {
            "Patria_Espiritual": "El plano de existencia vibratoria que corresponde al grado de progreso de un espíritu cuando no está encarnado."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Asiento Tanda 11 aplicado exitosamente.")
