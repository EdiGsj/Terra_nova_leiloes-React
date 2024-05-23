import {
  logo1, cow_icon, hammer_icon, earth_icon, call_icon, milk_icon, cow_gif,
  live_icon, hammer_image, cow_portal_image, insta_icon, linkedin_icon, github_icon
} from './assets/images/index';

import {
  Tnl_header, Tnl_portal, Tnl_nav, Tnl_footer, Tnl_section, Div_overflow
} from './components/index';

import div_content_generate from './functions';

function App() {

  return (
    <div className='Master'>
      <Tnl_header>
        <img src={logo1} alt='tnlLogo' />
        <h1>Bons Negócios na Batida do Martelo</h1>
      </Tnl_header>

      <Tnl_portal>
        <img src={cow_gif} alt='cow' />
      </Tnl_portal>
      
        <Tnl_nav>
          <img src={cow_icon} alt='cow' />
          <img src={milk_icon} alt='milk' />
          <img src={earth_icon} alt='land' />
          <img src={hammer_icon} alt='hammer' />
          <img src={live_icon} alt='live' />
          <img src={call_icon} alt='call' />
        </Tnl_nav>

      <main>
        <Tnl_section>
          <Div_overflow>
            {div_content_generate()}
          </Div_overflow>
        </Tnl_section>
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
  )
};

export default App