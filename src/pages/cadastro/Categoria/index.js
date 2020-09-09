import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {

    const [categorias, setCategorias] = useState(["Categoria Teste"]);

    const valoresIniciais = {
      nome: "Categoria Inicial",
      descricao: "Descrição Teste",
      cor: "#000000"
    }

    const [values, setValues] = useState(valoresIniciais);
    // Chave: nome, descricao, cor
    function setValue(chave, valor){
      setValues({
        ...values,
        [chave]: valor // nome: "valor"
      })
    }

    return (
      <PageDefault>
        <h1>
            Cadastro de Categorias: {values.nome}
        </h1>
        <form onSubmit={function handleSubmit(infosDoEvento){
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);
        }} >
        <div>

          <label>
            Nome da Categoria:
            <input
              type="text"
              value={values.nome}
              onChange={function functionHandler(infosDoEvento){
                setValue("nome", infosDoEvento.target.value)
              }}
            />
          </label>
        </div>
        
        <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao}
              onChange={function functionHandler(infosDoEvento){
                setValue("descricao", infosDoEvento.target.value)
              }}
            />
          </label>
        </div>

        <div>

          <label>
            Color:
            <input
              type="color"
              value={values.cor}
              onChange={function functionHandler(infosDoEvento){
                setValue("cor", infosDoEvento.target.value)
              }}
            />
          </label>

        </div>

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return(
            <li key={`${categoria}${indice}`} >
              {categoria}
            </li>
          )
        } )}
      </ul>

        <Link to="/">
            Ir para Home
        </Link>
      </PageDefault>
    );
  }

  export default CadastroCategoria;