import json

esencia_path = 'F:/trincado/public/data/contents/profilaxis-de-la-vida_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "11944: Cap TUlo NoveNo: eCoNoM a p BliCa": {
        "PilotoDeCoherencia": "Administración comunal: la economía pública no es la política partidista, sino la gestión técnica y distributiva que asegura que la producción y el consumo estén matemáticamente equilibrados para erradicar la miseria.",
        "CitaInelutable": "La economía pública consiste, en la buena administración de una ciudad y de una nación... facilitando medios económicos a la producción; regular el consumo y su costo, para que pueda la ciudad y la nación cubrir sus necesidades sin miseria.",
        "EjemploPedagogico": "El sistema circulatorio del cuerpo. El corazón (economía pública) no acumula sangre; bombea los nutrientes exactos que cada órgano necesita. Si un órgano acumula de más y otro recibe de menos, el cuerpo enferma (miseria social).",
        "IdeasPrincipales": ["Economía Pública", "Administración Distributiva", "Erradicación de Miseria"],
        "PuntosImportantes": [
            "La economía pública es la órbita mayor que protege y garantiza la economía doméstica",
            "Su función es facilitar la producción y regular el consumo matemáticamente",
            "La miseria extrema actual es producto de la falsa economía pública (capitalismo y partidismo)"
        ],
        "NodosSinapticos": ["Economia_Publica", "Administracion_Distributiva", "Erradicacion_Miseria"],
        "ContextoDiccionario": {
            "Economia_Publica": "La gestión administrativa y matemática de los recursos de una región para garantizar la producción y el consumo sin escasez.",
            "Administracion_Distributiva": "El mecanismo comunal que reemplaza al comercio especulativo, asegurando que los bienes lleguen equitativamente a todos los individuos.",
            "Erradicacion_Miseria": "El objetivo principal y resultado ineludible de la aplicación de la economía pública racionalizada en la Comuna."
        }
    },
    "11983: Cap TUlo d CiMo: eCoNoM a iNdUsTrial": {
        "PilotoDeCoherencia": "Producción eficiente: la economía industrial es la unión práctica de la economía moral y científica; su meta no es el lucro del dueño, sino organizar los elementos para gastar menos energía y producir más bienes para la sociedad.",
        "CitaInelutable": "La economía industrial consiste, en la organización de todos los elementos que concurren a la producción del objeto, gastando menos y produciendo más... son su espíritu creador.",
        "EjemploPedagogico": "Un telar mecánico frente al trabajo manual. El telar industrial gasta menos esfuerzo humano y produce más tela para vestir a más personas. El problema no es la máquina, sino si la tela es para la Comuna o para el lucro individual.",
        "IdeasPrincipales": ["Economía Industrial", "Eficiencia Productiva", "Síntesis Moral y Científica"],
        "PuntosImportantes": [
            "La industria es el campo donde se demuestra materialmente la belleza creadora de los mundos",
            "Requiere la convergencia de todas las ciencias (química, física, matemáticas) y hasta del arte",
            "Su fin doctrinario es minimizar el esfuerzo humano maximizando la abundancia comunal"
        ],
        "NodosSinapticos": ["Economia_Industrial", "Eficiencia_Productiva", "Sintesis_Productiva"],
        "ContextoDiccionario": {
            "Economia_Industrial": "La aplicación de todas las ciencias y artes para organizar la producción masiva de bienes con el mínimo desgaste de recursos y esfuerzo humano.",
            "Eficiencia_Productiva": "El principio de producir más y mejores satisfactores utilizando la menor cantidad de energía y tiempo, en beneficio exclusivo de la colectividad.",
            "Sintesis_Productiva": "La unión indispensable de la economía moral (ideación) y científica (técnica) dentro del proceso industrial."
        }
    },
    "12028: Cap TUlo deCiMopriMero: eCoNoM a pol TiCa (HoY GeoGr fiCa)": {
        "PilotoDeCoherencia": "Del mapa político al mapa natural: el Maestro dictamina que la economía 'política' debe llamarse 'geográfica', pues no depende de fronteras o gobiernos artificiales, sino de lo que la tierra naturalmente produce en cada región para el intercambio.",
        "CitaInelutable": "La economía política pronto cesa en el nombre; pero se llamará geográfica y es lo mismo; y consiste, en el conocimiento de las riquezas o producciones de las regiones... para su intercambio.",
        "EjemploPedagogico": "El trópico produce café y las zonas frías producen trigo. No es una decisión política, es geografía. Intercambiar café por trigo es economía geográfica. Ponerles impuestos y fronteras es la falsa economía política.",
        "IdeasPrincipales": ["Economía Geográfica", "Abolición Fronteriza", "Intercambio Natural"],
        "PuntosImportantes": [
            "El nombre 'política' cesará porque las divisiones nacionales desaparecerán en la Comuna",
            "La base de esta economía es estudiar por qué una región produce un bien y cómo aumentarlo",
            "El intercambio de productos entre continentes responde a leyes naturales, no a tratados diplomáticos"
        ],
        "NodosSinapticos": ["Economia_Geografica", "Intercambio_Natural", "Abolicion_Fronteriza"],
        "ContextoDiccionario": {
            "Economia_Geografica": "El sistema de intercambio global basado exclusivamente en la vocación productiva natural de cada región de la Tierra, libre de fronteras.",
            "Intercambio_Natural": "El movimiento distributivo de recursos entre diferentes zonas climáticas y geográficas sin especulación financiera ni aduanas.",
            "Abolicion_Fronteriza": "El proceso derivado de la Comuna mediante el cual desaparecen las divisiones políticas, quedando la Tierra como una sola nación."
        }
    },
    "12048: Cap TUlo deCiMoseGUNdo: eCoNoM a soCial": {
        "PilotoDeCoherencia": "El progreso incesante: la economía social es el estudio continuo de cómo elevar la armonía física y moral de los individuos, reconociendo que cada ser humano es un grano de arena indispensable en el progreso universal.",
        "CitaInelutable": "La economía social encierra todos los intereses morales y materiales de las civilizaciones... Es decir, que es un estudio incesante del Progreso, por el que se ha de educar continuamente en ascensión a los individuos.",
        "EjemploPedagogico": "El cuidado de un jardín botánico. No basta con plantar (economía agrícola); hay que cuidar que cada planta reciba luz sin hacer sombra a las demás, asegurando la belleza conjunta. Eso es la economía social.",
        "IdeasPrincipales": ["Economía Social", "Progreso Incesante", "Individuo Universal"],
        "PuntosImportantes": [
            "Las leyes sociales del sexto día (capitalismo) están condenadas porque dividen en lugar de armonizar",
            "A ningún individuo se le puede considerar un extraño, pues todos componen la humanidad",
            "El objetivo es educar continuamente a los individuos en ascensión moral y material armónica"
        ],
        "NodosSinapticos": ["Economia_Social", "Progreso_Incesante", "Individuo_Universal"],
        "ContextoDiccionario": {
            "Economia_Social": "La ciencia comunal que administra los derechos, obligaciones e intereses morales y materiales para asegurar la evolución armónica de la humanidad.",
            "Progreso_Incesante": "El principio cósmico de que la educación y la elevación del ser no se detienen nunca, avanzando siempre hacia mayor belleza y perfección.",
            "Individuo_Universal": "La concepción de que cada ser humano es una pieza fundamental y no descartable dentro del engranaje del progreso cósmico."
        }
    },
    "12074: Cap TUlo deCiMoTerCero: eCoNoM a espiriTUal": {
        "PilotoDeCoherencia": "Fuerza psíquica unificada: propia solo del séptimo día, la economía espiritual es la alineación consciente del pensamiento de la humanidad para obrar telepatica y magnéticamente en consonancia con la Ley Mayor.",
        "CitaInelutable": "Esta economía es nueva para los hombres y sólo es del séptimo día; pero materializándola en ley, consiste en la unidad del pensamiento para el esfuerzo Psíquico, para obrar en consonancia con la ley Mayor.",
        "EjemploPedagogico": "Un rayo láser. La luz de una bombilla dispersa su energía en todas direcciones. Un láser alinea todos los fotones en una sola dirección, obteniendo un poder perforador. La economía espiritual es el láser del pensamiento humano unificado.",
        "IdeasPrincipales": ["Economía Espiritual", "Esfuerzo Psíquico Unificado", "Ley de la Fuerza Racional"],
        "PuntosImportantes": [
            "Hasta hoy, el hombre unía su pensamiento solo para crear fuerza bruta y hacer daño a otros",
            "En el séptimo día, la mente humana unificada se convierte en una fuerza magnética constructiva",
            "Esta fuerza no es milagro, es la aplicación matemática y consciente del poder del espíritu sobre la materia"
        ],
        "NodosSinapticos": ["Economia_Espiritual", "Esfuerzo_Psiquico", "Fuerza_Racional_Unificada"],
        "ContextoDiccionario": {
            "Economia_Espiritual": "La alineación y concentración del pensamiento colectivo de la humanidad para generar fuerzas magnéticas y telepáticas constructivas.",
            "Esfuerzo_Psiquico": "La aplicación consciente de la energía mental y espiritual para transformar la materia o apoyar el progreso, de acuerdo a la Ley Mayor.",
            "Fuerza_Racional_Unificada": "El poder superior que resulta cuando las mentes de la humanidad dejan el egoísmo (fuerza bruta) y actúan como un solo bloque telepático."
        }
    },
    "12124: Cap TUlo deCiMoCUarTo: eCoNoM a UNiversal": {
        "PilotoDeCoherencia": "Conexión interplanetaria: la economía universal es el grado máximo de evolución en la Tierra; consiste en unir todos los espíritus al Maestro para lograr la omnipotencia solidaria con todo el universo habitado.",
        "CitaInelutable": "Consiste en la unidad de todos los espíritus concentrados en el Maestro, para así conseguir la solidaridad con todo el universo, con lo que se alcanza la omnipotencia para obrar en ley la armonía de la Creación.",
        "EjemploPedagogico": "Una antena que se sincroniza con una red satelital global. Cuando la Tierra une todos sus espíritus al Maestro, se convierte en una antena capaz de recibir y enviar energía solidaria a otros mundos del infinito.",
        "IdeasPrincipales": ["Economía Universal", "Omnipotencia Solidaria", "Mundos Infinitos"],
        "PuntosImportantes": [
            "La Tierra deja de ser un planeta aislado y se integra conscientemente al enjambre de mundos",
            "El testamento de Abraham ya dictaba que los mundos son infinitos y el hombre los habita todos",
            "La concentración mental en el Maestro es el cable a tierra que permite la conexión cósmica"
        ],
        "NodosSinapticos": ["Economia_Universal", "Omnipotencia_Solidaria", "Solidaridad_Interplanetaria"],
        "ContextoDiccionario": {
            "Economia_Universal": "El grado supremo de organización espiritual donde la humanidad entera actúa en solidaridad consciente con los seres de otros mundos del universo.",
            "Omnipotencia_Solidaria": "El inmenso poder creador y magnético que se alcanza cuando los espíritus de la Tierra se unen telepáticamente con los del cosmos.",
            "Solidaridad_Interplanetaria": "El principio de fraternidad extendido más allá de la Tierra, reconociendo a todos los habitantes del universo como hermanos de una misma creación."
        }
    },
    "12144: mixtificada por todas las Religiones.": {
        "PilotoDeCoherencia": "La ley del mínimo esfuerzo cósmico: la economía universal permite obrar en omnipotencia sin duplicar trabajos; lo que se crea en un mundo beneficia al otro instantáneamente mediante la solidaridad de fuerzas.",
        "CitaInelutable": "Por la economía Universal se obra en Omnipotencia con todas las fuerzas de los solidarizados... se hace una obra en un mundo y aquella obra no se hace en otro mundo a la vez, porque sería restar fuerzas.",
        "EjemploPedagogico": "Una red de laboratorios interconectados. Si un laboratorio en la Tierra descubre una fórmula, los otros en Marte o Júpiter no gastan tiempo en investigarla de nuevo; la reciben y la usan. Eso es la economía de fuerzas en escala universal.",
        "IdeasPrincipales": ["No Duplicidad de Esfuerzos", "Eficiencia Interplanetaria", "Sumatoria de Fuerzas"],
        "PuntosImportantes": [
            "La solidaridad interplanetaria evita que dos mundos gasten energía descubriendo simultáneamente lo mismo",
            "Al sumar las fuerzas de todos los mundos solidarizados, las obras se realizan con la mitad del esfuerzo",
            "Esta ley económica máxima cierra el volumen estableciendo que el destino final es la comunión de todo el universo"
        ],
        "NodosSinapticos": ["Eficiencia_Interplanetaria", "Suma_de_Fuerzas_Cosmicas", "Economia_de_Fuerzas"],
        "ContextoDiccionario": {
            "Eficiencia_Interplanetaria": "El mecanismo por el cual el conocimiento y los avances logrados en un mundo son telepáticamente transferidos a otros, evitando la duplicidad de investigaciones.",
            "Suma_de_Fuerzas_Cosmicas": "La unificación magnética de las voluntades de los espíritus de diferentes mundos para realizar grandes transformaciones en la creación.",
            "Economia_de_Fuerzas": "La aplicación suprema de la eficiencia cósmica, logrando maravillas universales con el mínimo gasto energético de los espíritus creadores."
        }
    }
}

for clave_nueva, contenido in nuevos_nodos.items():
    num = clave_nueva.split(':')[0]
    claves_viejas = [k for k in esencia.keys() if k.startswith(num)]
    for cv in claves_viejas:
        del esencia[cv]
    esencia[clave_nueva] = contenido

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Tanda 12 Profilaxis re-destilada: 7 nodos.")
