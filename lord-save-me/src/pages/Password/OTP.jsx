import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    MDBContainer,
    MDBInput,
    MDBBtn,
    MDBIcon
}
    from 'mdb-react-ui-kit';

function OTP() {

    const Navigate = useNavigate();

    const ConfirmOTP = (e) => {
        e.preventDefault();
        Navigate('/set-password');
    };

    return (
        <MDBContainer className="p-5 my-5 d-flex flex-column w-25">
            <div className="d-flex justify-content">
                <p>OTP has been sent to your email</p>
            </div>

            <MDBInput wrapperClass='mb-4' label='Enter OTP' id='form1' type='text' />

            <MDBBtn type="submit" className="mb-4" onClick={ConfirmOTP}>Check OTP</MDBBtn>

            <div className="text-center">
                <p><a href="#!">Resend OTP</a></p>

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

export default OTP;