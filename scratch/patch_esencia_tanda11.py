import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '1760: Enero 1 (Hora, 030) - Escrita, Trincado': {
    'Piloto': 'Protección espiritual ante el despojo material instigado por el clero.',
    'Idea': 'El clero manipula la justicia para asediar al misionero; la vigilancia espiritual asegura que no falte lo necesario a pesar de los desalojos injustos.',
    'Ejemplo': 'Desalojo judicial del taller de Trincado sobre una herencia robada por el clero, confirmada 15 años después como derecho legítimo del Maestro.',
    'Cita': 'No bastaba tu escasez por el robo de tus sudores: era necesario que aún sin deber te sacaran de la casa.',
    'Sinapsis': ['Justicia_Clerical', 'Despojo_Material', 'Vigilancia_Espiritual']
  },
  '1785: Enero 1 de 1911 (Hora 7) - Francisco Xavier': {
    'Piloto': 'El don del discernimiento racional como escudo contra el engaño.',
    'Idea': 'La buena fe sin razón es debilidad que aprovecha el malvado; el espíritu debe despertar y juzgar hechos y palabras con lógica para no ser defraudado.',
    'Ejemplo': 'Instrucción de Xavier para no dar valor a las críticas maliciosas y reírse de lo que solo busca molestar al espíritu.',
    'Cita': 'La buena fe, usada a ciegas, no es conveniente... el malvado se aprovecha.',
    'Sinapsis': ['Discernimiento_Racional', 'Buena_Fe_vs_Tontuna', 'Malicia_Humana']
  },
  '1813: Enero 3 de 1911 - por haberla arrancado de sus malos caminos.': {
    'Piloto': 'Consecuencias espirituales y físicas de rescatar almas de la obsesión.',
    'Idea': 'Salvar a un espíritu de sus bajos instintos genera la reacción violenta de sus antiguos vínculos; el misionero absorbe ataques destinados al protegido.',
    'Ejemplo': 'La visión del bofetón espiritual recibido por la médium al rescatar a Carmen de sus antiguos caminos livianos.',
    'Cita': 'Vengó por haberla arrancado de sus malos caminos.',
    'Sinapsis': ['Rescate_de_Almas', 'Venganza_de_Obsesores', 'Responsabilidad_Misionera']
  },
  '1833: Enero 3 de 1911 - sólo con tan gran ayuda pudo ser salvado.': {
    'Piloto': 'Medicina espiritual cooperativa ante peligros de vida inminente.',
    'Idea': 'La acción conjunta de guías (Bautista, María, Teresa) permite salvar materias críticas para la misión; la curación se consolida con el afecto de los encarnados.',
    'Ejemplo': 'Intervención exitosa para sanar una pulmonía doble en el niño Francisco Xavier mediante magnetismo superior.',
    'Cita': 'Sólo con tan gran ayuda pudo ser salvado.',
    'Sinapsis': ['Medicina_Cooperativa', 'Sanacion_de_Urgencia', 'Juan_Bautista_Medico']
  },
  '1850: Enero 10 de 1911 - Escrita, Trincado': {
    'Piloto': 'Negación de la existencia del demonio y la jerarquía de Francisco Xavier.',
    'Idea': 'El mal es responsabilidad de espíritus perversos, no de una entidad diabólica; Xavier es descrito como un Sol inalcanzable para la mayoría de los espíritus.',
    'Ejemplo': 'Bárbara describe la altura espiritual de Xavier como algo que apenas las miradas de los elevados logran vislumbrar.',
    'Cita': 'El demonio no existe; hay espíritus perversos... Apenas nuestras miradas le alcanzan en su altura.',
    'Sinapsis': ['Inexistencia_del_Demonio', 'Francisco_Xavier_Sol', 'Mision_vs_Materia']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)
