import logo1 from './assets/Terra Nova Leilões Logo Black.jpg'
import cow_icon from './assets/cow.png'
import hammer_icon from './assets/gavel.png'
import earth_icon from './assets/earth.png'
import call_icon from './assets/phone-call.png'
import milk_icon from './assets/milk.png'
import live_icon from './assets/live-streaming.png'
import icon_hammer from './assets/HammerIcon.jpg'
import cow_portal_image from './assets/cowPortal.jpg'

import Tnl_header from './components/header/Styles'
import Tnl_portal from './components/portal/Styles'
import Tnl_nav from './components/nav/Styles'
import Tnl_footer from './components/footer/Styles'

import Div_overflow from './components/div_ovrflow/Styles'
import Tnl_section from './components/sections/Styles'
import insta_icon from './assets/insta.png'
import linkedin_icon from './assets/social.png'
import github_icon from './assets/github icon.png'
import Carrossel from './components/carrossel'

function App() {

  function div_create() {
    const paragraph = []

    for(let i = 0; i <20; i++ ){
      paragraph.push(<div style={{
        width: '90%', 
        height: '50px', 
        backgroundColor: 'white', 
        borderRadius: '0px 20px 20px 0px',
        margin: '10px'
      }} key={i}></div>)
    };
    return(
      paragraph
    );
  };


  return (
    <>
      <div className='Master'>
        <Tnl_header>
          <img src={logo1} alt='tnlLogo' />
          <h1>Bons Negócios na Batida do Martelo</h1>
        </Tnl_header>

        <Tnl_portal>
          <img src={cow_portal_image} alt='icon' />
          <img src={icon_hammer} alt='iconHammer' />
          <img style={{transform: 'scalex(-1)'}} 
          src={cow_portal_image} alt='mirrosIcon' />
        </Tnl_portal>
        

          <Tnl_nav>
              <div><img src={cow_icon} alt='cow' /></div>
              <div><img src={milk_icon} alt='milk' /></div>
              <div><img src={earth_icon} alt='land' /></div>
              <div><img src={hammer_icon} alt='hammer' /></div>
              <div><img src={live_icon} alt='live' /></div>
              <div><img src={call_icon} alt='call' /></div>
          </Tnl_nav>


        <main style={{
          }}>

          <section id='carrossel'>
            <Carrossel/>
          </section>

          <Tnl_section id='us'>
            
            <Div_overflow>
              {div_create()}
            </Div_overflow>

            <Div_overflow>
              {div_create()}
            </Div_overflow>

          </Tnl_section>

          <section id='events'></section>
        </main>

        <Tnl_footer>
          <div>
            <h5><a href=''>Outros Sites</a></h5>
            <h5><a href=''>Contatos</a></h5>
            <h5><a href=''>Dev</a></h5>
          </div>
          <div>
            <img src={github_icon} alt='github' />
            <img src={linkedin_icon} alt='linkedin' />
            <img src={insta_icon} alt='instagram' />
          </div>
        </Tnl_footer>
        
      </div>
    </>
  )
};

export default App
