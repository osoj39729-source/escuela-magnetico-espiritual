import json

esencia_path = 'F:/trincado/public/data/contents/profilaxis-de-la-vida_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "11720: Cap TUlo CUarTo: eCoNoM a Moral": {
        "PilotoDeCoherencia": "La planificación espiritual: la economía moral consiste en pensar y organizar la obra en la mente antes de gastar energía en ejecutarla, logrando el máximo bien con el mínimo costo de fuerzas.",
        "CitaInelutable": "La economía moral consiste en disponer todo lo concerniente para una obra antes de ejecutarla y pesar todo bien en la mente del autor, para que la idea se convierta en realidad con un bien mayor y menos costo de fuerzas.",
        "EjemploPedagogico": "El arquitecto que dibuja los planos antes de mover un solo ladrillo. Si construye sin plano (sin economía moral), derribará muros y desperdiciará material. Pensar primero es la mayor economía de fuerza.",
        "IdeasPrincipales": ["Economía Moral", "Planificación Previa", "Ahorro de Fuerzas"],
        "PuntosImportantes": [
            "La mente debe pesar y estructurar cada acto antes de que la voluntad lo ejecute",
            "Actuar por impulso sin reconcentración previa conduce a obras estériles",
            "El pensamiento organizado es la primera forma de ahorro energético del espíritu"
        ],
        "NodosSinapticos": ["Economia_Moral", "Planificacion_Previa", "Ahorro_de_Fuerzas"],
        "ContextoDiccionario": {
            "Economia_Moral": "La disciplina de estructurar racional y mentalmente cualquier acción antes de su ejecución para evitar el desgaste inútil de energía.",
            "Planificacion_Previa": "El acto de reconcentración espiritual que permite visualizar el resultado y método de una obra antes de iniciarla.",
            "Ahorro_de_Fuerzas": "El principio profiláctico de lograr el máximo beneficio comunal invirtiendo la cantidad exacta de energía requerida, sin desperdicio."
        }
    },
    "11752: Cap TUlo QUiNTo: eCoNoM a CieNT fiCa": {
        "PilotoDeCoherencia": "Voluntad ejecutora: la economía científica es el brazo que ejecuta lo que la economía moral idealizó; la moral es el pensamiento (el Éter), la científica es la voluntad que materializa la idea con peso y medida.",
        "CitaInelutable": "La economía moral, idealiza; la economía científica, obra; la economía moral, es el pensamiento; la economía científica, es la voluntad... voluntad ejecutora que, del éter hace los cuerpos y las cosas.",
        "EjemploPedagogico": "El músico y el luthier. La economía moral es el músico que compone la melodía en su cabeza. La economía científica es el luthier que construye el violín con maderas, peso y tensión exacta para que la melodía suene.",
        "IdeasPrincipales": ["Economía Científica", "Voluntad Ejecutora", "Pensamiento y Obra"],
        "PuntosImportantes": [
            "La ciencia no es un fin en sí misma, es la herramienta (voluntad) que materializa el pensamiento moral",
            "El Creador usó la economía moral al pensar el universo, y la científica al condensar el Éter en cuerpos",
            "Cualquier obra requiere la unión indisoluble de idealización (moral) y ejecución (ciencia)"
        ],
        "NodosSinapticos": ["Economia_Cientifica", "Voluntad_Ejecutora", "Dualidad_Creadora"],
        "ContextoDiccionario": {
            "Economia_Cientifica": "La aplicación de conocimientos técnicos y físicos para materializar con exactitud las ideas concebidas por la economía moral.",
            "Voluntad_Ejecutora": "La fuerza activa del espíritu que transforma el pensamiento abstracto en una realidad tangible.",
            "Dualidad_Creadora": "La acción complementaria del pensamiento (idealización) y la voluntad (ejecución) necesaria para cualquier obra."
        }
    },
    "11794: Cap TUlo sexTo: eCoNoM a doM sTiCa": {
        "PilotoDeCoherencia": "La administración del hogar: la economía doméstica es calcular el gasto según los medios disponibles para asegurar un progreso constante, uniendo la órbita de la mujer (administración) con la del hombre (provisión).",
        "CitaInelutable": "Consiste en someterse a una pauta o regla calculada pero no rutinaria y sí ascendente, para conseguir siempre un mejor género de vida... Esta economía pertenece de lleno a la mujer, dentro de la órbita de la casa; pero la órbita es el hombre.",
        "EjemploPedagogico": "Un barco. El hombre es el motor que genera la energía para avanzar; la mujer es el timón que dirige esa energía para no encallar. Si el timón gasta más de lo que el motor produce, el barco se hunde (ruina doméstica).",
        "IdeasPrincipales": ["Economía Doméstica", "Regla Ascendente", "Administración del Hogar"],
        "PuntosImportantes": [
            "La economía doméstica requiere cálculo racional y evita gastos superfluos que excedan los ingresos",
            "No se trata de privación estática (rutinaria), sino de administración inteligente para progresar (ascendente)",
            "La armonía del hogar exige que la provisión (hombre) y la administración (mujer) trabajen en conjunto"
        ],
        "NodosSinapticos": ["Economia_Domestica", "Regla_Ascendente", "Administracion_Familiar"],
        "ContextoDiccionario": {
            "Economia_Domestica": "La administración matemática de los recursos del hogar para garantizar el bienestar y el progreso continuo de la familia.",
            "Regla_Ascendente": "La planificación económica que busca mejorar gradualmente el nivel de vida sin incurrir en deudas ni excesos irracionales.",
            "Administracion_Familiar": "El rol organizativo fundamental dentro del hogar, asignado doctrinalmente a la mujer como contraparte del hombre proveedor."
        }
    },
    "11840: Cap TUlo s pTiMo: eCoNoM a orG NiCa": {
        "PilotoDeCoherencia": "Cooperación universal: la economía orgánica es el aprovechamiento armónico de todos los seres (individuales y de los tres reinos) para el bien común, entendiendo que la colectividad siempre beneficia al individuo.",
        "CitaInelutable": "La economía orgánica es, el aprovechamiento armónico de todos los organismos y cosas de la tierra, para un bien social común... las individualidades, primero han de ser conscientes de que la colectividad es más beneficiosa.",
        "EjemploPedagogico": "Las abejas en una colmena. Ninguna abeja podría sobrevivir sola en el invierno. Su trabajo individual no es para sí misma, sino para la colmena (colectividad), lo cual le garantiza el bienestar que aislada jamás tendría.",
        "IdeasPrincipales": ["Economía Orgánica", "Colectividad Beneficiosa", "Armonía de los Reinos"],
        "PuntosImportantes": [
            "La individualidad egoísta es antinatural; el verdadero bienestar solo se logra en colectividad",
            "La sociedad humana debe integrar a los reinos animal, vegetal y mineral sin destruirlos, sino aprovechándolos armónicamente",
            "El esfuerzo común eleva la belleza y la armonía de todos los componentes del ecosistema"
        ],
        "NodosSinapticos": ["Economia_Organica", "Colectividad_Beneficiosa", "Armonia_de_Reinos"],
        "ContextoDiccionario": {
            "Economia_Organica": "La organización armónica de todos los seres y elementos de la Tierra para generar un bienestar comunal sin explotaciones.",
            "Colectividad_Beneficiosa": "El principio doctrinal que establece que el bien del conjunto garantiza automática y matemáticamente el bien del individuo.",
            "Armonia_de_Reinos": "El aprovechamiento racional e incruento de los minerales, vegetales y animales bajo la dirección protectora del hombre."
        }
    },
    "11880: Cap TUlo oCTavo: eCoNoM a rUral Y aGr CoLa": {
        "PilotoDeCoherencia": "La base del bienestar: la economía rural y agrícola es la síntesis de la orgánica y la científica, aplicada a la tierra; el descuido científico de la agricultura es la causa principal del descontento y la miseria humana.",
        "CitaInelutable": "La economía rural y agrícola se basa en el aprovechamiento de las economías orgánica y científica... el desconocimiento de que la agricultura es la única base posible del bienestar y por esto hay tanto descontento.",
        "EjemploPedagogico": "Construir un rascacielos sin cimientos. El mundo moderno creó industrias gigantescas y descuidó el campo (los cimientos). Sin la agricultura priorizada, toda la economía urbana es una ilusión que colapsa de hambre.",
        "IdeasPrincipales": ["Economía Agrícola", "Agricultura como Base", "Ciencia Aplicada al Campo"],
        "PuntosImportantes": [
            "La agricultura no es una labor secundaria; es la infraestructura absoluta de la vida humana",
            "La ciencia ha fallado históricamente al no volcar todo su esfuerzo en perfeccionar el rendimiento rural",
            "El descontento social moderno nace de haber separado la economía urbana de su raíz agrícola"
        ],
        "NodosSinapticos": ["Economia_Agricola", "Agricultura_Base", "Descuido_Cientifico"],
        "ContextoDiccionario": {
            "Economia_Agricola": "La aplicación conjunta de la ciencia y la moral al cultivo de la tierra para obtener el máximo rendimiento sin agotarla.",
            "Agricultura_Base": "El axioma económico que sitúa a la producción de alimentos como el cimiento indispensable de cualquier civilización sana.",
            "Descuido_Cientifico": "La crítica a la ciencia moderna por haber priorizado la industria bélica o suntuaria en detrimento de la tecnología agrícola."
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

print("Tanda 11 Profilaxis re-destilada: 5 nodos.")
