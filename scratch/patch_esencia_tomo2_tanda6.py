import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-2_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '2738: Enero 7 de 1912 Portillo - El Secretario: Joaquín Trincado': {
    'Piloto': 'Xavier: La oración mental y la fisiología de la libertad.',
    'Idea': 'La verdadera oración es el pensamiento puro hacia el Padre. Se denuncian las fronteras geográficas como prejuicios que dividen el espíritu universal. La fatalidad no es desgracia, sino el efecto natural de causas sembradas por la ignorancia humana.',
    'Ejemplo': 'Xavier compara al espiritista con el águila que mira al sol, capaz de analizar la esencia de las cosas sin el filtro del prejuicio nacionalista o religioso.',
    'Cita': 'La oración es de pensamiento, nada de palabras... el espíritu vive en todo el universo... la fatalidad no existe como desgracia.',
    'Sinapsis': ['Oracion_Mental', 'Ley_de_Afinitad', 'Fin_de_las_Fronteras', 'Fatalidad_Causal']
  },
  '3037: A continuación dijo - merecer ser elegidos.': {
    'Piloto': 'Joaquín el Patriarca: El Árbol de la Cosmogonía y el destino de los obstinados.',
    'Idea': 'La tierra es una rama que ya dio su fruto de verdad; los gusanos del prejuicio intentan dañarlo. La ignorancia es una responsabilidad elegida por el espíritu. Los que rechacen la luz irán a mundos primitivos para purificar su soberbia.',
    'Ejemplo': 'Joaquín (abuelo de Jesús) declara que el Código de Amor es la flor que marcará el rumbo de la armonía universal, cerrando el ciclo de las parábolas para hablar con verdades desnudas.',
    'Cita': 'La rama del mundo tierra ya le llegó la luz... no por ignorantes sois libres de responsabilidad... el espíritu eligió la posición.',
    'Sinapsis': ['Arbol_de_la_Cosmogonia', 'Responsabilidad_del_Espiritu', 'Mundos_Primitivos_de_Expiacion', 'Joaquin_Patriarca']
  },
  '3212: Enero 7 de 1912 (desarrollo) - Joaquín Trincado.': {
    'Piloto': 'Diplomacia Psíquica: El indulto de Cullera.',
    'Idea': 'La influencia espiritual puede modificar las leyes civiles injustas. Trincado utiliza el desdoblamiento para salvar vidas, demostrando que la ley de amor está por encima del código militar.',
    'Ejemplo': 'Trincado relata su intervención psíquica sobre mandatarios para lograr el indulto de padres de familia condenados por rebelión social, anteponiendo la justicia del espíritu a la conveniencia política.',
    'Cita': 'La ley de amor está sobre los códigos militares... el espíritu es el todo en el hombre.',
    'Sinapsis': ['Diplomacia_Psiquica', 'Indulto_de_Cullera', 'Justicia_vs_Codigo_Militar']
  },
  '3242: Enero 12 de 1912 Sesión de pruebas y desarrollo - Joaquín Trincado.': {
    'Piloto': 'Profecía de la República Comunal y el fin de la monarquía.',
    'Idea': 'Los criminales son "enfermos e ignorantes" que requieren cura, no muerte. Se profetiza la transformación de España en una República Comunal Universal. Se advierte sobre conspiraciones internacionales y espionaje.',
    'Ejemplo': 'Trincado "semiposesiona" a Canalejas para fortalecer su voluntad de indulto a Juan Joen, revelando secretos de guerra para proteger el progreso de la nación hacia la Comuna.',
    'Cita': 'Los hombres no son criminales; son enfermos e ignorantes... España será una república comunal universal.',
    'Sinapsis': ['Republica_Comunal_Universal', 'Enfermo_e_Ignorante_no_Criminal', 'Secretos_de_Estado_Espirituales']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)
