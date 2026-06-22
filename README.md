# 👥 Gerenciador de Usuários - Angular

Painel administrativo reativo para gerenciamento de cadastros (CRUD) focado em alta performance e simulação de dados em massa.

---

## 🧠 Pilares de Execução (Alta Performance)

1. **Mentalidade Bilionária:** Arquitetura escalável baseada em sistemas estruturados e resultados assimétricos.
2. **Aprendizado Acelerado:** Implementação direta de recursos modernos (Signals e Standalone Components).
3. **Nível de Especialista:** Uso de práticas reais de mercado e reatividade otimizada.
4. **Atualização Mental:** Foco em clareza de código, velocidade de execução e eliminação de redundâncias.
5. **Arquitetura de Alto Desempenho:** Estrutura organizada refletindo ordem, clareza e propósito.
6. **Alavancagem do Tempo:** Automação via gerador de dados para eliminar processos manuais repetitivos.
7. **Versão Ideal:** Alinhamento técnico rigoroso com os padrões de engenharia atuais.

---

## 🚀 Funcionalidades

* **Cadastro Reativo:** Validação de formulário para Nome, CPF, CEP, Telefone e E-mail.
* **Remoção Instantânea:** Atualização em tempo real da tabela de registros.
* **⚡ Gerador de Usuários:** Injeção em lote usando base de 100 nomes e alternância inteligente de domínios (`@gmail.com` e `@yahoo.com`).
* **Estado com Signals:** Gerenciamento de memória performático e reativo.

---

## 🛠️ Tecnologias

* **Angular 18+**
* **TypeScript**
* **Reactive Forms**
* **CSS3 Moderno** (Grid & Flexbox)

---

## 📁 Estrutura de Pastas

* `src/app/models/user.model.ts` — Interface de dados.
* `src/app/services/user.service.ts` — Estado (Signals) e lógica do gerador.
* `src/app/app.component.ts` — Controlador e validações.
* `src/app/app.component.html` — Layout (Formulário vs. Tabela).
* `src/app/app.component.css` — Estilização e responsividade.

---

## 💻 Como Rodar

```bash
# 1. Acesse o diretório
cd cadastro-usuario

# 2. Instale as dependências
npm install

# 3. Inicie o servidor local
npx ng serve