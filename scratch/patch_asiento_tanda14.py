import json

esencia_path = 'F:/trincado/public/data/contents/espiritismo-en-su-asiento_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "6547: Acotaciones:": {
        "PilotoDeCoherencia": "Solidaridad solar: los espíritus del Sol envían su vibración de amor para consolar a la humanidad convaleciente tras el proceso del juicio de mayoría.",
        "CitaInelutable": "Para vosotros, traigo de vuestros hermanos del sol, aromas, armonía... deposita un astrónomo del gran astro.",
        "EjemploPedagogico": "Un rayo de sol que entra en una habitación oscura después de una tormenta. No solo trae luz, sino calor y esperanza para los que sufrieron el frío.",
        "IdeasPrincipales": ["Mensaje Solar", "Consuelo Espiritual", "Solidaridad Planetaria"],
        "PuntosImportantes": [
            "El Sol es una morada de espíritus altamente progresados",
            "La solidaridad no tiene límites de distancia en el universo",
            "La Tierra es recibida con alegría en la comunión de los mundos de luz"
        ],
        "NodosSinapticos": ["Mensaje_Solar", "Consuelo_Espiritual", "Solidaridad_Planetaria"],
        "ContextoDiccionario": {
            "Mensaje_Solar": "Las comunicaciones de alta vibración procedentes de los espíritus que habitan en los centros solares de los sistemas."
        }
    },
    "6563: V (escribe y proclama la ley y el axioma.)": {
        "PilotoDeCoherencia": "Desmitificación de la cruz: el triunfo de la luz sobre el símbolo del sacrificio; Jesús es reconocido como un hombre libre y no como una deidad crucificada.",
        "CitaInelutable": "El vencido es... ¡Una cruz!... El juez ha escrito, que el cristo es un mito y no es Jesús.",
        "EjemploPedagogico": "Quitarse un disfraz pesado y caluroso. La humanidad se quita el 'disfraz' del cristianismo dogmático para ver al hombre real, Jesús, en su verdadera grandeza.",
        "IdeasPrincipales": ["Triunfo de la Luz", "Caída del Mito Cristo", "Jesús Hombre"],
        "PuntosImportantes": [
            "El cristianismo es visto como un estorbo para la verdadera comprensión de Jesús",
            "La cruz es el trofeo de una batalla ganada por la razón",
            "La libertad del espíritu es incompatible con la adoración de símbolos de muerte"
        ],
        "NodosSinapticos": ["Triunfo_de_la_Luz", "Caida_del_Mito_Cristo", "Jesus_Hombre"],
        "ContextoDiccionario": {
            "Jesús_Hombre": "La figura histórica de Jesús de Nazaret despojada de atributos divinos y reconocida como un gran misionero y maestro."
        }
    },
    "6919: VI (escribe y proclama la ley y el axioma.)": {
        "PilotoDeCoherencia": "Descripción de Yale: un mundo de destierro primitivo y hostil en la constelación de Orión, destinado a los espíritus que rechazaron la ley de amor en la Tierra.",
        "CitaInelutable": "El mundo aquel... se llama 'Yale' y es uno de los descritos por el Dante: Pertenece a Orión.",
        "EjemploPedagogico": "Un desierto abrasador donde no hay agua ni sombra. Yale es esa 'sequía espiritual' donde el alma debe aprender a valorar la luz por su ausencia.",
        "IdeasPrincipales": ["Mundo Yale", "Destierro en Orión", "Mundo de Fragua"],
        "PuntosImportantes": [
            "Es un mundo en estado geológico primario (volcanes, huracanes)",
            "Los desterrados deben luchar contra una naturaleza antropófaga e inclemente",
            "La conciencia se despierta a través del esfuerzo rudo por la supervivencia"
        ],
        "NodosSinapticos": ["Mundo_Yale", "Destierro_en_Orion", "Mundo_de_Fragua"],
        "ContextoDiccionario": {
            "Mundo_Yale": "Planeta rudimentario en la constelación de Orión utilizado como destino de destierro para los espíritus prevaricadores de la Tierra."
        }
    },
    "7034: Acotaciones:": {
        "PilotoDeCoherencia": "Cálculo de la justicia cosmogónica: la enorme distancia y el tiempo (30 millones de siglos) reflejan la profundidad del error y el largo camino de redención.",
        "CitaInelutable": "Distar de la tierra... quinientos dos mil millones... leguas. Pasarán, no menos de 30 millones de siglos.",
        "EjemploPedagogico": "Una deuda bancaria con intereses altísimos. Si no pagas a tiempo, la deuda crece tanto que tardarás vidas enteras en saldarla. Así es la deuda del espíritu.",
        "IdeasPrincipales": ["Cálculo Cosmogónico", "Justicia Matemática", "Ciclos de Expulsión"],
        "PuntosImportantes": [
            "La justicia de Eloí es exacta y se mide en distancias y tiempos astronómicos",
            "El destierro no es un castigo, sino el tiempo necesario para cambiar la vibración",
            "La Tierra tardó 45 millones de siglos en llegar a su estado actual desde el hombre"
        ],
        "NodosSinapticos": ["Calculo_Cosmogonico", "Justicia_Matematica", "Ciclos_de_Expulsion"],
        "ContextoDiccionario": {
            "Justicia_Matemática": "El principio de que las consecuencias de los actos espirituales son proporcionales y calculables según leyes universales."
        }
    },
    "7044: VII (escribe y proclama la ley y el axioma.)": {
        "PilotoDeCoherencia": "Grados de destierro: el mundo Samur como ejemplo de una estancia menos rigurosa para espíritus con menor grado de aberración, ya en proceso de juicio.",
        "CitaInelutable": "Otros menos aberrados, fueron desterrados a otros mundos como Samur... pronto han de sufrir su juicio.",
        "EjemploPedagogico": "Un curso de regularización. Samur es para los alumnos que solo reprobaron algunas materias, no para los que quemaron la escuela ( Yale).",
        "IdeasPrincipales": ["Mundo Samur", "Grados de Expulsión", "Progreso Interplanetario"],
        "PuntosImportantes": [
            "La justicia gradúa el destierro según la responsabilidad de cada espíritu",
            "Los mundos de destierro también progresan gracias a los conocimientos que llevan los expulsados",
            "El fin último es que todos los mundos de la creación alcancen la luz"
        ],
        "NodosSinapticos": ["Mundo_Samur", "Grados_de_Expulsion", "Progreso_Interplanetario"],
        "ContextoDiccionario": {
            "Mundo_Samur": "Destino de destierro intermedio para espíritus que, sin ser criminales de alta escala, se opusieron al progreso racional."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Asiento Tanda 14 aplicado exitosamente.")
