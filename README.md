# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Criando Rotas no projeto Vite+React

- Instalação da dependência do react-router-dom.
-- npm install react-router-dom
- Criar as páginas ou rotas na pasta routes.[Home,Produtos, EditarProdutos, Error]
- Configurar as rotas no arquivo main.jsx
-- importar todos os componentes envolvidos no processo
--- createBrowserRouter,RouterProvider e todas as rotas/páginas criadas.
- Deveria ser criado um objeto que é um array de objetos com todas as rotas. Ex: const router = createRouterBrowser([ {path : '/' , element: <App/>, children : [
      {path : '/' , element: <Home/>},
    {path : '/produtos' , element: <Produtos/>},
 ]
 }     
])

