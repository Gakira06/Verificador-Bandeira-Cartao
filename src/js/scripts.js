function validarCartao(numeroCartao) {
    const bandeiras = [
        { nome: "Visa", regex: /^4\d{12}(\d{3})?$/ },
        { nome: "Visa (16 dígitos)", regex: /^4\d{15}$/ },
        { nome: "MasterCard", regex: /^(5[1-5]\d{14}|2(2[2-9]\d{12}|[3-6]\d{13}|7[01]\d{12}|720\d{12}))$/ },
        { nome: "Elo", regex: /^(4011|4312|4389|4576|5041|5066|509\d{2}|6277|6362|650\d{2}|6516|6550)\d{10}$/ },
        { nome: "American Express", regex: /^3[47]\d{13}$/ },
        { nome: "Discover", regex: /^(6011\d{12}|65\d{14}|64[4-9]\d{13})$/ },
        { nome: "Hipercard", regex: /^6062\d{12}$/ },
        { nome: "Diners Club", regex: /^(36\d{12}|38\d{12}|39\d{12}|3[0-5]\d{11}|3[0-5]\d{13}|30[0-5]\d{11}|300\d{12})$/ },
        { nome: "EnRoute", regex: /^2(014|149)\d{11}$/ },
        { nome: "JCB", regex: /^35(2[89]|[3-8]\d)\d{12}$/ },
        { nome: "Voyager", regex: /^8699\d{11}$/ },
        { nome: "Aura", regex: /^50\d{14}$/ }
    ];

    for (const bandeira of bandeiras) {
        if (bandeira.regex.test(numeroCartao)) {
            return `Cartão válido. Bandeira: ${bandeira.nome}`;
        }
    }

    return "Cartão inválido ou bandeira desconhecida.";
}

// Exemplo de uso:
const numeroCartao = "4111111111111111"; // Substitua pelo número do cartão para teste
console.log(validarCartao(numeroCartao));

// Função para validar o número do cartão de crédito
function verificarCartao() {
    const numeroCartao = document.getElementById('numeroCartao').value;
    const resultado = validarCartao(numeroCartao);
    document.getElementById('resultado').textContent = resultado;
}