import React from 'react'
import ReactDOM from 'react-dom';
import Footer from './Footer'
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
    MDBCarouselCaption,
    MDBTypography
} from 'mdb-react-ui-kit';
import { Form } from 'react-bootstrap';
import { Container, Button } from 'react-bootstrap';
import { GoogleLoginButton, MicrosoftLoginButton, FacebookLoginButton } from "react-social-login-buttons";
import { Col, Row } from 'react-bootstrap';
import MyEmailLoginButton from './Btn';
import { SocialIcon } from 'react-social-icons';
import "./Home.css"
import { Link } from 'react-router-dom';



function Home() {
    return (
        <div className="Home bg-light">
            <Row>
                <div className='container col-sm'>
                    <MDBTypography note noteColor='warning'>
                        <strong>Note: </strong>Our back-end developers are all on vacation so if you have auth questions please contact us next week.
                    </MDBTypography>
                    <div className='container socilBtns' >
                        <MicrosoftLoginButton onClick={() => alert("Hello")} />
                        <GoogleLoginButton onClick={() => alert("Hello")} />
                        <FacebookLoginButton onClick={() => alert("Hello")} />
                        <div className='container'>
                            <p className="mt-2 text-right">
                                Want to use <Link to="/login">Email?</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='container  col-sm'>
                    <MDBCarousel showIndicators showControls fade>
                        <MDBCarouselInner>
                            <MDBCarouselItem className='active'>
                                <MDBCarouselElement src='https://www2.uottawa.ca/sites/g/files/bhrskd331/files/styles/max_width_l_2x_2940px/public/2021-08/Robin-EN-390x600.jpg?itok=fUxys5Ns' alt='...' />
                                <MDBCarouselCaption>
                                    <h5>COMMUNITY</h5>
                                    <p>A sense of belonging.</p>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>

                            <MDBCarouselItem>
                                <MDBCarouselElement src='https://www2.uottawa.ca/sites/g/files/bhrskd331/files/styles/max_width_l_2x_2940px/public/2021-08/Abel-FR-EN-390x600.jpg?itok=OtF7hiss' alt='...' />
                                <MDBCarouselCaption>
                                    <h5>INTERNATIONAL</h5>
                                    <p>A global perspective.</p>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>

                            <MDBCarouselItem>
                                <MDBCarouselElement src='https://www2.uottawa.ca/sites/g/files/bhrskd331/files/styles/max_width_l_2x_2940px/public/2021-08/Katie-EN-390x600.jpg?itok=xBOmBhGg' alt='...' />
                                <MDBCarouselCaption>
                                    <h5>OPPORTUNITIES</h5>
                                    <p>Hands-on learning.</p>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                </div>
            </Row >
            <Footer></Footer>
        </div >
    )
}

export default Home