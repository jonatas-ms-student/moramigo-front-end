import Link from 'next/link'

const ListarBairros = () => {
  return (
    <div>
      <h1>Lista de Bairros</h1>
      <br />
      <span>Encontrar uma galera bacana para compartilhar moradia não precisa ser uma tarefa difícil.</span>
      <br />
      <nav>
        <Link href="/"><a>Moramigo</a></Link><br />
        <Link href="/listarpessoas"><a>Lista de Pessoas</a></Link><br />
        <Link href="/buscarpessoas"><a>Buscar Pessoas</a></Link><br />
      </nav>
    </div>
  );
}

export default ListarBairros;