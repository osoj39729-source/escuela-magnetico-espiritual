import json

esencia_path = 'F:/trincado/public/data/contents/primer-rayo-de-luz_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "11583: PARRAFO II: Racionalismo moderno.  Sea excomulgado el que diga: Que la razn humana es igual a la razn misma; que las Teologas deben ser tratadas como": {
        "PilotoDeCoherencia": "Análisis de la condena papal al uso de la razón humana y al estudio filosófico independiente como amenaza al dogma.",
        "CitaInelutable": "Sea excomulgado el que diga que la filosofía debe tratarse sin tener en cuenta la revelación sobrenatural.",
        "EjemploPedagogico": "Un maestro autoritario que castiga al alumno por resolver un problema usando la lógica en lugar de copiar ciegamente la respuesta del texto 'sagrado'.",
        "IdeasPrincipales": [
            "Condena de la Razón",
            "Sometimiento de la Filosofía",
            "Miedo al Pensamiento Libre"
        ],
        "PuntosImportantes": [
            "El Vaticano exige que el conocimiento humano se subordine a la superstición",
            "La razón como enemiga natural de la fe impuesta",
            "El racionalismo moderno visto como una plaga por la teología"
        ],
        "NodosSinapticos": [
            "Condena_de_la_Razon",
            "Filosofia_vs_Dogma",
            "Oscurantismo_Papal"
        ],
        "ContextoDiccionario": {
            "Racionalismo_Condenado": "El ejercicio del pensamiento lógico y crítico que la Iglesia prohíbe para proteger sus doctrinas infundadas."
        }
    },
    "11605: PARRAFO III: Indiferentismo.  Tolerancia.  Sea excomulgado el que diga: Que el hombre es libre para abrazar y profesar la religin que quiera, segn su razn; que los hombres pueden encontrar el camino de la sabidura y Salvarse": {
        "PilotoDeCoherencia": "Denuncia de la prohibición vaticana a la libertad de culto y la intolerancia hacia quienes buscan la verdad fuera del control católico.",
        "CitaInelutable": "Sea excomulgado el que diga que el hombre es libre para abrazar y profesar la religión que quiera, según su razón.",
        "EjemploPedagogico": "Un carcelero que declara ilegal y pecaminoso cualquier intento de los presos de buscar la salida, obligándolos a creer que las rejas son el único paraíso.",
        "IdeasPrincipales": [
            "Intolerancia Religiosa",
            "Prohibición del Libre Albedrío",
            "Monopolio de la Salvación"
        ],
        "PuntosImportantes": [
            "La Iglesia se declara a sí misma como la única vía legítima",
            "El ataque directo a la tolerancia religiosa",
            "La libertad de conciencia como motivo de excomunión"
        ],
        "NodosSinapticos": [
            "Intolerancia_Religiosa",
            "Libertad_de_Culto_Condenada",
            "Monopolio_de_Salvacion"
        ],
        "ContextoDiccionario": {
            "Monopolio_de_Salvación": "Pretensión dogmática de ser el único administrador del progreso espiritual, condenando cualquier otra vía de conocimiento."
        }
    },
    "11618: PARRAFO IV: Sociedades clrigo-liberales. Socialismo, comunismo y sociedades bblicas.  Aqu hay una declaracin sorprendente que dice: Estas especies de pestes estn rebatidas y": {
        "PilotoDeCoherencia": "Análisis de la catalogación eclesiástica de 'pestes' a todo movimiento que busque la emancipación social, económica o intelectual del hombre.",
        "CitaInelutable": "Estas especies de pestes están rebatidas y condenadas: el socialismo, el comunismo y las sociedades bíblicas.",
        "EjemploPedagogico": "Un tirano que llama 'plaga' a la organización de sus esclavos para exigir justicia y derechos básicos.",
        "IdeasPrincipales": [
            "Condena de la Justicia Social",
            "Miedo a la Emancipación",
            "Defensa de los Privilegios"
        ],
        "PuntosImportantes": [
            "El clero rechaza toda reforma social que merme su influencia",
            "Agrupación de ideas contrarias bajo el término 'peste'",
            "Oposición abierta a la mejora de la condición humana en la Tierra"
        ],
        "NodosSinapticos": [
            "Pestes_segun_el_Clero",
            "Condena_del_Socialismo",
            "Miedo_a_la_Emancipacion"
        ],
        "ContextoDiccionario": {
            "Pestes_Modernas_Dogmáticas": "Término despectivo usado por Pío IX para referirse a cualquier movimiento social o de pensamiento que promueva la igualdad y la libertad."
        }
    },
    "11630: PARRAFO V: Errores relativos a la iglesia y a sus derechos.  Sea excomulgado el que diga:": {
        "PilotoDeCoherencia": "Exposición del reclamo papal del derecho a utilizar la fuerza física y de poseer poder terrenal absoluto sobre las naciones.",
        "CitaInelutable": "Sea excomulgado el que diga que la Iglesia no tiene el derecho de emplear la fuerza, ni poder temporal alguno, directo ni indirecto.",
        "EjemploPedagogico": "Un autodenominado guía espiritual que forma un ejército privado para cobrar impuestos y castigar físicamente a quienes no lo siguen.",
        "IdeasPrincipales": [
            "Uso de la Fuerza Religiosa",
            "Poder Temporal Absoluto",
            "Tiranía Canónica"
        ],
        "PuntosImportantes": [
            "La Inquisición como derecho inherente reclamado por el Papa",
            "La negación de la autoridad de los estados civiles",
            "La contradicción entre el mensaje de Cristo y la violencia papal"
        ],
        "NodosSinapticos": [
            "Uso_de_la_Fuerza_Religiosa",
            "Poder_Temporal_Absoluto",
            "Tirania_Canonica"
        ],
        "ContextoDiccionario": {
            "Poder_Temporal_Absoluto": "La doctrina eclesiástica que exige la sumisión de todos los gobiernos y tribunales civiles a la voluntad y fuerza del Vaticano."
        }
    },
    "11667: PARRAFO VI: Errores relativos a la sociedad civil, considerada bien en s misma, bien en sus relaciones con la Iglesia.  Sea excomulgado el que diga:": {
        "PilotoDeCoherencia": "Crítica a la rebelión del clero contra el Estado Laico, exigiendo el monopolio de la instrucción pública para adoctrinar a las nuevas generaciones.",
        "CitaInelutable": "Sea excomulgado el que diga que toda la enseñanza de los niños y los estudios superiores esté sujeta al poder civil.",
        "EjemploPedagogico": "Una secta que exige al gobierno nacional el cierre de todas las escuelas públicas para obligar a los niños a estudiar únicamente su libro de dogmas.",
        "IdeasPrincipales": [
            "Control de la Educación",
            "Ataque al Estado Laico",
            "Monopolio Educativo Clerical"
        ],
        "PuntosImportantes": [
            "El miedo de la Iglesia a la instrucción pública libre",
            "El deseo de moldear las mentes infantiles en la sumisión",
            "Desconocimiento de la soberanía del Estado sobre la educación"
        ],
        "NodosSinapticos": [
            "Control_de_la_Educacion",
            "Ataque_al_Estado_Laico",
            "Monopolio_Educativo_Clerical"
        ],
        "ContextoDiccionario": {
            "Monopolio_Educativo_Clerical": "La exigencia de la Iglesia de ser la única administradora de la enseñanza, con el fin de perpetuar la ignorancia científica y afianzar la fe ciega."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Rayo Tanda 12 aplicado exitosamente.")
