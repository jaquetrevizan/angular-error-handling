<h1 align="center"> Angular Error Handling</h1>
<p align="center">Exemplo prático de boas práticas em tratamento de erros no Angular.</p>

---

<p align="center">
  <img src="https://img.shields.io/badge/Angular-12-DD0031?logo=angular" alt="Angular">
  <img src="https://img.shields.io/badge/RxJS-6.6-purple?logo=reactivex" alt="RxJS">
  <img src="https://img.shields.io/badge/Angular_Material-12-blue?logo=angular" alt="Angular Material">
</p>

---

## Objetivo

Este projeto foi criado como estudo de **tratamento de erros no Angular**, abordando:
- Interceptação de erros HTTP com `HttpInterceptor`.  
- Criação de um `GlobalErrorHandler` para capturar exceções globais.  
- Serviço centralizado de notificação de erros para o usuário.  
- Melhoria da **experiência do usuário (UX)** ao lidar com falhas.  

---

## Funcionalidades

- Interceptor que captura erros de requisições HTTP.  
- Handler global para exceções não tratadas.  
- Exibição de mensagens amigáveis para o usuário.  
- Serviços reutilizáveis para logging e notificações.  
- Estrutura modular e clara para boas práticas de manutenção.  

---

## Tecnologias Utilizadas

- [Angular 12](https://angular.io/) — Framework frontend.  
- [RxJS](https://rxjs.dev/) — Programação reativa.  
- [Angular Material](https://material.angular.io/) — UI Components.  
- [TypeScript](https://www.typescriptlang.org/) — Linguagem base.  

---

## Instalação e Execução

Para rodar este projeto localmente, siga os passos:

```bash
# Clone o repositório
git clone https://github.com/jaquelinetrevizan/angular-error-handling.git

# Acesse o diretório do projeto
cd angular-error-handling

# Instale as dependências
npm install

# Execute a aplicação
ng serve
````

A aplicação ficará disponível em `http://localhost:4200/`.

---

## Aprendizados

Neste projeto explorei:

* Implementação de **GlobalErrorHandler** no Angular.
* Uso de **HttpInterceptor** para capturar e tratar erros HTTP.
* Separação de responsabilidades com **ErrorService** e **NotificationService**.
* Boas práticas para criar aplicações mais **resilientes e confiáveis**.

---

## Dúvidas & Sugestões

- Se tiver alguma ideia para melhorar este projeto ou encontrar algum problema, fique à vontade para abrir uma issue aqui no repositório.
- Para dúvidas mais diretas, você também pode me escrever em: trevizan.jaqueline@gmail.com.
