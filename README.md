# 🌿 Ecofy - Sistema para catálogo

Este projeto se trata de um sistema full-stack que permite ao usuário cadastrar, visualizar, atualizar ou deletar informações de plantas que estão cadastradas em um banco de dados. O Ecofy funciona como um catálogo, onde o usuário terá libardade de utilizar diversas funcionalidades, além disso, sua criação foi feita para aplicar conhecimentos e também torna-lo base para outros projetos maiores que virão no futuro. Como mencionado, o Ecofy é um projeto full-stack, o qual possui front-end e back-end separados, desenvolvidos em ReactJS e Node.js respectivamente, mas conectados juntamente com um banco de dados MongoDB, buscando sempre utilizar uma arquitetura limpa e boas práticas de desenvolvimento, assim como tecnologias modernas e importantes.

## ⚙️ Funcionalidades

- **Visualizar plantas:** Ao acessar esse sistema o usuário poderá, a partir da tela de plantas (home principal), visualizar cards de plantas cadastradas no banco de dados.

- **Acessar planta:** Ao clicar no card de alguma planta, o usuário será direcionado a tela da planta, responsável por apresentar suas informações e algumas ações de gerenciamento.

- **Editar planta:** No botão editar da tela da planta, o usuário será direcionado a tela de edição, na qual poderá editar e atualizar as informações dessa planta no banco de dados.

- **Deletar planta:** Ainda na tela da planta, além do botão de editar o usuário também poderá utilizar o botão deletar, removendo assim a planta do banco de dados e fazendo com que ela deixe de ser apresentadada na interface.

- **Buscar plantas:** Na tela de plantas, o usuários terá a possibilidade de pesquisar plantas pelo nome a partir da barra de pesquisa.

- **Adicionar plantas:** Na tela plantas, ao acessar o botão adicionar, o usuário é direcionado a tela de cadastro de plantas, a qual apresenta um formulário com campos de informações e que cadastra as plantas no banco.

## 🛠️ Tecnologias utilizadas

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=blue)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

| Tecnologia | Objetivo |
| :--- | :--- |
| **JavaScript** | Linguagem de programação responsável pela interatividade e dinamismo da interface. |
| **Vite** | Ferramenta utilizado para criação de projeto em React.js. |
| **React.js** | Biblioteca utilizada para a construção das interfaces e de componentes reutilizáveis interativos |
| **HTML & CSS** | Tecnologias usadas para o desenvolvimento da estrutura e do estilo do projeto React.js |
| **Node.js** | Tecnologia responsável pela criação do back-end e gerenciamento das rotas da API. |
| **Express** | Biblioteca do Node.js responsável pela criação do Servidor do Back-End da aplicação. |
| **Cloudinary** | Serviço em nuvem utilizado para armazenar imagens e gerar links públicos para uso na aplicação. |
| **MongoDB** | Banco de dados NoSQL utilizado para armazenar os dados do sistema. |
| **Git** | Controle de versionamento para rastrear alterações e gerenciar o desenvolvimento do projeto. |

## 💻 Demonstração

No momento não foi preparada a imagem com os exemplos de telas que o projeto possui, mas a seguir temos um exemplo temporário que logo mais será substituído:

![Telas do spotify-clone](https://github.com/user-attachments/assets/ab84f388-9e7d-4cfd-9425-1d8dc0316677)

## 📡 API - Rotas disponíveis do back-end:

- **GET** `/plantas` → Lista todas as plantas.

- **GET** `/plantas/:id` → Obtém uma planta pelo id.

- **POST** `/plantas` → Cadastra uma nova planta.

- **PUT** `/plantas/:id` → Atualiza uma planta expecífica pelo id.

- **DELETE** `/plantas/:id` → Deleta uma planta expecífica pelo id.

## 🚀 Como executar?

### Pré-requisitos

- Possuir instalação do Node.js em sua máquina.
- Possuir uma IDE que permita a utilização do Node, como por exemplo o VSCode.

### Passos para instalação

Este repositório possui tanto a uma pasta do sistema front-end, como também a pasta do sistema back-end. A seguir irei mostrar como rodar o projeto de forma rápida e eficiente. 

1.  **Clone o repositório na sua máquina:**

    ```bash
    git clone https://github.com/Walmir07/ecofy_web.git
    ```
2.  **Instale as dependências na pasta frontend e na backend:**
    ```bash
    npm install  # ou yarn install
    ```

### Chave de API e Variáveis de Ambiente

É essencial configurar as chaves de acesso ao MongoDB e Cloudinary para execução.

1.  **Crie um arquivo .env no diretório backend:**

1.  **Preencha com as seguintes variáveis:**

    ```env
    #Chave do MongoDB:
    STRING_CONEXAO="sua_string_de_conexao"

    #Chaves do Cloudinary:
    CLOUDINARY_NAME="seu_nome_cloudinary"
    CLOUDINARY_KEY="sua_chave_api_cloudinary"
    CLOUDINARY_SECRET="sua_chave_secreta_cloudinary"
    ```

### Executar front-end:

- **Ao acessar o diretório na sua IDE, acesse a pasta "front-end" e verifique a instalação das dependências.**

- **Execute o código:**

    ```bash
    npm run dev
    ```

- **Agora acesse a porta:**
    ```bash
    http://localhost:5173
    ```
- **Nesse momento é preciso também executar o back-end para que a nossa interface possa receber os dados da requisição da api, a seguir será mostrado como fazer isso.**

### Executar back-end:

- **Abra um novo terminal.**

- **Acesse a pasta back-end e execute o servidor da seguinte forma:**

    ```bash
    npm run dev
    ```

- **Se preferir você poderá acessar a rota do servidor pela porta:**

    ```bash
    http://localhost:3000
    ```

- **Tudo pronto, agora você terá acesso ao projeto funcionando! 😉**

## 📜 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

- **Walmir Lima** – [@Walmir07](https://github.com/Walmir07)
