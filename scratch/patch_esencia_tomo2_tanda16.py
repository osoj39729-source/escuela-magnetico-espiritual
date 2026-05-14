import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-2_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '7752: Marzo 24 de 1912  (Portillo) - El  Juez.': {
    'Piloto': 'El Juez: Ultimátum a los rebeldes del 5 de abril.',
    'Idea': 'Trincado establece el 5 de abril como fecha definitiva del Juicio Universal. Los espíritus que no se presenten quedarán exiliados automáticamente. La justicia no puede ser dilatada por la procrastinación ni la maldad calculada.',
    'Ejemplo': 'El Juez declara que quienes fingieron redención ante el tribunal y siguen en sus malas obras serán juzgados en ausencia y remitidos al Fiscal para su destino final.',
    'Cita': 'El 5 de abril es el Juicio Universal... nadie puede dilatar la justicia... los ausentes serán juzgados conforme a su obra.',
    'Sinapsis': ['Juicio_Universal_5_Abril', 'Fiscal_Espiritual', 'Exilio_Automatico', 'Justicia_en_Ausencia']
  },
  '7813: A  continuación  se  presento  en  Juicio  la  fracción  de  disidentes  mahometanos  del  Juicio  celebrado  a  ellos  el  3  de  Marzo  y - y partieron a Sión.': {
    'Piloto': 'Disidentes mahometanos: La reconciliación como el verdadero yihad.',
    'Idea': 'La fracción de mahometanos que se resistió al juicio inicial regresa voluntariamente. Reconocen que el verdadero yihad no es la guerra sino la lucha interior contra el orgullo. Jurando en la ley de amor, parten hacia Sión como sus hermanos.',
    'Ejemplo': 'Los disidentes confiesan que el fanatismo del Corán los ató a mundos de sombra y que solo al reconocer al Juez como brazo de Alá pudieron liberarse hacia la luz.',
    'Cita': 'El verdadero yihad es contra el propio orgullo... juramos la ley de amor... y partieron a Sión.',
    'Sinapsis': ['Disidentes_Mahometanos', 'Yihad_Interior', 'Reconciliacion_Islamica', 'Partida_a_Sion']
  },
  '7878: Marzo 24 de 1912  (Hora 20)  (Portillo) - Cuarta nebulosa.  Cantemos a Eloi.': {
    'Piloto': 'La Cuarta Nebulosa: Coro cósmico ante el Juicio Universal.',
    'Idea': 'Espíritus de la cuarta nebulosa acuden al llamado para ser testigos del Juicio y entonar el himno a Eloí. El universo entero participa en el proceso judicial de la Tierra como un acontecimiento que impacta a toda la Cosmogonía.',
    'Ejemplo': 'Los enviados de la cuarta nebulosa describen cómo la vibración del juicio se percibe como un temblor de luz en todos los sistemas estelares y cómo su presencia multiplica la fuerza del tribunal.',
    'Cita': 'Cantemos a Eloí... el Juicio de la tierra es el acontecimiento de la Cosmogonía... venimos de la cuarta nebulosa.',
    'Sinapsis': ['Cuarta_Nebulosa', 'Himno_a_Eloi', 'Resonancia_Cosmica_del_Juicio', 'Testigos_Universales']
  },
  '8036: Marzo  26  de  1912  (Portillo) - Jesús  de  Nazaret.': {
    'Piloto': 'Jesús: La profecía de la Reforma social y el fin de la guerra.',
    'Idea': 'Jesús profetiza la caída definitiva de los imperios y la instauración de la comunidad de amor. El Código de Amor es el testamento que completa sus parábolas en lenguaje directo para la era de la razón.',
    'Ejemplo': 'Jesús declara que la guerra balkánica (mencionada en el texto) es la última convulsión de la barbarie antes de que la fraternidad universal tome el relevo histórico.',
    'Cita': 'Mis parábolas llegan a su término... el Código de Amor es mi testamento en lenguaje directo... la guerra es la última convulsión.',
    'Sinapsis': ['Profecias_de_Jesus_Cumplidas', 'Codigo_Amor_como_Testamento', 'Fin_de_la_Guerra', 'Fraternidad_Universal']
  },
  '8195: Pidió entrada el Espíritu de una mujer; venia con otras muchas, que habían sido disidentes en el Juicio Monjil  Posesionado - Adelaida  Suxter  Austria': {
    'Piloto': 'Adelaida Suxter: El manto de María y la redención de las disidentes monjiles.',
    'Idea': 'Las monjas disidentes que huyeron del primer juicio se presentan voluntariamente, cubiertas por el manto flúidico de María. La vergüenza de la desnudez espiritual se convierte en motor de arrepentimiento cuando se comparte en comunidad.',
    'Ejemplo': 'Adelaida convoca a sus compañeras mostrando cómo el Juez la cubrió con luz, demostrando que la misericordia es real y accesible para las que se acojan voluntariamente a la ley.',
    'Cita': 'Cuanta vergüenza... María le tendió su manto fluídico... venid y justifiquémonos.',
    'Sinapsis': ['Disidentes_Monjiles', 'Manto_Fluidico_de_Maria', 'Arrepentimiento_Colectivo', 'Redención_Voluntaria']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)
print('OK - Tanda 16 inyectada.')
