import '../App.css';
import '../styling/footer.css'

export function Footer() {
    return (
        <footer className="footer-main">
            <section className='footer-sub-main-container'>
                <div className='footer-sub-main-left'>
                    <h2 className='footer-head-main'>
                        Footer Section h2 left
                    </h2>
                </div>
                <div className='footer-sub-main-right'>
                    <h2 className='footer-head-main'>
                        Information
                    </h2>
                    <ul className='footer-sub-list-container'>
                        <li>About</li>
                        <li>Contact Us</li>
                        <li>Socials</li>
                    </ul>
                </div>
            </section>
        </footer>
    )

}

export default Footer;