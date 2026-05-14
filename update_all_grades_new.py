import json
import re
import os

# Books mapping to IDs
BOOKS_MAP = {
    "El Discurso del Obispo Stromayer": "-1library-co--discurso-obispo-strossmayer",
    "Buscando A Dios Joaquin Trincado": "buscando-a-dios-joaquin-trincado",
    "El Primer Rayo de Luz": "primer-rayo-de-luz",
    "Espiritismo En Su Asiento": "espiritismo-en-su-asiento",
    "Filosofia Austera Racional": "filosof-a-austera-racional",
    "Los Cinco Amores": "los-cinco-amores",
    "Filosofia Enciclopedica Universal Tomo 1": "filosofia-enciclopedica-universal-tomo-1",
    "El Magnetismo En Su Origen": "el-magnetismo-en-su-origen",
    "El Espiritismo Estudiado": "el-espiritismo-estudiado",
    "Profilaxis De La Vida": "profilaxis-de-la-vida",
    "Los Extremos Se Tocan": "los-extremos-se-tocan",
    "Filosofia Enciclopedica Universal Tomo 2": "filosofia-enciclopedica-universal-tomo-2",
    "Conocete A Ti Mismo 1": "conocete-a-ti-mismo-1",
    "Alfaqui Vademecum": "alfaqui-vademecum",
    "Codigodeamoruniversaltomoi 1": "codigodeamoruniversaltomoi-1",
    "Codigo De Amor Universal Tomo2 1975": "codigo-de-amor-universal-tomo2-1975",
    "Estatutos Y Reglamento": "estatutos-y-reglamentos",
    "Laudo De Rigor": "laudode-rigor",
    "Ley De Las Mediumnidades En General": "ley-de-las-mediumidades-en-general",
    "Reglamento Interno": "reglamento-interno-e-m-e-delac--u--1"
}

# Load library.ts
def load_library():
    with open("src/data/library.ts", "r", encoding="utf-8") as f:
        content = f.read()
    
    # Simple regex to find books
    books = {}
    matches = re.findall(r'\{[\s\n]*"id": "([^"]+)",[\s\n]*"title": "([^"]+)",[\s\n]*"pdfUrl": "[^"]*",[\s\n]*"index": \[([\s\S]*?)\][\s\n]*\}', content)
    
    for book_id, title, index_str in matches:
        themes = re.findall(r'"([^"]+)"', index_str)
        books[book_id] = themes
    return books

LIBRARY = load_library()

def get_themes(book_id, parts=None):
    all_themes = LIBRARY.get(book_id, [])
    if not parts:
        return all_themes
    
    # Filter by parts (exclusive logic)
    # Parts for FAR:
    # 0: Part 1 (starts at beginning)
    # 2435: Part 2
    # 5570: Part 3
    # 8207: Part 4
    # 11471: Part 5
    
    # We'll detect the part labels in the index
    result = []
    current_part = 1
    for theme in all_themes:
        if "SEGUNDA PARTE" in theme.upper() or "PARTE SEGUNDA" in theme.upper():
            current_part = 2
        elif "TERCERA PARTE" in theme.upper() or "PARTE TERCERA" in theme.upper():
            current_part = 3
        elif "CUARTA PARTE" in theme.upper() or "PARTE CUARTA" in theme.upper():
            current_part = 4
        elif "QUINTA PARTE" in theme.upper() or "PARTE QUINTA" in theme.upper():
            current_part = 5
        
        if current_part in parts:
            result.append(theme)
    return result

