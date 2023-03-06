import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import NavBar from "../../components/NavBar/NavBar";
import "./Creators.css";

export default function Creators() {
    return (
    <>
    <NavBar />
        <MDBCarousel showIndicators showControls fade className="list-item" >
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={1}
                src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
                alt='...'
            >
                <h5>Meet our creators</h5>
                <p>We are final year engineering students at Indus University and we have built this application using the MERN stack</p>
            </MDBCarouselItem>

            <MDBCarouselItem
                className='w-100 d-block'
                itemId={1}
                src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
                alt='...'
            >
                <h5>Aryan Michael</h5>
                <p>Frontend guy</p>
            </MDBCarouselItem>

            <MDBCarouselItem
                className='w-100 d-block'
                itemId={1}
                src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
                alt='...'
            >
                <h5>Dharmik Patel</h5>
                <p>Backend guy</p>
            </MDBCarouselItem>
        </MDBCarousel>
    </>
    );
}
