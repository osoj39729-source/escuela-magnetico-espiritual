import json

esencia_path = 'F:/trincado/public/data/contents/profilaxis-de-la-vida_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "11596: ap NdiCe: eCoNoM a Y eCoNoMixTifiCaCi N": {
        "PilotoDeCoherencia": "Economía vs Economixtificación: el Maestro sustituye un tratado entero por un índice que revela cómo las naciones han vivido en la 'economixtificación' (fraude económico), siendo la Comuna el único régimen de verdadera economía.",
        "CitaInelutable": "Reparar en mucho los daños causados por la economixtificación que han tenido las naciones, en vez de la verdadera economía. Ninguna función de la vida puede acercarse a su perfección en tanto se desconozca.",
        "EjemploPedagogico": "Un sistema financiero que cobra intereses sobre el aire. No es economía (administración de recursos), es 'economixtificación' (mistificación de la economía para robar). La Comuna restaura la economía al eliminar el interés y la herencia.",
        "IdeasPrincipales": ["Economixtificación", "Economía Verdadera", "Índice Administrativo"],
        "PuntosImportantes": [
            "La 'economixtificación' es el sistema capitalista y estatal basado en la explotación y el egoísmo",
            "La verdadera economía administra la abundancia para todos, no la escasez para unos pocos",
            "El conocimiento de este índice previene los fraudes administrativos del régimen anterior"
        ],
        "NodosSinapticos": ["Economixtificacion", "Economia_Verdadera", "Administracion_Comunal"],
        "ContextoDiccionario": {
            "Economixtificacion": "Término doctrinal que define el sistema económico capitalista y burgués como un fraude o mistificación basado en la usura y la explotación.",
            "Economia_Verdadera": "La administración matemática y racional de los recursos universales sin dinero, usura ni propiedad privada exclusiva.",
            "Administracion_Comunal": "El sistema de gestión de los bienes en la Comuna, donde el trabajo de todos garantiza el bienestar material de cada individuo."
        }
    },
    "11626: Cap TUlo priMero: eCoNoM a del TieMpo": {
        "PilotoDeCoherencia": "La moneda del espíritu: la economía del tiempo es la primera obligación del ser racional; el tiempo ocioso es pérdida kármica, mientras que su distribución matemática trae paz sin hastío.",
        "CitaInelutable": "Ninguno podrá decir que es económico si no economiza el tiempo... han de llegar a todos sus deberes sin precipitación, con medida matemática, sin hastío y con agrado.",
        "EjemploPedagogico": "Un presupuesto donde el dinero es el tiempo. Si gastas 8 horas en ocio inútil, te quedas sin capital para el descanso o el estudio. El Código distribuye este capital para que el espíritu siempre tenga 'ahorros' de paz.",
        "IdeasPrincipales": ["Economía del Tiempo", "Distribución Matemática", "Trabajo Obligatorio"],
        "PuntosImportantes": [
            "El tiempo es el único capital real que posee el espíritu encarnado",
            "La prisa y el hastío son síntomas de mala administración del tiempo",
            "El Código establece una distribución armónica entre trabajo, estudio y descanso"
        ],
        "NodosSinapticos": ["Economia_del_Tiempo", "Distribucion_Matematica", "Trabajo_Armonico"],
        "ContextoDiccionario": {
            "Economia_del_Tiempo": "La administración consciente y disciplinada de las horas de encarnación para maximizar el progreso espiritual y comunal.",
            "Distribucion_Matematica": "La organización precisa y sin excesos de las actividades diarias estipulada en el Código para evitar el agotamiento y el ocio.",
            "Trabajo_Armonico": "El desempeño de las obligaciones materiales con agrado y sin prisa, derivado de una correcta economía del tiempo."
        }
    },
    "11656: Cap TUlo seGUNdo: eCoNoM a arT sTiCa": {
        "PilotoDeCoherencia": "El orden cósmico en lo cotidiano: 'poner cada cosa en su puesto y preparar un puesto para cada cosa'; la economía artística es el reflejo terrenal de la armonía astronómica de los mundos.",
        "CitaInelutable": "Poner cada cosa en su puesto y preparar un puesto para cada cosa, es lo que constituye el todo de la economía artística... Esta lección nos la da el universo en su enjambre de mundos.",
        "EjemploPedagogico": "El sistema solar. Ningún planeta se cruza en la órbita de otro porque cada uno tiene su puesto. Una casa ordenada sigue la misma ley macrocósmica en escala microscópica.",
        "IdeasPrincipales": ["Economía Artística", "Un Lugar para Cada Cosa", "Armonía Macrocósmica"],
        "PuntosImportantes": [
            "El orden material de una casa o ciudad es el reflejo directo del orden mental y espiritual de sus habitantes",
            "El universo es el modelo supremo de economía artística: nada sobra, nada estorba",
            "La belleza verdadera no es el lujo, sino la perfecta adecuación de cada elemento a su función"
        ],
        "NodosSinapticos": ["Economia_Artistica", "Orden_Cosmico", "Armonia_Estetica"],
        "ContextoDiccionario": {
            "Economia_Artistica": "La aplicación de las leyes de armonía y orden del universo a la organización de la vida material, desde el hogar hasta la ciudad.",
            "Orden_Cosmico": "El equilibrio matemático que rige el movimiento de los mundos y que debe ser imitado por la sociedad humana.",
            "Armonia_Estetica": "La belleza derivada de la funcionalidad perfecta y el orden, oponiéndose al lujo innecesario o desordenado."
        }
    },
    "11682: Cap TUlo TerCero: eCoNoM a aNiMal": {
        "PilotoDeCoherencia": "Fundamentos de fisiología profiláctica: la economía animal exige conocer el organismo humano no como un fin, sino como la máquina que el espíritu debe operar sin desgastarla inútilmente.",
        "CitaInelutable": "La economía animal ya requiere conocimientos científicos y sin las cátedras anteriores, no podríais con facilidad cumplir esta gran parte de la sabiduría que denominamos economía animal.",
        "EjemploPedagogico": "Un chofer que conoce el motor de su auto. No necesita ser ingeniero, pero sabe cuándo falta aceite y qué gasolina usar. La economía animal es ese conocimiento operativo del propio cuerpo.",
        "IdeasPrincipales": ["Economía Animal", "Conocimiento Orgánico", "Fisiología Científica"],
        "PuntosImportantes": [
            "Ignorar el funcionamiento del propio cuerpo es la causa principal de su ruina prematura",
            "El estudio profundo del organismo se desarrollará en el libro 'Conócete a ti mismo'",
            "La economía animal no es biología médica, es el manual de uso del espíritu sobre la materia"
        ],
        "NodosSinapticos": ["Economia_Animal", "Conocimiento_Organico", "Conocete_a_ti_Mismo"],
        "ContextoDiccionario": {
            "Economia_Animal": "El conocimiento práctico de las funciones fisiológicas del cuerpo humano para administrar su energía vital sin desgaste prematuro.",
            "Conocimiento_Organico": "La comprensión racional de las necesidades, ritmos y capacidades de la materia física que sirve de vehículo al espíritu.",
            "Conocete_a_ti_Mismo": "El mandato socrático adoptado por la doctrina para designar el estudio profundo de la relación entre el espíritu, el alma y el cuerpo."
        }
    },
    "11688: las funciones fisiol gicas d": {
        "PilotoDeCoherencia": "Roles irremplazables en la economía animal: el hombre embellece la naturaleza por el trabajo físico, la mujer perpetúa la especie y endulza la vida como 'arca santa'; invertir estos factores es violar la ley y arruinar la economía vital.",
        "CitaInelutable": "El hombre nace para el trabajo que ha de embellecer la naturaleza... y la mujer viene en primer término a ser... 'El arca santa de la Creación' para perpetuar la especie, invertir los factores sería irracional.",
        "EjemploPedagogico": "Un arco y una flecha. Ambos son esenciales, pero si usas el arco como proyectil y la flecha para tensar, nada funciona. El hombre y la mujer tienen funciones distintas pero complementarias en la economía animal.",
        "IdeasPrincipales": ["Roles Complementarios", "La Mujer como Arca", "Inversión de Factores"],
        "PuntosImportantes": [
            "La biología impone roles específicos que la ideología humana no puede alterar sin causar enfermedad",
            "La mujer, por su fisiología, tiene la misión prioritaria y sagrada de la maternidad racional",
            "Exigir a la mujer el desgaste físico del hombre es un atentado contra la economía animal"
        ],
        "NodosSinapticos": ["Roles_Complementarios", "Arca_Santa", "Inversion_Irracional"],
        "ContextoDiccionario": {
            "Roles_Complementarios": "La distribución armónica de funciones fisiológicas y sociales entre el hombre y la mujer según la ley natural.",
            "Arca_Santa": "El concepto doctrinal que eleva el cuerpo y la función materna de la mujer a la categoría de santuario biológico donde encarna el espíritu.",
            "Inversion_Irracional": "El error social de forzar a los géneros a desempeñar funciones contrarias a su naturaleza biológica y energética."
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

print("Tanda 10 Profilaxis re-destilada: 5 nodos.")
