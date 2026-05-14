import json

esencia_path = 'F:/trincado/public/data/contents/el-espiritismo-estudiado_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "4037: CAPITULO II: LAS CIENCIAS ANTE EL ESPIRITISMO": {
        "PilotoDeCoherencia": "Definición de las ciencias materiales como herramientas limitadas que clasifican efectos (la materia), pero que al negar al espiritismo, ignoran la causa primera (el espíritu).",
        "CitaInelutable": "Ciencia no es más que las escorias de las facultades del Espíritu... si la ciencia brilla, ¿cómo brillará la facultad que la crea?",
        "EjemploPedagogico": "Un estudiante que se maravilla midiendo las sombras proyectadas en la pared (ciencia material) pero se niega a voltear para estudiar la luz y la mano que las produce (el espíritu y el espiritismo).",
        "IdeasPrincipales": ["Ciencias Materiales", "Efecto sin Causa", "Origen de la Ciencia"],
        "PuntosImportantes": [
            "La ciencia material es hija de la facultad espiritual, no su creadora",
            "La negación del espíritu vuelve a la ciencia ciega a la realidad causal",
            "El Espiritismo no rechaza la ciencia, la eleva al nivel de la causa"
        ],
        "NodosSinapticos": ["Ciencias_Materiales", "Efecto_sin_Causa", "Origen_de_la_Ciencia"],
        "ContextoDiccionario": {
            "Ciencias_Materiales": "El conjunto de disciplinas que estudian la mecánica de la materia pero que, sin el espiritismo, resultan incompletas al ignorar el motor inteligente (el espíritu) que las rige."
        }
    },
    "4115: PARRAFO II: MATERIALISTAS Y ESPIRITUALISTAS Los materialistas quieren que todo proceda y sea de la materia y que todo vuelva a": {
        "PilotoDeCoherencia": "Crítica a las dos corrientes extremas: el materialismo que niega el espíritu y el espiritualismo dogmático que lo separa de la materia, presentando al Espiritismo como la síntesis racional.",
        "CitaInelutable": "Los materialistas quieren que todo sea de la materia... El Espiritismo une a ambos: la materia es la herramienta, el espíritu el obrero.",
        "EjemploPedagogico": "Un obrero (materialista) que cree que el martillo construye la casa solo, frente a un soñador (espiritualista) que cree que la casa se construye rezando. El Espiritismo es el arquitecto que une al obrero con el plano.",
        "IdeasPrincipales": ["Falsa Dicotomía", "Síntesis Racional", "Error del Materialismo"],
        "PuntosImportantes": [
            "El materialismo es una reacción lógica a los absurdos religiosos, pero cae en la ceguera",
            "El espiritualismo antiguo (religiones) es la madre de la ignorancia por su mistificación",
            "El verdadero Espiritismo exige la unión inquebrantable de Espíritu y Materia"
        ],
        "NodosSinapticos": ["Falsa_Dicotomia", "Sintesis_Racional", "Error_del_Materialismo"],
        "ContextoDiccionario": {
            "Síntesis_Racional": "La postura filosófica del Espiritismo que unifica la materia y el espíritu como realidades interdependientes e inseparables para la evolución, rechazando tanto el materialismo ateo como el espiritualismo místico."
        }
    },
    "4387: CAPTULO TERCERO: LAS RELIGIONES ANTE EL ESPIRITISMO": {
        "PilotoDeCoherencia": "Exposición del antagonismo absoluto entre las religiones (basadas en el dogma y el milagro) y el espiritismo (basado en la comprobación y la ley natural).",
        "CitaInelutable": "Bastó siempre la iniciación de una teoría científica para que la religión la condenase, porque descubría los embrollos de los ritos y los dogmas.",
        "EjemploPedagogico": "Un estafador (religión) que apaga las luces para hacer un 'milagro', y condena a muerte al físico (espiritismo) que enciende la luz y muestra los cables que movían el truco.",
        "IdeasPrincipales": ["Antagonismo Religioso", "Fin del Milagro", "Condenación Dogmática"],
        "PuntosImportantes": [
            "El espiritismo demuele la necesidad de dioses intermediarios e iglesias",
            "Todo supuesto milagro es solo la aplicación de leyes magnéticas desconocidas por el vulgo",
            "Las religiones atacan al espiritismo en defensa propia, porque es su final inevitable"
        ],
        "NodosSinapticos": ["Antagonismo_Religioso", "Fin_del_Milagro", "Condenacion_Dogmatica"],
        "ContextoDiccionario": {
            "Antagonismo_Religioso": "La oposición existencial inevitable entre el sistema de creencias basado en el misterio, el dogma y el temor (religiones) y la ciencia basada en la ley, el análisis y la fraternidad (Espiritismo)."
        }
    },
    "4588: CAPITULO CUARTO: LOS QUE PROTESTAN DEL ESPIRITISMO": {
        "PilotoDeCoherencia": "Identificación de los detractores del espiritismo no como escépticos racionales, sino como mercaderes asustados que temen perder el monopolio del lucro sobre la ignorancia.",
        "CitaInelutable": "Los que protestan del espiritismo son los que viven del misterio y del engaño; protestan porque la luz les quita el pan que roban a la ignorancia.",
        "EjemploPedagogico": "El gremio de fabricantes de velas y lámparas de aceite organizando protestas violentas contra la invención de la bombilla eléctrica, no porque sea mala, sino porque arruina su negocio milenario.",
        "IdeasPrincipales": ["Detractores del Espiritismo", "Defensa de Privilegios", "Lucro sobre la Ignorancia"],
        "PuntosImportantes": [
            "La protesta contra el espiritismo es económica y política, no científica",
            "Los sacerdotes y falsos maestros ven peligrar su influencia sobre las masas",
            "La verdad no necesita protestar; se impone por su propio peso"
        ],
        "NodosSinapticos": ["Detractores_del_Espiritismo", "Defensa_de_Privilegios", "Lucro_sobre_la_Ignorancia"],
        "ContextoDiccionario": {
            "Detractores_del_Espiritismo": "Grupos de interés (sacerdotes, políticos, seudo-científicos) que combaten la difusión de la verdad espiritual exclusivamente para proteger los privilegios económicos y de dominación que extraen de la ignorancia popular."
        }
    },
    "4789: CAPITULO QUINTO: LA MEDICINA ANTE EL ESPIRITISMO": {
        "PilotoDeCoherencia": "Crítica estructural a la medicina alopática materialista que busca curar los efectos en la carne e ignora las causas que residen en el espíritu, el alma y el magnetismo.",
        "CitaInelutable": "Buscan el alma a punta de cuchillo en los cadáveres... El cadáver no es más que las escorias que arroja el maquinista que movía la máquina-hombre.",
        "EjemploPedagogico": "Un mecánico inexperto que desarma el motor de un coche averiado buscando al conductor que provocó el accidente, sin entender que el conductor (espíritu) ya se bajó del vehículo.",
        "IdeasPrincipales": ["Medicina Materialista", "Búsqueda en Cadáveres", "Curación Magnética"],
        "PuntosImportantes": [
            "La medicina que ignora al espíritu es brutal y produce más daño que cura",
            "La autopsia es frecuentemente una profanación que atormenta al espíritu desencarnado",
            "La verdadera medicina del futuro integrará el magnetismo y la mediúmnidad (curas de Paracelso y Jesús)"
        ],
        "NodosSinapticos": ["Medicina_Materialista", "Autopsia_como_Profanacion", "Medicina_del_Futuro"],
        "ContextoDiccionario": {
            "Medicina_Materialista": "La ciencia médica que, al ignorar la constitución tripartita del hombre (cuerpo, alma, espíritu) y las leyes del magnetismo, fracasa en sus diagnósticos al confundir los efectos físicos con las causas espirituales."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Espiritismo Tanda 7 aplicado exitosamente.")
