import { useState } from "react";
import Pessoa from "../components/Pessoa";

export default function Home() {

  let [ idade, setIdade ] = useState(10);
  let incrementaIdade = () => {
    setIdade(++idade)
  };

  const pessoas = [
    {
      nomePessoa : 'Matheus',
      idadePessoa : 20
    },
    {
      nomePessoa : 'Claudio',
      idadePessoa : 22
    },
    {
      nomePessoa : 'Amanda',
      idadePessoa : 14
    },
  ];

  return (
    <>
      <h1>Olá mundo!</h1>
      <Pessoa nome='Gustavo' idade={idade}/>
      <Pessoa nome='Tainara' idade={20}/>

      {pessoas.map(({ nomePessoa, idadePessoa }, index) => {
        return <Pessoa
          nome={nomePessoa}
          idade={idadePessoa}
          key={index}
        />
      })}
      
      <button onClick={incrementaIdade}>Incrementa idade do usuário</button>
    </>
  )
}
