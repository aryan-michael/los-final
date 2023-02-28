import React from "react";
import DataTable, { createTheme } from "react-data-table-component";
import AdminSideBar from "../../components/Sidebar/AdminSideBar";
import PostLoginNavBar from "../../components/NavBar/PostLoginNavBar";

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
            selector: (row) => <img className="mt-1" src={row.ProfileImage} alt="MDN logo" />,
        },
        {
            name: "Loan Type",
            selector: (row) => row.LoanType,
            sortable: true
        },
        {
            name: "Loan Amount",
            selector: (row) => <img src={row.LoanAmount} alt="MDN logo" />,
            sortable: true
        },
        {
            name: "Gender",
            selector: (row) => row.Gender,
            sortable: true
        },
        /*{
            name: "Age",
            selector: (row) => (
                <img src={row.Age} width="50%" height="50%" />
            ),
            sortable: true
        },*/
        {
            name: "Age",
            selector: (row) => row.ROI,
            sortable: true
        },
        {
            name: "ROI",
            selector: (row) => row.Status,
            sortable: true
        },
        {
            name: "Status",
            selector: (row) => row.Apps,
            sortable: true
        },
        // {
        //     name: "Top 10 Games",
        //     selector: (row) => {
        //         let arrayData = [];
        //         let count = 0
        //         gamePerformance.forEach((element) => {
        //             if (row.ClientID === element.ClientID) {
        //                 count++;
        //                 console.log(row.ClientID, count)
        //                 arrayData.push(element.Value);
        //             }
        //         });
        //         return <MiniChart className={"p-3 mt-5"}
        //             strokeWidth={2}

        //             width={100}
        //             dataSet={arrayData} />;
        //     }
        // }
    ];

    const playerSummary = [
        {
            ClientID: 1,
            ClientName: "Aaron Ramsey",
            ProfilePicture:
                "https://resources.premierleague.com/premierleague/photos/players/40x40/p447715.png",
            LoanType: "Aston Villa",
            LoanAmount: 22,
            Gender:
                "https://resources.premierleague.com/premierleague/badges/50/t7.png",
            Age: "Jamaica",
            ROI:
                "https://www.countryflags.com/wp-content/uploads/jamaica-flag-png-large.png",
            Status: "Completed (attempt pill input)",
            Apps: 23
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
            ROI: "DEF",
            Status: "Pending (attempt pill input)",
            Apps: 10
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
            ROI: "MID",
            Status: 30,
            Apps: 23
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
            ROI: "MID",
            Status: 3,
            Apps: 27
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
            ROI: "FWD",
            Status: 29,
            Apps: 30
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
            ROI: "MID",
            Status: 5,
            Apps: 15
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
            ROI: "DEF",
            Status: 26,
            Apps: 16
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
            ROI: "MID",
            Status: 23,
            Apps: 2
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
            ROI: "FWD",
            Status: 2,
            Apps: 19
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
            ROI: "DEF",
            Status: 12,
            Apps: 17
        }
    ];

    // const columnGamePerformance = [
    //     {
    //         name: "Player ID",
    //         selector: (row) => row.ClientID,
    //         sortable: true
    //     },
    //     {
    //         name: "Player Name",
    //         selector: (row) => row.ClientName,
    //         sortable: true
    //     },
    //     {
    //         name: "Value",
    //         selector: (row) => row.Value,
    //         sortable: true
    //     }
    // ];

    const gamePerformance = [
        {
            ClientID: 1,
            GameID: 1,
            Value: 8
        },
        {
            ClientID: 1,
            GameID: 2,
            Value: 8
        },
        {
            ClientID: 1,
            GameID: 3,
            Value: 4
        },
        {
            ClientID: 1,
            GameID: 4,
            Value: 2
        },
        {
            ClientID: 1,
            GameID: 5,
            Value: 4
        },
        {
            ClientID: 1,
            GameID: 6,
            Value: 6
        },
        {
            ClientID: 1,
            GameID: 7,
            Value: 6
        },
        {
            ClientID: 1,
            GameID: 8,
            Value: 8
        },
        {
            ClientID: 1,
            GameID: 9,
            Value: 3
        },
        {
            ClientID: 1,
            GameID: 10,
            Value: 5
        },
        {
            ClientID: 2,
            GameID: 1,
            Value: 1
        },
        {
            ClientID: 2,
            GameID: 2,
            Value: 4
        },
        {
            ClientID: 2,
            GameID: 3,
            Value: 6
        },
        {
            ClientID: 2,
            GameID: 4,
            Value: 1
        },
        {
            ClientID: 2,
            GameID: 5,
            Value: 9
        },
        {
            ClientID: 2,
            GameID: 6,
            Value: 3
        },
        {
            ClientID: 2,
            GameID: 7,
            Value: 2
        },
        {
            ClientID: 2,
            GameID: 8,
            Value: 6
        },
        {
            ClientID: 2,
            GameID: 9,
            Value: 7
        },
        {
            ClientID: 2,
            GameID: 10,
            Value: 2
        },
        {
            ClientID: 3,
            GameID: 1,
            Value: 8
        },
        {
            ClientID: 3,
            GameID: 2,
            Value: 6
        },
        {
            ClientID: 3,
            GameID: 3,
            Value: 4
        },
        {
            ClientID: 3,
            GameID: 4,
            Value: 8
        },
        {
            ClientID: 3,
            GameID: 5,
            Value: 10
        },
        {
            ClientID: 3,
            GameID: 6,
            Value: 5
        },
        {
            ClientID: 3,
            GameID: 7,
            Value: 6
        },
        {
            ClientID: 3,
            GameID: 8,
            Value: 2
        },
        {
            ClientID: 3,
            GameID: 9,
            Value: 10
        },
        {
            ClientID: 3,
            GameID: 10,
            Value: 6
        },
        {
            ClientID: 4,
            GameID: 1,
            Value: 3
        },
        {
            ClientID: 4,
            GameID: 2,
            Value: 1
        },
        {
            ClientID: 4,
            GameID: 3,
            Value: 2
        },
        {
            ClientID: 4,
            GameID: 4,
            Value: 5
        },
        {
            ClientID: 4,
            GameID: 5,
            Value: 4
        },
        {
            ClientID: 4,
            GameID: 6,
            Value: 9
        },
        {
            ClientID: 4,
            GameID: 7,
            Value: 8
        },
        {
            ClientID: 4,
            GameID: 8,
            Value: 3
        },
        {
            ClientID: 4,
            GameID: 9,
            Value: 6
        },
        {
            ClientID: 4,
            GameID: 10,
            Value: 4
        },
        {
            ClientID: 5,
            GameID: 1,
            Value: 3
        },
        {
            ClientID: 5,
            GameID: 2,
            Value: 6
        },
        {
            ClientID: 5,
            GameID: 3,
            Value: 3
        },
        {
            ClientID: 5,
            GameID: 4,
            Value: 9
        },
        {
            ClientID: 5,
            GameID: 5,
            Value: 6
        },
        {
            ClientID: 5,
            GameID: 6,
            Value: 3
        },
        {
            ClientID: 5,
            GameID: 7,
            Value: 8
        },
        {
            ClientID: 5,
            GameID: 8,
            Value: 5
        },
        {
            ClientID: 5,
            GameID: 9,
            Value: 1
        },
        {
            ClientID: 5,
            GameID: 10,
            Value: 3
        },
        {
            ClientID: 6,
            GameID: 1,
            Value: 7
        },
        {
            ClientID: 6,
            GameID: 2,
            Value: 3
        },
        {
            ClientID: 6,
            GameID: 3,
            Value: 9
        },
        {
            ClientID: 6,
            GameID: 4,
            Value: 5
        },
        {
            ClientID: 6,
            GameID: 5,
            Value: 1
        },
        {
            ClientID: 6,
            GameID: 6,
            Value: 4
        },
        {
            ClientID: 6,
            GameID: 7,
            Value: 2
        },
        {
            ClientID: 6,
            GameID: 8,
            Value: 3
        },
        {
            ClientID: 6,
            GameID: 9,
            Value: 4
        },
        {
            ClientID: 6,
            GameID: 10,
            Value: 7
        },
        {
            ClientID: 7,
            GameID: 1,
            Value: 3
        },
        {
            ClientID: 7,
            GameID: 2,
            Value: 8
        },
        {
            ClientID: 7,
            GameID: 3,
            Value: 1
        },
        {
            ClientID: 7,
            GameID: 4,
            Value: 7
        },
        {
            ClientID: 7,
            GameID: 5,
            Value: 4
        },
        {
            ClientID: 7,
            GameID: 6,
            Value: 6
        },
        {
            ClientID: 7,
            GameID: 7,
            Value: 10
        },
        {
            ClientID: 7,
            GameID: 8,
            Value: 8
        },
        {
            ClientID: 7,
            GameID: 9,
            Value: 2
        },
        {
            ClientID: 7,
            GameID: 10,
            Value: 4
        },
        {
            ClientID: 8,
            GameID: 1,
            Value: 5
        },
        {
            ClientID: 8,
            GameID: 2,
            Value: 2
        },
        {
            ClientID: 8,
            GameID: 3,
            Value: 3
        },
        {
            ClientID: 8,
            GameID: 4,
            Value: 7
        },
        {
            ClientID: 8,
            GameID: 5,
            Value: 4
        },
        {
            ClientID: 8,
            GameID: 6,
            Value: 8
        },
        {
            ClientID: 8,
            GameID: 7,
            Value: 3
        },
        {
            ClientID: 8,
            GameID: 8,
            Value: 1
        },
        {
            ClientID: 8,
            GameID: 9,
            Value: 3
        },
        {
            ClientID: 8,
            GameID: 10,
            Value: 5
        },
        {
            ClientID: 9,
            GameID: 1,
            Value: 3
        },
        {
            ClientID: 9,
            GameID: 2,
            Value: 7
        },
        {
            ClientID: 9,
            GameID: 3,
            Value: 5
        },
        {
            ClientID: 9,
            GameID: 4,
            Value: 8
        },
        {
            ClientID: 9,
            GameID: 5,
            Value: 4
        },
        {
            ClientID: 9,
            GameID: 6,
            Value: 2
        },
        {
            ClientID: 9,
            GameID: 7,
            Value: 10
        },
        {
            ClientID: 9,
            GameID: 8,
            Value: 7
        },
        {
            ClientID: 9,
            GameID: 9,
            Value: 3
        },
        {
            ClientID: 9,
            GameID: 10,
            Value: 7
        },
        {
            ClientID: 10,
            GameID: 1,
            Value: 7
        },
        {
            ClientID: 10,
            GameID: 2,
            Value: 2
        },
        {
            ClientID: 10,
            GameID: 3,
            Value: 5
        },
        {
            ClientID: 10,
            GameID: 4,
            Value: 9
        },
        {
            ClientID: 10,
            GameID: 5,
            Value: 10
        },
        {
            ClientID: 10,
            GameID: 6,
            Value: 6
        },
        {
            ClientID: 10,
            GameID: 7,
            Value: 7
        },
        {
            ClientID: 10,
            GameID: 8,
            Value: 2
        },
        {
            ClientID: 10,
            GameID: 9,
            Value: 3
        },
        {
            ClientID: 10,
            GameID: 10,
            Value: 9
        }
    ];

    // const arrNames = [
    //     { id: 10, name: "A" },
    //     { id: 11, name: "B" },
    //     { id: 12, name: "C" },
    //     { id: 13, name: "A" },
    //     { id: 14, name: "B" }
    // ];

    // const arrInfo = [
    //     { name: "A", info: "AAA" },
    //     { name: "B", info: "BBB" },
    //     { name: "C", info: "CCC" }
    // ];

    const arrInfoMap = new Map(playerSummary.map((o) => [o.ClientID, o]));
    //maps the id onto the playerSummary of respective players

    const result = gamePerformance.map((o) => ({
        ...o,
        ...arrInfoMap.get(o.ClientID)
    })); //maps the id onto the gamePerformance of respective players

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
        console.log(row.ClientName);
    };
    //outputs the name property into the console
    
    return (
        <>
            <PostLoginNavBar />
            <div style={{ display: 'flex' }}>
                <AdminSideBar />
                <div style={{ display: 'inline-block' }}>


                    <DataTable
                        title="Player Summary"
                        columns={columns}
                        data={playerSummary}
                        defaultSortFieldId
                        pagination={10}
                        fixedHeader
  			fixedHeaderScrollHeight="600px"
                        onRowClicked={handleRowClicked}
                        highlightOnHover
                         />
                </div>
            </div>
        </>
    );
}
