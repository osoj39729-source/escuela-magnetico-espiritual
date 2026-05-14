import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '1579: Julio 26 de 1910 - Posesión de M. P.': {
    'Piloto': 'Desmitificación de los santos católicos y la agonía del espiritismo de sombras.',
    'Idea': 'La elevación espiritual se mide por la obra, no por el canon religioso (Lutero supera a Agustín). La dignidad del misionero no permite volver donde se le desprecia.',
    'Ejemplo': 'Mónica (madre de Agustín) confiesa el retraso que causó a su hijo por imponerle el catolicismo; Delfino pide auxilio para el Centro Fraternidad.',
    'Cita': 'La humildad no está reñida con la dignidad.',
    'Sinapsis': ['Jerarquia_de_Espiritus', 'Dignidad_del_Misionero', 'Desmitificacion_de_Santos', 'Centro_Fraternidad_Crisis']
  },
  '1645: Julio 29 de 1910 - Advertencia': {
    'Piloto': 'Origen de los espíritus gnomos y denuncia de la corrupción conventual.',
    'Idea': 'La sangre blanca (esperma) derramada en pasiones da origen a espíritus gnomos; los conventos son focos de vicio e infanticidio que la higiene moral debe exponer.',
    'Ejemplo': 'Sor María confiesa los crímenes y la corrupción interna de los claustros; Roque identifica enfermedades pestilentes.',
    'Cita': 'El espiritismo es médico, pero no medicina.',
    'Sinapsis': ['Espiritus_Gnomos', 'Corrupcion_Conventual', 'Higiene_Moral', 'Medicina_Espiritual']
  },
  '1705: Diciembre 31 de 1910 - Escrita': {
    'Piloto': 'Consolidación de la obra tras el cierre del abismo metafísico.',
    'Idea': 'El silencio es preparación para el juicio; obtención de datos históricos sobre la familia biológica de Jesús. El hombre traza el rumbo de la solidaridad.',
    'Ejemplo': 'El Maestro cierra el abismo descubierto en julio para proteger las conciencias y preparar la Filosofía Austera Racional.',
    'Cita': 'La solidaridad no traza rumbos, los traza el hombre.',
    'Sinapsis': ['Cierre_del_Abismo', 'Familia_de_Jesus', 'Solidaridad_Cosmogonica', 'Maestro_Juez']
  },
  '1731: Enero 1 de 1911 (Hora 0) - Joaquín.': {
    'Piloto': 'Proclama de victoria y bando de guerra espiritual del nuevo año.',
    'Idea': 'Victoria de la Verdad mediante las armas de la Justicia; obligación de defensa del ideal bajo pena del Talión para los desertores.',
    'Ejemplo': 'El Viejecito Pastor emite un bando militar espiritual ordenando la entrega de armas a los enemigos vencidos.',
    'Cita': 'Aquel que no cumpliese con este deber, será castigado con la pena del Talión.',
    'Sinapsis': ['Victoria_de_la_Verdad', 'Ley_del_Talion', 'Milicia_Espiritual']
  },
  '1745: Enero 1 de 1911 (Hora 010) - Silvestre': {
    'Piloto': 'Confesión de deudas morales y pronóstico de luchas espirituales inminentes.',
    'Idea': 'Las batallas del año serán espirituales; la honestidad sobre faltas pasadas (usura) es necesaria para la purificación del camino misionero.',
    'Ejemplo': 'Silvestre confiesa su pasado como usurero para limpiar su responsabilidad ante el Maestro y su guiado.',
    'Cita': 'No serán tan grandes en este año las luchas materiales; pero las espirituales serán mayores.',
    'Sinapsis': ['Confesion_de_Faltas', 'Batallas_Espirituales', 'Silvestre_Usurero']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)
