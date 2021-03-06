import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <h1>Moramigo</h1>
      <br/>
      <span>Encontrar uma galera bacana para compartilhar moradia não precisa ser uma tarefa difícil.</span>
      <br />
      <nav>
        <Link href="/listarpessoas"><a>Lista de Pessoas</a></Link><br />
        <Link href="/listarbairros"><a>Lista de Bairros</a></Link><br />
        <Link href="/buscarpessoas"><a>Buscar Pessoas</a></Link><br />
      </nav>

    </div>
  );
}

export default Home;