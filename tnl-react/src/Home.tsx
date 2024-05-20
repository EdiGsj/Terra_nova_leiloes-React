import Tnl_header from "./components/header/Styles"
import Tnl_portal from "./components/portal/Styles"
import logo1 from './assets/Terra Nova Leilões Logo Black.jpg'
import Icon_hamer from "./components/icon_hammer/Styles"
import Tnl_nav from "./components/nav/Styles"
import Tnl_footer from "./components/footer/Styles"
import Div_overflow from "./components/div_ovrflow/Styles"
import Tnl_section from "./components/sections/Styles"

function App() {
  return (
    <>
      <div className='Master'>
        <Tnl_header>
          <img src={logo1} alt="" />
          <h1>Bons Negócios na Batida do Martelo</h1>
        </Tnl_header>

        <Tnl_portal>
          <img src="https://i.pinimg.com/236x/05/12/52/0512526607c37b3565bdefebdde12cb5.jpg" alt="icon" />
          <Icon_hamer></Icon_hamer>
          <img style={{transform: 'scaleX(-1)'}} 
          src="https://i.pinimg.com/236x/05/12/52/0512526607c37b3565bdefebdde12cb5.jpg" alt="mirrosIcon" />
        </Tnl_portal>
        
        <Tnl_nav>
          <div>A</div>
          <div>B</div>
          <div>C</div>
          <div>D</div>
          <div>E</div>
          <div>F</div>
        </Tnl_nav>


        <main style={{
          height: '500px', 
          }}>

          <section id='carrossel'>
            <h1>Conteúdo</h1>
          </section>
          <Tnl_section id='us'>
            <Div_overflow>
              <p>
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões

              </p>
            </Div_overflow>

            <Div_overflow>
              <p>
              Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões
                Terra Nova Leilões

              </p>
            </Div_overflow>
          </Tnl_section>

          <section id='events'></section>
        </main>

        <Tnl_footer>
          <ul>
            <li>Contato: terranovaleiloes@gmail.com</li>
            <li><a href="">Site parceiros</a></li>
            <li><a href="">Contatos para cadastro</a></li>
            <li>todososdireitosreservados@EdimarGonçalves2024</li>
          </ul>
        </Tnl_footer>
        
      </div>
    </>
  )
};

export default App
