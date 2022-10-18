import './index.scss'


//components
import NavBarComp from '../../components/header'
import Footer from '../../components/footer'

export default function LandingPage(){
    return(
        <>
        <main>
            <NavBarComp/>
            <section>
                <picture> <img src='/assets/images/imgonelp.svg' alt="Pessoas reunidas" /></picture>
                <div><p>Nós somos uma organização que ajuda pessoas, sem fins lucrativos, este projeto foi feito através de trabalhos voluntários.</p></div>
            </section>
            
        </main>
        </>
    )
}