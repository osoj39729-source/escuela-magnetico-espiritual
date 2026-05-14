import json

esencia_path = 'F:/trincado/public/data/contents/buscando-a-dios-joaquin-trincado_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "5440: Párrafo X: LA FATALIDAD LOS PERSIGUE": {
        "PilotoDeCoherencia": "La ley de justicia universal que persigue a los opresores, donde sus propios crímenes generan la fatalidad de su destrucción.",
        "CitaInelutable": "No hay crimen sin castigo, ni prevaricación sin fatalidad; el que siembra vientos de dogma, cosecha tempestades de justicia.",
        "EjemploPedagogico": "Un hombre que corre para huir de su propia sombra; la sombra son sus actos pasados y el cansancio es la fatalidad que lo alcanza inevitablemente.",
        "IdeasPrincipales": [
            "Justicia ineludible para el clero",
            "La fatalidad como efecto de causas criminales",
            "Inutilidad de las protecciones humanas ante la ley de Eloí"
        ],
        "PuntosImportantes": [
            "La ley de causa y efecto aplicada a la historia religiosa",
            "El colapso interno de las estructuras basadas en el mal",
            "La fatalidad como mecanismo de limpieza espiritual"
        ],
        "NodosSinapticos": [
            "Ley_de_Justicia",
            "Fatalidad_Eclesiastica",
            "Castigo_Moral"
        ],
        "ContextoDiccionario": {
            "Fatalidad": "Resultado matemático e ineludible de acciones contrarias a la ley de amor, que se manifiesta como destino adverso."
        }
    },
    "5577: Párrafo XI: UNA MENTIRA PIADOSA LOS PIERDEATODOS": {
        "PilotoDeCoherencia": "Denuncia de la 'mentira piadosa' como el veneno institucional que corroe la verdad y conduce a la perdición colectiva.",
        "CitaInelutable": "La mentira, aunque la llamen piadosa, es el fango donde se hunde la barca de Pedro; la verdad no admite adornos hipócritas.",
        "EjemploPedagogico": "Un guía que asegura a los viajeros que el puente es seguro sabiendo que está roto; la mentira 'para no asustarlos' provoca su caída al abismo.",
        "IdeasPrincipales": [
            "El engaño como método de consuelo religioso",
            "Consecuencias destructivas de la falsedad",
            "La exigencia de veracidad absoluta en el espiritismo"
        ],
        "PuntosImportantes": [
            "La mentira piadosa como herramienta de manipulación de masas",
            "La pérdida de autoridad moral por el uso del engaño",
            "El despertar doloroso ante la verdad revelada"
        ],
        "NodosSinapticos": [
            "Mentira_Piadosa_Error",
            "Hipocresia_Religiosa",
            "Perdicion_Colectiva"
        ],
        "ContextoDiccionario": {
            "Mentira_Piadosa": "Eufemismo religioso para justificar el engaño sistemático bajo el pretexto de proteger la fe o el bienestar emocional del fiel."
        }
    },
    "5682: Párrafo XII: LA LUJURIA EN SU GRADO MÁXIMO": {
        "PilotoDeCoherencia": "El paroxismo de la degradación carnal en la jerarquía, donde el instinto animal sustituye a la dignidad del espíritu.",
        "CitaInelutable": "Llegaron al grado máximo de la lascivia, olvidando que el cuerpo es el estuche del espíritu y no un objeto de bacanal.",
        "EjemploPedagogico": "Usar un cáliz sagrado para beber vino en una taberna inmunda; así trataron la dignidad del cuerpo humano en los aposentos papales.",
        "IdeasPrincipales": [
            "Degradación sexual en el clero",
            "Materialismo sensual desenfrenado",
            "Pérdida de la noción de respeto al templo vivo"
        ],
        "PuntosImportantes": [
            "La lujuria como fruto de la represión del celibato falso",
            "Escándalos históricos de la corte romana",
            "Necesidad de restauración de la moral natural"
        ],
        "NodosSinapticos": [
            "Degradacion_Carnal",
            "Lujuria_Papal_Extrema",
            "Materialismo_Sensual"
        ],
        "ContextoDiccionario": {
            "Lujuria_Eclesiastica": "Estado de depravación carnal alcanzado por las jerarquías religiosas al divinizar la materia y negar la ley natural."
        }
    },
    "5888: Párrafo XIII: PUSILANIMIDAD DE LOS REYES ESCLAVOS DE LA RELIGION": {
        "PilotoDeCoherencia": "Crítica a los monarcas que se sometieron al yugo papal por cobardía o fanatismo, traicionando la soberanía de sus pueblos.",
        "CitaInelutable": "Reyes que se arrodillan ante la sotana son esclavos coronados que traicionan a sus pueblos por un perdón imaginario.",
        "EjemploPedagogico": "Un león que se deja poner bozal por un ratón porque este le ha contado una historia de miedo sobre el bosque; el león es el rey y el ratón el sacerdote.",
        "IdeasPrincipales": [
            "Sometimiento del poder civil al religioso",
            "Cobardía de los gobernantes ante el dogma",
            "Traición a la soberanía nacional por intereses eclesiásticos"
        ],
        "PuntosImportantes": [
            "La pusilanimidad real como sostén del poder vaticano",
            "El uso de la excomunión como arma de chantaje político",
            "Necesidad de gobernantes libres de prejuicios religiosos"
        ],
        "NodosSinapticos": [
            "Pusilanimidad_Real",
            "Esclavitud_Religiosa",
            "Sometimiento_al_Dogma"
        ],
        "ContextoDiccionario": {
            "Pusilanimidad": "Falta de valor moral y ceguera intelectual que permite a los poderosos ser instrumentos de la tiranía dogmática."
        }
    },
    "6098: Párrafo XIV: JUANUCHO HACE HONORASUS JURAMENTOS": {
        "PilotoDeCoherencia": "La integridad del espíritu que mantiene sus principios de justicia incluso en los entornos más corrompidos.",
        "CitaInelutable": "Hacer honor a los juramentos en medio del fango es la prueba de fuego del espíritu que no se deja corromper.",
        "EjemploPedagogico": "Un diamante que cae en el lodo; por más que el fango lo cubra, mantiene su dureza y brillo interno inalterables.",
        "IdeasPrincipales": [
            "Fidelidad a los principios morales",
            "Cumplimiento de la justicia en situaciones extremas",
            "Integridad del agente de cambio"
        ],
        "PuntosImportantes": [
            "El valor del juramento ante la conciencia",
            "Acción individual contra la marea de corrupción",
            "El papel de los instrumentos de justicia de Eloí"
        ],
        "NodosSinapticos": [
            "Fidelidad_al_Juramento",
            "Justicia_Ejecutiva",
            "Integridad_en_el_Caos"
        ],
        "ContextoDiccionario": {
            "Honor_al_Juramento": "Compromiso inquebrantable del espíritu con la verdad y la justicia, por encima de conveniencias materiales."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Tanda 6 aplicado exitosamente.")
