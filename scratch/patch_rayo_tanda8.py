import json

esencia_path = 'F:/trincado/public/data/contents/primer-rayo-de-luz_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "5508: Las opiniones de los sabios y su valor.": {
        "PilotoDeCoherencia": "Análisis del valor de la sabiduría humana supeditado a su concordancia con las leyes naturales y no con los dogmas institucionales.",
        "CitaInelutable": "El valor del sabio no reside en su título, sino en su fidelidad a la ley natural; el dogma anula la sabiduría del hombre.",
        "EjemploPedagogico": "Un mapa que es valorado por su precisión en el terreno real, no por la belleza de sus dibujos o el prestigio de quien lo firmó si este miente sobre la ruta.",
        "IdeasPrincipales": [
            "Valor relativo del saber humano",
            "Primacía de la ley natural",
            "Sabiduría vs Dogmatismo"
        ],
        "PuntosImportantes": [
            "El sabio que se somete al dogma deja de ser sabio",
            "La verdad científica es independiente de la jerarquía religiosa",
            "La observación de los hechos es la única fuente de sabiduría real"
        ],
        "NodosSinapticos": [
            "Valor_de_la_Sabiduria",
            "Fidelidad_a_la_Ley",
            "Sabios_vs_Institucion"
        ],
        "ContextoDiccionario": {
            "Sabiduría_Fúlica": "Conocimiento profundo de las leyes del espíritu y la naturaleza que busca la armonía con el Todo."
        }
    },
    "5758: Opiniones de teólogo?": {
        "PilotoDeCoherencia": "Crítica a la teología como sistema que anula el pensamiento propio, convirtiendo al clérigo en un autómata del dogma.",
        "CitaInelutable": "¿Opiniones de teólogo? El teólogo no tiene opinión propia; es un esclavo intelectual que repite el dictado de su casta.",
        "EjemploPedagogico": "Un actor que recita un guion escrito por otros; puede hacerlo con pasión, pero las palabras y las ideas no le pertenecen.",
        "IdeasPrincipales": [
            "Mecanicismo teológico",
            "Anulación del criterio",
            "Esclavitud del intelecto"
        ],
        "PuntosImportantes": [
            "La teología prohíbe la duda y la investigación libre",
            "El clero como herramienta de propaganda institucional",
            "La falta de originalidad en el discurso dogmático"
        ],
        "NodosSinapticos": [
            "Obediencia_Ciega",
            "Mecanicismo_Dogmatico",
            "Esclavitud_Intelectual"
        ],
        "ContextoDiccionario": {
            "Esclavitud_Intelectual": "Estado de sumisión mental donde el individuo renuncia a su razonamiento para aceptar verdades impuestas por una autoridad externa."
        }
    },
    "5820: Conclusión": {
        "PilotoDeCoherencia": "Cierre de la postura dogmática en el debate, caracterizada por la autoproclamación de victoria sin haber respondido a las objeciones racionales.",
        "CitaInelutable": "El dogma se declara vencedor sin haber luchado, refugiándose en la superioridad autoproclamada de la fe sobre la razón.",
        "EjemploPedagogico": "Un deportista que se otorga a sí mismo la medalla de oro tras haberse negado a participar en la competencia.",
        "IdeasPrincipales": [
            "Arrogancia dogmática",
            "Huida del debate real",
            "Refugio en la fe ciega"
        ],
        "PuntosImportantes": [
            "La conclusión religiosa es un acto de fe, no de lógica",
            "El dogma no admite la posibilidad de estar equivocado",
            "Fin de la comunicación racional por parte del clero"
        ],
        "NodosSinapticos": [
            "Cierre_Dogmatico",
            "Superioridad_de_la_Fe",
            "Victoria_Ficticia"
        ],
        "ContextoDiccionario": {
            "Arrogancia_Dogmática": "Pretensión de poseer la verdad absoluta y despreciar cualquier cuestionamiento basado en la evidencia o la lógica."
        }
    },
    "5839: Mis observaciones": {
        "PilotoDeCoherencia": "Denuncia de actos concretos de corrupción y saqueo material cometidos por el clero bajo el manto de la caridad.",
        "CitaInelutable": "Se roban los derechos a la viuda en nombre de la santa madre Iglesia; basta de cabos sueltos, la hebra de la maldad clerical no tiene fin.",
        "EjemploPedagogico": "Un administrador que se queda con la herencia de los protegidos usando legalismos religiosos para justificar el robo.",
        "IdeasPrincipales": [
            "Corrupción institucional",
            "Saqueo de bienes",
            "Falsa caridad"
        ],
        "PuntosImportantes": [
            "El caso del canónigo y el despojo a su viuda",
            "Uso del derecho canónico para violar el derecho natural",
            "La hipocresía de la 'pobreza' eclesiástica"
        ],
        "NodosSinapticos": [
            "Corrupción_Clerical",
            "Saqueo_Material",
            "Falsedad_de_la_Caridad"
        ],
        "ContextoDiccionario": {
            "Corrupción_Clerical": "Práctica sistemática de abuso de poder y apropiación indebida de bienes por parte de miembros de la jerarquía religiosa."
        }
    },
    "6185: Conclusión": {
        "PilotoDeCoherencia": "Reflexión final sobre la controversia y la táctica jesuita de imitación para desviar la atención de la luz racionalista.",
        "CitaInelutable": "Los jesuitas publicaron 'El Rayo de Luz' para desviar la atención de nuestro libro; no les damos las gracias, solo cumplen con su deber de reaccionar ante la luz.",
        "EjemploPedagogico": "Una sombra que se alarga cuando la luz es más intensa; la copia jesuita es la sombra que prueba la existencia del rayo original.",
        "IdeasPrincipales": [
            "Reacción del sistema",
            "Táctica de confusión jesuítica",
            "Confirmación de la potencia del libro"
        ],
        "PuntosImportantes": [
            "El intento de los jesuitas de suplantar la identidad de la obra",
            "La luz de la Escuela obliga al error a reaccionar",
            "Victoria moral del Primer Rayo de Luz sobre la réplica dogmática"
        ],
        "NodosSinapticos": [
            "Reacción_Jesuita",
            "Copia_Dogmatica",
            "Triunfo_de_la_Luz"
        ],
        "ContextoDiccionario": {
            "Táctica_Jesuita": "Estrategia de mimetismo y confusión utilizada para infiltrar ideas o desviar la atención de verdades peligrosas para el dogma."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Rayo Tanda 8 aplicado exitosamente.")
