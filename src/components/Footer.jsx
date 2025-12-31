export default function Footer(){
    return (
        <footer id="join" className="footer">
            {/* CTA Section */}
            <div className="footer-cta">
                <h2 className="footer-cta-text">
                    Ready to<br/>
                    Kickoff<br/>
                    and<br/>
                    Meet<br/>
                    Others?
                </h2>
                <a href="" className="footer-cta-button">
                    Join Us
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </a>
            </div>

            {/* Connect Section */}
            <div className="footer-connect">
                <h3 className="footer-connect-title">Connect With Us</h3>
                
                <div className="footer-content">
                    {/* YeS Info */}
                    <div className="footer-column">
                        <div className="footer-logo-section">
                            <img src="/src/assets/yes-logo.png" alt="YeS Logo" className="footer-logo" />
                            <h4 className="footer-logo-text">YeS</h4>
                        </div>
                        <p className="footer-description">
                            Enabling youth in Singapore to get involved in the entrepreneurial scene.
                        </p>
                    </div>

                    {/* Follow Us */}
                    <div className="footer-column">
                        <h4 className="footer-column-title">Follow Us</h4>
                        <a href="" className="footer-link">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            YeS
                        </a>
                    </div>

                    {/* Contacts */}
                    <div className="footer-column">
                        <h4 className="footer-column-title">Contacts</h4>
                        <a href="" className="footer-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
                            </svg>
                            @vvryx
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="footer-copyright">
                <p>© 2025 YeS</p>
            </div>
        </footer>
    )
}
