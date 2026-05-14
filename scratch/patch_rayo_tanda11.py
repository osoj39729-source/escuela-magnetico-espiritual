import json

esencia_path = 'F:/trincado/public/data/contents/primer-rayo-de-luz_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "10334: Mis Observaciones": {
        "PilotoDeCoherencia": "Denuncia de la ambición de poder terrenal del clero oculta tras la máscara de la espiritualidad y el servicio a Dios.",
        "CitaInelutable": "El clero no busca a Dios, busca el poder de los hombres; usan el nombre del Padre para justificar sus ambiciones terrenales.",
        "EjemploPedagogico": "Un usurero que se viste de santo para ganarse la confianza de la gente y así despojarlos de sus bienes con mayor facilidad.",
        "IdeasPrincipales": [
            "Ambicin de poder clerical",
            "Uso político de la divinidad",
            "Falsa humildad"
        ],
        "PuntosImportantes": [
            "La religión como instrumento de dominio temporal",
            "La hipocresía de las jerarquías religiosas",
            "El nombre de Dios utilizado para fines egoístas"
        ],
        "NodosSinapticos": [
            "Dominio_Temporal_Religioso",
            "Dios_como_Arma_Politica",
            "Falsa_Modestia_Clerical"
        ],
        "ContextoDiccionario": {
            "Dominio_Temporal": "Aspiración del clero a gobernar los asuntos políticos y materiales de la humanidad utilizando el pretexto de la salvación espiritual."
        }
    },
    "10570: CONTESTACION PONTIFICIA A UN DISCURSO DEL DOCTOR JUAN GIURIATI: Roma, abril 27 (United).__ LOsservatore Romano publica el texto de una carta que el": {
        "PilotoDeCoherencia": "Análisis de la intransigencia papal frente a los movimientos liberales y su reclamo de soberanía absoluta sobre la conciencia humana.",
        "CitaInelutable": "La Iglesia no cede ante la libertad; el pontífice reclama el derecho divino de gobernar las conciencias por encima de las leyes civiles.",
        "EjemploPedagogico": "Un monarca absoluto que rechaza la constitución porque considera que su voluntad es la única ley válida emanada de Dios.",
        "IdeasPrincipales": [
            "Intransigencia papal",
            "Conflicto Iglesia-Estado",
            "Soberanía sobre la conciencia"
        ],
        "PuntosImportantes": [
            "El Vaticano contra el pensamiento liberal",
            "Pretensión de superioridad del derecho canónico sobre el civil",
            "El papado como obstáculo a la soberanía de los pueblos"
        ],
        "NodosSinapticos": [
            "Intransigencia_Papal",
            "Conflicto_Iglesia_Estado",
            "Derecho_Divino_vs_Libertad"
        ],
        "ContextoDiccionario": {
            "Teocracia_Papal": "Sistema donde el pontífice pretende ejercer autoridad suprema tanto espiritual como política sobre toda la humanidad."
        }
    },
    "11069: HACEDLE DESCENDER DEL PULPITO).": {
        "PilotoDeCoherencia": "Llamado a la acción para despojar al clero de su aura de misterio y someter sus discursos al juicio de la razón pública.",
        "CitaInelutable": "Hacedle descender del púlpito; que la luz de la verdad lo despoje de sus vestiduras de misterio y lo deje ante el juicio de la razón humana.",
        "EjemploPedagogico": "Quitar la máscara a un mago en plena función para revelar que sus 'milagros' son solo trucos de manos y efectos especiales.",
        "IdeasPrincipales": [
            "Desenmascaramiento clerical",
            "Sometimiento a la razón",
            "Fin del púlpito dogmático"
        ],
        "PuntosImportantes": [
            "El púlpito como lugar de engaño y sugestión",
            "La necesidad de confrontar al orador religioso con hechos reales",
            "Empoderamiento de la razón frente a la retórica fanática"
        ],
        "NodosSinapticos": [
            "Desenmascarar_al_Clero",
            "Luz_en_el_Pulpito",
            "Juicio_de_la_Razon"
        ],
        "ContextoDiccionario": {
            "Juicio_Público_Doctrinal": "Proceso de evaluación abierta y racional de las enseñanzas religiosas por parte de la sociedad emancipada."
        }
    },
    "11552: EL SYLLABUS DE PIO IX": {
        "PilotoDeCoherencia": "Presentación del catálogo de condenas papales como prueba irrefutable de la oposición de la Iglesia al progreso humano y la ciencia.",
        "CitaInelutable": "El Syllabus es la confesión de la guerra que la Iglesia declara a la ciencia y a la libertad de conciencia.",
        "EjemploPedagogico": "Una lista de libros prohibidos que una tiranía impone para evitar que los ciudadanos se enteren de que existe un mundo libre fuera de sus fronteras.",
        "IdeasPrincipales": [
            "Condena de la modernidad",
            "Guerra al progreso",
            "Manifiesto de la sombra"
        ],
        "PuntosImportantes": [
            "El Syllabus como documento de retroceso social",
            "Pío IX y su rechazo a los derechos humanos fundamentales",
            "La Iglesia se posiciona oficialmente contra la evolución racional"
        ],
        "NodosSinapticos": [
            "Syllabus_Errorum",
            "Condena_de_la_Modernidad",
            "Guerra_al_Progreso"
        ],
        "ContextoDiccionario": {
            "Syllabus_Errorum": "Documento publicado por Pío IX en 1864 que condena ochenta errores modernos, incluyendo la libertad de culto y el racionalismo."
        }
    },
    "11564: PARRAFO I: Panteismo, naturalismo y racionalismo absoluto. Sea excomulgado el que diga: Que no existe ningn ser divino; que Dios es idntico a la naturaleza; que Dios se hace en el": {
        "PilotoDeCoherencia": "Análisis de las excomuniones papales contra el Racionalismo, demostrando el miedo del dogma a la unidad de la sustancia.",
        "CitaInelutable": "Sea excomulgado el que diga que Dios es idéntico a la naturaleza y que la materia y el espíritu son una misma cosa.",
        "EjemploPedagogico": "Un decreto que prohíbe decir que el sol y el calor son inseparables, pretendiendo que existe un calor sagrado fuera del sol físico.",
        "IdeasPrincipales": [
            "Excomunión del Racionalismo",
            "Unidad Materia-Espíritu Condenada",
            "Mitos y Milagros"
        ],
        "PuntosImportantes": [
            "La Iglesia maldice la verdad del monismo fúlico",
            "Rechazo al progreso de la revelación a través de la razón",
            "Defensa del milagro mítico frente a la ley natural inmutable"
        ],
        "NodosSinapticos": [
            "Excomunion_del_Racionalismo",
            "Unidad_Materia_Espiritu_Condenada",
            "Mitos_y_Milagros"
        ],
        "ContextoDiccionario": {
            "Excomunión_Papal": "Herramienta de castigo espiritual utilizada por el Vaticano para aislar a quienes sostienen verdades científicas o racionales."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Rayo Tanda 11 aplicado exitosamente.")
