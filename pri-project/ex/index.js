import Pessoa from './logger';
//logger.info('Testando 1 2 3');
import 'react'

export

const produto = {
    nome: 'Caneta Azul',
    preco: 2.90,
    desconto: 0.50,
}

function clone(obj) {
    return {...obj }
}

const novoProduto = clone(produto)
novoProduto.nome = 'Caneta verde'

console.log(produto, novoProduto)