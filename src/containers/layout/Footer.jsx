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
                    <a className='btn btn-outline-dark btn-floating m-1' href='#!' role='button'>
                        <MDBIcon fab icon='facebook-f' />
                    </a>

                    <a className='btn btn-outline-dark btn-floating m-1' href='#!' role='button'>
                        <MDBIcon fab icon='twitter' />
                    </a>

                    <a className='btn btn-outline-dark btn-floating m-1' href='#!' role='button'>
                        <MDBIcon fab icon='google' />
                    </a>
                    <a className='btn btn-outline-dark btn-floating m-1' href='#!' role='button'>
                        <MDBIcon fab icon='instagram' />
                    </a>

                    <a className='btn btn-outline-dark btn-floating m-1' href='#!' role='button'>
                        <MDBIcon fab icon='linkedin-in' />
                    </a>

                    <a className='btn btn-outline-dark btn-floating m-1' href='#!' role='button'>
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