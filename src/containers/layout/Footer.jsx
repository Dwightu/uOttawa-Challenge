import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon
} from 'mdb-react-ui-kit';

export default function App() {
    return (
        <MDBFooter className='footer bg-light text-center text-black'>
            <MDBContainer className='p-4 pb-0'>
                <section className='mb-4'>
                    <a className='btn btn-outline-dark btn-floating m-1' href='https://www.facebook.com/uottawa' role='button'>
                        <MDBIcon fab icon='facebook-f' />
                    </a>

                    <a className='btn btn-outline-dark btn-floating m-1' href='https://twitter.com/uOttawa' role='button'>
                        <MDBIcon fab icon='twitter' />
                    </a>

                    <a className='btn btn-outline-dark btn-floating m-1' href='https://www.google.com/search?q=uottawa&sxsrf=ALiCzsbV7SbjMaGEqdhTdryxKJUtn_MtdQ%3A1655691097011&ei=WdevYu8d0eW0BoTsiogL&ved=0ahUKEwivrsf9-br4AhXRMs0KHQS2ArEQ4dUDCA4&uact=5&oq=uottawa&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgjECcyBAgjECcyCgguELEDENQCEEMyBwgAELEDEEMyBwgAELEDEEMyCgguEMcBEK8BEEMyCggAEIAEEIcCEBQyBAgAEEMyCggAEIAEEIcCEBQ6BwgAEEcQsANKBAhBGABKBAhGGABQ1wVY1wVgjwtoAnAAeACAAWeIAWeSAQMwLjGYAQCgAQHIAQjAAQE&sclient=gws-wiz' role='button'>
                        <MDBIcon fab icon='google' />
                    </a>
                    <a className='btn btn-outline-dark btn-floating m-1' href='https://www.instagram.com/uottawa/?hl=en' role='button'>
                        <MDBIcon fab icon='instagram' />
                    </a>

                    <a className='btn btn-outline-dark btn-floating m-1' href='https://www.linkedin.com/school/uottawa/mycompany/verification/' role='button'>
                        <MDBIcon fab icon='linkedin-in' />
                    </a>

                    <a className='btn btn-outline-dark btn-floating m-1' href='https://github.com/Dwightu' role='button'>
                        <MDBIcon fab icon='github' />
                    </a>
                </section>
            </MDBContainer>

            <div className='text-center p-3' >
                © 2022 Copyright  @
                <a className='text-grey' href='https://github.com/Dwightu'>
                    Dehui Yu
                </a>
            </div>
        </MDBFooter>
    );
}