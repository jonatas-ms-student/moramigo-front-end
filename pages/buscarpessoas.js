import Link from 'next/link'

const BuscarPessoas = () => {
  return (
    <div>
      <h1>Buscar Pessoas</h1>
      <br />
      <span>Encontrar uma galera bacana para compartilhar moradia não precisa ser uma tarefa difícil.</span>
      <br />
      <nav>
        <Link href="/"><a>Moramigo</a></Link><br />
        <Link href="/listarpessoas"><a>Lista de Pessoas</a></Link><br />
        <Link href="/listarbairros"><a>Lista de Bairros</a></Link><br />
      </nav>
    </div>
  );
}

export default BuscarPessoas;