import json

esencia_path = 'F:/trincado/public/data/contents/primer-rayo-de-luz_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "238: UNICAMENTE.": {
        "PilotoDeCoherencia": "Declaración de la verdad como único objetivo del autor, por encima de cualquier compromiso personal o social.",
        "CitaInelutable": "Únicamente la verdad es mi guía; no busco agradar a los hombres, sino cumplir con la ley de justicia que me obliga a decir lo que otros callan.",
        "EjemploPedagogico": "Un médico que informa con crudeza sobre la enfermedad para poder aplicar la medicina necesaria; la verdad es el primer paso de la cura.",
        "IdeasPrincipales": [
            "Independencia de criterio",
            "Compromiso con la justicia",
            "Verdad sin adornos"
        ],
        "PuntosImportantes": [
            "La verdad es el único norte del juicio crítico",
            "Desprecio por la adulación o el miedo social",
            "Responsabilidad del maestro ante la ley de amor"
        ],
        "NodosSinapticos": [
            "Unicamente_la_Verdad",
            "Deber_de_Sinceridad",
            "Juicio_Doctrinal"
        ],
        "ContextoDiccionario": {
            "Sinceridad_Misionera": "Cualidad del espíritu que le obliga a expresar la verdad tal como es, sin ocultamientos por miedo o conveniencia."
        }
    },
    "297: JOAQUIN TRINCADO.": {
        "PilotoDeCoherencia": "Sello de responsabilidad del autor sobre la introducción doctrinal de la obra.",
        "CitaInelutable": "JOAQUIN TRINCADO.",
        "EjemploPedagogico": "La firma de un juez al pie de un acta que certifica la veracidad de lo registrado y la firmeza de la sentencia.",
        "IdeasPrincipales": [
            "Autoría responsable",
            "Certificación de la idea",
            "Presencia del maestro"
        ],
        "PuntosImportantes": [
            "Garantía de origen de la luz proyectada",
            "Firmeza en las declaraciones previas",
            "Asunción de las consecuencias del juicio emitido"
        ],
        "NodosSinapticos": [
            "Responsabilidad_de_Autor",
            "Firma_Misionera"
        ],
        "ContextoDiccionario": {
            "Firma_Espiritual": "Acto de sellar una verdad con la propia vibración y responsabilidad ante la ley universal."
        }
    },
    "301: O b s e r v a c i o n e s": {
        "PilotoDeCoherencia": "Inicio del análisis técnico y racionalista de los documentos de la controversia entre católicos y anarquistas.",
        "CitaInelutable": "Observaciones: He aquí el comienzo del estudio que desnudará la mentira de los extremos.",
        "EjemploPedagogico": "El primer enfoque de un microscopio sobre un tejido infectado para identificar la causa real de la enfermedad social.",
        "IdeasPrincipales": [
            "Análisis técnico",
            "Método racional",
            "Examen de documentos"
        ],
        "PuntosImportantes": [
            "Transición de la teoría a la crítica de hechos",
            "Foco en la veracidad de los argumentos contendientes",
            "Uso de la lógica como escalpelo"
        ],
        "NodosSinapticos": [
            "Observaciones_Racionales",
            "Metodo_de_Analisis",
            "Desnudar_la_Mentira"
        ],
        "ContextoDiccionario": {
            "Observacion_Analitica": "Proceso de estudio detallado de una idea o hecho para separar la verdad de la ficción dogmática."
        }
    },
    "367: Controversia Católico - Anarquista": {
        "PilotoDeCoherencia": "Definición del conflicto social como una lucha entre dos formas de error: la fe ciega y el materialismo extremo.",
        "CitaInelutable": "La controversia católico-anarquista es la lucha entre dos errores que pretenden poseer la verdad absoluta sin conocer la ley de amor.",
        "EjemploPedagogico": "Dos ciegos que discuten sobre la luz; uno dice que no existe (anarquismo) y otro que es una gracia mágica (catolicismo), sin que ninguno la vea.",
        "IdeasPrincipales": [
            "Dicotomía error-error",
            "Falta de espiritualidad racional",
            "Conflicto de intereses materiales"
        ],
        "PuntosImportantes": [
            "El catolicismo como cárcel del alma",
            "El anarquismo como negación del espíritu",
            "La necesidad de una tercera vía: el espiritismo racional"
        ],
        "NodosSinapticos": [
            "Controversia_Social",
            "Errores_Extremos",
            "Falta_de_Amor"
        ],
        "ContextoDiccionario": {
            "Controversia_Social": "Estado de pugna entre sistemas incompletos de pensamiento que dividen a la humanidad por falta de conocimiento de la ley única."
        }
    },
    "615: Mis Observaciones": {
        "PilotoDeCoherencia": "Crítica a la evasión dogmática del catolicismo que huye de la prueba científica y se refugia en sofismas.",
        "CitaInelutable": "El catolicismo huye de la prueba científica... Concrete el señor Podestá y no hable de todas las cosas para no hablar de ninguna.",
        "EjemploPedagogico": "Un litigante que intenta confundir al juez hablando del clima porque sabe que no tiene pruebas de su inocencia.",
        "IdeasPrincipales": [
            "Evasión del dogma",
            "Exigencia de rigor científico",
            "Sofismas eclesiásticos"
        ],
        "PuntosImportantes": [
            "La incapacidad de probar a Dios mediante el rito",
            "La denuncia de la charlatanería teológica",
            "Llamado a la concreción racional en el debate"
        ],
        "NodosSinapticos": [
            "Evasion_Dogmatica",
            "Prueba_Cientifica_vs_Fe",
            "Sofismas_Religiosos"
        ],
        "ContextoDiccionario": {
            "Evasion_Dogmatica": "Táctica religiosa que consiste en evitar el debate racional o científico mediante el uso de términos ambiguos o anatemas."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Rayo Tanda 4 aplicado exitosamente.")
