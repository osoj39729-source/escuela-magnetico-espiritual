import json

esencia_path = 'F:/trincado/public/data/contents/primer-rayo-de-luz_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "3961: Mis observaciones": {
        "PilotoDeCoherencia": "Análisis de la estrategia clerical de refugiarse en las 'formas' y la 'cultura' para evadir el juicio sobre sus crímenes históricos.",
        "CitaInelutable": "El clero pide formas cuando ya no tiene fondo; se escuda en la cultura para que no se descubra la barbarie de su historia.",
        "EjemploPedagogico": "Un acusado de robo que exige que el juez le hable de 'usted' y con elegancia, esperando que el respeto a las formas oculte la fealdad del delito.",
        "IdeasPrincipales": [
            "Evasión por etiqueta",
            "Historia criminal de la Iglesia",
            "Decadencia moral del clero"
        ],
        "PuntosImportantes": [
            "La 'historia negra' es el peso muerto del catolicismo",
            "La cultura religiosa es una máscara de la opresión",
            "El autor llama a juzgar el fondo y no solo la superficie del discurso"
        ],
        "NodosSinapticos": [
            "Formas_vs_Fondo",
            "Historia_Negra_de_la_Iglesia",
            "Etiqueta_Dogmatica"
        ],
        "ContextoDiccionario": {
            "Historia_Negra_eclesiástica": "Registro de los crímenes, inquisiciones y persecuciones cometidos por la Iglesia para mantener su poder temporal."
        }
    },
    "4426: Contrarrplica de C. Montemayor: 18 DE SEPTIEMBRE": {
        "PilotoDeCoherencia": "Defensa de la carga de la prueba en la ciencia: no es necesario probar la inexistencia de lo fantástico (Dios-ídolo), sino la existencia del hecho natural.",
        "CitaInelutable": "La ciencia no necesita probar la inexistencia de un fantasma; el peso de la prueba recae en quien afirma el dogma sin evidencias.",
        "EjemploPedagogico": "El que afirma que hay un tesoro enterrado en el mar debe mostrarlo; no es el resto del mundo quien debe probar que el mar está vacío.",
        "IdeasPrincipales": [
            "Carga de la prueba",
            "Rechazo al fantasma dogmático",
            "Primacía de la evidencia científica"
        ],
        "PuntosImportantes": [
            "El anarquismo como reacción a la mentira religiosa",
            "La ciencia no se ocupa de lo inexistente",
            "Llamado a la demostración empírica frente a la fe"
        ],
        "NodosSinapticos": [
            "Peso_de_la_Prueba",
            "Inexistencia_del_Fantasma_Dios",
            "Denuncia_Anarquista"
        ],
        "ContextoDiccionario": {
            "Peso_de_la_Prueba": "Principio lógico que establece que la obligación de demostrar una afirmación recae en quien la propone."
        }
    },
    "4756: CESAR MONTEMAYOR": {
        "PilotoDeCoherencia": "Certificación de la postura materialista-anarquista en el debate, caracterizada por la valentía frente al poder clerical.",
        "CitaInelutable": "CESAR MONTEMAYOR.",
        "EjemploPedagogico": "La firma de un librepensador que, aun sin ver la luz espiritual, tiene la honestidad de combatir la sombra dogmática.",
        "IdeasPrincipales": [
            "Valentía intelectual",
            "Firmeza materialista",
            "Oposición al clero"
        ],
        "PuntosImportantes": [
            "Representación del extremo anarquista en la controversia",
            "Sinceridad en el combate de las ideas",
            "Límite del materialismo al no reconocer la causa espiritual"
        ],
        "NodosSinapticos": [
            "Valentia_Intelectual",
            "Posicion_Materialista"
        ],
        "ContextoDiccionario": {
            "Materialismo_Anarquista": "Sistema de pensamiento que niega toda trascendencia espiritual como reacción a la opresión de las religiones."
        }
    },
    "4761: Mis observaciones": {
        "PilotoDeCoherencia": "Juicio crítico sobre la ceguera de ambos extremos: el materialista que solo ve la materia y el religioso que esclaviza al espíritu.",
        "CitaInelutable": "El anarquista lucha por la libertad de la materia; el católico lucha por la esclavitud del espíritu; ambos ignoran que la verdadera libertad es la ley de amor.",
        "EjemploPedagogico": "Dos pájaros que no pueden volar: uno porque tiene las alas rotas (materialista) y otro porque prefiere la seguridad de su jaula (católico).",
        "IdeasPrincipales": [
            "Ceguera espiritual y material",
            "Esclavitud vs Libertad",
            "Ley de Amor como tercera vía"
        ],
        "PuntosImportantes": [
            "El anarquismo es incompleto por falta de luz espiritual",
            "El catolicismo es perverso por voluntad de dominio espiritual",
            "La Escuela propone la libertad integral del ser"
        ],
        "NodosSinapticos": [
            "Ceguera_Espiritual_vs_Material",
            "Esclavitud_del_Espiritu",
            "Libertad_Racional"
        ],
        "ContextoDiccionario": {
            "Libertad_Integral": "Estado del ser que reconoce su origen espiritual y su responsabilidad material, rigiéndose solo por la ley de amor."
        }
    },
    "5478: Contrarrplica J.B. PODESTA: Septiembre 26": {
        "PilotoDeCoherencia": "Análisis de la obstinación dogmática que utiliza el silencio histórico y el ataque al estilo del oponente para evadir la derrota lógica.",
        "CitaInelutable": "El dogma exige silencio sobre sus crímenes históricos mientras no se le demuestre la inexistencia de su deidad mediante la ciencia.",
        "EjemploPedagogico": "Un administrador corrupto que se niega a rendir cuentas hasta que no se le pruebe científicamente que el dinero no es un milagro.",
        "IdeasPrincipales": [
            "Obstinación clerical",
            "Censura histórica",
            "Pugilato dialéctico"
        ],
        "PuntosImportantes": [
            "La Iglesia prohíbe hablar de su pasado para proteger su presente",
            "Ataque al estilo del oponente como distracción del fondo",
            "El dogma se atrinchera en la imposibilidad de la prueba negativa"
        ],
        "NodosSinapticos": [
            "Obstinacion_Dogmatica",
            "Silencio_Historico_Impuesto",
            "Pugilato_Dialectico"
        ],
        "ContextoDiccionario": {
            "Obstinacion_Dogmatica": "Resistencia irracional a aceptar la verdad evidenciada, prefiriendo el mantenimiento del error por intereses de casta."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Rayo Tanda 7 aplicado exitosamente.")
