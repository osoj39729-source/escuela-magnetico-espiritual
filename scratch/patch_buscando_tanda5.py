import json

esencia_path = 'F:/trincado/public/data/contents/buscando-a-dios-joaquin-trincado_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "4210: Párrafo V: LA CONDESA DE VALLADOLID ESPOSA DE BORGIA.": {
        "PilotoDeCoherencia": "Revelación de la vida familiar oculta de Rodrigo Borgia en España, demostrando la falsedad del celibato eclesiástico.",
        "CitaInelutable": "La condesa de Valladolid no era sino la esposa del que Roma llamó vicario de Dios; la hipocresía es el velo de la prevaricación.",
        "EjemploPedagogico": "Un actor que representa un papel de castidad en el escenario (Roma) pero mantiene una familia y negocios en los camerinos (España).",
        "IdeasPrincipales": [
            "Vínculos de Rodrigo Borgia en Valladolid",
            "Falsedad del celibato sacerdotal",
            "La doble vida de los jerarcas romanos"
        ],
        "PuntosImportantes": [
            "La hipocresía como base de la estructura eclesiástica",
            "La condesa de Valladolid como testigo mudo del engaño",
            "Diferencia entre la imagen pública y la realidad privada del Papa"
        ],
        "NodosSinapticos": [
            "Falsedad_Celibato",
            "Vida_Oculta_Borgia",
            "Hipocresia_Eclesiastica"
        ],
        "ContextoDiccionario": {
            "Celibato_Falso": "Imposición externa para el control de bienes, incumplida sistemáticamente por la jerarquía mediante la vida oculta."
        }
    },
    "4448: Párrafo VI: NOCHE DE TERRIBLES TRAGEDIAS": {
        "PilotoDeCoherencia": "La atmósfera de crimen y traición que rodeaba la vida privada de la dinastía Borgia, donde la ambición anulaba la vida humana.",
        "CitaInelutable": "Noches de sangre y puñal que manchan la historia de los que dicen perdonar los pecados en nombre del Padre.",
        "EjemploPedagogico": "Una cena familiar donde los cubiertos son puñales y el vino contiene veneno; así era la intimidad de quienes regían la fe.",
        "IdeasPrincipales": [
            "Crímenes en la corte vaticana",
            "Traición familiar por el poder",
            "Inexistencia de moral en la cúpula religiosa"
        ],
        "PuntosImportantes": [
            "El Vaticano como escenario de tragedias humanas",
            "La ambición de la tiara papal por encima de los lazos de sangre",
            "La oscuridad moral tras los ritos sagrados"
        ],
        "NodosSinapticos": [
            "Tragedias_Borgia",
            "Crimen_Vaticano_Historia",
            "Ambicion_Sacerdotal"
        ],
        "ContextoDiccionario": {
            "Ambicion_Sacerdotal": "Deseo desmedido de poder material y dominio espiritual, motor de los crímenes históricos del clero."
        }
    },
    "4714: Párrafo VII: HORRORESYBACANAL": {
        "PilotoDeCoherencia": "Denuncia del libertinaje desenfrenado dentro de los muros vaticanos, transformando el templo en escenario de orgías.",
        "CitaInelutable": "Las bacanales del Vaticano harían palidecer a las de la Roma pagana; el Dios de Amor fue sustituido por el dios de la carne.",
        "EjemploPedagogico": "Transformar una escuela de moral en un lupanar de vicio; eso hicieron con el asiento que Jesús preparó para el Padre.",
        "IdeasPrincipales": [
            "Libertinaje en la sede pontificia",
            "Profanación de los espacios considerados sagrados",
            "Contraste entre la prédica y la práctica sexual clerical"
        ],
        "PuntosImportantes": [
            "La bacanal como forma de vida en la corte de Alejandro VI",
            "Sustitución de la espiritualidad por el materialismo carnal",
            "La decadencia irreversible de la institución católica"
        ],
        "NodosSinapticos": [
            "Bacanales_Vaticanas",
            "Libertinaje_Eclesiastico",
            "Profanacion_Santuario"
        ],
        "ContextoDiccionario": {
            "Bacanales_Vaticanas": "Fiestas de desenfreno sensual documentadas en la historia del papado, símbolo de su corrupción moral."
        }
    },
    "5006: Párrafo VIII: BACANAL, CRÍMENESYFRATRICIDIO": {
        "PilotoDeCoherencia": "El paroxismo de la maldad Borgia: el asesinato entre hermanos por el poder papal, demostrando la ausencia total de ley moral.",
        "CitaInelutable": "El fratricidio es el sello de la dinastía que pretendió gobernar el espíritu; no hay amor donde hay ambición de tiara.",
        "EjemploPedagogico": "Caín y Abel vestidos de cardenales, luchando por el favor de un padre (el Papa) que es más demonio que hombre.",
        "IdeasPrincipales": [
            "Fratricidio en la familia Borgia",
            "El cardenalato como botín de guerra familiar",
            "Ausencia de amor fraternal en la jerarquía"
        ],
        "PuntosImportantes": [
            "Cesar y Juan Borgia: el conflicto sangriento",
            "El Papa como instigador o encubridor de crímenes familiares",
            "La tiara papal como objeto de deseo criminal"
        ],
        "NodosSinapticos": [
            "Fratricidio_Borgia",
            "Asesinato_Poder_Religioso",
            "Cainismo_Eclesiastico"
        ],
        "ContextoDiccionario": {
            "Cainismo_Eclesiastico": "Estado de guerra interna y fratricidio moral o físico dentro de las jerarquías religiosas por la supremacía."
        }
    },
    "5205: Párrafo IX: UN ESPÍA": {
        "PilotoDeCoherencia": "La infiltración y el espionaje como herramientas de control y supervivencia dentro de la intriga vaticana.",
        "CitaInelutable": "En la sombra de los pasillos vaticanos, el espía es el único que conoce la verdad que el púlpito oculta.",
        "EjemploPedagogico": "Un sistema de vigilancia oculta en un confesionario; la Iglesia usaba ojos y oídos pagados para conocer los secretos de sus enemigos.",
        "IdeasPrincipales": [
            "Redes de espionaje eclesiástico",
            "La intriga como método de gobierno papal",
            "Vigilancia de fieles y disidentes"
        ],
        "PuntosImportantes": [
            "El miedo mutuo entre los miembros de la jerarquía",
            "La verdad amordazada por la vigilancia constante",
            "Supervivencia política mediante el conocimiento de secretos ajenos"
        ],
        "NodosSinapticos": [
            "Espionaje_Vaticano",
            "Intriga_Eclesiastica",
            "Sombra_Papal"
        ],
        "ContextoDiccionario": {
            "Espionaje_Vaticano": "Práctica histórica de la Iglesia para recolectar información confidencial mediante confesionarios e informantes para el control social."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Tanda 5 aplicado exitosamente.")
