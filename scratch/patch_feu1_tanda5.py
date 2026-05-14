import json

esencia_path = 'F:/trincado/public/data/contents/filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "896: Junio 6 - fe en Dios y constancia. Adi s .": {
        "PilotoDeCoherencia": "Mercantilismo espiritual: el guía reprueba a los médiums o misioneros que materializan sus facultades cobrando o buscando beneficio propio antes que el de la humanidad, advirtiendo que la Providencia les retira la asistencia por esta desobediencia.",
        "CitaInelutable": "El mal empleo de las dotes y facultades que les dieron y las materializan hasta el extremo, cuando debieran emplearlas en bien de la humanidad y sólo por el Amor; que de darles lo necesario ya se cuidaría la Divina Providencia.",
        "EjemploPedagogico": "Un cartero que cobra peaje por entregar las cartas que no son suyas. Las facultades mediúmnicas son el correo del espacio; cobrar por darlas es robarle a la humanidad. Si el cartero hace su trabajo por amor, el Estado (la Providencia) le asegura su salario.",
        "IdeasPrincipales": ["Mercantilismo Espiritual", "Desobediencia Misionera", "Abandono Providencial"],
        "PuntosImportantes": [
            "Las facultades espirituales se otorgan exclusivamente para el servicio gratuito a la humanidad",
            "Cobrar o buscar lucro con el espiritismo es materializar la facultad y corromper la misión",
            "Quien lucra con sus dotes espirituales pierde la protección superior y asume un duro karma de restitución"
        ],
        "NodosSinapticos": ["Mercantilismo_Espiritual", "Gratuidad_Mediumnica", "Desobediencia_Misionera"],
        "ContextoDiccionario": {
            "Mercantilismo_Espiritual": "El acto corrupto de utilizar las facultades mediúmnicas o el conocimiento espiritual para obtener lucro o ventajas materiales.",
            "Gratuidad_Mediumnica": "La ley inquebrantable de la Escuela que establece que lo que se recibe gratis del espacio (facultades, instrucción) debe darse gratis a la humanidad.",
            "Desobediencia_Misionera": "La desviación de un encarnado que, teniendo una misión asignada de luz, elige usar sus dones para el engrandecimiento personal."
        }
    },
    "915: Junio 7 de 1910 - tiene en las comunicaciones.": {
        "PilotoDeCoherencia": "Dominación entre encarnados: el protector de L.G. denuncia que ella está extraviada porque obedece ciegamente a una 'amiga' (médium de espíritu ruin), demostrando que el magnetismo bajo de un encarnado puede anular a un médium débil.",
        "CitaInelutable": "Se presentó el protector de la médium L.G., el que se lamenta del extravío de su protegida, y expuso que ella obraba impelida y dominada por otra amiga suya... que era un espíritu ruin.",
        "EjemploPedagogico": "Un barco amarrado a un muelle podrido. Aunque el barco (la médium L.G.) tenga un buen motor (su protector), si se deja amarrar por la soga del magnetismo dominador de una mala influencia (su 'amiga'), no podrá navegar hacia la luz.",
        "IdeasPrincipales": ["Dominación Magnética", "Extravío Mediúmnico", "Influencia de Encarnados"],
        "PuntosImportantes": [
            "El peligro para un médium no solo viene de los espíritus desencarnados, sino del magnetismo dominador de otras personas vivas",
            "La debilidad de carácter o la sumisión ciega a otra persona anula la protección de los guías de luz",
            "Los protectores no imponen su voluntad por la fuerza; se lamentan y piden ayuda a la cátedra para rescatar a su protegida"
        ],
        "NodosSinapticos": ["Dominacion_Magnetica_Encarnada", "Extravio_Mediumnico", "Libre_Albedrio_Mediumnico"],
        "ContextoDiccionario": {
            "Dominacion_Magnetica_Encarnada": "El control que una persona de bajas pasiones ejerce sobre un médium débil o inexperto a través de la influencia fluídica.",
            "Extravio_Mediumnico": "La pérdida del rumbo doctrinal y protector de un médium que se deja sugestionar por espíritus o personas sin luz.",
            "Libre_Albedrio_Mediumnico": "El principio por el cual los guías de luz respetan la decisión del médium, incluso cuando este elige dejarse dominar por malas influencias."
        }
    },
    "945: Junio 12 - Francisco Xavier.": {
        "PilotoDeCoherencia": "Cumplimiento inexorable de la Ley: Francisco Xavier reprende levemente al Maestro por desanimarse ('bambolearse') ante las traiciones, recordándole que la voluntad del Creador se cumplirá inexorablemente, con o sin los elegidos iniciales.",
        "CitaInelutable": "Estoy a tu lado... un tanto disgustado porque te bamboleas a un pequeño soplo de viento contrario. Nada importa que un ser quiera torcer la voluntad de Dios... la voluntad del Todopoderoso se cumplirá contra viento y marea.",
        "EjemploPedagogico": "Un director de orquesta frustrado porque el primer violín renunció. El dueño del teatro le dice: 'No te desanimes, la sinfonía se va a tocar igual. Si este violinista falla, traemos a otro, pero la obra no se detiene por un desertor.'",
        "IdeasPrincipales": ["Inexorabilidad de la Ley", "Firmeza del Misionero", "Sustitución de Elegidos"],
        "PuntosImportantes": [
            "La debilidad humana (dudar o desanimarse) es comprensible, pero el Guía exige firmeza racional ante las dificultades",
            "Ninguna deserción, traición o fuerza contraria puede detener el plan general del progreso",
            "Si los médiums o misioneros asignados fallan (reniegan), la ley los sustituye inmediatamente para cumplir la obra"
        ],
        "NodosSinapticos": ["Inexorabilidad_del_Progreso", "Sustitucion_Misionera", "Firmeza_Racional"],
        "ContextoDiccionario": {
            "Inexorabilidad_del_Progreso": "La garantía absoluta de que las leyes matemáticas del universo y los planes de evolución se cumplirán, sin importar la resistencia de los individuos.",
            "Sustitucion_Misionera": "La acción de la justicia cósmica de reemplazar a un instrumento humano que ha fallado o traicionado su misión, dándole el cargo a otro más afín.",
            "Firmeza_Racional": "La actitud inquebrantable que debe mantener el espiritista, sabiendo matemáticamente que ninguna fuerza baja puede detener la obra de la luz."
        }
    },
    "966: Junio 21 de 1910 - Raro fen meno": {
        "PilotoDeCoherencia": "Revelación de identidad protectora: Luis Gonzaga se identifica como el protector de otra médium, reconociendo su posición subordinada dentro de las huestes de Francisco Xavier, reiterando la estructura piramidal de las misiones.",
        "CitaInelutable": "Francisco Xavier, mi maestro y tu protector, que me concedió su permiso para hablaros... es hora de darte la seguridad de que yo, Luis Gonzaga, el más pequeño de las huestes de Francisco Xavier, soy tu protector.",
        "EjemploPedagogico": "Un soldado raso presentándose ante su protegido, aclarando que está allí porque el Coronel (Francisco Xavier) se lo autorizó. Muestra el respeto riguroso a la disciplina de las jerarquías espirituales.",
        "IdeasPrincipales": ["Identidad del Protector", "Huestes Subordinadas", "Disciplina Espiritual"],
        "PuntosImportantes": [
            "Los guías menores siempre actúan bajo el permiso y la autorización expresa del Guía Mayor de la misión",
            "Los títulos de 'santos' (como Luis Gonzaga) no implican independencia suprema; todos rinden cuentas en la jerarquía",
            "Las manifestaciones de los guías traen seguridad y consuelo a los médiums que han sufrido extravíos temporales"
        ],
        "NodosSinapticos": ["Disciplina_Espiritual", "Guias_Subordinados", "Estructura_Piramidal"],
        "ContextoDiccionario": {
            "Disciplina_Espiritual": "El orden inquebrantable de respeto y acatamiento de permisos que rige las operaciones de los espíritus de luz en el espacio.",
            "Guias_Subordinados": "Espíritus de luz elevada que, a pesar de su sabiduría, operan bajo el mando directo de Directores Mayores de misiones planetarias.",
            "Estructura_Piramidal": "La organización de las fuerzas del progreso, donde la autoridad desciende desde el Creador hasta el espíritu más pequeño en perfecta armonía matemática."
        }
    },
    "1015: Junio 22 de 1910 - Estando  la  m": {
        "PilotoDeCoherencia": "Aparición materializada protectora: Antonio de Padua se materializa visual y auditivamente en estado de vigilia ante una médium, dándole órdenes imperativas para que presencie a Francisco Xavier protegiendo físicamente a un niño huérfano.",
        "CitaInelutable": "Se le presentó materializado el espíritu de Antonio de Padua... y en voz bien clara, le dijo: 'Pasa al dormitorio...'. Como no obedeciera al instante, le repitió la orden en tono imperativo y pasó y vio a Francisco Xavier sobre la cuna... protegiendo al niño.",
        "EjemploPedagogico": "Un guardia de seguridad encendiendo las luces y gritando para obligar a alguien a ver las cámaras. La materialización fue un recurso de fuerza (imperativo) para dejar evidencia física innegable del resguardo espiritual sobre el niño adoptado por la Escuela.",
        "IdeasPrincipales": ["Materialización Protectora", "Voz Directa", "Mandato Imperativo"],
        "PuntosImportantes": [
            "La materialización tangible y la voz directa son fenómenos raros usados por los guías de luz solo en casos de necesidad probatoria",
            "Los guías actúan con energía imperativa cuando un médium (en estado de vigilia o distracción material) duda u omite obedecer",
            "Se demuestra físicamente que los espíritus superiores velan magnéticamente sobre la vida de los seres necesarios para la obra"
        ],
        "NodosSinapticos": ["Materializacion_Tangible", "Voz_Directa", "Mandato_Imperativo"],
        "ContextoDiccionario": {
            "Materializacion_Tangible": "El fenómeno físico mediante el cual un espíritu condensa fluidos para hacerse visible y corpóreo a los ojos de una persona en estado de vigilia.",
            "Voz_Directa": "La producción de sonidos articulados audibles físicamente (sin usar las cuerdas vocales de un médium en trance) generados magnéticamente por un espíritu.",
            "Mandato_Imperativo": "La orden firme y enérgica dada por un espíritu superior a un encarnado indisciplinado o dudoso, con el fin de obligarlo a presenciar un hecho probatorio."
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

print("Tanda 5 FEU 1 re-destilada: 5 nodos.")
