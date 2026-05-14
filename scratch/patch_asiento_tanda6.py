import json

esencia_path = 'F:/trincado/public/data/contents/espiritismo-en-su-asiento_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "1442: CAPTULO I: Enemigos del espiritismo": {
        "PilotoDeCoherencia": "Identificación de los detractores: el enemigo más peligroso no es la oposición externa, sino la infección interna del misticismo y la ignorancia que debilita la doctrina.",
        "CitaInelutable": "El microbio que causó su tisis... los enemigos del espiritismo son la ignorancia y el misticismo.",
        "EjemploPedagogico": "Un barco que se hunde no por las olas de afuera, sino por una vía de agua interna que nadie quiere tapar. El misticismo es esa vía de agua en el barco del espiritismo.",
        "IdeasPrincipales": ["Enemigos Internos", "Misticismo Destructivo", "Religiones Externas"],
        "PuntosImportantes": [
            "Las religiones atacan por miedo a perder su dominio sobre las conciencias",
            "El misticismo dentro de los centros es una traición a la razón",
            "La única defensa es el estudio austero y la práctica de la justicia"
        ],
        "NodosSinapticos": ["Enemigos_Internos", "Misticismo_Destructivo", "Religiones_Externas"],
        "ContextoDiccionario": {
            "Enemigos_Internos": "Término que designa a los adeptos que, por ignorancia o misticismo, desvirtúan la doctrina y causan su desprestigio."
        }
    },
    "1616: CAPITULO II: Los mdiums; lo que son y sus cualidades": {
        "PilotoDeCoherencia": "Definición técnica del médium como un instrumento de comunicación vibratoria, cuyo valor reside en su higiene moral y su capacidad de despojo personal.",
        "CitaInelutable": "Los médiums; lo que son y sus cualidades... un puente vibratorio.",
        "EjemploPedagogico": "Un traductor en una conferencia internacional. Si el traductor pone sus propias ideas en vez de las del orador, la comunicación falla. El médium debe ser un traductor fiel.",
        "IdeasPrincipales": ["Mediumnidad Racional", "Puente Vibratorio", "Cualidades Mediúnicas"],
        "PuntosImportantes": [
            "La facultad es un deber, no un don privilegiado",
            "La moralidad del médium determina la calidad de los espíritus que se comunican",
            "El médium debe ser el primero en analizar racionalmente lo que recibe"
        ],
        "NodosSinapticos": ["Mediumnidad_Racional", "Puente_Vibratorio", "Cualidades_Mediunicas"],
        "ContextoDiccionario": {
            "Mediumnidad_Racional": "La práctica de la comunicación espiritual basada en leyes naturales y controlada rigurosamente por la razón humana."
        }
    },
    "1720: discusiones, les estorba la facultad.": {
        "PilotoDeCoherencia": "La importancia de la armonía colectiva: las vibraciones bajas de la discordia y el ego actúan como interferencias que anulan la recepción de luz.",
        "CitaInelutable": "discusiones, les estorba la facultad... la armonía es ley.",
        "EjemploPedagogico": "Intentar escuchar una melodía suave en medio de un mercado ruidoso. El ruido de las discusiones impide que el alma del médium 'escuche' la vibración superior.",
        "IdeasPrincipales": ["Armonía Vibratoria", "Bloqueo Mediúnico", "Ego en el Centro"],
        "PuntosImportantes": [
            "El centro espírita debe ser un remanso de paz para ser efectivo",
            "Las discusiones por amor propio son el veneno de la facultad",
            "La cadena fluídica se rompe ante el primer pensamiento de odio o envidia"
        ],
        "NodosSinapticos": ["Armonia_Vibratoria", "Bloqueo_Mediunico", "Ego_en_el_Centro"],
        "ContextoDiccionario": {
            "Armonía_Vibratoria": "El estado de equilibrio y paz colectiva necesario para que se produzcan fenómenos mediúnicos de alta luz."
        }
    },
    "1796: CAPTULO III: Las comunicaciones y manifestaciones": {
        "PilotoDeCoherencia": "Criterio de validación de mensajes: la autoridad de una comunicación no reside en el nombre que se firma, sino en la profundidad y utilidad del fondo doctrinario.",
        "CitaInelutable": "Las comunicaciones y manifestaciones... no es el nombre, es el fondo.",
        "EjemploPedagogico": "Un billete de banco. No importa quién te lo entregue, lo que importa es que sea auténtico y tenga valor legal. La verdad es el valor legal del mensaje.",
        "IdeasPrincipales": ["Análisis de Comunicaciones", "Fondo sobre Forma", "Manifestaciones Espirituales"],
        "PuntosImportantes": [
            "Los nombres ilustres son a menudo usados por espíritus burlones",
            "Una comunicación de luz siempre enseña algo nuevo o aclara un error",
            "Las manifestaciones físicas deben servir siempre a un fin pedagógico"
        ],
        "NodosSinapticos": ["Analisis_de_Comunicaciones", "Fondo_sobre_Forma", "Manifestaciones_Espirituales"],
        "ContextoDiccionario": {
            "Fondo_sobre_Forma": "Principio crítico que prioriza el contenido moral e intelectual de una comunicación sobre la identidad pretendida del espíritu."
        }
    },
    "1996: CAPTULO IV: Consecuencias del mal uso del espiritismo": {
        "PilotoDeCoherencia": "Advertencia sobre la muerte moral: el uso del espiritismo para el lucro, la curiosidad o el misticismo convierte al adepto en un autómata de voluntades bajas.",
        "CitaInelutable": "Consecuencias del mal uso del espiritismo... tisis del espiritismo... beatería y fanatismo.",
        "EjemploPedagogico": "Convertir un telescopio en un juguete para ver la vida de los vecinos. Dejas de ver las estrellas y te hundes en el chisme. El mal uso te ciega para la luz universal.",
        "IdeasPrincipales": ["Mal Uso del Espiritismo", "Obsesión Espiritual", "Muerte Moral"],
        "PuntosImportantes": [
            "El espiritualismo beato es el 'microbio' que enferma la doctrina",
            "La falta de energía y razón conduce a la esclavitud mediúnica",
            "El fanatismo es tan dañino como la ignorancia en las filas de la Escuela"
        ],
        "NodosSinapticos": ["Mal_Uso_del_Espiritismo", "Obsesion_Espiritual", "Muerte_Moral"],
        "ContextoDiccionario": {
            "Muerte_Moral": "Estado de degradación de la conciencia que ocurre cuando el individuo utiliza conocimientos superiores para fines egoístas o místicos."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Asiento Tanda 6 aplicado exitosamente.")
