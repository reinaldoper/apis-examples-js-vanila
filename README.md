# Frontend JS Application

Esta é uma aplicação frontend desenvolvida em JavaScript puro (Vanilla JS), que consome diversas APIs, incluindo:

- **Digimons**: Renderiza uma lista de Digimons.
- **Piadas de Chuck Norris**: Exibe piadas aleatórias de Chuck Norris.
- **Produtos**: Lista e exibe produtos.
- **Pokémon**: Permite ao usuário pesquisar por um Pokémon.
- **Rick and Morty**: Exibe personagens da série Rick and Morty.

## Pré-requisitos

Certifique-se de ter o seguinte instalado:

- [Docker](https://www.docker.com/get-started)
- [Minikube](https://minikube.sigs.k8s.io/docs/start/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)

## Estrutura do Projeto

- **index.html**: Página principal da aplicação.
- **style.css**: Arquivo de estilo da aplicação.
- **simple-deployment.yml**: Arquivo de configuração para o deployment no Kubernetes.

## Executando a Aplicação

### Rodando com Go Live

1. Abra o projeto em seu editor de texto preferido (ex: VSCode).
2. Instale a extensão **Live Server**.
3. Clique com o botão direito no arquivo `index.html` e selecione **Open with Live Server**.
4. A aplicação será aberta no seu navegador padrão.

### Rodando com Minikube

1. Inicie o Minikube:

   ```bash
   minikube start
   ```
2. Aplique o deployment no cluster:

  ```bash
  kubectl apply -f simple-deployment.yml
  ```

3. Exponha o serviço:

  ```bash
  kubectl expose deployment client --type=NodePort --port=80
  ```
4. Acesse a aplicação:
  
  ```bash
  minikube service client
  ```

### Deployment
- O arquivo simple-deployment.yml contém a configuração do deployment. Ele utiliza a imagem Docker rei200201/app-js:2.6