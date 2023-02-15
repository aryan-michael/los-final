import React from 'react';
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
}
    from 'mdb-react-ui-kit';

function ForgotPassword() {
    return (
        <MDBContainer className="p-3 my-5 d-flex flex-column w-25">
            <div className="d-flex mx-auto">
                <p>Reset Password</p>
            </div>

            <MDBInput wrapperClass='mb-4' label='Registered Email' id='form1' type='email' />

            <div className="d-flex justify-content-between mx-3 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Show Password' />
            </div>

            <MDBBtn className="mb-4">Send Link</MDBBtn>

            <div className="d-flex mx-auto">
                <p>A password reset link has been sent to your registered email.</p>
            </div>

            <div className="text-center">

                <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                        <MDBIcon fab icon='facebook-f' size="sm" />
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                        <MDBIcon fab icon='twitter' size="sm" />
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                        <MDBIcon fab icon='google' size="sm" />
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                        <MDBIcon fab icon='github' size="sm" />
                    </MDBBtn>

                </div>
            </div>

        </MDBContainer>
    );
}

export default ForgotPassword;