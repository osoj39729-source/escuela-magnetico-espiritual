import json

esencia_path = 'F:/trincado/public/data/contents/primer-rayo-de-luz_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "11695: PARRAFO VII: Sea excomulgado el que diga:": {
        "PilotoDeCoherencia": "Análisis de la pretensión de la Iglesia de eximirse de las leyes civiles y su defensa de los tribunales eclesiásticos como poderes superiores al Estado.",
        "CitaInelutable": "Sea excomulgado el que diga que la inmunidad de la Iglesia y de las personas eclesiásticas tiene su origen en el derecho civil.",
        "EjemploPedagogico": "Un ciudadano que comete un delito y exige ser juzgado por un tribunal privado de su propio club, desconociendo la autoridad de los jueces de su país.",
        "IdeasPrincipales": [
            "Fueros Clericales",
            "Inmunidad Religiosa",
            "Estado Sometido"
        ],
        "PuntosImportantes": [
            "La Iglesia se considera un Estado por encima de las naciones",
            "Rechazo a la jurisdicción civil sobre los clérigos",
            "El dogma exige impunidad temporal para sus jerarcas"
        ],
        "NodosSinapticos": [
            "Fueros_Clericales",
            "Inmunidad_Religiosa",
            "Estado_Sometido"
        ],
        "ContextoDiccionario": {
            "Fueros_Clericales": "Privilegios legales exigidos por el Vaticano para que sus miembros no sean juzgados por tribunales civiles ordinarios."
        }
    },
    "11715: PARRAFO VIII: Errores concernientes a la moral natural y cristiana.  Sea excomulgado el que diga: Que las leyes de la moral no necesitan la sancin Divina porque es innecesario a lo que ya es": {
        "PilotoDeCoherencia": "Denuncia del monopolio moral de la Iglesia, que condena la moral natural laica y exige que toda ética filosófica se someta a la autoridad eclesiástica.",
        "CitaInelutable": "Sea excomulgado el que diga que las leyes de la moral no necesitan la sanción Divina (del clero).",
        "EjemploPedagogico": "Un dictador que decreta que ninguna buena acción ciudadana tiene valor real a menos que lleve su sello oficial de aprobación.",
        "IdeasPrincipales": [
            "Moral Dogmática",
            "Condena de la Ética Laica",
            "Sometimiento Filosófico"
        ],
        "PuntosImportantes": [
            "La Iglesia niega el valor de las virtudes naturales del hombre",
            "La ética vista como una concesión divina administrada por el clero",
            "Rechazo a la autonomía moral de la razón"
        ],
        "NodosSinapticos": [
            "Moral_Dogmatica",
            "Condena_de_la_Etica_Laica",
            "Sometimiento_Filosofico"
        ],
        "ContextoDiccionario": {
            "Ética_Laica_Condenada": "La capacidad humana de obrar el bien basándose en la ley natural y la razón, sin necesidad de recompensas o castigos dogmáticos."
        }
    },
    "11739: PARRAFO IX: Errores concernientes al matrimonio cristiano.  Sea excomulgado el que diga: Que no puede establecerse en ninguna forma, que Jesucristo haya elevado el matrimonio a la Dignidad de Sacramento; que el sacramento del matrimonio no": {
        "PilotoDeCoherencia": "Exposición del intento de la Iglesia de mantener el monopolio civil y económico sobre el matrimonio, condenando la jurisdicción del Estado.",
        "CitaInelutable": "Sea excomulgado el que diga que las causas matrimoniales y los esponsales, por su naturaleza, pertenecen a la jurisdicción civil.",
        "EjemploPedagogico": "Una corporación comercial que pretende cobrar impuestos y dictar normas exclusivas sobre quiénes pueden vivir juntos, desconociendo las leyes del país.",
        "IdeasPrincipales": [
            "Monopolio Matrimonial Católico",
            "Rechazo al Matrimonio Civil",
            "Jurisdicción Eclesiástica"
        ],
        "PuntosImportantes": [
            "El matrimonio como herramienta de control social e impositivo",
            "La anulación dogmática del contrato civil voluntario",
            "La intromisión clerical en la vida familiar"
        ],
        "NodosSinapticos": [
            "Monopolio_Matrimonial_Catolico",
            "Rechazo_al_Matrimonio_Civil",
            "Jurisdiccion_Eclesiastica"
        ],
        "ContextoDiccionario": {
            "Monopolio_Matrimonial_Católico": "Control dogmático sobre las uniones conyugales para mantener el poder civil y recaudatorio sobre las familias."
        }
    },
    "11764: PARRAFO X: Errores sobre el principado civil del Pontfice Romano.  Sea excomulgado el que diga:": {
        "PilotoDeCoherencia": "Crítica a la condena papal contra quienes proponen la abolición del poder terrenal del Papa en favor de una verdadera misión espiritual.",
        "CitaInelutable": "Sea excomulgado el que diga que la abrogación del poder civil del que goza la Santa Sede serviría para la libertad de la Iglesia.",
        "EjemploPedagogico": "Un rey que se niega a abdicar su trono material a cambio de un puesto como maestro, demostrando que prefiere gobernar cuerpos a educar mentes.",
        "IdeasPrincipales": [
            "Defensa del Poder Temporal",
            "Principado Papal",
            "Rechazo a la Espiritualidad Pura"
        ],
        "PuntosImportantes": [
            "El Papa se aferra al estado político (Vaticano) como base de su poder",
            "La incompatibilidad entre el reinado terrenal y el progreso espiritual",
            "La excomunión como arma política"
        ],
        "NodosSinapticos": [
            "Defensa_del_Poder_Temporal",
            "Principado_Papal",
            "Rechazo_a_la_Espiritualidad_Pura"
        ],
        "ContextoDiccionario": {
            "Principado_Papal": "La condición de Jefe de Estado terrenal del Papa, que la Iglesia defiende como un dogma sagrado para proteger sus intereses económicos y políticos."
        }
    },
    "11776: PARRAFO XI: Errores que se refieren al liberalismo moderno.  Sea excomulgado el que diga:": {
        "PilotoDeCoherencia": "El punto culminante del Syllabus: la condena absoluta del progreso, la civilización moderna, el libre pensamiento y la tolerancia.",
        "CitaInelutable": "Sea excomulgado el que diga que el Pontífice Romano puede y debe reconciliarse y transigir con el progreso, el liberalismo y la civilización moderna.",
        "EjemploPedagogico": "Un capitán que prohíbe el uso de radares y motores modernos en su barco, prefiriendo hundirse en la tormenta antes que abandonar sus viejos mapas equivocados.",
        "IdeasPrincipales": [
            "Condena del Progreso",
            "Guerra a la Civilización",
            "Absolutismo Dogmático"
        ],
        "PuntosImportantes": [
            "Declaración formal de incompatibilidad entre la Iglesia y el mundo moderno",
            "El dogma exige el retroceso de la humanidad",
            "El Syllabus como el testamento del oscurantismo"
        ],
        "NodosSinapticos": [
            "Condena_del_Progreso",
            "Guerra_a_la_Civilizacion_Moderna",
            "Absolutismo_Dogmatico"
        ],
        "ContextoDiccionario": {
            "Guerra_a_la_Civilización": "Postura oficial de la jerarquía católica, expresada en el Syllabus, de oponerse a toda reforma laica, científica y social que merme su poder."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Rayo Tanda 13 aplicado exitosamente.")
