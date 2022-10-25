import './index.scss'


//components
import NavBarComp from '../../components/header'
import Footer from '../../components/footer'

export default function LandingPage(){
    return(
        <>
        <main>
            <NavBarComp/>

            <section className='landing-page-f1'>
                <picture><img src="/assets/images/imgonelp.svg" alt="" /></picture>
                <div className='landing-page-text'><p>Nós somos uma organização que tem apenas a intenção de ajudar pessoas. Sem fins lucrativos, este projeto foi feito através de trabalhos voluntários.</p></div>
            </section>

            <section className='landing-page-f2'>
                <picture> <img src="/assets/images/manlp.svg" alt="Pessoa com um coração roxo" /></picture>
                <div className='landing-page-text'><p>Os projetos são diretamente para pessoas necessitadas, para ajudá-las.</p></div>
            </section>

            <section className='landing-page-f3'>
                <h2>Projetos ativos</h2>
                <div>
                    Carrosel em construção
                </div>
            </section>

            <Footer/>
            
        </main>
        </>
    )
}