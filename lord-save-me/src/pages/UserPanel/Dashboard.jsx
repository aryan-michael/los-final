import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTable, { createTheme } from "react-data-table-component";
import SideBar from "../../components/Sidebar/SideBar";
import PostLoginNavBar from "../../components/NavBar/PostLoginNavBar";
import { MDBBadge } from "mdb-react-ui-kit";
import './Dashboard.css';
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { Link, Outlet } from 'react-router-dom';
import { FaBusinessTime, FaHome } from 'react-icons/fa'; 
import { MdCastForEducation } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';

createTheme("solarized", {
    text: {
        primary: "#268bd2",
        secondary: "#2aa198"
    },
    background: {
        default: "#002b36"
    },
    context: {
        background: "#cb4b16",
        text: "#FFFFFF"
    },
    divider: {
        default: "#073642"
    },
    action: {
        button: "rgba(0,0,0,.54)",
        hover: "rgba(0,0,0,.08)",
        disabled: "rgba(0,0,0,.12)"
    }
}); //color scheme system

export default function ClientData() {

    const [loanDetails,setLoanDetails] = useState([])

    useEffect(() => {
        getloanDetails()
    },[])

    const getloanDetails = async () => {
        try {
            await axios.get("http://localhost:5000/api/v1/user/getUser1", {
                withCredentials: true
            }).then(response => {
                console.log(response)
                setLoanDetails(response.data.user.loanInquiries)
            })
        } catch (err) {
            console.log(err);
        }
    }

    console.log(loanDetails);

    const Navigate = useNavigate();

    // const columns = [
    //     {
    //         name: "Client ID",
    //         selector: (row) => row.ClientID,
    //         sortable: true
    //     },
    //     {
    //         name: "Client Name",
    //         selector: (row) => row.ClientName,
    //         sortable: true
    //     }, {
    //         name: "Profile Picture",
    //         selector: (row) => <img className="mt-1" src={row.ProfilePicture} alt="MDN logo" />,
    //     },
    //     {
    //         name: "Loan Type",
    //         selector: (row) => row.LoanType,
    //         sortable: true
    //     },
    //     {
    //         name: "Amount (₹)",
    //         selector: (row) => <img src={row.LoanAmount} alt="MDN logo" />,
    //         sortable: true
    //     },
    //     {
    //         name: "Gender",
    //         selector: (row) => row.Gender,
    //         sortable: true
    //     },
    //     {
    //         name: "Age",
    //         selector: (row) => row.Age,
    //         sortable: true
    //     },
    //     {
    //         name: "Interest (%)",
    //         selector: (row) => row.Interest,
    //         sortable: true
    //     },
    //     {
    //         name: "Status",
    //         selector: (row) => row.Status,
    //         sortable: true,
    //     },
    // ];

    const columns = [
        {
            name: "Loan ID",
            selector: (row) => row._id,
            sortable: true
        },
        {
            name: "Loan Type",
            selector: (row) => row.loanType,
            sortable: true
        },
        {
            name: "Amount (₹)",
            selector: (row) => row.loanAmount,
            sortable: true
        },
        {
            name: "Loan Status",
            selector: (row) => row.applicationStatus,
            sortable: true,
        },
    ];

    const clientSummary = [
        {
            ClientID: 1,
            ClientName: "Aaron Ramsey",
            ProfilePicture:
                "https://resources.premierleague.com/premierleague/photos/players/40x40/p119765.png",
            LoanType: "Aston Villa",
            LoanAmount: "https://resources.premierleague.com/premierleague/badges/50/t7.png",
            Gender: "Wales",
            Age: "Jamaica",
            Interest:
                "https://www.countryflags.com/wp-content/uploads/jamaica-flag-png-large.png",
            Status: <MDBBadge pill color='success' light>Completed</MDBBadge>
        },
        {
            ClientID: 2,
            ClientName: "Alex Telles",
            ProfilePicture:
                "https://resources.premierleague.com/premierleague/photos/players/40x40/p152590.png",
            LoanType: "Manchester United",
            LoanAmount:
                "https://resources.premierleague.com/premierleague/badges/50/t1.png",
            Gender: "Brazil",
            Age:
                "https://www.countryflags.com/wp-content/uploads/brazil-flag-png-large.png",
            Interest: "DEF",
            Status: <MDBBadge pill className='mx-2' color='danger' light>Rejected</MDBBadge>
        },
        {
            ClientID: 3,
            ClientName: "Allan",
            ProfilePicture:
                "https://resources.premierleague.com/premierleague/photos/players/40x40/p119765.png",
            LoanType: "Everton",
            LoanAmount:
                "https://resources.premierleague.com/premierleague/badges/50/t11.png",
            Gender: "England",
            Age:
                "https://www.countryflags.com/wp-content/uploads/england-flag-jpg-xl.jpg",
            Interest: "MID",
            Status: <MDBBadge pill color='warning' light>Waitlisted</MDBBadge>
        },
        {
            ClientID: 4,
            ClientName: "Dele Alli",
            ProfilePicture:
                "https://resources.premierleague.com/premierleague/photos/players/40x40/p108823.png",
            LoanType: "Spurs",
            LoanAmount:
                "https://resources.premierleague.com/premierleague/badges/50/t6.png",
            Gender: "Brazil",
            Age:
                "https://www.countryflags.com/wp-content/uploads/brazil-flag-png-large.png",
            Interest: "MID",
            Status: <MDBBadge pill className='mx-2' color='danger' light>Rejected</MDBBadge>
        },
        {
            ClientID: 5,
            ClientName: "Leon Bailey",
            ProfilePicture:
                "https://resources.premierleague.com/premierleague/photos/players/40x40/p215711.png",
            LoanType: "Aston Villa",
            LoanAmount:
                "https://resources.premierleague.com/premierleague/badges/50/t7.png",
            Gender: "Jamaica",
            Age:
                "https://www.countryflags.com/wp-content/uploads/jamaica-flag-png-large.png",
            Interest: "FWD",
            Status: <MDBBadge pill className='mx-2' color='danger' light>Rejected</MDBBadge>
        },
        {
            ClientID: 6,
            ClientName: "Bernando Silva",
            ProfilePicture:
                "https://resources.premierleague.com/premierleague/photos/players/40x40/p165809.png",
            LoanType: "Manchester City",
            LoanAmount:
                "https://resources.premierleague.com/premierleague/badges/50/t43.png",
            Gender: "Portugal",
            Age:
                "https://www.countryflags.com/wp-content/uploads/portugal-flag-400.png",
            Interest: "MID",
            Status: <MDBBadge pill color='success' light>Completed</MDBBadge>
        },
        {
            ClientID: 7,
            ClientName: "Willy Boly",
            ProfilePicture:
                "https://resources.premierleague.com/premierleague/photos/players/40x40/p90585.png",
            LoanType: "Wolves",
            LoanAmount:
                "https://resources.premierleague.com/premierleague/badges/50/t39.png",
            Gender: "Cote D’Ivoire",
            Age:
                "https://www.countryflags.com/wp-content/uploads/cote-d-ivoire-flag-png-large.png",
            Interest: "DEF",
            Status: <MDBBadge pill color='success' light>Completed</MDBBadge>
        },
        {
            ClientID: 8,
            ClientName: "Bruno Fernandes",
            ProfilePicture:
                "https://resources.premierleague.com/premierleague/photos/players/40x40/p141746.png",
            LoanType: "Manchester United",
            LoanAmount:
                "https://resources.premierleague.com/premierleague/badges/50/t1.png",
            Gender: "Portugal",
            Age:
                "https://www.countryflags.com/wp-content/uploads/portugal-flag-400.png",
            Interest: "MID",
            Status: <MDBBadge pill color='success' light>Completed</MDBBadge>
        },
        {
            ClientID: 9,
            ClientName: "Edinson Cavani",
            ProfilePicture:
                "https://resources.premierleague.com/premierleague/photos/players/40x40/p40720.png",
            LoanType: "Manchester United",
            LoanAmount:
                "https://resources.premierleague.com/premierleague/badges/50/t1.png",
            Gender: "Uruguay",
            Age:
                "https://www.countryflags.com/wp-content/uploads/uruguay-flag-png-large.png",
            Interest: "FWD",
            Status: <MDBBadge pill color='success' light>Completed</MDBBadge>
        },
        {
            ClientID: 10,
            ClientName: "Ben Chilwell",
            ProfilePicture:
                "https://resources.premierleague.com/premierleague/photos/players/40x40/p172850.png",
            LoanType: "Chelsea",
            LoanAmount:
                "https://resources.premierleague.com/premierleague/badges/50/t8.png",
            Gender: "England",
            "Gender Image":
                "https://www.countryflags.com/wp-content/uploads/england-flag-jpg-xl.jpg",
            Interest: "DEF",
            Status: <MDBBadge pill color='warning' light>Waitlisted</MDBBadge>
        },
        {
            ClientID: 8,
            ClientName: "Bruno Fernandes",
            ProfilePicture:
                "https://resources.premierleague.com/premierleague/photos/players/40x40/p141746.png",
            LoanType: "Manchester United",
            LoanAmount:
                "https://resources.premierleague.com/premierleague/badges/50/t1.png",
            Gender: "Portugal",
            Age:
                "https://www.countryflags.com/wp-content/uploads/portugal-flag-400.png",
            Interest: "MID",
            Status: <MDBBadge pill color='success' light>Completed</MDBBadge>,
        },
        {
            ClientID: 9,
            ClientName: "Edinson Cavani",
            ProfilePicture:
                "https://resources.premierleague.com/premierleague/photos/players/40x40/p40720.png",
            LoanType: "Manchester United",
            LoanAmount:
                "https://resources.premierleague.com/premierleague/badges/50/t1.png",
            Gender: "Uruguay",
            Age:
                "https://www.countryflags.com/wp-content/uploads/uruguay-flag-png-large.png",
            Interest: "FWD",
            Status: <MDBBadge pill color='success' light>Completed</MDBBadge>,
        },
        {
            ClientID: 10,
            ClientName: "Ben Chilwell",
            ProfilePicture:
                "https://resources.premierleague.com/premierleague/photos/players/40x40/p172850.png",
            LoanType: "Chelsea",
            LoanAmount:
                "https://resources.premierleague.com/premierleague/badges/50/t8.png",
            Gender: "England",
            "Gender Image":
                "https://www.countryflags.com/wp-content/uploads/england-flag-jpg-xl.jpg",
            Interest: "DEF",
            Status: <MDBBadge pill color='warning' light>Waitlisted</MDBBadge>,
        },
        {
            ClientID: 7,
            ClientName: "Willy Boly",
            ProfilePicture:
                "https://resources.premierleague.com/premierleague/photos/players/40x40/p90585.png",
            LoanType: "Wolves",
            LoanAmount:
                "https://resources.premierleague.com/premierleague/badges/50/t39.png",
            Gender: "Cote D’Ivoire",
            Age:
                "https://www.countryflags.com/wp-content/uploads/cote-d-ivoire-flag-png-large.png",
            Interest: "DEF",
            Status: <MDBBadge pill color='warning' light>Waitlisted</MDBBadge>,
        },
        {
            ClientID: 8,
            ClientName: "Bruno Fernandes",
            ProfilePicture:
                "https://resources.premierleague.com/premierleague/photos/players/40x40/p141746.png",
            LoanType: "Manchester United",
            LoanAmount:
                "https://resources.premierleague.com/premierleague/badges/50/t1.png",
            Gender: "Portugal",
            Age:
                "https://www.countryflags.com/wp-content/uploads/portugal-flag-400.png",
            Interest: "MID",
            Status: <MDBBadge pill color='warning' light>Waitlisted</MDBBadge>,
        },
        {
            ClientID: 9,
            ClientName: "Edinson Cavani",
            ProfilePicture:
                "https://resources.premierleague.com/premierleague/photos/players/40x40/p40720.png",
            LoanType: "Manchester United",
            LoanAmount:
                "https://resources.premierleague.com/premierleague/badges/50/t1.png",
            Gender: "Uruguay",
            Age:
                "https://www.countryflags.com/wp-content/uploads/uruguay-flag-png-large.png",
            Interest: "FWD",
            Status: <MDBBadge pill className='mx-2' color='danger' light>Rejected</MDBBadge>,
        },
        {
            ClientID: 10,
            ClientName: "Ben Chilwell",
            ProfilePicture:
                "https://resources.premierleague.com/premierleague/photos/players/40x40/p172850.png",
            LoanType: "Chelsea",
            LoanAmount:
                "https://resources.premierleague.com/premierleague/badges/50/t8.png",
            Gender: "England",
            "Gender Image":
                "https://www.countryflags.com/wp-content/uploads/england-flag-jpg-xl.jpg",
            Interest: "DEF",
            Status: <MDBBadge pill className='mx-2' color='danger' light>Rejected</MDBBadge>,
        },
        {
            ClientID: 8,
            ClientName: "Bruno Fernandes",
            ProfilePicture:
                "https://resources.premierleague.com/premierleague/photos/players/40x40/p141746.png",
            LoanType: "Manchester United",
            LoanAmount:
                "https://resources.premierleague.com/premierleague/badges/50/t1.png",
            Gender: "Portugal",
            Age:
                "https://www.countryflags.com/wp-content/uploads/portugal-flag-400.png",
            Interest: "MID",
            Status: <MDBBadge pill className='mx-2' color='danger' light>Rejected</MDBBadge>,
        },
        {
            ClientID: 9,
            ClientName: "Edinson Cavani",
            ProfilePicture:
                "https://resources.premierleague.com/premierleague/photos/players/40x40/p40720.png",
            LoanType: "Manchester United",
            LoanAmount:
                "https://resources.premierleague.com/premierleague/badges/50/t1.png",
            Gender: "Uruguay",
            Age:
                "https://www.countryflags.com/wp-content/uploads/uruguay-flag-png-large.png",
            Interest: "FWD",
            Status: <MDBBadge pill color='success' light>Completed</MDBBadge>,
        },
        {
            ClientID: 10,
            ClientName: "Ben Chilwell",
            ProfilePicture:
                "https://resources.premierleague.com/premierleague/photos/players/40x40/p172850.png",
            LoanType: "Chelsea",
            LoanAmount:
                "https://resources.premierleague.com/premierleague/badges/50/t8.png",
            Gender: "England",
            "Gender Image":
                "https://www.countryflags.com/wp-content/uploads/england-flag-jpg-xl.jpg",
            Interest: "DEF",
            Status: <MDBBadge pill color='success' light>Completed</MDBBadge>,
        }
    ];

    // const conditionalRowStyles = [
    //     {
    //         when: (row) => row,
    //         style: {
    //             "&:hover": {
    //                 backgroundColor: "green",
    //                 color: "white",
    //                 cursor: "pointer"
    //             }
    //         }
    //     }
    //     // You can also pass a callback to style for additional customization
    // ];

    const handleRowClicked = (row) => {
        console.log(row.ClientName)
    };
    //outputs the name property into the console

    return (
        <>
            <PostLoginNavBar />
            <div style={{ height: '100%', display: 'flex' }}>
                <SideBar />
                <div style={{ display: 'inline-block' }}>

                    <Container fluid>
                        <Row>
                            <div className="title"> User Dashboard </div>
                        </Row>
                        <Row className="text-center ">
                        <Col className="p-3" xs={12} md={6} lg={3}>
                            <div className="tag px-5 pt-5 pb-3">
                                <Link to={`loan/business`} className="text-black text-decoration-none ">
                                    <FaBusinessTime className="icons" />
                                    <h4 className="mt-2">Business Loan</h4>
                                </Link>
                            </div>
                        </Col>
                        <Col className="p-3" xs={12} md={6} lg={3}>
                            <div className="tag px-5 pt-5 pb-3">
                                <Link to={`loan/home`} className="text-black text-decoration-none ">
                                    <FaHome className="icons" />
                                    <h4 className="mt-2">Home Loan</h4>
                                </Link>
                            </div>
                        </Col>
                        <Col className="p-3" xs={12} md={6} lg={3}>
                            <div className="tag px-5 pt-5 pb-3">

                                <Link to={`loan/education`} className="text-black text-decoration-none ">
                                    <MdCastForEducation className="icons" />
                                    <h4 className="mt-2">Education Loan</h4>
                                </Link>
                            </div>
                        </Col>
                        <Col className="p-3" xs={12} md={6} lg={3}>
                            <div className="tag px-5 pt-5 pb-3">

                                <Link to={`loan/personal`} className="text-black text-decoration-none ">
                                    <BsFillPersonFill className="icons" />
                                    <h4 className="mt-2">Personal Loan</h4>
                                </Link>
                            </div>
                        </Col>
                        </Row>
                    </Container>
                    <DataTable
                        title="Loan History"
                        columns={columns}
                        data={loanDetails}
                        defaultSortFieldId
                        pagination={10}
                        fixedHeader
                        fixedHeaderScrollHeight="450px"
                        onRowClicked={handleRowClicked}
                        highlightOnHover
                    />
                </div>
            </div>
        </>
    );
}
