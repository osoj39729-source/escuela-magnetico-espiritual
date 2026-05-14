import json

esencia_path = 'F:/trincado/public/data/contents/primer-rayo-de-luz_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "174: Prólogo": {
        "PilotoDeCoherencia": "El autor se define como juez imparcial de la controversia social, basando su veredicto en la sabiduría racional y no en influencias externas.",
        "CitaInelutable": "Me he creído con el deber de ser Juez, oculto, de las dos causas... para presentar al público sus tesis juzgadas por la razón imparcial.",
        "EjemploPedagogico": "Un observador neutral que analiza un conflicto sin conocer a los contendientes, garantizando que su juicio nazca solo de la lógica y la verdad observada.",
        "IdeasPrincipales": [
            "Imparcialidad del autor",
            "Juicio a los extremos sociales",
            "La sabiduría como salvación"
        ],
        "PuntosImportantes": [
            "Rechazo a la ignorancia religiosa como norma de salvación",
            "Uso de la razón como única herramienta de juicio",
            "Propósito de sorprender a la humanidad con verdades ocultas"
        ],
        "NodosSinapticos": [
            "Prologo_Rayo",
            "Juez_Imparcial",
            "Sabiduria_vs_Ignorancia"
        ],
        "ContextoDiccionario": {
            "Juicio_Racional": "Evaluación de ideas y sistemas basada exclusivamente en la lógica y las leyes naturales, libre de sesgos dogmáticos."
        }
    },
    "190: El Universo solidarizado.": {
        "PilotoDeCoherencia": "Reafirmación de la interdependencia de todos los seres y mundos bajo un mismo esquema evolutivo.",
        "CitaInelutable": "El Universo solidarizado es la meta final de la evolución y la base de la justicia universal.",
        "EjemploPedagogico": "Una red global donde cada nodo es vital para la estabilidad del sistema; si un punto falla, la solidaridad de la red actúa para restaurar el equilibrio.",
        "IdeasPrincipales": [
            "Interdependencia cósmica",
            "Meta evolutiva",
            "Equilibrio universal"
        ],
        "PuntosImportantes": [
            "La solidaridad no es caridad, es ley natural",
            "Vinculación entre todos los grados de vida",
            "Fundamento de la Comuna Universal"
        ],
        "NodosSinapticos": [
            "Solidaridad_Cosmica",
            "Evolucion_Social",
            "Unidad_Universal"
        ],
        "ContextoDiccionario": {
            "Solidaridad_Cosmica": "Estado de unión y apoyo mutuo inalienable que rige entre todos los mundos habitados del universo."
        }
    },
    "192: El Mundo todo comunizado.": {
        "PilotoDeCoherencia": "Definición del comunismo espiritual como la práctica de la ley de amor en la administración de la herencia común de la humanidad.",
        "CitaInelutable": "Comunizar el mundo es llevar la ley de amor a la práctica diaria de la convivencia humana.",
        "EjemploPedagogico": "Una familia unida donde los recursos se distribuyen según la necesidad y el mérito, sin que exista la propiedad privada excluyente.",
        "IdeasPrincipales": [
            "Comunismo de Amor",
            "Administración justa",
            "Herencia del Padre"
        ],
        "PuntosImportantes": [
            "Diferencia con el comunismo materialista",
            "Igualdad de derechos y deberes",
            "La Tierra como propiedad de toda la familia humana"
        ],
        "NodosSinapticos": [
            "Comunismo_Espiritual",
            "Herencia_del_Padre",
            "Justicia_Social"
        ],
        "ContextoDiccionario": {
            "Comunismo_Espiritual": "Régimen social basado en la fraternidad universal donde la tierra y sus recursos son patrimonio común de la humanidad."
        }
    },
    "194: La Ley es una; la sustancia una.": {
        "PilotoDeCoherencia": "Axioma monista que elimina la dualidad metafísica y establece la unidad de origen de todo lo existente.",
        "CitaInelutable": "No hay dos leyes ni dos sustancias; todo es una sola realidad bajo el mando de Eloí.",
        "EjemploPedagogico": "El oro que puede convertirse en anillo, cadena o moneda, pero sigue siendo la misma sustancia regida por las mismas leyes físicas.",
        "IdeasPrincipales": [
            "Monismo absoluto",
            "Unidad de la Ley",
            "Realidad Fúlica única"
        ],
        "PuntosImportantes": [
            "Superación de la división espíritu/materia",
            "La ley natural como única norma válida",
            "Todo proviene de la misma esencia primordial"
        ],
        "NodosSinapticos": [
            "Monismo_Metafisico",
            "Unidad_de_la_Ley",
            "Realidad_Fúlica"
        ],
        "ContextoDiccionario": {
            "Monismo_Fúlico": "Doctrina que postula la unidad absoluta de la sustancia y la ley en todo el universo, derivando todo de Eloí."
        }
    },
    "201: Todo es Magnetismo Espiritual.": {
        "PilotoDeCoherencia": "El magnetismo espiritual como el lazo de unión científico y espiritual entre todos los seres del cosmos.",
        "CitaInelutable": "El magnetismo espiritual es el lazo que nos une y la fuerza que nos permite progresar.",
        "EjemploPedagogico": "Una red de comunicaciones invisible que permite el intercambio de luz y conocimiento entre todos los puntos del universo.",
        "IdeasPrincipales": [
            "Lazo de unión universal",
            "Fuerza de progreso",
            "Ciencia del espíritu"
        ],
        "PuntosImportantes": [
            "El magnetismo como herramienta de la voluntad",
            "Explicación técnica de la telepatía y la influencia espiritual",
            "Base de la solidaridad entre los mundos"
        ],
        "NodosSinapticos": [
            "Lazo_Magnetico",
            "Vehiculo_de_la_Voluntad",
            "Ciencia_Espiritual"
        ],
        "ContextoDiccionario": {
            "Lazo_Magnetico": "Vínculo fluido e inteligente que conecta a todos los espíritus entre sí y con el Creador."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Rayo Tanda 3 aplicado exitosamente.")
