import React, { Component } from 'react';
import './Footer.css';



class Footer extends Component {



    render() {
        return (
            <div className='footer-root'>
                <div className='top-Menu'>
                    <a>Arts</a>
                    <a>Comics & Illustrations</a>
                    <a>Design & Tech</a>
                    <a>Film</a>
                    <a>Food & Craft</a>
                    <a>Games</a>
                    <a>Music</a>
                    <a>Publishing</a>
                </div>
                <div className='footer-middle'>
                    <div className='main-footer-menu'>
                        <div>
                            <h3>About</h3>
                            <a>About Us</a>
                            <a>Our Charter</a>
                            <a>Stats</a>
                            <a>Press</a>
                            <a>Jobs</a>
                        </div>
                        <div>
                            <h3>Support</h3>
                            <a>Help Center</a>
                            <a>Our Rules</a>
                            <a>Creator Handbook</a>
                            <a>Campus</a>
                            <a>Patrons</a>
                        </div>
                        <div>
                            <h3>
                                Hello
                            </h3>
                            <a>Kickstarter Blog</a>
                            <a>Engineering Blog</a>
                            <a>Newsletters</a>
                            <a>Research</a>
                        </div>
                        <div>
                            <h3>
                                More from Kickstarter
                            </h3>
                            <a>kickstarter Live</a>
                            <a>The Creative Independent</a>
                            <a>Kickstarter Magazine</a>
                            <a>Kickstarter Podcast</a>
                        </div>
                    </div>
                    <div className='footer-middle-2'>
                        <span>
                            <icon></icon>
                            <h2>Kickstarter, PBC © 2019</h2>
                        </span>
                        <div className='social-media-links'>
                            <i class="fab fa-facebook"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-youtube"></i>
                        </div>
                        <div className='middle-footer-selectors'>
                            <select className='language-btn'>
                                <option>English</option>
                                <option>Deustch</option>
                                <option>Español</option>
                                <option>Français</option>
                                <option>日本語</option>
                            </select>
                            <select className='currency-btn'>
                                <option selected>$  US Dollar   (USD)</option>
                                <option>€  Euro   (EUR)</option>
                                <option>$  Australian Dollar   (AUD)</option>
                                <option>$  Canadian Dollar   (CAD)</option>
                                <option>Fr   Swiss Franc   (CHF)</option>
                                <option>kr  Danish Krone   (DKK)</option>
                                <option>£  Pound Sterling   (GBP)</option>
                                <option>$  Hong Kong Dollar   (HKD)</option>
                                <option>¥  Yen   (JPY)</option>
                                <option>$  Mexican Peso   (MXN)</option>
                                <option>kr  Norwegian Krone   (NOK)</option>
                                <option>$  New Zealand Dollar   (NZD)</option>
                                <option>kr  Swedish Krona   (SEK)</option>
                                <option>$  Singapore Dollar   (SGD)</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <a>Trust and Safety</a>
                    <a>Terms of Use</a>
                    <a>Privacy Policy</a>
                    <a>Cookie Policy</a>
                </div>
            </div>
        )
    }
}

export default Footer;
