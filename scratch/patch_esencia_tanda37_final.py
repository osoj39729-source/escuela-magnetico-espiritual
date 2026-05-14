import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '10213: Noviembre 21 de 1911 - Posesión M. P.': {
    'Piloto': 'Redención de Felipe II y la misión espiritual de España.',
    'Idea': 'El orgullo político es superado por el arrepentimiento espiritual. España es una "Madre vieja" en evolución que debe regenerarse mediante el progreso científico y la unión espiritual con sus hijos de las nuevas naciones.',
    'Ejemplo': 'Felipe II llora ante Trincado al reconocer la autoridad de Xavier y Jesús, aceptando ayudar a la regeneración de España desde el espacio.',
    'Cita': 'Felipe, la historia te ha juzgado... ahora se te quiere juzgar en amor... España se cura y se hace inmortal en su misión espiritual.',
    'Sinapsis': ['Redencion_de_Felipe_II', 'Mision_de_España', 'Progreso_Cientifico_Espiritual']
  },
  '10272: Noviembre 24 de 1911 - Posesión M. Portillo': {
    'Piloto': 'Juicio a Hildebrando (Gregorio VII) y el arrepentimiento eclesiástico.',
    'Idea': 'Los jerarcas que impusieron dogmas sufren el destierro de la luz hasta que el arrepentimiento sincero lava sus faltas. El juicio de amor es superior al juicio histórico de la iniquidad.',
    'Ejemplo': 'El espíritu de Gregorio VII se manifiesta llorando y confirmando su histórica frase de destierro; Trincado lo absuelve en nombre del amor bajo la guía de la Princesa Matilde.',
    'Cita': 'He amado la Justicia, he odiado la iniquidad, por esto muero en el destierro... sólo pudo decir adiós y confirmar su nombre.',
    'Sinapsis': ['Juicio_a_Hildebrando', 'Gregorio_VII_Espiritu', 'Princesa_Matilde_Luz']
  },
  '10317: Noviembre 26 de 1911 - FIN DEL TOMO I': {
    'Piloto': 'La música cosmogónica y el diagnóstico de la pseudocivilización.',
    'Idea': 'La música es la armonía del universo captada por el espíritu. Sociológicamente, la humanidad vive en una "ilustración" bárbara de opresión de clases. Solo la unificación bajo el amor y el liderazgo del misionero traerá la verdadera civilización.',
    'Ejemplo': 'Rossini define al músico como el cóndor del espacio, mientras Che Auffer denuncia la justicia actual como un delito de lesa humanidad que margina a los humildes.',
    'Cita': 'La música representa la armonía del universo... no sois civilizados, apenas sois un poco ilustrados... el amor es la verdadera justicia.',
    'Sinapsis': ['Musica_Cosmogonica', 'Critica_Sociologica_Trincado', 'Hombre_del_Medio', 'Fin_del_Tomo_I']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)
