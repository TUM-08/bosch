import './App.css';

function App() {

  const servicos = [
    {
      id: 1,
      nome: 'Serviços Gerais',
      descricao: 'Agende uma data para levar seu carro em uma de nossas oficinas! Um especialista Bosch Service irá avaliar a melhor solução para você.',
      icon: '🔧'
    },
    {
      id: 2,
      nome: 'Troca de Óleo',
      descricao: 'Faça a troca do Óleo e do Filtro de Óleo do seu carro numa oficina Bosch Service. Atenção: Os preços podem variar de acordo com o modelo do carro e tipo do filtro e óleo escolhido!',
      icon: '🛢️'
    },
    {
      id: 3,
      nome: 'Checagem de Freio',
      descricao: 'Vai viajar? Passe numa oficina Bosch Service e faça um check-up geral do seu carro. Atenção: este valor é somente para check-up e novos serviços poderão ser incluídos na sua visita.',
      icon: '🛑'
    }
  ];

  return (
    <div className="layout">

      <nav className="navbar">
        <h2 className="brand">Bosch Car Service</h2>
      </nav>

      <header className="page-header">
        <h3>Nossos Serviços</h3>
        <p>Nossos serviços</p>
      </header>

      <section className="grid-produtos">
        {servicos.map(item => (
          <div key={item.id} className="item-card">

            <div className="item-img">{item.icon}</div>

            <div className="item-info">
              <h4>{item.nome}</h4>
              <p>{item.descricao}</p>

              <button className="btn-action">Selecionar
              </button>
            </div>

          </div>
        ))}
      </section>

    </div>
  );
}

export default App;