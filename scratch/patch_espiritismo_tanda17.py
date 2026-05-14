import json

esencia_path = 'F:/trincado/public/data/contents/el-espiritismo-estudiado_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "13390: CAPTULO OCTAVO: LOS FALSOS MAGOS, AGOREROS Y ADIVINAS": {
        "PilotoDeCoherencia": "Denuncia del comercio espiritual: la magia y la adivinación son calificadas como estafas que explotan la angustia humana, desviando al espíritu de su verdadero camino de estudio y trabajo.",
        "CitaInelutable": "LOS FALSOS MAGOS, AGOREROS Y ADIVINAS... desviar con maliciosa astucia la rectitud de la verdad.",
        "EjemploPedagogico": "Un vendedor de mapas falsos en una ciudad desconocida. Te quita el dinero y te aleja del camino real. Los adivinos son esos vendedores de mapas falsos del destino.",
        "IdeasPrincipales": ["Falsa Magia", "Comercio Espiritual", "Explotación de la Necesidad"],
        "PuntosImportantes": [
            "El futuro no está escrito para ser 'adivinado', sino para ser construido por el espíritu",
            "La magia es una forma de detracción que busca resultados sin esfuerzo moral",
            "Cobrar por supuestos dones espirituales es un delito ante la justicia universal"
        ],
        "NodosSinapticos": ["Falsa_Magia", "Comercio_Espiritual", "Explotacion_de_la_Fe"],
        "ContextoDiccionario": {
            "Agorero": "Aquel que pretende predecir el futuro mediante signos arbitrarios, lucrando con la curiosidad o el miedo de los hombres."
        }
    },
    "13566: CAPTULO NUEVE: LOS FALACES, PSEUDO SABIOS Y PSEUDO CIENTFICOS": {
        "PilotoDeCoherencia": "Crítica a la soberbia intelectual de quienes, poseyendo cultura académica, la utilizan para negar la evidencia del espíritu por orgullo o por proteger sus privilegios materiales.",
        "CitaInelutable": "Pseudo sabios y pseudo científicos... aquellos que llamáis, si fue como vosotros o peores.",
        "EjemploPedagogico": "Un experto en óptica que niega la existencia de los colores porque sus instrumentos están rotos. El pseudo sabio niega el espíritu porque sus prejuicios le impiden verlo.",
        "IdeasPrincipales": ["Pseudo Sabios", "Soberbia Intelectual", "Ciencia vs Espíritu"],
        "PuntosImportantes": [
            "La verdadera ciencia debe ser humilde ante la inmensidad de la creación",
            "Muchos científicos son materialistas por conveniencia social, no por convicción racional",
            "El Espiritismo Luz y Verdad es la síntesis que unirá a todas las ciencias"
        ],
        "NodosSinapticos": ["Pseudo_Sabios", "Soberbia_Intelectual", "Ciencia_vs_Espiritu"],
        "ContextoDiccionario": {
            "Pseudo-sabios": "Individuos que ostentan conocimientos académicos pero carecen de la sabiduría espiritual necesaria para comprender las leyes de la vida."
        }
    },
    "13751: CAPTULO DIEZ: LOS ENEMIGOS DEL TRABAJO Y DEL TRABAJADOR": {
        "PilotoDeCoherencia": "Establecimiento del trabajo como la única ley de progreso: quien explota el trabajo ajeno o se niega a producir es un enemigo del espíritu y de la Comuna Universal.",
        "CitaInelutable": "El espiritismo es para valientes y sabios... enemigos del trabajo y del trabajador.",
        "EjemploPedagogico": "Una colmena donde todos los zánganos quieren comer pero ninguno quiere buscar polen. El parasitismo social es el veneno que detiene la evolución de la humanidad.",
        "IdeasPrincipales": ["Ley del Trabajo", "Parasitismo Social", "Dignidad del Trabajador"],
        "PuntosImportantes": [
            "El trabajo manual e intelectual es el único título de nobleza en el espiritismo",
            "El descanso eterno es una falacia mística; el espíritu siempre produce",
            "La explotación del hombre por el hombre es la mayor violación a la ley del amor"
        ],
        "NodosSinapticos": ["Ley_del_Trabajo", "Parasitismo_Social", "Dignidad_del_Obrero"],
        "ContextoDiccionario": {
            "Ley_del_Trabajo": "Principio universal que establece la acción productiva como el medio ineludible para el sustento material y el progreso espiritual."
        }
    },
    "13929: APNDICE: LLAMADA I": {
        "PilotoDeCoherencia": "Protocolo final para las sesiones de la Escuela: instrucciones sobre la posesión, la cadena de fluidos y la seriedad doctrinal, concluyendo que el hombre es el único valor real.",
        "CitaInelutable": "El solo hecho de reunirse es ya una evocación al gobierno del espiritismo... la única moneda de valor que hay, es el hombre.",
        "EjemploPedagogico": "Un concierto sinfónico donde todos los músicos deben estar afinados en la misma nota. La cadena de fluidos es esa afinación colectiva para que la verdad suene clara.",
        "IdeasPrincipales": ["Instrucciones de Sesión", "Cadena Fluídica", "Valor del Hombre"],
        "PuntosImportantes": [
            "Se prohíben las evocaciones individuales; se llama al Gobierno del Espiritismo",
            "El médium debe ser respetado en su sacrificio de emancipación",
            "La meta final de la obra es la fraternidad universal y la abolición del 'Dios Oro'"
        ],
        "NodosSinapticos": ["Instrucciones_de_Sesion", "Cadena_Fluidica", "Valor_del_Hombre"],
        "ContextoDiccionario": {
            "Cadena_Fluídica": "Círculo de personas que, unidas por las manos o por el pensamiento, armonizan sus fluidos para facilitar las manifestaciones espirituales de luz."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Espiritismo Tanda 17 (FINAL) aplicado exitosamente.")
