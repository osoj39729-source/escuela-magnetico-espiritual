import json

esencia_path = 'F:/trincado/public/data/contents/el-espiritismo-estudiado_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "11350: CAPTULO DIEZ: GRANDES Y RAROS FENMENOS": {
        "PilotoDeCoherencia": "Explicación de fenómenos extremos (bicorporeidad, invisibilidad, avisos premonitorios) como manifestaciones de la potencia del espíritu que opera sobre el éter y la materia en condiciones de alta necesidad o misión.",
        "CitaInelutable": "GRANDES Y RAROS FENÓMENOS... Es la fuerza de los espíritus, en el deseo de una voluntad completa.",
        "EjemploPedagogico": "Un sistema de comunicación cuántico que envía datos de forma instantánea. Los fenómenos raros son 'cuantos' espirituales donde la voluntad anula el tiempo y el espacio ordinarios.",
        "IdeasPrincipales": ["Fenómenos Raros", "Bicorporeidad", "Potencia del Espíritu"],
        "PuntosImportantes": [
            "La invisibilidad es una envoltura de fluidos que desvía la luz física",
            "La bicorporeidad permite al espíritu actuar en dos lugares mientras el cuerpo duerme",
            "No existen milagros; son leyes desconocidas para la ciencia materialista"
        ],
        "NodosSinapticos": ["Fenomenos_Raros", "Bicorporeidad", "Invisibilidad_Fluidica"],
        "ContextoDiccionario": {
            "Bicorporeidad": "Fenómeno por el cual un espíritu encarnado se materializa en un lugar distante de su cuerpo físico, pudiendo ser visto y tocado simultáneamente."
        }
    },
    "12527: QUINTA PARTE: DETRACTORES DEL ESPIRITISMO": {
        "PilotoDeCoherencia": "Identificación sistemática de los obstáculos que impiden el triunfo del Espiritismo Luz y Verdad: la mentira organizada, el misticismo y la explotación de la ignorancia.",
        "CitaInelutable": "QUINTA PARTE: DETRACTORES DEL ESPIRITISMO.",
        "EjemploPedagogico": "Malezas que crecen en un campo de trigo y asfixian el grano. Los detractores son esas malezas que deben ser arrancadas para que la verdad alimente al mundo.",
        "IdeasPrincipales": ["Detractores del Espiritismo", "Enemigos del Progreso", "Combate a la Mentira"],
        "PuntosImportantes": [
            "El mayor detractor es aquel que conoce la verdad y la oculta por interés",
            "La ignorancia es el caldo de cultivo de la detracción",
            "La Escuela nace para desenmascarar a los que 'enlodaron' los principios puros"
        ],
        "NodosSinapticos": ["Detractores_del_Espiritismo", "Enemigos_del_Progreso", "Pureza_Doctrinal"],
        "ContextoDiccionario": {
            "Detractores": "Entidades o individuos que, por odio, miedo o interés material, atacan o desvirtúan las verdades del Espiritismo Racional."
        }
    },
    "12530: CAPTULO PRIMERO: LAS RELIGIONES": {
        "PilotoDeCoherencia": "Crítica demoledora a las instituciones religiosas como herramientas de atraso que han fragmentado a la humanidad y ocultado la paternidad común del Creador.",
        "CitaInelutable": "Las religiones... son culpables de todo el error que hoy tienen los hombres sobre el espiritismo.",
        "EjemploPedagogico": "Un mapa falso entregado a un viajero para que nunca llegue a su destino. Las religiones son mapas falsos del universo espiritual diseñados para mantener al viajero perdido y dependiente.",
        "IdeasPrincipales": ["Dogma Religioso", "Dominio Mental", "Error Teológico"],
        "PuntosImportantes": [
            "Las religiones han inventado dioses parciales y crueles para dominar por el miedo",
            "La caridad religiosa es a menudo un 'soborno' al destino, no amor real",
            "Han perseguido a la ciencia porque la verdad científica destruye el dogma"
        ],
        "NodosSinapticos": ["Dogma_Religioso", "Dominio_Mental", "Error_Teológico"],
        "ContextoDiccionario": {
            "Religión": "Sistema de creencias dogmáticas y rituales que el Espiritismo Racional identifica como el mayor obstáculo para la libertad y el progreso del espíritu."
        }
    },
    "12630: CAPTULO SEGUNDO: EL ESPIRITUALISMO": {
        "PilotoDeCoherencia": "Denuncia del espiritualismo como una versión 'light' o camuflada de la religión que infecta los centros de estudio con rituales, santos y misticismos estériles.",
        "CitaInelutable": "El espiritualismo es todas las religiones conjuntas con todos sus errores... amalgama de espiritismo y religión.",
        "EjemploPedagogico": "Un caballo de Troya. El espiritualismo entra en el campo espírita con apariencia de aliado, pero lleva dentro los soldados del dogma y el rito.",
        "IdeasPrincipales": ["Espiritualismo vs Espiritismo", "Amalgama Mística", "Prevaricación Doctrinal"],
        "PuntosImportantes": [
            "El espiritualismo niega la materia y descuida el progreso social",
            "Es responsable del descrédito del espiritismo ante el mundo científico",
            "Promueve la veneración a figuras (santos/médiums) en lugar de la ley"
        ],
        "NodosSinapticos": ["Espiritualismo_vs_Espiritismo", "Amalgama_Mistica", "Prevaricacion_Doctrinal"],
        "ContextoDiccionario": {
            "Espiritualismo": "Término que designa a los grupos que aceptan la existencia del espíritu pero mantienen prácticas, ritos y conceptos heredados de las religiones."
        }
    },
    "12660: En nuestra Filosofa Austera Racional...": {
        "PilotoDeCoherencia": "Advertencia contra la idolatría medianímica: la gratitud debe dirigirse a la Ley y al Creador, no al instrumento, para evitar el fanatismo que anula la razón.",
        "CitaInelutable": "La veneración es sólo al Creador... el consuelo que recibís es deber de ellos darlo y nada suyo dan.",
        "EjemploPedagogico": "Beber agua de un grifo. Si empiezas a adorar al grifo y olvidas la fuente, morirás de sed cuando el grifo se rompa. El médium es el grifo; la Fuente es el Creador.",
        "IdeasPrincipales": ["Gratitud Racional", "Veneración al Creador", "Filosofía Austera"],
        "PuntosImportantes": [
            "El agradecimiento ciego al médium es calificado como 'tacañería' espiritual",
            "Los centros de amalgama son 'fábricas de arsénico' que envenenan la razón",
            "Solo las obras y la justicia validan a un individuo, no su facultad"
        ],
        "NodosSinapticos": ["Gratitud_Racional", "Veneracion_al_Creador", "Filosofia_Austera"],
        "ContextoDiccionario": {
            "Agradecimiento_Tacaño": "Veneración errónea dirigida al médium o director de un centro, ignorando que el beneficio recibido proviene de la Ley Universal."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Espiritismo Tanda 15 aplicado exitosamente.")