# Grade definitions
GRADES_CONFIG = [
    { "id": 1, "title": "Grado 1: El Discurso del Obispo Strossmayer", "books": ["-1library-co--discurso-obispo-strossmayer"], "extra": 38 },
    { "id": 2, "title": "Grado 2: Buscando a Dios", "books": ["buscando-a-dios-joaquin-trincado"] },
    { "id": 3, "title": "Grado 3: El Primer Rayo de Luz", "books": ["primer-rayo-de-luz"] },
    { "id": 4, "title": "Grado 4: El Espiritismo en su Asiento", "books": ["espiritismo-en-su-asiento"] },
    { "id": 5, "title": "Grado 5: Filosofía Austera Racional (Partes 1 y 2)", "books": [("filosof-a-austera-racional", [1, 2])] },
    { "id": 6, "title": "Grado 6: Los Cinco Amores y Filosofía Enciclopédica Tomo 1", "books": ["los-cinco-amores", "filosofia-enciclopedica-universal-tomo-1"] },
    { "id": 7, "title": "Grado 7: Filosofía Austera Racional (Parte 3) y El Magnetismo en su Origen", "books": [("filosof-a-austera-racional", [3]), "el-magnetismo-en-su-origen"] },
    { "id": 8, "title": "Grado 8: Filosofía Austera Racional (Parte 4) y El Espiritismo Estudiado", "books": [("filosof-a-austera-racional", [4]), "el-espiritismo-estudiado"] },
    { "id": 9, "title": "Grado 9: Filosofía Austera Racional (Parte 5) y Profilaxis de la Vida", "books": [("filosof-a-austera-racional", [5]), "profilaxis-de-la-vida"] },
    { "id": 10, "title": "Grado 10: Los Extremos se Tocan y Filosofía Enciclopédica Tomo 2", "books": ["los-extremos-se-tocan", "filosofia-enciclopedica-universal-tomo-2"] },
    { "id": 11, "title": "Grado 11: Conócete a Ti Mismo y Alfaquí Vademécum", "books": ["conocete-a-ti-mismo-1", "alfaqui-vademecum"] },
    { "id": 12, "title": "Grado 12: Código de Amor Universal Tomo 1 y 2", "books": ["codigodeamoruniversaltomoi-1", "codigo-de-amor-universal-tomo2-1975"] },
    { "id": 13, "title": "Grado 13: Estatutos, Laudo y Reglamentos", "books": ["estatutos-y-reglamentos", "laudode-rigor", "ley-de-las-mediumidades-en-general", "reglamento-interno-e-m-e-delac--u--1"] }
]

EXTRA_STROSSMAYER = [
    "Análisis de la Infalibilidad Papal",
    "El Concilio Vaticano I y sus consecuencias",
    "La verdadera naturaleza del Evangelio vs Dogma",
    "Misión de la EMECU frente al Romanismo",
    "Anatomía de la Concupiscencia Sacerdotal",
    "El Espíritu de Verdad y la caída de los Dioses",
    "La Razón como única brújula del Espíritu",
    "Diferencia entre Cristianismo e Iglesia Católica",
    "El papel de las Madres en la Regeneración",
    "Justicia Suprema vs Misericordia Falsa",
    "La unidad de la Ley y la Sustancia",
    "El Magnetismo como herramienta de progreso",
    "Historia de la prevaricación religiosa",
    "El juramento de los Caballeros de Colón analizado",
    "Llamada a la conciencia de los hombres libres",
    "El fin de la era de la ignorancia",
    "La Escuela Esénica y su legado",
    "Jesús como hombre y no como Dios",
    "La mentira del Espíritu Santo",
    "La familia misionera de Abraham",
    "El testamento de Abraham y la Comuna",
    "El papel de Moisés en la prohibición del espiritismo",
    "La Ley del Sinaí vs leyes eclesiásticas",
    "La Comuna como destino final de la humanidad",
    "Soberanía del Espíritu sobre la materia",
    "Fraternidad Universal vs Patriotismo ciego",
    "El Maestro Juez y su mandato",
    "Austeridad y Moral en el estudio doctrinal",
    "El peligro del misticismo y el fanatismo",
    "La ciencia ante el espíritu libre",
    "Psicología de la fe ciega vs juicio racional",
    "Evolución de los mundos y el Juicio de Mayoría",
    "La Bestia 666 y su significado doctrinal",
    "El Solitario y su mensaje de rigor",
    "Análisis del Prólogo: La meta del primer rayo",
    "La importancia del estudio constante",
    "Disciplina y Orden en la Cátedra",
    "Salud y Amor: Pilares de la Escuela"
]

for config in GRADES_CONFIG:
    grade_id = config["id"]
    themes = []
    for item in config["books"]:
        if isinstance(item, tuple):
            themes.extend(get_themes(item[0], item[1]))
        else:
            themes.extend(get_themes(item))
    
    if config.get("extra"):
        themes.extend(EXTRA_STROSSMAYER[:config["extra"]])
    
    # Save to file
    filepath = f"src/data/grades/grade{grade_id}.ts"
    
    # Generate file content
    themes_str = ",\n    ".join([json.dumps(t, ensure_ascii=False) for t in themes])
    content = f"""export const GRADE_{grade_id} = {{
  id: {grade_id},
  title: "{config['title']}",
  type: "book",
  book: "{config['books'][0] if isinstance(config['books'][0], str) else config['books'][0][0]}",
  lessonsCount: {len(themes)},
  themes: [
    {themes_str}
  ]
}};
"""
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Updated {filepath} with {len(themes)} themes.")
