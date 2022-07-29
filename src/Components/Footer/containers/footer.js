import React from 'react'
import Footer from '../index'
import Icon from '../icons'
import '../Footer.css'
export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Story</Footer.Link>
                    <Footer.Link href="#">Clients</Footer.Link>
                    <Footer.Link href="#">Projects</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="#">Data Management</Footer.Link>
                    <Footer.Link href="#">Artificial Intelligence</Footer.Link>
                    <Footer.Link href="#">Data Visualization</Footer.Link>
                    <Footer.Link href="#">Data Analytics</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Our Clients</Footer.Title>
                    <Footer.Link href="#">United States</Footer.Link>
                    <Footer.Link href="#">United Kingdom</Footer.Link>
                    <Footer.Link href="#">Australia</Footer.Link>
                    <Footer.Link href="#">Support</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" />LinkdIn</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                    
                </Footer.Column>
            </Footer.Row>
            
            </Footer.Wrapper>
            <Footer.Bottom  className="copyright">
      
            <hr />      
          <p >
            &copy;{new Date().getFullYear()} Kavtech | All rights reserved |
            Terms Of Service 
          </p>                   
             </Footer.Bottom>
        </Footer>
        
        
    )
}