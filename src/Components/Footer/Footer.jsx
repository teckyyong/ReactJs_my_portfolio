import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
import lty_logo from '../../assets/lty_logo.png'

const Footer = () => {
    return(
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={lty_logo} alt="" />
                    <p>Feel free to connect with me!</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">2023 teck yong. all right reserved</p>
                <div className="footer-bottom-right">
                    <p>term of services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}
export default Footer