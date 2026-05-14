import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '3319: Mayo 16 de 1911 - Posesión M. P.': {
    'Piloto': 'El sarcasmo de la santidad católica y el perdón redentor del suicida.',
    'Idea': 'La santidad eclesiástica es un obstáculo que oculta deudas pasadas; el verdadero progreso nace de saldar cuentas con la ley. El perdón de las víctimas, incluso en intentos de infanticidio por suicidio, es el bálsamo del alma.',
    'Ejemplo': 'Agustín de Hipona califica su santidad de sarcasmo; Carmen Victorero pide perdón a su hijo por intentar matarlo antes de suicidarse.',
    'Cita': 'Mi santidad es un sarcasmo; yo no debí servir a la falsa Iglesia Católica.',
    'Sinapsis': ['Santidad_Catolica_Sarcasmo', 'Suicidio_y_Expiacion', 'Perdon_Filial', 'Agustín_de_Hipona']
  },
  '3401: Mayo 19 de 1911 - Posesión M. P.': {
    'Piloto': 'La ley rigurosa de expiación y la reconciliación con las víctimas.',
    'Idea': 'Quien odia está condenado a amar por ley de compensación; la existencia actual es el escenario para saldar deudas de vidas criminales o rebeldes en los espacios.',
    'Ejemplo': 'Rafael Donato, asesino y ladrón, se reconcilia con sus víctimas Cristina y María Méndez para recibir la luz del arrepentimiento.',
    'Cita': 'Es la ley tan rigurosa, que si odias tendrás que amar.',
    'Sinapsis': ['Ley_de_Expiacion', 'Reconciliacion_con_Victimas', 'Rafael_Donato']
  },
  '3436: Mayo 21 de 1911 - Posesión M. P.': {
    'Piloto': 'El karma matrimonial y la inversión de roles por justicia.',
    'Idea': 'Las desavenencias conyugales suelen ser saldos de deudas pasadas donde los roles (opresor/oprimido) se invierten para que el espíritu aprenda a amar mediante el servicio.',
    'Ejemplo': 'Revelación de una mujer que sufre a un marido rebelde porque en la vida pasada ella fue el hombre que lo arruinó y se burló de él.',
    'Cita': 'En otra existencia hombre eras, y el que hoy es tu marido era tu mujer y tú te reíste de ella.',
    'Sinapsis': ['Karma_Matrimonial', 'Inversion_de_Roles', 'Venganza_Espiritual']
  },
  '3462: Mayo 23 de 1911 - Posesión M. P.': {
    'Piloto': 'El sacrificio del protector y la burla a la santidad comercial.',
    'Idea': 'Los protectores asumen penas de sus guiados para blindarlos del odio. La santidad es un título comercial de la Iglesia; el verdadero espíritu busca ser útil, no adorado.',
    'Ejemplo': 'Juan Bautista se burla de su estatus de santo y advierte sobre el "reglazo" que recibirán los infalibles comerciantes de la fe.',
    'Cita': 'Yo quisiera ser más de lo que fui y menos de lo que me han hecho.',
    'Sinapsis': ['Sacrificio_del_Protector', 'Santidad_Comercial', 'Juan_Bautista_Humor']
  },
  '3538: Mayo 30 de 1911 - Posesión M. P.': {
    'Piloto': 'La petición suprema de Jesús: Quítame esta cruz de mentiras.',
    'Idea': 'Jesús no es Dios ni quiere la cruz; pide a Trincado que desmienta las fábulas religiosas de 20 siglos. El progreso permite que el discípulo supere al maestro.',
    'Ejemplo': 'Jesús reconoce que Francisco Xavier le ha superado en progreso y entrega a Trincado la misión de hacer astillas la cruz de la mentira universal.',
    'Cita': 'Mírame, hermano mío, doblado por el peso de esta cruz terrible... yo quiero venir a la tierra aligerado, y tú, hermano mío... quítame esta cruz.',
    'Sinapsis': ['Jesus_sin_Cruz', 'Ley_de_Progreso', 'Desmitificacion_de_Jesus', 'Astillas_de_la_Cruz']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)
