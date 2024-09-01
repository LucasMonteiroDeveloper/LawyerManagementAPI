<h1>Sistema de Gerenciamento de Advogados</h1>

## Sobre o Projeto

Este projeto é um sistema de gerenciamento de advogados com um frontend em React e um backend em .NET. O sistema permite adicionar, editar, listar e excluir advogados. Os advogados possuem informações como nome, senioridade e endereço.

## Funcionalidades

Cadastro de Advogado: Permite adicionar um novo advogado com nome, senioridade e endereço completo.

Listagem de Advogados: Visualiza a lista de advogados cadastrados.

Edição de Advogado: Permite editar as informações de um advogado existente.

Exclusão de Advogado: Permite excluir um advogado da lista.

## Pré-requisitos

> Node.js (para rodar o frontend)

> .NET no mínimo 6.0 SDK (para rodar o backend)

> Um editor de código (recomendado: Visual Studio Code)

## Configuração do Backend

> Clone o repositório
```
gh repo clone LucasMonteiroDeveloper/LawyerManagementAPI
```
As dependências são instaladas automaticamente quando você executa o projeto com <b>dotnet run</b>
#### Execute o Back
```ruby
dotnet run.
```
O backend será iniciado em <b>http://localhost:5169</b>

#### Execute o Frontend
Abra o projeto e execute o comando
```ruby
npm start
```
caso não consiga executar, tente pelo CMD, navegue até o projeto e execute o mesmo comando.

O frontend será iniciado em <b>http://localhost:3000</b>


### Estrutura do Projeto
### # Backend:
> Program.cs – Configuração e inicialização da aplicação.

> Controllers/LawyersController.cs – Controlador para gerenciar advogados.

> Data/LawyerContext.cs – Contexto do banco de dados.

> Models/Lawyer.cs – Modelo de dados para advogados.

#### Frontend:
> src/App.js – Componente principal da aplicação.

> src/components/LawyerForm.js – Formulário para adicionar e editar advogados.

> src/components/LawyerList.js – Componente para listar advogados.

> src/utils/api.js – Configuração do Axios para fazer requisições à API.


### Testes
Para testar a API e o frontend:
> Frontend: Utilize ferramentas como o Postman para testar as APIs ou verifique diretamente no navegador.
> Backend: Os testes podem ser realizados manualmente através de requisições HTTP ou usando ferramentas de teste de APIs.
