import json

esencia_path = 'F:/trincado/public/data/contents/espiritismo-en-su-asiento_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "46: PROGRAMA PERPETUO DE ESTUDIOS: LA VIDA ETERNA Y CONTINUADA": {
        "PilotoDeCoherencia": "Definición de la educación espiritual como un proceso infinito y continuo, reflejo de la inmortalidad del espíritu y la inmensidad de la creación.",
        "CitaInelutable": "PROGRAMA PERPETUO DE ESTUDIOS: LA VIDA ETERNA Y CONTINUADA.",
        "EjemploPedagogico": "Un software que se actualiza constantemente para procesar datos más complejos. El estudio perpetuo es la 'actualización' constante de nuestra comprensión del universo.",
        "IdeasPrincipales": ["Programa Perpetuo", "Vida Eterna", "Estudio Continuado"],
        "PuntosImportantes": [
            "El espíritu nunca deja de aprender porque el progreso es la ley",
            "La muerte no interrumpe el estudio; solo cambia el aula",
            "La Escuela ofrece las bases para este desarrollo infinito"
        ],
        "NodosSinapticos": ["Programa_Perpetuo", "Vida_Eterna", "Estudio_Continuado"],
        "ContextoDiccionario": {
            "Programa_Perpetuo": "El plan de evolución intelectual y moral que el espíritu sigue a través de sus infinitas existencias."
        }
    },
    "50: DISTRIBUCIN: CONFERENCIAS VERBALES Y MEDIANMICAS": {
        "PilotoDeCoherencia": "Explicación del método pedagógico de la Escuela, que integra la razón humana (verbal) con la sabiduría del mundo espiritual (medianímica) en un sistema coherente.",
        "CitaInelutable": "DISTRIBUCIÓN: CONFERENCIAS VERBALES Y MEDIANÍMICAS.",
        "EjemploPedagogico": "Un laboratorio donde el científico (verbal) consulta bases de datos globales (medianímica) para validar sus experimentos. La verdad surge de la coincidencia de ambos.",
        "IdeasPrincipales": ["Conferencias Verbales", "Comunicaciones Medianímicas", "Método Pedagógico"],
        "PuntosImportantes": [
            "La mediumnidad debe estar siempre bajo el control de la razón",
            "Las conferencias verbales preparan el ambiente para la comunicación de luz",
            "No se admite nada por fe; todo debe ser analizado y comprobado"
        ],
        "NodosSinapticos": ["Conferencias_Verbales", "Comunicaciones_Medianimicas", "Metodo_Pedagogico"],
        "ContextoDiccionario": {
            "Método_Pedagógico": "El sistema de enseñanza de la EMECU basado en el estudio racional de textos y la experimentación mediúnica controlada."
        }
    },
    "74: Prlogo de la 2. Edicin": {
        "PilotoDeCoherencia": "Fundamentación de la obra como una herramienta de limpieza mental y social, destinada a derribar los muros de la ignorancia y el prejuicio religioso.",
        "CitaInelutable": "Como Draga y como Aplanadora, mandamos por delante el acerado folleto Strossmayer y el aplastante de errores: El Primer Rayo de Luz.",
        "EjemploPedagogico": "Un equipo de saneamiento que entra en un pantano para canalizar las aguas. La 'Draga' quita el lodo (dogma) y la 'Aplanadora' prepara el suelo para el nuevo edificio social.",
        "IdeasPrincipales": ["Draga Doctrinal", "Aplanadora de Errores", "Luz en el Camino"],
        "PuntosImportantes": [
            "La obra de Trincado es una demolición necesaria de los viejos errores",
            "El Primer Rayo de Luz y Strossmayer son los cimientos de este estudio",
            "Busca abrir canales limpios para que la razón de los hombres no se estanque"
        ],
        "NodosSinapticos": ["Draga_Doctrinal", "Aplanadora_de_Errores", "Luz_en_el_Camino"],
        "ContextoDiccionario": {
            "Draga_Doctrinal": "Metáfora que describe la acción de la doctrina de remover los errores profundos y sedimentados de la mente humana."
        }
    },
    "95: llevar a sus lectores a las mansiones de ATHANASIA (inmortalidad) seguro de conseguir su": {
        "PilotoDeCoherencia": "Promesa de elevación espiritual hacia la inmortalidad consciente, donde el individuo reconoce su naturaleza eterna y se libera del temor a lo desconocido.",
        "CitaInelutable": "llevar a sus lectores a las mansiones de «ATHANASIA» (inmortalidad) seguro de conseguir su fin.",
        "EjemploPedagogico": "Recibir la llave de una casa eterna. Ya no eres un inquilino temporal en la tierra; ahora sabes que eres el dueño de tu propia eternidad consciente.",
        "IdeasPrincipales": ["Athanasia", "Inmortalidad Consciente", "Mansiones Espirituales"],
        "PuntosImportantes": [
            "La inmortalidad no se gana, se reconoce a través del estudio",
            "Athanasia es el estado del espíritu que ya no puede ser engañado por la materia",
            "La lectura razonada es el mapa para llegar a este estado de luz"
        ],
        "NodosSinapticos": ["Athanasia", "Inmortalidad_Consciente", "Mansiones_Espirituales"],
        "ContextoDiccionario": {
            "Athanasia": "Término griego que significa inmortalidad, utilizado por Trincado para designar el estado de conciencia plena de la vida eterna."
        }
    },
    "99: ilustrado a los hombres en los axiomas de la verdad suprema, en ms de CIEN CTEDRAS,": {
        "PilotoDeCoherencia": "Evidencia del progreso de la Escuela a través de la formación de centros de sabiduría (cátedras) que elevan el nivel intelectual y moral de la humanidad.",
        "CitaInelutable": "ilustrado a los hombres en los axiomas de la verdad suprema, en más de CIEN CÁTEDRAS.",
        "EjemploPedagogico": "Una red de faros que iluminan una costa peligrosa. Cada cátedra es un faro que evita que los buscadores de la verdad naufraguen en el misticismo.",
        "IdeasPrincipales": ["Cátedras de Sabiduría", "Verdad Suprema", "Elevación del Espíritu"],
        "PuntosImportantes": [
            "La verdad suprema no es una creencia, sino una ilustración axiomática",
            "Las cátedras son el núcleo de la Comuna Universal en formación",
            "La meta es que cada hombre sea una cátedra viviente de sabiduría"
        ],
        "NodosSinapticos": ["Catedras_de_Sabiduria", "Verdad_Suprema", "Elevacion_del_Espiritu"],
        "ContextoDiccionario": {
            "Cátedras_de_Sabiduría": "Centros de estudio y fraternidad de la EMECU donde se imparte la doctrina del Espiritismo Luz y Verdad."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Asiento Tanda 3 aplicado exitosamente.")
