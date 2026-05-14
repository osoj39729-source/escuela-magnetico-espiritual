import json

esencia_path = 'F:/trincado/public/data/contents/primer-rayo-de-luz_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "3710: ESTA NO ES OPININ DE NINGUN TEOLOGO.": {
        "PilotoDeCoherencia": "Denuncia de la falta de autonomía intelectual en el clero, cuyos miembros actúan como repetidores de consignas jerárquicas.",
        "CitaInelutable": "No es opinión de un hombre, sino el mandato de una casta; el teólogo no piensa, solo repite el dogma que le imponen sus superiores.",
        "EjemploPedagogico": "Un soldado que repite las órdenes de su general sin cuestionar si son justas; el teólogo es un soldado del dogma, no un buscador de la verdad.",
        "IdeasPrincipales": [
            "Pensamiento esclavo",
            "Jerarquía eclesiástica",
            "Ausencia de criterio propio"
        ],
        "PuntosImportantes": [
            "La teología como sistema de repetición dogmática",
            "El miedo al castigo jerárquico anula la razón del clérigo",
            "Diferencia entre la opinión libre y el dictado institucional"
        ],
        "NodosSinapticos": [
            "Casta_Teologica",
            "Pensamiento_Esclavo",
            "Jerarquia_vs_Razon"
        ],
        "ContextoDiccionario": {
            "Casta_Teologica": "Grupo de hombres que, bajo una estructura jerárquica, imponen dogmas y ritos negando el derecho al pensamiento racional libre."
        }
    },
    "3765: Las opiniones de los sabios": {
        "PilotoDeCoherencia": "Crítica a la manipulación de textos científicos por parte de la religión para simular una falsa concordia entre fe y ciencia.",
        "CitaInelutable": "Toman las palabras de los sabios para vestir al ídolo; la ciencia es luz y el dogma es sombra, no pueden habitar el mismo espacio.",
        "EjemploPedagogico": "Utilizar párrafos de un libro de física para justificar la creencia en fantasmas; se usa la autoridad de la fuente para validar un error.",
        "IdeasPrincipales": [
            "Sesgo eclesiástico",
            "Distorsión del conocimiento",
            "Falsa armonía ciencia-fe"
        ],
        "PuntosImportantes": [
            "El clero solo cita lo que le conviene de los sabios",
            "La ciencia real es enemiga natural del dogma",
            "Denuncia de la deshonestidad intelectual teológica"
        ],
        "NodosSinapticos": [
            "Sabios_Distorsionados",
            "Ciencia_vs_Dogma",
            "Uso_Ilicito_del_Conocimiento"
        ],
        "ContextoDiccionario": {
            "Deshonestidad_Intelectual": "Acto de utilizar información de forma parcial o distorsionada para sostener una creencia preestablecida, ignorando la evidencia contraria."
        }
    },
    "3832: Algunas observaciones sueltas.": {
        "PilotoDeCoherencia": "Identificación de contradicciones y fallos lógicos en la narrativa religiosa que preparan su refutación integral.",
        "CitaInelutable": "Son hilos sueltos de una red que se rompe; cada observación es un golpe a la estructura del engaño.",
        "EjemploPedagogico": "Un auditor que encuentra pequeñas fugas de capital; parecen errores menores, pero indican una quiebra total del sistema.",
        "IdeasPrincipales": [
            "Análisis de inconsistencias",
            "Debilitamiento del argumento dogmático",
            "Preparación de la síntesis"
        ],
        "PuntosImportantes": [
            "Atención a los detalles del engaño clerical",
            "La acumulación de errores como prueba de falsedad",
            "Uso del rigor analítico contra la vaguedad teológica"
        ],
        "NodosSinapticos": [
            "Inconsistencias_Dogmaticas",
            "Red_de_Engaño",
            "Detalles_de_la_Falsedad"
        ],
        "ContextoDiccionario": {
            "Analisis_de_Inconsistencias": "Método racional de desarticulación de falacias mediante el señalamiento de sus contradicciones internas."
        }
    },
    "3837: exposicin que estoy analizando.": {
        "PilotoDeCoherencia": "Análisis de la dialéctica jesuita como herramienta de confusión para evitar responder a las realidades científicas.",
        "CitaInelutable": "Usan la dialéctica para esconder la verdad; el jesuita es el maestro de la confusión que llama luz a la tiniebla.",
        "EjemploPedagogico": "Un prestidigitador verbal que mueve las palabras tan rápido que el espectador pierde de vista el objeto real del debate.",
        "IdeasPrincipales": [
            "Estrategia jesuítica",
            "Ofuscación del debate",
            "Resistencia al hecho científico"
        ],
        "PuntosImportantes": [
            "La dialéctica como arma de distracción masiva",
            "La negación del progreso intelectual por parte del dogma",
            "Necesidad de centrar la discusión en leyes naturales"
        ],
        "NodosSinapticos": [
            "Dialectica_Jesuita",
            "Confusion_Programada",
            "Analisis_Critico"
        ],
        "ContextoDiccionario": {
            "Dialectica_Jesuita": "Forma de razonamiento que utiliza sofismas y ambigüedades para defender el dogma y confundir a los oponentes racionales."
        }
    },
    "3940: CONCLUSIN": {
        "PilotoDeCoherencia": "Denuncia de la hipocresía del clero que exige seriedad y claridad mientras basa su poder en la farsa y el misterio.",
        "CitaInelutable": "Exigen seriedad los que viven de la farsa; piden claridad los que siembran el misterio para dominar las conciencias.",
        "EjemploPedagogico": "Un ladrón que exige 'seguridad jurídica' para que no le quiten lo que ha robado a la comunidad.",
        "IdeasPrincipales": [
            "Hipocresía clerical",
            "Inversión de valores",
            "Cierre de la defensa dogmática"
        ],
        "PuntosImportantes": [
            "El dogma se siente acosado por la chanza porque no tiene argumentos",
            "La seriedad del sabio vs la seriedad del sepulcro blanqueado",
            "Fin de la etapa de réplicas en la controversia"
        ],
        "NodosSinapticos": [
            "Hipocresia_Dialectica",
            "Mascara_del_Dogma",
            "Cierre_de_Replica"
        ],
        "ContextoDiccionario": {
            "Hipocresia_Religiosa": "Postura moral del clero que demanda virtudes o rigores a los demás que ellos mismos traicionan en su doctrina y práctica."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Rayo Tanda 6 aplicado exitosamente.")
