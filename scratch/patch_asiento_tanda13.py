import json

esencia_path = 'F:/trincado/public/data/contents/espiritismo-en-su-asiento_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "5639: I: Mayo 3 de 1912. Un espiritualista.": {
        "PilotoDeCoherencia": "Testimonio de rectificación: el reconocimiento de que el espiritualismo místico es una venda que impide ver la realidad cruda y radiante del espíritu.",
        "CitaInelutable": "Mayo 3 de 1912. Un espiritualista... reconozco mi error y la luz de esta Escuela.",
        "EjemploPedagogico": "Despertar de un sueño fantástico para encontrarse en un taller de trabajo real. El sueño era bello pero inútil; el taller es exigente pero te da la vida.",
        "IdeasPrincipales": ["Fracaso del Espiritualismo", "Testimonio de Ultratumba", "Rectificación Espiritual"],
        "PuntosImportantes": [
            "El espiritualismo amalgama verdades con errores dogmáticos",
            "La Escuela Magnético-Espiritual es el único faro de luz racional tras el juicio",
            "Los espíritus que fueron místicos sufren al ver la sencillez de la verdad que negaron"
        ],
        "NodosSinapticos": ["Fracaso_del_Espiritualismo", "Testimonio_de_Ultratumba", "Rectificación_Espiritual"],
        "ContextoDiccionario": {
            "Fracaso_del_Espiritualismo": "La incapacidad de las doctrinas espiritualistas para ofrecer una solución racional y social a los problemas de la humanidad."
        }
    },
    "5693: II (PARTE TERCERA: El derecho de los esp ritos: Alta leccin)": {
        "PilotoDeCoherencia": "Redefinición del amor social: el amor no es un sentimiento egoísta de pareja o familia, sino la voluntad activa de bienestar común de 'todos para todos'.",
        "CitaInelutable": "En la tierra, no hay pueblo ni hay familia, porque no hay amor... el amor es acción de voluntad de todos para todos.",
        "EjemploPedagogico": "Una colmena de abejas. No hay abejas 'ricas' ni 'pobres'; el amor es el trabajo incesante de cada una para que la colmena entera sobreviva y prospere.",
        "IdeasPrincipales": ["Amor Acción", "Amor Comunal", "Desvirtuación de la Familia"],
        "PuntosImportantes": [
            "La familia actual es solo una forma biológica sin el contenido espiritual de justicia",
            "El amor real se demuestra en la acción comunal, no en palabras de caridad",
            "El código de amor místico es reemplazado por el código de amor-justicia"
        ],
        "NodosSinapticos": ["Amor_Accion", "Amor_Comunal", "Desvirtuacion_de_la_Familia"],
        "ContextoDiccionario": {
            "Amor_Acción": "La definición trincadista del amor como un acto de voluntad orientado al servicio y bienestar del prójimo."
        }
    },
    "5981: escribe y proclama la ley y el axioma.": {
        "PilotoDeCoherencia": "Abolición de los estorbos a la fraternidad: condena de las fronteras nacionales y de la caridad, proclamando la Unidad en la Comuna como ley única.",
        "CitaInelutable": "Condenamos la caridad hipócrita... proclamamos el amor, la justicia y la unidad en la comuna.",
        "EjemploPedagogico": "Un mapa del mundo sin líneas divisorias. La Tierra es una sola casa y todos sus habitantes son una sola familia sin 'patrias' que los dividan.",
        "IdeasPrincipales": ["Condena de la Caridad", "Abolición de Fronteras", "Unidad en la Comuna"],
        "PuntosImportantes": [
            "La caridad es un insulto a la justicia; el hombre no necesita limosna, sino su derecho",
            "Las fronteras son invenciones del egoísmo para mantener la supremacía de pocos",
            "La comuna es el estado natural de los mundos que han alcanzado su 'séptimo día'"
        ],
        "NodosSinapticos": ["Condena_de_la_Caridad", "Abolicion_de_Fronteras", "Unidad_en_la_Comuna"],
        "ContextoDiccionario": {
            "Condena_de_la_Caridad": "Postura doctrinal que rechaza la limosna por considerarla un sustituto injusto del derecho y la igualdad social."
        }
    },
    "6062: Acotaciones:": {
        "PilotoDeCoherencia": "El mensaje de Rafael: el universo es una comuna solidaria regida por la ley del trabajo, donde el espíritu es libre de volar por el Éter sin trabas materiales.",
        "CitaInelutable": "Yo, Rafael... la ley es el trabajo... nada propio; todo comunal. ¿No es esto justicia?",
        "EjemploPedagogico": "Un satélite en órbita. No necesita fronteras ni propiedad privada para cumplir su función; se mueve por las leyes universales en beneficio de todos.",
        "IdeasPrincipales": ["Ley del Trabajo", "Comuna Solidaria", "Metáfora de las Alas"],
        "PuntosImportantes": [
            "El trabajo es la única fuente legítima de propiedad, y esta es siempre común",
            "Las 'alas' de los ángeles son en realidad la potencia vibratoria del espíritu",
            "La justicia del Padre es dar a cada uno según su obra y no según su rango"
        ],
        "NodosSinapticos": ["Ley_del_Trabajo", "Comuna_Solidaria", "Metafora_de_las_Alas"],
        "ContextoDiccionario": {
            "Ley_del_Trabajo": "Axioma universal que establece que la actividad útil es el único medio de progreso y sustento para todo ser."
        }
    },
    "6319: IV (escribe y proclama la ley y el axioma.)": {
        "PilotoDeCoherencia": "Advertencia final sobre el destierro: los que rechacen la ley de amor serán expulsados a mundos rudimentarios para aprender por el dolor lo que negaron por soberbia.",
        "CitaInelutable": "El Padre os destina a la morada donde su voz será más estridente... allí será el crujir de dientes.",
        "EjemploPedagogico": "Un criminal que prefiere la selva a la ciudad civilizada. Se le envía a la selva hasta que comprenda que la ley social era para su beneficio.",
        "IdeasPrincipales": ["Destino de los Obstinados", "Mundos de Expiación", "Justicia sin Misericordia"],
        "PuntosImportantes": [
            "El juicio de mayoría es definitivo para la presente generación de la Tierra",
            "La misericordia no existe frente a la ley de causalidad: cada uno va a donde pertenece",
            "El destierro es el último recurso pedagógico del Padre para los prevaricadores"
        ],
        "NodosSinapticos": ["Destino_de_los_Obstinados", "Mundos_de_Expiacion", "Justicia_sin_Misericordia"],
        "ContextoDiccionario": {
            "Destino_de_los_Obstinados": "El proceso de selección espiritual donde los seres que se oponen al progreso son trasladados a mundos inferiores."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Asiento Tanda 13 aplicado exitosamente.")
