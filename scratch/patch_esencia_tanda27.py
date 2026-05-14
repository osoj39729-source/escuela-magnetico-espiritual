import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '5126: Julio 18 de 1911 - Posesión M. P.': {
    'Piloto': 'La estrategia pedagógica de la filiación divina de Jesús.',
    'Idea': 'Jesús no es Dios; su título de hijo de Dios fue una confirmación de Juan el Bautista para adaptar la misión a los intereses espirituales de la época. Los protectores asumen cargas ajenas para facilitar la redención del guiado.',
    'Ejemplo': 'Alejo explica cómo Juan el Bautista preparó el camino del Mesías dándole el nombre de hijo de Dios para su reconocimiento ante el pueblo.',
    'Cita': 'Jesús no era Dios... recibió la confirmación de hijo de Dios por Juan Bautista.',
    'Sinapsis': ['Desmitificacion_de_Jesus', 'Juan_Bautista_Elias', 'Sacrificio_del_Protector']
  },
  '5152: Julio 21 de 1911 - Posesión M. Portillo': {
    'Piloto': 'La eficacia del perdón y la higiene en la meditación colectiva.',
    'Idea': 'El perdón de la víctima es la llave que libera tanto al agresor como al protector que carga con su pena. La distracción en las sesiones fortalece el odio de los espíritus de tinieblas frente al maestro.',
    'Ejemplo': 'Reconciliación de un espíritu buscador de venganza (M.D.) al presenciar el sacrificio del protector Alejo; advertencia de Juan sobre la concentración en la sesión.',
    'Cita': 'Tanto pueden los malos como los buenos y a veces más los malos, porque los malos, por el odio, encuentran medios de venganza.',
    'Sinapsis': ['Perdon_Liberador', 'Venganza_Espiritual', 'Higiene_Mediunnica']
  },
  '5213: Julio 23 de 1911 - Posesión M. P.': {
    'Piloto': 'El triunfo acelerado del espíritu y la rectificación de Meslier.',
    'Idea': 'La voz de los misioneros es la trompeta que inicia el juicio a la mentira. El triunfo del espiritismo se reduce a dos generaciones. Juan Meslier rectifica su obra al comprender la verdadera naturaleza humana de Jesús.',
    'Ejemplo': 'Jesús de Nazaret anuncia el fin de la tiranía de los reyes divinos; el sabio Meslier confiesa su error y promete volver como misionero de la Escuela.',
    'Cita': 'No pasarán dos generaciones sin que estas sentencias sean cumplidas... Jesús vuelve a la tierra más alegre y conforme.',
    'Sinapsis': ['Profecia_de_las_Dos_Generaciones', 'Juan_Meslier', 'Reinado_del_Espiritu', 'Piqueta_Demoledora']
  },
  '5304: Julio 25 de 1911 - Posesión M. P.': {
    'Piloto': 'Denuncia de la corrupción y el crimen en los conventos.',
    'Idea': 'Los conventos son cárceles inmundas donde la hipocresía oculta orgías y depravación. El encierro forzado de las jóvenes conduce al suicidio y es una afrenta a la libertad del espíritu.',
    'Ejemplo': 'Margarita Calvo relata su tragedia en las Carmelitas de Valladolid, donde fue tildada de endemoniada para ocultar la corrupción del clero.',
    'Cita': 'Demoleríais todos los conventos si supierais lo que allí pasa... evitar que las jóvenes se encierren en esas cárceles inmundas.',
    'Sinapsis': ['Corrupcion_en_Conventos', 'Suicidio_y_Expiacion', 'Demolicion_de_la_Iglesia']
  },
  '5337: Julio 28 de 1911 - Posesión M. P.': {
    'Piloto': 'La Alianza de Religiones y el veto a la libertad de pensamiento.',
    'Idea': 'El dogma católico es un síncrecis de religiones antiguas (Alianza) que rechaza la razón por temor a su propia caída. Sixto III admite que la Iglesia no puede dar libertad de pensamiento sin desaparecer.',
    'Ejemplo': 'El Papa Sixto III culpa a Jesús por no haber escrito sus verdades y admite que la Iglesia prefiere la reforma antes que permitir el análisis de sus dogmas.',
    'Cita': 'La Iglesia Romana no puede aceptar la libertad de pensamiento, porque no pueden todos ahondar en sus dogmas y misterios, porque esa es su caída.',
    'Sinapsis': ['Alianza_de_Religiones', 'Veto_al_Pensamiento', 'Sixto_III_Papa', 'Demolicion_de_la_Iglesia']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)
