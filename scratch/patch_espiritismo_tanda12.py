import json

esencia_path = 'F:/trincado/public/data/contents/el-espiritismo-estudiado_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "8653: CAPTULO SEXTO: LOS MDIUMS PARLANTES": {
        "PilotoDeCoherencia": "El médium parlante es definido como la estación de radio (inalámbrica) que permite la conexión directa e inteligente con otras dimensiones, requiriendo protección estricta contra malones de espíritus detractores.",
        "CitaInelutable": "Cada médium, pues, es una estación inalámbrica transmisora y receptora... la llave económica del gobierno del espiritismo y la verdaderamente inteligente.",
        "EjemploPedagogico": "Un locutor de radio que presta su voz para que un experto hable al público. Si la cabina no está aislada, el ruido externo y saboteadores cortarán la transmisión. Así le ocurre al médium parlante.",
        "IdeasPrincipales": ["Médium Parlante", "Estación Inalámbrica", "Posesión Entera"],
        "PuntosImportantes": [
            "Es la facultad que más frutos tangibles de sabiduría entrega a la humanidad",
            "Sufren el martirio del asedio de espíritus bajos y miradas curiosas o envidiosas",
            "Permite la comunicación instantánea con mundos lejanos (ej: Venus) sin costo material alguno"
        ],
        "NodosSinapticos": ["Medium_Parlante", "Estacion_Inalambrica", "Posesion_Entera"],
        "ContextoDiccionario": {
            "Médium_Parlante": "El individuo que cede temporalmente sus órganos fonéticos y vitales a un espíritu desencarnado para transmitir la sabiduría y los consejos del plano espiritual de forma directa y discursiva."
        }
    },
    "8952: CAPITULO SPTIMO: LOS MDIUMS DE EFECTOS FSICOS": {
        "PilotoDeCoherencia": "Análisis de la mediumnidad de efectos físicos: útil como demostración material, pero denigrada por los supercheros e incapaz de convencer por sí sola sin la luz de la filosofía racional.",
        "CitaInelutable": "Los fenómenos no convencen a nadie, salvo que el convencimiento esté en la conciencia del individuo... El mayor fenómeno físico es la Escuela fundada.",
        "EjemploPedagogico": "Ver caer una manzana (fenómeno físico) no hace a nadie físico; es necesario que alguien explique la ley de gravedad (filosofía racional) para que el fenómeno tenga valor científico.",
        "IdeasPrincipales": ["Efectos Físicos", "Fenómeno vs Razón", "Espada Reluciente"],
        "PuntosImportantes": [
            "Las mesas giratorias y golpes demostraron la existencia del espíritu, pero no su moral",
            "Los investigadores materialistas fracasan al querer medir al espíritu con aparatos rígidos",
            "La Escuela misma y su doctrina irrebatible son el mayor efecto físico logrado por el gobierno espiritual"
        ],
        "NodosSinapticos": ["Efectos_Fisicos", "Fenomeno_vs_Razon", "Espada_Reluciente"],
        "ContextoDiccionario": {
            "Efectos_Físicos": "La categoría de facultades mediúmnicas que producen alteraciones comprobables en la materia densa (golpes, levitaciones, materializaciones), utilizadas como rudimentos para llamar la atención del mundo científico."
        }
    },
    "9101: CAPITULO OCTAVO: LOS MDIUMS DE APORTES Y OTROS": {
        "PilotoDeCoherencia": "Explicación de la prohibición estricta que mantiene el Gobierno del Espiritismo sobre la facultad de aportes, para evitar la violación del principio del trabajo y la propiedad y prevenir el parasitismo.",
        "CitaInelutable": "El gobierno del espiritismo, no podía dejar en libertad a los médiums de aporte... porque todo el que toma algo contra la voluntad del que lo posee, comete delito de robo.",
        "EjemploPedagogico": "Si una persona tuviera una llave maestra que abre todas las bóvedas bancarias, el gobierno humano se la confiscaría. El gobierno espiritual hace lo mismo con la facultad de aporte para que nadie robe a distancia.",
        "IdeasPrincipales": ["Medium de Aportes", "Prohibición del Aporte", "Ley de Propiedad Espiritual"],
        "PuntosImportantes": [
            "La mediumnidad no puede usarse para la vagancia ni para el enriquecimiento",
            "El aporte requiere desmaterializar el objeto y rematerializarlo en otro lugar usando fluidos inmensos",
            "Trincado ejecutó aportes inconscientes movido por la extrema necesidad, probando que es posible pero regulado"
        ],
        "NodosSinapticos": ["Medium_de_Aportes", "Prohibicion_del_Aporte", "Ley_de_Propiedad_Espiritual"],
        "ContextoDiccionario": {
            "Aporte": "El fenómeno físico por el cual un objeto material es transportado (desmaterializado y rematerializado) a través de distancias o barreras sólidas, facultad fuertemente restringida por la justicia espiritual."
        }
    },
    "9250: CAPITULO NOVENO: EL MAGNETISMO Y EL SONAMBULISMO": {
        "PilotoDeCoherencia": "Reivindicación del magnetismo como la electricidad humana y la verdadera fuerza detrás de todo fenómeno, advirtiendo que los magnetizadores materialistas juegan con fuego si ignoran al espíritu.",
        "CitaInelutable": "El magnetismo es la vanguardia del espiritismo... La vida, la voluntad, el pensamiento y todas las sensibilidades del alma son manifestaciones de energía eléctrica.",
        "EjemploPedagogico": "Un electricista inexperto que repara cables de alta tensión sin guantes de goma terminará electrocutado. Así, los magnetizadores que ignoran el espiritismo terminarán destrozando su propio sistema nervioso.",
        "IdeasPrincipales": ["Magnetismo Espiritual", "Sonambulismo Magnético", "Electricidad Vital"],
        "PuntosImportantes": [
            "Se demuestra que la ciencia médica oficial ya empieza a aplicar, bajo otros nombres, el magnetismo de Trincado",
            "El sonambulismo provocado es la puerta a la videncia artificial",
            "La energía eléctrica es la sustancia única que da la vida y con la que opera la voluntad"
        ],
        "NodosSinapticos": ["Magnetismo_Espiritual", "Sonambulismo_Magnetico", "Electricidad_Vital"],
        "ContextoDiccionario": {
            "Magnetismo_Humano": "La manipulación consciente de la electricidad vital (fluidos) por parte del espíritu a través de su cuerpo, utilizada como fuerza motriz para curar, dormir (sonambulismo) o mover objetos."
        }
    },
    "9534: CAPITULO DIEZ: LA SUGESTIN Y LA TELEPATA": {
        "PilotoDeCoherencia": "Corrección científica de los términos 'sugestión' y 'telepatía', demostrando que son errores de nomenclatura de la ciencia, siendo en realidad fenómenos de desdoblamiento anímico dirigido por el amor o el odio.",
        "CitaInelutable": "Telepatía... en rigor de verdad, es desdoblamiento consciente o inconsciente... Donde amas u odias, llega tu acción.",
        "EjemploPedagogico": "Cuando alguien en América 'siente' el pensamiento de alguien que muere en Europa, no es un telegrama mental, es el alma del moribundo que, liberándose, viaja a gran velocidad para despedirse directamente.",
        "IdeasPrincipales": ["Telepatía como Desdoblamiento", "Falsa Sugestión", "Acción del Pensamiento"],
        "PuntosImportantes": [
            "La sugestión hipnótica sin ética es clasificada como un fraude o asalto a la voluntad",
            "El pensamiento no viaja solo: es el alma misma que se desplaza hacia su objetivo",
            "El odio también desdobla el alma y viaja para calumniar o atacar, pero se arrastra"
        ],
        "NodosSinapticos": ["Telepatia_como_Desdoblamiento", "Falsa_Sugestion", "Accion_del_Pensamiento"],
        "ContextoDiccionario": {
            "Telepatía": "Término inexacto que utiliza la ciencia materialista para nombrar la comunicación a distancia, la cual el Espiritismo Racional demuestra que es en realidad el efecto del desdoblamiento del alma."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Espiritismo Tanda 12 aplicado exitosamente.")
