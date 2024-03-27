import '../styles/Footer.css'
import logoTexto from '../assets/logoConTexto.svg'
import insta from '../assets/instagramLogo.svg'
import face from '../assets/facebookLogo.svg'
import whats from '../assets/whatsappLogo.svg'

export function Footer(){
    return (
        <div className="footer">
            <a className='logoFooter' href="#root"><img src={logoTexto} alt="Aroma Gourmet" /></a>
            <div className="contactanos">
                <h2>Contáctanos</h2>
                <p><span>Teléfono:</span> 0984902313</p>
                <p><span>Email:</span> Catering@hotmail.com</p>
                <span>Redes Sociales:</span>
                <div className="redes">
                    <a href="https://www.instagram.com/" target='blank'><img src={insta} alt="Instagram" /></a>
                    <a href="https://www.facebook.com/" target='blank'><img src={face} alt="Facebook" /></a>
                    <a href="https://www.whatsapp.com/" target='blank'><img src={whats} alt="WhatsApp" /></a>
                </div>
            </div>
            <div>
                <h2>Ubicación</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7924150595964!2d-78.48664092796332!3d-0.20646929758405128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a0e81a1bca3%3A0x7210d1fe5463bbe4!2sPANKA%20CATERING!5e0!3m2!1ses-419!2sec!4v1708978204014!5m2!1ses-419!2sec" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
        </div>
    )
}
