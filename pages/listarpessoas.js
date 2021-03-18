import Link from 'next/link'

const ListarPessoas = () => {
  return (
    <div>
      <h1>Lista de Pessoas</h1>
      <br />
      <span>Encontrar uma galera bacana para compartilhar moradia não precisa ser uma tarefa difícil.</span>
      <br />
      <nav>
        <Link href="/"><a>Moramigo</a></Link><br />
        <Link href="/listarbairros"><a>Lista de Bairros</a></Link><br />
        <Link href="/buscarpessoas"><a>Buscar Pessoas</a></Link><br />
      </nav>
    </div>
  );
}

export default ListarPessoas;