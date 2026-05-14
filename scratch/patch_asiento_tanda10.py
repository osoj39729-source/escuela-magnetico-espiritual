import json

esencia_path = 'F:/trincado/public/data/contents/espiritismo-en-su-asiento_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "3655: Acotaciones:": {
        "PilotoDeCoherencia": "Instrucciones de régimen interno para las cátedras: el orden, el respeto y la disciplina no son normas sociales, sino requisitos vibratorios para la comunión espiritual.",
        "CitaInelutable": "Acotaciones... se han señalado puntos a los espíritus, que han tenido que respetar los hombres.",
        "EjemploPedagogico": "Sintonizar una radio antigua. Si hay ruido en la habitación o se mueve el dial sin cuidado, no se escucha la música. El reglamento es el manual de sintonía.",
        "IdeasPrincipales": ["Reglamento de Cátedras", "Disciplina Doctrinal", "Instrucciones Maestras"],
        "PuntosImportantes": [
            "La cátedra es un punto de conexión directa con los tribunales del espacio",
            "El silencio y la concentración multiplican la potencia del mensaje",
            "Los maestros encarnados deben ser modelos de rectitud y estudio"
        ],
        "NodosSinapticos": ["Reglamento_de_Catedras", "Disciplina_Doctrinal", "Instrucciones_Maestras"],
        "ContextoDiccionario": {
            "Reglamento_de_Cátedras": "El conjunto de normas de conducta y organización que rigen el funcionamiento de los centros de estudio de la EMECU."
        }
    },
    "4067: Acotaciones:": {
        "PilotoDeCoherencia": "Advertencia sobre la renovación generacional: la justicia espiritual prepara la llegada de misioneros que no cargarán con los lastres del pasado.",
        "CitaInelutable": "Esa semilla nueva que ya llega; esos niños misioneros; no tendrán los estorbos de los maestros de hoy.",
        "EjemploPedagogico": "Renovar el software de una computadora. El hardware sigue ahí (la Tierra), pero los programas viejos (errores de maestros) son borrados para instalar los nuevos.",
        "IdeasPrincipales": ["Vigilancia Espiritual", "Semilla Nueva", "Juicio de Obras"],
        "PuntosImportantes": [
            "Nada de lo que sucede en la Escuela escapa al ojo de la justicia",
            "Los maestros actuales deben prepararse para ser relevados por espíritus más puros",
            "La lucha actual es la siembra del futuro bienestar de la humanidad"
        ],
        "NodosSinapticos": ["Vigilancia_Espiritual", "Semilla_Nueva", "Juicio_de_Obras"],
        "ContextoDiccionario": {
            "Semilla_Nueva": "Metáfora que designa a las nuevas generaciones de espíritus que encarnan con la misión de consolidar la Comuna Universal."
        }
    },
    "4078: CAPITULO II: LEY DE APORTES": {
        "PilotoDeCoherencia": "Explicación química de los aportes: el proceso de desmaterialización, transporte y re-condensación de objetos mediante el manejo de los fluidos universales.",
        "CitaInelutable": "LEY DE APORTES... condensar y transportar la materia.",
        "EjemploPedagogico": "El hielo que se convierte en vapor, se mueve por el aire y vuelve a congelarse en otro sitio. El aporte es este cambio de estado dirigido por la voluntad del espíritu.",
        "IdeasPrincipales": ["Ley de Aportes", "Condensación de Materia", "Química Espiritual"],
        "PuntosImportantes": [
            "Los aportes son pruebas físicas de la potencia del espíritu sobre la materia",
            "Requieren un médium con fluidos específicos y un ambiente en armonía",
            "No tienen fin de espectáculo, sino de demostración científica"
        ],
        "NodosSinapticos": ["Ley_de_Aportes", "Condensacion_de_Materia", "Quimica_Espiritual"],
        "ContextoDiccionario": {
            "Ley_de_Aportes": "La ley natural que explica la materialización de objetos distantes mediante la acción de los espíritus sobre el Éter."
        }
    },
    "4298: CAPITULO III: No se puede ir ms all del espiritismo": {
        "PilotoDeCoherencia": "Axioma de la plenitud doctrinaria: el espiritismo abarca la totalidad de la vida y el infinito, por lo que cualquier 'nuevo' saber es solo una rama del mismo árbol.",
        "CitaInelutable": "No se puede ir más allá del espiritismo... porque es la vida.",
        "EjemploPedagogico": "Tratar de salir del espacio. Por mucho que viajes, siempre estarás en el espacio. El espiritismo es ese 'espacio total' del conocimiento.",
        "IdeasPrincipales": ["Límite del Saber", "Religión Universal", "Inmutabilidad Doctrinal"],
        "PuntosImportantes": [
            "El espiritismo no se transforma; se transforma el hombre que lo descubre",
            "Es la ley única que rige a todos los mundos y todos los seres",
            "Elimina la necesidad de credos particulares al ser la Verdad Absoluta"
        ],
        "NodosSinapticos": ["Limite_del_Saber", "Religión_Universal", "Inmutabilidad_Doctrinal"],
        "ContextoDiccionario": {
            "Límite_del_Saber": "El concepto de que el Espiritismo representa la síntesis final y total de todo conocimiento posible para el espíritu."
        }
    },
    "4304: PRRAFO I (CAPITULO III: No se puede ir ms all del espiritismo)": {
        "PilotoDeCoherencia": "La analogía del diamante: el espiritismo es la gema eterna que el hombre debe pulir para que refleje la luz de su propia sabiduría divina.",
        "CitaInelutable": "El espiritismo... es como el diamante... diamante era y diamante es.",
        "EjemploPedagogico": "Un telescopio sucio. El cielo (espiritismo) no cambia; es el lente el que debe limpiarse (estudiar) para que la imagen se vea nítida.",
        "IdeasPrincipales": ["Símil del Diamante", "Pulimento del Espíritu", "Valor Intrínseco"],
        "PuntosImportantes": [
            "La ignorancia es el barro que oculta el brillo de la doctrina",
            "Cada esfuerzo de estudio es una 'escama' que se quita para dar brillo al alma",
            "El diamante pulido (espíritu sabio) es el fin último de la evolución"
        ],
        "NodosSinapticos": ["Simil_del_Diamante", "Pulimento_del_Espiritu", "Valor_Intrinseco"],
        "ContextoDiccionario": {
            "Símil_del_Diamante": "Metáfora trincadista que compara al espíritu y su doctrina con una piedra preciosa cuyo valor es eterno pero cuya luz requiere trabajo para manifestarse."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Asiento Tanda 10 aplicado exitosamente.")
