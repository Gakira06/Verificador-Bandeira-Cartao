# 💳 Validador de Bandeira de Cartão

Bem-vindo ao **Validador de Bandeira de Cartão**! Este projeto permite que você insira o número de um cartão de crédito e descubra se ele é válido e a qual bandeira ele pertence. 🚀

---

## 🖼️ Prévia do Projeto

<img src="./src/assets/icon.png" alt="Ícone do Projeto" width="100" />

---

## 📋 Funcionalidades

- **Validação de Cartões**: Verifica se o número do cartão é válido.
- **Identificação de Bandeira**: Detecta a bandeira do cartão (Visa, MasterCard, Elo, etc.).
- **Interface Responsiva**: Funciona perfeitamente em dispositivos móveis e desktops.
- **Animações Modernas**: Layout com animações suaves para uma experiência agradável.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura do projeto.
- **CSS3**: Estilização com design responsivo e animações.
- **JavaScript**: Lógica de validação e identificação de bandeiras.

---

## 🚀 Como Usar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/Gakira06/Verificador-Bandeira-Cartao.git
   ```
2. **Abra o arquivo `index.html`** no navegador.
3. **Digite o número do cartão** no campo de entrada.
4. Clique no botão **"Validar Cartão"** e veja o resultado!

---

## 🖥️ Estrutura do Projeto

```plaintext
Validador-de-Bandeira-de-Cartão/
├── index.html       # Página principal
├── src/
│   ├── CSS/
│   │   └── style.css  # Estilo do projeto
│   ├── js/
│   │   └── scripts.js # Lógica de validação
│   └── assets/
│       └── icon.png   # Ícone do projeto
```

---

## 📖 Exemplos de Uso

### Entrada:
```plaintext
4111111111111111
```

### Saída:
```plaintext
Cartão válido. Bandeira: Visa
```

---

## 📚 Referências

A lógica de validação foi baseada na tabela de bandeiras de cartões:

| **Bandeira**         | **Número Inicial**                                      |
|-----------------------|--------------------------------------------------------|
| **Visa**             | Começa sempre com o número 4.                          |
| **MasterCard**       | Começa com dígitos entre 51 e 55, ou entre 2221 a 2720. |
| **Elo**              | Pode começar com vários intervalos, como 4011, 4312... |
| **American Express** | Inicia com 34 ou 37.                                   |
| **Discover**         | Começa com 6011, 65, ou com a faixa de 644 a 649.      |
| **Hipercard**        | Geralmente começa com 6062.                            |
| **Diners Club**      | Começa com 36, 38, 39 ou 300 a 305.                    |
| **EnRoute**          | Começa com 2014 ou 2149.                               |
| **JCB**              | Começa com 3528 a 3589.                                |
| **Voyager**          | Começa com 8699.                                       |
| **Aura**             | Começa com 50.                                         |

---

## 🎨 Design

O projeto possui um design moderno com:
- **Gradiente de fundo**: Um visual atraente e dinâmico.
- **Animações suaves**: Transições e efeitos para melhorar a experiência do usuário.
- **Responsividade**: Adaptado para diferentes tamanhos de tela.

---

## 💡 Autor

Desenvolvido por [Gabriel Akira](https://github.com/Gakira06).
```