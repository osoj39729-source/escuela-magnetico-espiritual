import json

esencia_path = 'F:/trincado/public/data/contents/espiritismo-en-su-asiento_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "9091: V (CAPTULO V: Explicacin del espiritismo)": {
        "PilotoDeCoherencia": "Cosmogonía dinámica: el espiritismo revela que el universo es un organismo solidario y eterno donde la vida nunca se interrumpe, solo cambia de frecuencia.",
        "CitaInelutable": "El universo es un organismo vivo... no hay muertos, sino seres en diferentes estados de vibración.",
        "EjemploPedagogico": "Una orquesta sinfónica. Cada músico (ser) toca un instrumento diferente y en tonos distintos, pero todos forman una sola melodía universal (la vida) bajo la dirección del Creador.",
        "IdeasPrincipales": ["Universo Vivo", "Solidaridad Cósmica", "Estados Vibratorios"],
        "PuntosImportantes": [
            "La muerte es solo un cambio de plano vibratorio, no una cesación de la existencia",
            "Todo en el cosmos está interconectado por la ley de solidaridad universal",
            "El espíritu evoluciona pasando por todos los estados de la materia y el éter"
        ],
        "NodosSinapticos": ["Universo_Vivo", "Solidaridad_Cosmica", "Estados_Vibratorios"],
        "ContextoDiccionario": {
            "Universo_Vivo": "El concepto de que toda la creación posee una esencia espiritual activa y en constante evolución."
        }
    },
    "9201: ver is, ser el consejo que recibir is.": {
        "PilotoDeCoherencia": "Mecánica mediúmnica: los médiums son herramientas biológicas preciosas que requieren estudio, ética y pureza para servir de canal a los maestros de luz.",
        "CitaInelutable": "Los médiums, son herramientas muy preciadas... aceitarlas vosotros con nuestros consejos.",
        "EjemploPedagogico": "Un telescopio de alta precisión. Si el lente (conciencia del médium) está sucio o empañado, las estrellas (verdades espirituales) se verán borrosas o deformadas.",
        "IdeasPrincipales": ["Cuidado del Médium", "Herramienta Espiritual", "Estudio Mediúmnico"],
        "PuntosImportantes": [
            "La mediumnidad sin estudio se convierte en misticismo o charlatanismo",
            "El protector espiritual no impone, sino que aconseja para el buen funcionamiento del canal",
            "El médium debe ser el primero en vivir la ley que transmite"
        ],
        "NodosSinapticos": ["Cuidado_del_Medium", "Herramienta_Espiritual", "Estudio_Mediunico"],
        "ContextoDiccionario": {
            "Cuidado_del_Médium": "El conjunto de disciplinas físicas y morales necesarias para mantener la salud y fidelidad de la facultad mediúmnica."
        }
    },
    "9225: VI (CAPTULO V: Explicacin del espiritismo)": {
        "PilotoDeCoherencia": "Consumación de la verdad: el espiritismo racional es la revelación definitiva del Espíritu de Verdad que establece el reinado de la razón sobre el dogma.",
        "CitaInelutable": "El espiritismo... es la revelación del Espíritu de Verdad... establece el reinado de la razón.",
        "EjemploPedagogico": "Llegar a la cima de una montaña. Desde arriba (la razón) se ven todos los caminos que se recorrieron (religiones) y se comprende por qué eran necesarios pero insuficientes.",
        "IdeasPrincipales": ["Revelación del Espíritu de Verdad", "Reinado de la Razón", "Confirmación Profética"],
        "PuntosImportantes": [
            "El espiritismo no anula las verdades pasadas, sino que las explica y completa",
            "La razón es el único filtro válido para aceptar una comunicación espiritual",
            "La revelación es progresiva y se ajusta a la capacidad de comprensión del hombre"
        ],
        "NodosSinapticos": ["Revelacion_del_Espiritu_de_Verdad", "Reinado_de_la_Razon", "Confirmacion_Profetica"],
        "ContextoDiccionario": {
            "Revelación_del_Espíritu_de_Verdad": "El proceso histórico-doctrinal de entrega de la luz racional prometida por los grandes misioneros."
        }
    },
    "9232: PRIMER CONSEJO DE MEDIUMS": {
        "PilotoDeCoherencia": "Institucionalidad de la Escuela: establecimiento del orden y el reglamento que garantiza la seriedad y el rigor científico de la comunicación mediúmnica.",
        "CitaInelutable": "PRIMER CONSEJO DE MEDIUMS... Reglamento de Cátedras.",
        "EjemploPedagogico": "Las reglas de un laboratorio científico. Sin orden ni método (reglamento), los experimentos (comunicaciones) no tienen validez ni utilidad para la ciencia.",
        "IdeasPrincipales": ["Reglamento de Cátedras", "Consejo de Médiums", "Orden Doctrinario"],
        "PuntosImportantes": [
            "El consejo de médiums vigila la pureza de la doctrina en cada centro",
            "El reglamento de cátedras evita la anarquía y el personalismo en la Escuela",
            "La organización material es necesaria para sustentar la obra espiritual"
        ],
        "NodosSinapticos": ["Reglamento_de_Cátedras", "Consejo_de_Médiums", "Orden_Doctrinario"],
        "ContextoDiccionario": {
            "Reglamento_de_Cátedras": "El conjunto de normas que rigen el funcionamiento de los centros de estudio de la Escuela Magnético-Espiritual."
        }
    },
    "9580: EP LOGO": {
        "PilotoDeCoherencia": "Sentencia final y nueva era: clausura del volumen confirmando el fin del error y el inicio del reinado de la Comuna de Amor y Ley en el Séptimo Día de la Tierra.",
        "CitaInelutable": "¡Humanidad! Despierta... todo está consumado... el fin del error... el principio del reinado del espiritismo.",
        "EjemploPedagogico": "El sonar de la campana al final de un examen. El tiempo de prueba ha terminado; ahora empieza la vida real basada en lo que cada uno aprendió y demostró.",
        "IdeasPrincipales": ["Fin del Error", "Séptimo Día", "Comuna de Amor y Ley"],
        "PuntosImportantes": [
            "El 'Juicio Final' no es el fin del mundo, sino el fin de la ignorancia religiosa",
            "La ley de 'Ama a tu hermano' es el único requisito para habitar la nueva Tierra",
            "El Maestro Trincado entrega esta obra como el asiento definitivo de la verdad para los siglos de luz"
        ],
        "NodosSinapticos": ["Fin_del_Error", "Septimo_Dia", "Comuna_de_Amor_y_Ley"],
        "ContextoDiccionario": {
            "Fin_del_Error": "El término del periodo de predominio de las religiones y los dogmas en la evolución humana."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Asiento Tanda 17 (FINAL) aplicado exitosamente.")
