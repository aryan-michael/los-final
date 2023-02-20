import React from 'react';
//import { MDBIcon } from 'mdbreact';
import './ClientLogin.css';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox, MDBValidation, MDBValidationItem } from 'mdb-react-ui-kit';

function ClientLogin() {

    return (
        <MDBContainer fluid className="p-3 my-5 h-custom">

            <MDBRow>

                <MDBCol col='10' md='6'>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
                </MDBCol>

                <MDBCol col='4' md='6'>

                    <div className="d-flex flex-row align-items-center justify-content-center">

                        <p className="lead fw-normal mb-0 me-3">Connect with us</p>

                        <MDBBtn floating size='md' tag='a' className='me-2'>
                            <MDBIcon fab icon='facebook-f' />
                        </MDBBtn>

                        <MDBBtn floating size='md' tag='a' className='me-2'>
                            <MDBIcon fab icon='twitter' />
                        </MDBBtn>

                        <MDBBtn floating size='md' tag='a' className='me-2'>
                            <MDBIcon fab icon='linkedin-in' />
                        </MDBBtn>

                    </div>

                    <div className="divider d-flex align-items-center my-4">
                        <p className="text-center fw-bold mx-3 mb-0">Login</p>
                    </div>
                    <MDBValidation>
                        <MDBValidationItem feedback='Please enter email' invalid>
                            <MDBInput wrapperClass='mb-4' placeholder='Email address' id='formControlLg' type='email' size="lg" required />
                        </MDBValidationItem>
                        <MDBValidationItem feedback='Please enter password' invalid>
                        <MDBInput wrapperClass='mb-4' placeholder='Password' id='formControlLg' type='password' size="lg" autoComplete='new-password' required />
                        </MDBValidationItem>
                    

                    <div className="d-flex justify-content-between mb-4">
                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                        <a href="/forgot-password/:id">Forgot password?</a>
                    </div>

                    <div className='text-center text-md-start mt-4 pt-2'>
                            <MDBBtn className="mb-0 px-5" size='lg'>Login</MDBBtn>
                            
                        <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="/" className="link-danger">Register</a></p>
                        </div>
                    </MDBValidation>

                </MDBCol>

            </MDBRow>

            <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

                <div className="text-white mb-3 mb-md-0">
                    Copyright © 2023. All rights reserved.
                </div>

                <div>

                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                        <MDBIcon fab icon='facebook-f' size="md" />
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                        <MDBIcon fab icon='twitter' size="md" />
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                        <MDBIcon fab icon='google' size="md" />
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                        <MDBIcon fab icon='linkedin-in' size="md" />
                    </MDBBtn>

                </div>

            </div>

        </MDBContainer>
    );
}

export default ClientLogin;