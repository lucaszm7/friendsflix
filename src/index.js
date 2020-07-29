import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

//Aula 2: Rotas
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria';

//Teste da Rota

//Desafio master: Botar algo divertido na Pag404
const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  //BrowserRouter: Faz as rotas entre a aplicação (???)
  //Switch: faz o papel do IF
  <BrowserRouter>
    <Switch> 
      <Route path="/" component={Home} exact />  
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />

      {/* Rota 404 */}
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')

  );
  
  
  
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,