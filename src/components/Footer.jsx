import '../App.css';
import '../styling/footer.css'

// Footer, not many links to be had
export function Footer() {
    return (
        <footer className="footer-main">
            <section className='footer-sub-main-container'>
                <div className='footer-sub-main-left'>
                    <h2 className='footer-head-main'>
                        Sillier News
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