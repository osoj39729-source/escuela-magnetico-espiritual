import json

esencia_path = 'F:/trincado/public/data/contents/el-espiritismo-estudiado_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "12818: CAPTULO TERCERO: EL MATERIALISMO Y SU COHORTE": {
        "PilotoDeCoherencia": "Crítica al materialismo como una postura de cobardía intelectual que niega la existencia del espíritu para eludir la responsabilidad ética de las leyes de causa y efecto.",
        "CitaInelutable": "EL MATERIALISMO Y SU COHORTE... El materialismo es la cohorte de la ignorancia.",
        "EjemploPedagogico": "Un inquilino que rompe todo en la casa pensando que nunca tendrá que ver al dueño. El materialista cree que con la muerte del cuerpo se acaban sus deudas.",
        "IdeasPrincipales": ["Materialismo Ciego", "Responsabilidad Ética", "Cobardía Intelectual"],
        "PuntosImportantes": [
            "El materialismo científico es útil, pero el filosófico es un retroceso",
            "Niegan el espíritu porque temen el juicio de su propia conciencia",
            "Es la base de la sociedad plutocrática que explota al hombre"
        ],
        "NodosSinapticos": ["Materialismo_Ciego", "Responsabilidad_Espiritual", "Negacionismo"],
        "ContextoDiccionario": {
            "Materialismo_Ciego": "La postura filosófica que niega la existencia del espíritu y la supervivencia de la conciencia, limitando la realidad a lo tangible y perecedero."
        }
    },
    "12931: CAPTULO CUARTO: EL FANATISMO": {
        "PilotoDeCoherencia": "Definición del fanatismo como la anulación del juicio crítico en favor de una idea fija, lo cual degenera en violencia y persecución contra la verdad.",
        "CitaInelutable": "El fanatismo... es la gran vergüenza... Marcha siempre empujando y haciendo caminar a los que no quieren dejarse pisar.",
        "EjemploPedagogico": "Un conductor que acelera a fondo con los ojos cerrados porque cree que su fe lo protegerá. El fanatismo es ese impulso ciego que ignora los frenos de la razón.",
        "IdeasPrincipales": ["Fanatismo Ignorante", "Obcecación Mental", "Peligro Social"],
        "PuntosImportantes": [
            "El fanatismo nace de la falta de estudio y el exceso de emoción dogmática",
            "Convierte al hombre en un instrumento de las religiones para el mal",
            "Solo se cura con la luz del estudio y la confrontación de ideas"
        ],
        "NodosSinapticos": ["Fanatismo_Ignorante", "Obcecacion_Mental", "Peligro_Social"],
        "ContextoDiccionario": {
            "Fanatismo": "Estado de exaltación irracional y defensa violenta de un dogma o idea, carente de examen lógico y respetuoso."
        }
    },
    "13059: CAPTULO QUINTO: EL MISTICISMO": {
        "PilotoDeCoherencia": "Denuncia del misticismo como una parálisis espiritual que disfraza la holgazanería y la falta de carácter con una supuesta santidad contemplativa.",
        "CitaInelutable": "El misticismo... anula y los fanatismos que denigran... es la enfermedad de las almas.",
        "EjemploPedagogico": "Un agricultor que se sienta a mirar las nubes esperando que el trigo crezca solo por obra de Dios. El misticismo es esa espera estéril que abandona el arado del progreso.",
        "IdeasPrincipales": ["Misticismo Estéril", "Enfermedad del Alma", "Contemplación vs Acción"],
        "PuntosImportantes": [
            "El misticismo es la 'tisis' del espiritismo, lo debilita y lo vuelve miedoso",
            "Aleja al hombre de sus deberes civiles y familiares",
            "Es una herencia de las religiones que el Espiritismo Racional rechaza de plano"
        ],
        "NodosSinapticos": ["Misticismo_Esteril", "Enfermedad_del_Alma", "Contemplacion_vs_Accion"],
        "ContextoDiccionario": {
            "Misticismo": "Actitud contemplativa y estéril que busca la unión con lo divino a través del sentimiento subjetivo, rechazando el trabajo activo y la razón."
        }
    },
    "13175: CAPTULO SEXTO: LA MIXTIFICACIN": {
        "PilotoDeCoherencia": "Análisis del fraude espiritual: espíritus de bajo progreso que se presentan con nombres de maestros para dar consejos falsos, aprovechando la vanidad del médium.",
        "CitaInelutable": "La mixtificación habéis de comprenderla en el engaño, el fraude... sobre todo en la tolerancia que os tiene en vuestros defectos.",
        "EjemploPedagogico": "Un correo electrónico falso que suplanta la identidad de tu banco para robar tus datos. El mixtificador es ese 'hacker' que suplanta identidades de luz.",
        "IdeasPrincipales": ["Mixtificación Espiritual", "Engaño Sutil", "Falsos Guías"],
        "PuntosImportantes": [
            "Los mixtificadores son sabios aberrados por sus pasiones",
            "Solo pueden actuar si el médium no tiene higiene moral ni ilustración",
            "Prefieren decir mentiras dulces que verdades amargas para ganar adeptos"
        ],
        "NodosSinapticos": ["Mixtificacion_Espiritual", "Engaño_Sutil", "Falsos_Guias"],
        "ContextoDiccionario": {
            "Mixtificación": "El acto por el cual un espíritu engaña a los asistentes de una sesión mediúmnica asumiendo una identidad falsa de alto progreso."
        }
    },
    "13340: CAPTULO SPTIMO: LA SUPERCHERA": {
        "PilotoDeCoherencia": "Condena absoluta a la superchería como el fraude material consciente: médiums que fingen fenómenos mediante trucos para lucrarse o ganar fama.",
        "CitaInelutable": "Superchería dice: engaño, dolo y fraude... desviar con maliciosa astucia la rectitud de la verdad.",
        "EjemploPedagogico": "Un médico que receta agua con azúcar diciendo que es una cura milagrosa para cobrar por la consulta. La superchería es ese delito moral en nombre del espíritu.",
        "IdeasPrincipales": ["Superchería Mediunímica", "Fraude Consciente", "Miserable Vergüenza"],
        "PuntosImportantes": [
            "Trincado no transige con los supercheros: los califica de bichitos despreciables",
            "Es la causa del desprestigio del espiritismo ante la sociedad",
            "El superchero tiene todas las agravantes de la justicia espiritual por traición"
        ],
        "NodosSinapticos": ["Supercheria_Mediunimica", "Fraude_Consciente", "Miserable_Vergüenza"],
        "ContextoDiccionario": {
            "Superchería": "El fraude material y consciente realizado por médiums o directores mediante trucos físicos para simular manifestaciones espirituales."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Espiritismo Tanda 16 aplicado exitosamente.")
