import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

# Reparar brechas de Tanda 4
brechas_tanda4 = {
    "Agrupacion_Espiritual": {
        "palabras_clave": ["afinidad", "agrupación", "espíritus", "semejanza", "magnetismo"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#1512: PRRAFO II: LEY DE AFINIDAD..."],
        "contexto_real": "El proceso por el cual la ley de afinidad organiza a los espíritus en grupos de semejanza evolutiva para facilitar su progreso colectivo."
    },
    "Reflejo_Cosmico": {
        "palabras_clave": ["reflejo", "espejo", "consecuencia", "justicia", "retorno"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#1593: PRRAFO III: LEY DE JUSTICIA..."],
        "contexto_real": "La operación matemática de la justicia cósmica que devuelve al espíritu exactamente la suma de sus actos, sin exceso ni defecto."
    },
    "Eliminacion_del_Castigo_Divino": {
        "palabras_clave": ["castigo", "infierno", "paraíso", "consecuencia", "justicia natural"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#1593: PRRAFO III: LEY DE JUSTICIA..."],
        "contexto_real": "La sustitución del castigo externo y arbitrario (infierno divino) por la consecuencia natural automática de los propios actos."
    },
    "Rechazo_del_Espiritismo_Moderno": {
        "palabras_clave": ["kardec", "moderno", "falsificación", "mesa", "medium"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#1735: CAPTULO QUINTO.: ANTIGEDAD DEL ESPIRITISMO"],
        "contexto_real": "La condena de la Escuela al espiritismo de Allan Kardec como una versión diluida y comercializada de la ciencia espiritual original."
    },
    "Ciencia_Primordial": {
        "palabras_clave": ["ciencia", "primordial", "antigua", "manú", "origen"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#1735: CAPTULO QUINTO.: ANTIGEDAD DEL ESPIRITISMO"],
        "contexto_real": "La comprensión del Espiritismo como la ciencia más antigua del universo, anterior a todas las religiones y recuperada por Trincado."
    },
    "Negacion_del_Creacionismo": {
        "palabras_clave": ["nada", "creación", "génesis", "bíblico", "ex nihilo"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#1800: LIBRO I.: LA CREACIN"],
        "contexto_real": "El rechazo científico y filosófico de la doctrina bíblica de la creación de la nada, afirmando la eternidad de la materia-espíritu."
    },
    "Rehabilitacion_de_Moises": {
        "palabras_clave": ["moisés", "rehabilitación", "legislador", "mago", "espíritu maestro"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#1937: CAPTULO SEXTO.: POR QU Y CMO MOISS PROHIBI EL USO DEL ESPIRITISMO"],
        "contexto_real": "La reivindicación histórica de Moisés como el mayor legislador, mago y espíritu maestro que actuó por mandato del Gobierno Espiritual."
    },
    "Historia_del_Espiritismo": {
        "palabras_clave": ["historia", "espiritismo", "antigüedad", "práctica", "evidencia"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#1937: CAPTULO SEXTO.: POR QU Y CMO MOISS PROHIBI EL USO DEL ESPIRITISMO"],
        "contexto_real": "La evidencia histórica de la práctica del Espiritismo desde los albores de la civilización, presente en todos los pueblos y culturas."
    }
}

for k, v in brechas_tanda4.items():
    if k not in dic["CONCEPTOS"]:
        dic["CONCEPTOS"][k] = v

with open(dic_path, 'w', encoding='utf-8') as f:
    json.dump(dic, f, indent=2, ensure_ascii=False)

print("Brechas Tanda 4 reparadas: 8 conceptos inyectados al diccionario.")
