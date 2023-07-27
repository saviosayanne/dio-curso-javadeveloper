/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    1 À vista Débito, recebe 10% de desconto;
    2 À vista no Dinheiro ou PIX, recebe 15% de desconto;
    3 Em duas vezes, preço normal de etiqueta sem juros;
    4 Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
const preco_etiqueta = 100; /*Valor produto*/
const forma_de_pagamento = 4;

if (forma_de_pagamento === 1) {
    valor_produto = preco_etiqueta - (preco_etiqueta * 0.10);
    console.log("O valor do Produto é " + valor_produto);
} else if (forma_de_pagamento === 2) {
    valor_produto = preco_etiqueta - (preco_etiqueta * 0.15);
    console.log("O valor do Produto é " + valor_produto);
} else if (forma_de_pagamento === 3) {
    valor_produto = preco_etiqueta;
    console.log("O valor do Produto é " + valor_produto);
} else {
    valor_produto = preco_etiqueta + (preco_etiqueta * 0.10);
    console.log("O valor do Produto é " + valor_produto);
}
