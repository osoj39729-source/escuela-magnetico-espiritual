import json

esencia = json.load(open('F:/trincado/public/data/contents/profilaxis-de-la-vida_esencia.json', encoding='utf-8'))
dic = json.load(open('F:/trincado/public/data/diccionario_sinapsis.json', encoding='utf-8'))

tanda1_nums = ['27', '77', '78', '254', '409']
dic_conceptos = set(dic['CONCEPTOS'].keys())
campos = ['PilotoDeCoherencia','CitaInelutable','EjemploPedagogico','IdeasPrincipales','PuntosImportantes','NodosSinapticos','ContextoDiccionario']

print('=== AUDITORIA FAR-5 TANDA 1 - PROFILAXIS DE LA VIDA ===')
total_pass = 0
for num in tanda1_nums:
    matching = [k for k in esencia.keys() if k.startswith(num)]
    if not matching:
        print('[ERROR] Sin clave para ' + num)
        continue
    nodo = esencia[matching[0]]
    errores = [c for c in campos if c not in nodo or not nodo[c]]
    for s in nodo.get('NodosSinapticos', []):
        if s not in dic_conceptos:
            errores.append('SIN_ENLACE:' + s)
    if errores:
        print('[WARN] ' + matching[0][:50] + ': ' + str(errores))
    else:
        print('[PASS] ' + matching[0][:50])
        total_pass += 1
print('=== RESULTADO: ' + str(total_pass) + '/5 PASS ===')
print('Conceptos en diccionario: ' + str(len(dic['CONCEPTOS'])))
