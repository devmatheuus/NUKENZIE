
## Kenzie Hub

Desenvolvido por: <a href="https://www.linkedin.com/in/devmatheuus/" target="_blank">Matheus Lima</a> 

Deploy: <a href="https://refactoring-nu-kenzie-devmattz.vercel.app/" target="_blank"> Acesse o projeto sem precisar instalar as dependências</a>

## Apresentando o projeto
o Kenzie Hub é um ambiente para o usuário organizar seus projetos de acordo com o nível atual.

Foi utilizada uma API para que fosse possível o usuário se cadastrar, fazer login e realizar atividades dentro da plataforma. As ações do usuário, como cadastrar uma tecnologia por exemplo, geram uma requisição ao back end, podendo ser executada com sucesso ou não.
No momento, as funcionalidades disponíveis são:

- Cadastro;
- Login;
- Adicionar tecnologia ao perfil;
- Deletar tecnologias;
- Editar alguma tecnologia

Vale ressaltar que o servidor não permite cadastrar tecnologias com o mesmo nome.

O projeto conta com o uso de diversas bibliotecas que foram utilizadas em conjunto com React, são elas:

- Styled Components para estilização;
- Axios para fazer requisições ao Back End;
- React Toastify para feedbacks;
- Yup para validações;
- React Hook Form;
- React Router para criar as rotas de cada página;
- React Icons;


## Pré Requisitos

  * Node.js v16.15.0
  * Yarn v1.22.18

## Passo a Passo - Instalando a aplicação
 
  Para clonar o projeto, escolha um dos seguintes links e cole-o no terminal, no exemplo estou usando o git bash:

  SSH

  ```
  git clone git@github.com:devmatheuus/nukenzie.git
  ```

  HTTPS

  ```
  git clone https://github.com/devmatheuus/nukenzie.git
  ```

  Após fazer o clone do projeto, instale as dependências do projeto com o comando:

  ```
  yarn
  ```

  E por fim, rode o seguinte comando para rodar a aplicação localmente:

  ```
  yarn start
  ```
