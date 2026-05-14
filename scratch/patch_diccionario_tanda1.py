import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Iglesia_Cristiana_Origen": {
        "palabras_clave": ["antioquia", "pablo", "saulo", "bautismo", "transición"],
        "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#2358: FUNDACIÓN DE LA IGLESIA CRISTIANA"],
        "contexto_real": "Nace en Antioquia fundada por Pablo como una amalgama de las doctrinas de Juan y Jesús con ritos vedas, sustituyendo la circuncisión por el bautismo."
    },
    "Cristo_Fuego_Sagrado": {
        "palabras_clave": ["fuego sagrado", "fúlica", "jacob", "símbolo", "no personal"],
        "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#2358: FUNDACIÓN DE LA IGLESIA CRISTIANA"],
        "contexto_real": "El término 'Cristo' no designa a una persona, sino al 'fuego sagrado' de la sabiduría fúlica. Fue aplicado a Jesús por irrisión y luego dogmatizado."
    },
    "Templos_vs_Conciencia": {
        "palabras_clave": ["templos", "piedra", "cal", "espíritu", "libertad"],
        "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#2474: Párrafo I: JESUS NI SUS APOSTOLES NO LEVANTARON TEMPLOS"],
        "contexto_real": "Los templos de piedra son jaulas para el espíritu. Jesús y Juan nunca levantaron templos, pues el único templo verdadero es el hombre en su conciencia."
    },
    "Sincretismo_Religioso": {
        "palabras_clave": ["alianza", "unificación", "manuel I", "dogma", "mezcla"],
        "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#2507: Párrafo II: TOMA FORMA LA IGLESIA CATOLICA", "buscando-a-dios-joaquin-trincado_esencia.json#2559: Párrafo III: PREMEDITACION INAUDITA"],
        "contexto_real": "Proceso político del siglo III donde el Papa Manuel I unificó ritos y doctrinas de diversas religiones para crear la Iglesia Católica y obtener supremacía."
    },
    "Manuel_I_Papa": {
        "palabras_clave": ["astuto", "político", "siglo III", "pontífice", "supremacía"],
        "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#2507: Párrafo II: TOMA FORMA LA IGLESIA CATOLICA"],
        "contexto_real": "Primer pontífice propiamente dicho que transformó la humildad cristiana en una potencia política y dogmática mediante alianzas con otras religiones."
    }
}

# Update existing concepts if needed
if "Jesus_Hombre" not in dic["CONCEPTOS"]:
    dic["CONCEPTOS"]["Jesus_Hombre"] = {
        "palabras_clave": ["humanidad", "misionero", "no dios", "razón"],
        "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#2474: Párrafo I: JESUS NI SUS APOSTOLES NO LEVANTARON TEMPLOS"],
        "contexto_real": "Jesús como hombre misionero, rechazando la divinización sobrenatural que lo aleja de la imitación humana y lo convierte en ídolo."
    }
else:
    dic["CONCEPTOS"]["Jesus_Hombre"]["nodos_sinapticos"].append("buscando-a-dios-joaquin-trincado_esencia.json#2474: Párrafo I: JESUS NI SUS APOSTOLES NO LEVANTARON TEMPLOS")

# Add the rest of new concepts
for k, v in nuevos_conceptos.items():
    if k not in dic["CONCEPTOS"]:
        dic["CONCEPTOS"][k] = v
    else:
        # Update existing
        for node in v["nodos_sinapticos"]:
            if node not in dic["CONCEPTOS"][k]["nodos_sinapticos"]:
                dic["CONCEPTOS"][k]["nodos_sinapticos"].append(node)

with open(dic_path, 'w', encoding='utf-8') as f:
    json.dump(dic, f, indent=2, ensure_ascii=False)

print("Diccionario sináptico actualizado.")
