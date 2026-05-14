import json

esencia_path = 'F:/trincado/public/data/contents/espiritismo-en-su-asiento_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "2156: religiones y lo recomiendan as.": {
        "PilotoDeCoherencia": "Contraste entre el mandato religioso de sumisión y la obligación espírita de libertad y responsabilidad; el espiritismo no recomienda, sino que obliga al cumplimiento de la ley por convicción racional.",
        "CitaInelutable": "religiones y lo recomiendan así... pero el espiritismo obliga a la verdad.",
        "EjemploPedagogico": "Un niño al que le dicen 'cree porque yo lo digo' (religión), frente a un estudiante al que le muestran la ecuación y le dicen 'compruébalo tú mismo' (espiritismo).",
        "IdeasPrincipales": ["Responsabilidad Personal", "Libertad de Conciencia", "Contraste Doctrinal"],
        "PuntosImportantes": [
            "La religión busca la fe ciega; el espiritismo busca la fe racional",
            "El error recomendado por las iglesias es el veneno de la voluntad",
            "La verdad obliga a la acción coherente con la justicia universal"
        ],
        "NodosSinapticos": ["Responsabilidad_Personal", "Libertad_de_Conciencia", "Contraste_Doctrinal"],
        "ContextoDiccionario": {
            "Responsabilidad_Personal": "El principio de que cada espíritu es el único autor y responsable de sus actos ante la ley de justicia."
        }
    },
    "2269: CAPTULO V: El bien que trae y a lo que obliga el Espiritismo": {
        "PilotoDeCoherencia": "El equilibrio entre beneficios y deberes: el espiritismo libera al espíritu del error pero le impone la carga ineludible del amor fraternal y el trabajo desinteresado.",
        "CitaInelutable": "El bien que trae y a lo que obliga el Espiritismo... obliga a amar al hermano.",
        "EjemploPedagogico": "Salir de una cárcel (el bien) para entrar inmediatamente a trabajar en la reconstrucción de la ciudad (la obligación). La libertad es para servir.",
        "IdeasPrincipales": ["Derechos y Deberes", "Amor al Hermano", "Ley del Trabajo"],
        "PuntosImportantes": [
            "El mayor bien es el conocimiento de la propia inmortalidad",
            "La mayor obligación es reconocer a cada hombre como un hermano igual",
            "No existe derecho sin un deber previo cumplido en ley"
        ],
        "NodosSinapticos": ["Derechos_y_Deberes", "Amor_al_Hermano", "Ley_del_Trabajo"],
        "ContextoDiccionario": {
            "Derechos_y_Deberes": "La balanza de justicia donde el espíritu solo adquiere derechos tras haber cumplido con sus deberes correspondientes."
        }
    },
    "2490: PARTE TERCERA": {
        "PilotoDeCoherencia": "Sección culminante que detalla el desenlace del juicio final y el inicio del régimen de luz en la Tierra, marcando el fin de la prehistoria espiritual humana.",
        "CitaInelutable": "PARTE TERCERA.",
        "EjemploPedagogico": "La inauguración de una nueva era después de una gran revolución. Es el momento en que se leen las nuevas leyes que regirán el futuro del mundo.",
        "IdeasPrincipales": ["Consumación Doctrinal", "Nueva Era", "Régimen de Luz"],
        "PuntosImportantes": [
            "Describe la victoria final del espíritu sobre la materia",
            "Establece los protocolos del juicio celebrado en Siún",
            "Es la base histórica del cambio vibratorio del planeta"
        ],
        "NodosSinapticos": ["Consumacion_Doctrinal", "Nueva_Era", "Regimen_de_Luz"],
        "ContextoDiccionario": {
            "Nueva_Era": "El periodo que se inicia tras el Juicio de Mayoría, caracterizado por el predominio de la razón y el amor sobre el dogma."
        }
    },
    "2493: CAPTULO I: El reinado del Espiritismo": {
        "PilotoDeCoherencia": "El establecimiento del reinado de la razón sobre la Tierra, donde el espiritismo deja de ser perseguido para convertirse en la ley natural de convivencia humana.",
        "CitaInelutable": "El reinado del Espiritismo... fin del crepúsculo.",
        "EjemploPedagogico": "El paso de una monarquía absoluta a una república democrática donde la ley es igual para todos. El espíritu es el 'soberano' racional.",
        "IdeasPrincipales": ["Reinado del Espíritu", "Hegemonía de la Razón", "Fin del Crepúsculo"],
        "PuntosImportantes": [
            "No es un reinado político, sino una hegemonía moral",
            "Elimina las fronteras ideológicas creadas por las religiones",
            "Es la realización de la Comuna Universal de Amor y Ley"
        ],
        "NodosSinapticos": ["Reinado_del_Espiritu", "Hegemonia_de_la_Razon", "Fin_del_Crepusculo"],
        "ContextoDiccionario": {
            "Reinado_del_Espíritu": "El estado de la humanidad donde el espíritu domina sus instintos y rige sus actos por la ley de amor."
        }
    },
    "2654: CAPTULO II: El juicio final y universal": {
        "PilotoDeCoherencia": "Relato histórico y técnico del Juicio de Mayoría: la separación de los espíritus aptos para la regeneración de los que deben ser expatriados a mundos primitivos.",
        "CitaInelutable": "El juicio final y universal... 5 de abril de 1912... Justicia!... Consumatum est.",
        "EjemploPedagogico": "Una auditoría general de una empresa. Se revisan los libros de todos los empleados; los que trabajaron bien se quedan, los que defraudaron son despedidos a empresas de menor categoría.",
        "IdeasPrincipales": ["Juicio de Mayoría", "Tribunales Espirituales", "Justicia Inexorable"],
        "PuntosImportantes": [
            "Celebrado en la Tierra y en Siún simultáneamente",
            "El 'ancla' de salvación es el acatamiento a la ley de amor",
            "Marca el fin de la impunidad de los tiranos y sacerdotes"
        ],
        "NodosSinapticos": ["Juicio_de_Mayoria", "Tribunales_Espirituales", "Justicia_Inexorable"],
        "ContextoDiccionario": {
            "Juicio_de_Mayoría": "El examen colectivo de la humanidad donde se evalúa el progreso de los espíritus para determinar su destino planetario."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Asiento Tanda 7 aplicado exitosamente.")
