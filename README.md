# 🛒 Angular E-Commerce - Fake Store API

Aplicação de comércio eletrónico desenvolvida com **Angular (Modern Zoneless)**, focada em boas práticas de arquitetura frontend, reatividade com **Signals** e consumo de APIs REST.

---

## 🚀 Tecnologias e Padrões Utilizados

* **Angular (Standalone Components):** Arquitetura limpa sem `NgModule`.
* **Modo Zoneless (`provideZonelessChangeDetection`):** Otimização de desempenho sem dependência do `zone.js`.
* **Reatividade com Signals:**
  * `signal()` para controlo de estado do carrinho.
  * `computed()` para cálculo automático de quantidade total e valor monetário.
  * `toSignal()` para conversão limpa de fluxos HTTP (`Observable`) em dados reativos de template.
* **Modern Control Flow:** Uso nativo de `@if` e `@for ... track` para renderização eficiente de listas.
* **Integração HTTP:** Comunicação com a [Fake Store API](https://fakestoreapi.com/) via `HttpClient`.
* **TypeScript Estrito:** Tipagem robusta para modelos de domínio (`Product`, `CartItem`).

---

## 📦 Funcionalidades

- [x] Catálogo de produtos dinâmico com preços e imagens em grelha responsiva.
- [x] Adição de produtos ao carrinho com persistência em memória global.
- [x] Painel lateral (*Drawer*) para gestão de itens do carrinho.
- [x] Incremento, decremento e remoção de produtos em tempo real.
- [x] Cálculo reativo instantâneo do valor total da compra.

---

## 🛠️ Como Executar Localmente

1. Clone o repositório:
   \`\`\`bash
   git clone https://github.com/SEU-UTILIZADOR/angular-test.git
   cd angular-test
   \`\`\`

2. Instale as dependências:
   \`\`\`bash
   npm install
   \`\`\`

3. Inicie o servidor local:
   \`\`\`bash
   ng serve -o
   \`\`\`

4. Aceda a `http://localhost:4200/` no seu navegador.
