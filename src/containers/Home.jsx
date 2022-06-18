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
            <div className='row justify-content center'>
                <div className='container col-md-6 left'>
                    <MDBTypography note noteColor='warning'>
                        <strong>Note: </strong>Our back-end developers are all on vacation so if you have auth questions please contact us next week.
                    </MDBTypography>
                    <div className='container'>
                        <div className='row mt-5 pt-5 space'>

                        </div>
                        <div className='container mt-3 pt-5 socilBtns mx-auto' >
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
                </div>
                <div className='container col-md-6 hidden-sm right'>
                    <MDBCarousel showIndicators showControls fade>
                        <MDBCarouselInner>
                            <MDBCarouselItem className='active'>
                                <MDBCarouselElement src='https://i.postimg.cc/pXF66DKk/1.jpg' alt='...' />
                                <MDBCarouselCaption>
                                    <h5>COMMUNITY</h5>
                                    <p>A sense of belonging.</p>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>

                            <MDBCarouselItem>
                                <MDBCarouselElement src='https://i.postimg.cc/CxC6FSPq/2.jpg' alt='...' />
                                <MDBCarouselCaption>
                                    <h5>INTERNATIONAL</h5>
                                    <p>A global perspective.</p>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>

                            <MDBCarouselItem>
                                <MDBCarouselElement src='https://i.postimg.cc/nhfPbCkx/3.jpg' alt='...' />
                                <MDBCarouselCaption>
                                    <h5>OPPORTUNITIES</h5>
                                    <p>Hands-on learning.</p>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                </div>
            </div >
            <Footer></Footer>
        </div >
    )
}

export default Home