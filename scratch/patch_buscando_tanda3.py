import json

esencia_path = 'F:/trincado/public/data/contents/buscando-a-dios-joaquin-trincado_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "2923: Párrafo I: EL BOATO PROVOCADOR": {
        "PilotoDeCoherencia": "El lujo ostentoso de la Iglesia como una afrenta a la miseria humana y una negación absoluta de la humildad de los misioneros.",
        "CitaInelutable": "El boato de sus templos y la púrpura de sus cardenales son el sudor y la sangre de los pobres convertidos en piedra preciosa.",
        "EjemploPedagogico": "Un banquero ostentando joyas frente a una multitud hambrienta; el banquero es la institución que explota la fe, y las joyas son el producto del engaño.",
        "IdeasPrincipales": [
            "Contraste entre el lujo clerical y la doctrina de Jesús",
            "Explotación económica de los fieles",
            "La estética religiosa como distractor de la verdad"
        ],
        "PuntosImportantes": [
            "La púrpura cardenalicia como símbolo de opresión",
            "Riqueza material acumulada a costa de la ignorancia",
            "La provocación del boato ante la necesidad social"
        ],
        "NodosSinapticos": [
            "Boato_Eclesiastico",
            "Lujo_vs_Humildad",
            "Explotacion_Religiosa"
        ],
        "ContextoDiccionario": {
            "Boato": "Exhibición de riqueza material por parte de las religiones para simular poder espiritual y someter por admiración o miedo."
        }
    },
    "3027: Párrafo II: VERDADES MATEMÁTICAS": {
        "PilotoDeCoherencia": "La aplicación de la lógica y la matemática espiritual para desmantelar las contradicciones de los dogmas y ritos.",
        "CitaInelutable": "La verdad no admite más que una cifra: la unidad; el dogma tiene mil cifras que nunca suman la verdad de Eloí.",
        "EjemploPedagogico": "Como un profesor de matemáticas que corrige una suma mal hecha; por más que el alumno invoque la fe, el resultado erróneo no cambia.",
        "IdeasPrincipales": [
            "Lógica vs Superstición",
            "La unidad de la ley divina",
            "Incoherencias matemáticas del culto católico"
        ],
        "PuntosImportantes": [
            "La razón como balanza de la verdad",
            "Desmontaje técnico de las falacias teológicas",
            "Eloí como inteligencia matemática suprema"
        ],
        "NodosSinapticos": [
            "Matematica_Espiritual",
            "Logica_vs_Dogma",
            "Unidad_de_Verdad"
        ],
        "ContextoDiccionario": {
            "Matematica_Espiritual": "Ciencia exacta de las leyes del espíritu que no admite dogmas ni misterios fuera de la ley de causa y efecto."
        }
    },
    "3108: Párrafo III: EL CRIMEN DEL SACRAMENTO DE LA EUCARISTIA": {
        "PilotoDeCoherencia": "La denuncia de la transubstanciación como un acto de antropofagia simbólica y materialismo que insulta la inteligencia.",
        "CitaInelutable": "Comerse a Dios es el crimen más inaudito que la malicia sacerdotal pudo inventar para embrutecer a los hombres.",
        "EjemploPedagogico": "Un niño que cree que comiéndose una fotografía de su padre tendrá al padre dentro de sí; la hostia es la fotografía y la religión es el engaño infantil.",
        "IdeasPrincipales": [
            "Crítica a la transubstanciación",
            "Origen materialista de la hostia",
            "Embrutecimiento de las masas mediante el rito"
        ],
        "PuntosImportantes": [
            "La Eucaristía como insulto a la divinidad de Eloí",
            "Antropofagia simbólica disfrazada de santidad",
            "El rito como mecanismo de hipnosis colectiva"
        ],
        "NodosSinapticos": [
            "Antropofagia_Simbolica",
            "Eucaristia_Error",
            "Materialismo_Religioso"
        ],
        "ContextoDiccionario": {
            "Eucaristia": "Rito de origen pagano adoptado por el catolicismo para materializar la presencia espiritual mediante la ingesta simbólica de carne y sangre."
        }
    },
    "3146: Párrafo IV: PIO IX INFALIBLEMENTE FALIBLE": {
        "PilotoDeCoherencia": "Crítica al dogma de la infalibilidad papal como la máxima expresión de orgullo humano desafiando la soberanía de Eloí.",
        "CitaInelutable": "Pío IX... el antagonista de Dios... dijo: 'Sostened la iglesia a costa de la sangre de toda la humanidad'.",
        "EjemploPedagogico": "Un sirviente que se declara dueño absoluto de la casa y dice que sus errores son leyes perfectas, mientras el verdadero dueño lo observa con tristeza.",
        "IdeasPrincipales": [
            "Decreto de infalibilidad de 1870",
            "Antagonismo entre el papado y la ley de amor",
            "Pío IX como símbolo de la tiranía dogmática"
        ],
        "PuntosImportantes": [
            "La soberbia sacerdotal llevada al extremo divino",
            "El costo humano del mantenimiento de la institución",
            "Desmontaje del mito de la infalibilidad humana"
        ],
        "NodosSinapticos": [
            "Infalibilidad_Papal_Error",
            "Pio_IX_Antagonista",
            "Soberbia_Sacerdotal"
        ],
        "ContextoDiccionario": {
            "Infalibilidad": "Atributo inexistente en el hombre, usado por el papado para blindar sus errores y crímenes históricos contra la crítica racional."
        }
    },
    "3194: Párrafo V: TRISTE FIN DE LA RELIGIÓN CATÓLICA": {
        "PilotoDeCoherencia": "Sentencia final de la institución católica al olvido eterno por su traición sistemática a la dignidad humana.",
        "CitaInelutable": "En nombre de toda la humanidad, la condeno al no ser... por la dignidad humana y para que sea cumplida la voluntad de Dios.",
        "EjemploPedagogico": "Una sentencia judicial firme que cierra definitivamente un establecimiento que ha estafado a la población durante milenios.",
        "IdeasPrincipales": [
            "Cierre del ciclo religioso",
            "Restauración de la voluntad de Eloí",
            "Condena al olvido de los sistemas dogmáticos"
        ],
        "PuntosImportantes": [
            "Finalización de la obra el 28 de diciembre de 1909",
            "Llamado a la libertad definitiva del espíritu",
            "La firma de Joaquín Trincado como sello de la nueva era"
        ],
        "NodosSinapticos": [
            "Condena_Final_Catolicismo",
            "Fin_de_las_Religiones",
            "Victoria_del_Espiritu"
        ],
        "ContextoDiccionario": {
            "Fin_de_la_Religion": "Momento histórico de madurez humana donde el espíritu prescinde de tutores dogmáticos para comunicarse directamente con el Creador."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Tanda 3 aplicado exitosamente.")
