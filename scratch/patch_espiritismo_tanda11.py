import json

esencia_path = 'F:/trincado/public/data/contents/el-espiritismo-estudiado_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "7652: CAPITULO SEGUNDO: QU SON LOS MDIUMS": {
        "PilotoDeCoherencia": "Definición del médium no como un ser sobrenatural o escogido místico, sino como un instrumento biológico e intermediario natural capaz de percibir y transmitir los fluidos del mundo invisible.",
        "CitaInelutable": "Los médiums son pararrayos de efectos positivos, que recogen todas las impresiones de los que les rodean.",
        "EjemploPedagogico": "Una antena de radio muy sensible que puede captar frecuencias que el oído humano normal no percibe, traduciendo las ondas invisibles en sonido audible para todos.",
        "IdeasPrincipales": ["Qué son los Médiums", "Pararrayos Fluídico", "Sensibilidad Espiritual"],
        "PuntosImportantes": [
            "Todos los seres humanos tienen cierto grado de mediumnidad, pero el 'médium' la tiene ostensible",
            "Su cerebro funciona como un receptor-transmisor de la voluntad de espíritus desencarnados",
            "Recogen fluidos ambientales, por lo que sufren físicamente los ambientes negativos"
        ],
        "NodosSinapticos": ["Que_son_los_Mediums", "Pararrayos_Fluidico", "Puente_Espiritual"],
        "ContextoDiccionario": {
            "Médium": "El individuo orgánicamente predispuesto y espiritualmente desarrollado que sirve de instrumento consciente, parlante o mecánico entre los espíritus libres y los encarnados."
        }
    },
    "7804: CAPITULO TERCERO: CUALIDADES DEL MDIUM": {
        "PilotoDeCoherencia": "Exposición del código moral del médium, quien debe comprender que su facultad es para el servicio de la humanidad y no para su propio engrandecimiento o lucro.",
        "CitaInelutable": "Los médiums son misioneros, y como tales, no se pertenecen a sí mismos, sino a sus hermanos: son seres de sacrificio.",
        "EjemploPedagogico": "Un médico de urgencias en medio de una catástrofe: su habilidad para curar pertenece a los heridos, no puede negarse a ayudar ni cobrar por salvar vidas en ese momento.",
        "IdeasPrincipales": ["Cualidades del Médium", "Misionero del Espíritu", "Abnegación"],
        "PuntosImportantes": [
            "El médium debe cultivar la humildad, el estudio y la higiene mental",
            "La soberbia y el fanatismo atraen inmediatamente a espíritus detractores y burlones",
            "La sociedad debe cuidarlos y respetarlos por su desgaste físico y fluídico"
        ],
        "NodosSinapticos": ["Cualidades_del_Medium", "Misionero_del_Espiritu", "Higiene_Moral"],
        "ContextoDiccionario": {
            "Cualidades_del_Médium": "El conjunto de virtudes morales (abnegación, estudio, humildad) que garantizan que la facultad mediúmnica sea un canal limpio para los espíritus de luz y no un nido de obsesores."
        }
    },
    "8103: PARRAFO II: CUALIDADES POLIGLOTAS Hacemos este prrafito especial porque bien merece comprender el por qu un": {
        "PilotoDeCoherencia": "Explicación de la xenoglosia (hablar lenguas desconocidas) a través de la telepatía universal: los espíritus transmiten ideas puras, no palabras terrestres, y es el archivo del médium el que las traduce.",
        "CitaInelutable": "El espíritu no tiene idioma material... transmite la idea por vibración y el archivo del médium la expresa.",
        "EjemploPedagogico": "Un programa traductor universal en una computadora. El usuario (espíritu) ingresa la idea pura, y el programa (cerebro del médium) arroja el texto en francés, alemán o japonés según se requiera.",
        "IdeasPrincipales": ["Mediumnidad Políglota", "Traducción Telepática", "Archivo Espiritual"],
        "PuntosImportantes": [
            "Destruye el mito religioso del 'don de lenguas' pentecostal",
            "El médium extrae del archivo de sus existencias pasadas los idiomas que ya conoció",
            "La idea es universal; el idioma es una mera limitación física temporal"
        ],
        "NodosSinapticos": ["Mediumnidad_Poliglota", "Traduccion_Telepatica", "Idioma_del_Espiritu"],
        "ContextoDiccionario": {
            "Mediumnidad_Políglota": "La facultad de expresar ideas espirituales en idiomas desconocidos para el médium en su vida actual, utilizando la traducción telepática y los archivos de sus existencias anteriores."
        }
    },
    "8254: CAPITULO CUARTO: LOS MDIUMS MDICOS": {
        "PilotoDeCoherencia": "Condena absoluta del curanderismo místico. Diferenciación estricta entre los verdaderos espíritus médicos (que operan mediante leyes magnéticas y rechazan el espectáculo) y los detractores farsantes.",
        "CitaInelutable": "Estos no son médiums médicos... son los detractores encarnados a propósito para descrédito del espiritismo y son espíritus aberrados a la religión.",
        "EjemploPedagogico": "La diferencia entre un falso chamán que receta rezos y pócimas para el mal de ojo (espiritualista curandero), y un verdadero cirujano que opera en silencio y con precisión técnica (espíritu médico de luz).",
        "IdeasPrincipales": ["Falso Curanderismo", "Médiums Médicos Reales", "Magnetismo Científico"],
        "PuntosImportantes": [
            "Las 'consultas' de adivinanza y brujería son nidos de espíritus bajos y atrasados",
            "Los espíritus de luz no bajan a dar números de lotería ni a resolver chismes de amor",
            "La verdadera curación requiere donación de fluidos limpios y conocimiento de la fisiología espiritual"
        ],
        "NodosSinapticos": ["Medium_Medico", "Curacion_Magnetica", "Falso_Curanderismo"],
        "ContextoDiccionario": {
            "Curanderismo_Místico": "La falsificación del espiritismo mediante prácticas de adivinanza, hechicería, rezos y 'bajadas' de santos, ejecutadas por médiums mercenarios bajo la influencia de espíritus bajos."
        }
    },
    "8553: CAPITULO QUINTO: LOS MDIUMS VIDENTES": {
        "PilotoDeCoherencia": "Valoración de la Videncia como la herramienta de seguridad interna y de exploración más importante del Espiritismo, inseparable del desdoblamiento.",
        "CitaInelutable": "La videncia es la facultad más defensiva del espiritismo, porque advierte al maestro los medios para esquivar o anular las maniobras de los detractores.",
        "EjemploPedagogico": "El sistema de radar de un aeropuerto. El vidente detecta nubes de tormenta fluídica y espíritus saboteadores mucho antes de que ataquen, permitiendo a la cátedra protegerse a tiempo.",
        "IdeasPrincipales": ["Mediumnidad Vidente", "Centinela Espiritual", "Desdoblamiento Visual"],
        "PuntosImportantes": [
            "El vidente estudia y trae el progreso observando directamente mundos más avanzados",
            "Sufren el martirio de ver las bajezas y ataques fluídicos de los detractores en forma visible",
            "Trincado advirtió la Primera Guerra Mundial e intrigas del Vaticano gracias a esta facultad"
        ],
        "NodosSinapticos": ["Medium_Vidente", "Centinela_Espiritual", "Vision_de_Mundos"],
        "ContextoDiccionario": {
            "Videncia": "La facultad sensorial del espíritu, apoyada en el desdoblamiento del periespíritu, que le permite ver realidades, fluidos y entidades en planos invisibles a la vista física."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Espiritismo Tanda 11 aplicado exitosamente.")
