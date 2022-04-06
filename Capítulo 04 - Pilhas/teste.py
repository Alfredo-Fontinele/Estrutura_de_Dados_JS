lista = [1,2,3,4,5]

def pesquisaIndice(lista, numero):
    if numero in lista:
        print('Número Existe')
    else:
        print('Número Inexistente')

# pesquisaIndice(lista, 20)

def media(*valores):
    lista = list(valores)
    media = sum(lista) / len(lista)
    return print(media)

media(4,4,4)