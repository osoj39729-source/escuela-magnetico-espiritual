import json

esencia_path = 'F:/trincado/public/data/contents/el-espiritismo-estudiado_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "724: PRRAFO II: CAN Y ABEL Tendramos que repetir aqu la historia de la familia o raza Admica; pero buscadla": {
        "PilotoDeCoherencia": "Reinterpretación racional del mito bíblico: Caín representa el espíritu encarnado que trabaja y domina la materia, mientras Abel simboliza el parasitismo místico.",
        "CitaInelutable": "Caín, el trabajador, limpia la tierra de Abel, el parásito; el trabajo es la verdadera adoración al Creador, no el sacrificio inútil.",
        "EjemploPedagogico": "Un granjero que ara la tierra para alimentar a su familia (Caín), frente a su hermano que solo se arrodilla a rezar esperando que la comida caiga del cielo (Abel).",
        "IdeasPrincipales": [
            "Mito de Caín y Abel",
            "Trabajo vs Parasitismo",
            "Dominio de la Materia"
        ],
        "PuntosImportantes": [
            "Inversión de los roles religiosos: Caín es el progreso, Abel es el estancamiento",
            "El sacrificio de sangre (Abel) es rechazado por la ley natural",
            "La necesidad de extirpar el misticismo inactivo de la sociedad"
        ],
        "NodosSinapticos": [
            "Mito_de_Cain_y_Abel",
            "Trabajo_vs_Parasitismo",
            "Triunfo_de_la_Materia_Util"
        ],
        "ContextoDiccionario": {
            "Símbolo_Caín_y_Abel": "Alegoría de la lucha entre el hombre materialista que trabaja y progresa (Caín) y el hombre dogmático que vive a expensas de los demás (Abel)."
        }
    },
    "888: CAPTULO TERCERO: MANDATO DEL PADRE CREADOR A SUS HIJOS": {
        "PilotoDeCoherencia": "Desmitificación de los mandamientos religiosos: el único mandato de Eloí es la evolución constante a través del trabajo en los mundos materiales.",
        "CitaInelutable": "El mandato de Eloí no es un castigo, es la ley de evolución: poblad la tierra y dominadla por el trabajo.",
        "EjemploPedagogico": "Un maestro que no impone reglas de terror, sino que simplemente entrega herramientas a sus alumnos y les dice: 'Construyan y aprendan de sus propios errores'.",
        "IdeasPrincipales": [
            "Mandato de Evolución",
            "Trabajo Obligatorio",
            "Ausencia de Coacción"
        ],
        "PuntosImportantes": [
            "Dios no castiga, la propia ley natural corrige",
            "El progreso como destino ineludible del espíritu",
            "El cuerpo físico como herramienta de cumplimiento de la ley"
        ],
        "NodosSinapticos": [
            "Mandato_de_Evolucion",
            "Progreso_Obligatorio",
            "Ausencia_de_Castigo_Divino"
        ],
        "ContextoDiccionario": {
            "Mandato_Creador": "La orden inmutable del Padre a los espíritus de encarnar, trabajar y dominar la materia para autoconquistar su progreso en amor y sabiduría."
        }
    },
    "971: PRRAFO II: EL MUNDO DE EXPIACIN Ya estamos en el gran escenario donde a la vez, se desarrolla la pera sentimental y": {
        "PilotoDeCoherencia": "Definición de la Tierra como un mundo de corrección y expiación, donde encarnan espíritus rebeldes para lavar sus errores mediante la dureza de la materia.",
        "CitaInelutable": "Ya estamos en el gran escenario donde se desarrolla la ópera sentimental y dolorosa de la expiación.",
        "EjemploPedagogico": "Una escuela correccional donde estudiantes que fueron expulsados de otras aulas deben realizar labores físicas pesadas para aprender el valor del esfuerzo y la disciplina.",
        "IdeasPrincipales": [
            "Mundo de Expiación",
            "Escuela del Dolor",
            "Rehabilitación Espiritual"
        ],
        "PuntosImportantes": [
            "La Tierra no es un paraíso caído, sino un hospital y una escuela severa",
            "El sufrimiento no es venganza divina, es el roce de la ley puliendo al espíritu",
            "El periodo adámico como ciclo expiatorio"
        ],
        "NodosSinapticos": [
            "Mundo_de_Expiacion",
            "Escuela_del_Dolor",
            "Luz_por_el_Trabajo"
        ],
        "ContextoDiccionario": {
            "Mundo_de_Expiación": "Categoría evolutiva de un planeta (como la Tierra durante la era adámica) destinado a recibir espíritus que necesitan aprender mediante el dolor y el choque material."
        }
    },
    "1165: PRRAFO III: LA SANGRE DERRAMADA EN 57 SIGLOS. Horrible es el cuadro que se presenta a mi vista. CIENTO VEINTE MILLONES de seres": {
        "PilotoDeCoherencia": "Recuento de la violencia estructural generada por las religiones supremacistas durante los 57 siglos de la historia adámica.",
        "CitaInelutable": "Horrible es el cuadro que se presenta a mi vista. CIENTO VEINTE MILLONES de seres sacrificados en el altar de los ídolos.",
        "EjemploPedagogico": "Un libro de historia universal cuyas páginas están teñidas de rojo sangre, demostrando que las guerras santas y las inquisiciones han sido las peores plagas de la humanidad.",
        "IdeasPrincipales": [
            "Violencia Histórica",
            "Sacrificios Religiosos",
            "Fin de las Guerras Santas"
        ],
        "PuntosImportantes": [
            "Las religiones como principal causa de derramamiento de sangre",
            "El fracaso de la supremacía eclesiástica para traer paz",
            "El límite temporal de la expiación ha sido alcanzado"
        ],
        "NodosSinapticos": [
            "Sangre_Adamica",
            "Violencia_Dogmatica",
            "Fin_de_la_Supremacia"
        ],
        "ContextoDiccionario": {
            "Sangre_Adámica": "Metáfora y realidad histórica de los crímenes cometidos en nombre de deidades a lo largo de los 57 siglos de existencia de las religiones en la Tierra."
        }
    },
    "1438: CAPTULO CUARTO: LEY NICA DEL ESPIRITISMO: EL AMOR": {
        "PilotoDeCoherencia": "Estructuración anatómica de las leyes universales: El Amor es la ley madre, de la cual derivan como extremidades operativas la afinidad, justicia, libertad y compensación.",
        "CitaInelutable": "El amor, como ley madre, forma el todo del cuerpo. Las leyes de afinidad y justicia son los brazos; la libertad y compensación son las piernas.",
        "EjemploPedagogico": "Un cuerpo humano sano: el cerebro (amor) dirige los brazos (afinidad y justicia) para construir en hermandad, y las piernas (libertad y compensación) para avanzar sin perder el equilibrio.",
        "IdeasPrincipales": [
            "Ley Única: Amor",
            "Leyes Derivadas Operativas",
            "Anatomía del Espiritismo"
        ],
        "PuntosImportantes": [
            "El amor en el espiritismo no es un sentimiento débil, es la fuerza de cohesión",
            "La justicia y la afinidad son inseparables del verdadero amor",
            "El equilibrio universal se sostiene por estas cuatro leyes derivadas"
        ],
        "NodosSinapticos": [
            "Ley_de_Amor",
            "Cuerpo_del_Espiritismo",
            "Afinidad_y_Justicia"
        ],
        "ContextoDiccionario": {
            "Ley_de_Amor": "La máxima ley del Espiritismo Racional, que actúa como centro de gravedad universal, manifestándose activamente a través de la justicia, la libertad, la afinidad y la compensación."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Espiritismo Estudiado Tanda 3 aplicado exitosamente.")
