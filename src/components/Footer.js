import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import'./Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the newsletter to recieve info i guess
        </p>
        <p className= 'footer-subscription-text'>
          you can unsubscribe anytime
        </p>
        <div className='input-areas'>
          <form>
            <input 
              type='email'
              name='email'
              placeholder='Your Email'
              className= 'footer-input'/>
            <Button buttonStyle='btn--outline'>
              Subscribe
            </Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/sign-up'>Testimonials</Link>
            <Link to='/sign-up'>Careers</Link>
            <Link to='/sign-up'>Investors</Link>
            <Link to='/sign-up'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/sign-up'>Testimonials</Link>
            <Link to='/sign-up'>Careers</Link>
            <Link to='/sign-up'>Investors</Link>
            <Link to='/sign-up'>Terms of Service</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/sign-up'>Testimonials</Link>
            <Link to='/sign-up'>Careers</Link>
            <Link to='/sign-up'>Investors</Link>
            <Link to='/sign-up'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/sign-up'>Testimonials</Link>
            <Link to='/sign-up'>Careers</Link>
            <Link to='/sign-up'>Investors</Link>
            <Link to='/sign-up'>Terms of Service</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              LOGO
            </Link>
          </div>
          <small className='website-rights'>logo @ 2020</small>
          <div className='social-icons'>
            <Link className='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
              <i className='fab fa-facebook-f' />
            </Link>
            <Link className='social-icon-link insta' to='/' target='_blank' aria-label='Instagram'>
              <i className='fab fa-instagram' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer;
