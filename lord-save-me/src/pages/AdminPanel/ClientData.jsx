import { Container, Form, Row, Col, InputGroup } from 'react-bootstrap';
import { Navigate, useNavigate } from "react-router-dom";
import DataTable, { createTheme } from "react-data-table-component";
import AdminSideBar from "../../components/Sidebar/AdminSideBar";
import PostLoginNavBar from "../../components/NavBar/PostLoginNavBar";
import { MDBBadge } from "mdb-react-ui-kit";
import './ClientData.css';

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

    const Navigate = useNavigate();

    const columns = [
        {
            name: "Client ID",
            selector: (row) => row.ClientID,
            sortable: true
        },
        {
            name: "Client Name",
            selector: (row) => row.ClientName,
            sortable: true
        }, {
            name: "Profile Picture",
            selector: (row) => <img className="mt-1" src={row.ProfilePicture} alt="MDN logo" />,
        },
        {
            name: "Loan Type",
            selector: (row) => row.LoanType,
            sortable: true
        },
        {
            name: "Amount (₹)",
            selector: (row) => <img src={row.LoanAmount} alt="MDN logo" />,
            sortable: true
        },
        {
            name: "Gender",
            selector: (row) => row.Gender,
            sortable: true
        },
        {
            name: "Age",
            selector: (row) => row.Age,
            sortable: true
        },
        {
            name: "Interest (%)",
            selector: (row) => row.Interest,
            sortable: true
        },
        {
            name: "Status",
            selector: (row) => row.Status,
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
        Navigate('/admin-sidebar/client-details');
    };
    //outputs the name property into the console

    return (
        <>
            <PostLoginNavBar />
            <div style={{ height: '100%', display: 'flex' }}>
                <AdminSideBar />
                <Container>
                <div >
                    <div className="p-2 title"><MDBBadge pill color='secondary' light>Client Summary</MDBBadge></div>
                    <DataTable
                        //title="Client Summary"
                        columns={columns}
                        data={clientSummary}
                        defaultSortFieldId
                        pagination={10}
                        fixedHeader
                        fixedHeaderScrollHeight="450px"
                        onRowClicked={handleRowClicked}
                        highlightOnHover
                    />
                </div>
                </Container>
            </div>
        </>
    );
}
