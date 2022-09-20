const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(productDetails).toBeInstanceOf(Function);
    // Teste se o retorno da função é um array.
    expect(productDetails('Alcool gel', 'Máscara')).toBeInstanceOf(Array);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('Esparadrapo', 'Fita Adesiva')).toHaveLength(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    const test3 = productDetails('Disco', 'Fita');
    expect(test3[0]).toBeInstanceOf(Object);
    expect(test3[1]).toBeInstanceOf(Object);
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    const test4 = productDetails('Saco de Lixo', 'Shampoo');
    expect(test4[0]).not.toEqual(test[1]);
    // Teste se os dois productIds terminam com 123.
    const test5 = productDetails('Condicionador', 'Sabonete');
    expect(test5[0].details.productId).toMatch(/.+[123]/g);
    expect(test5[1].details.productId).toMatch(/.+[123]/g);
  });
});
