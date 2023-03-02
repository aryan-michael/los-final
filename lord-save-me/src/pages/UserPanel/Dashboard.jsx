import PostLoginNavBar from "../../components/NavBar/PostLoginNavBar";
import SideBar from "../../components/Sidebar/SideBar";
import React from "react";
import DataTable, { createTheme } from "react-data-table-component";

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
      name: "Loan ID",
      selector: (row) => row.LoanID,
      sortable: true
    },
    {
      name: "Loan Type",
      selector: (row) => row.LoanType,
      sortable: true
    }, {
      name: "Loan Amount",
      selector: (row) => row.LoanAmount,
    },
    {
      name: "Applied Date",
      selector: (row) => row.AppliedDate,
      sortable: true
    },
    {
      name: "Status",
      selector: (row) => row.Status,
      sortable: true
    },
    {
      name: "Acceptance Date",
      selector: (row) => row.AcceptanceDate,
      sortable: true
    },

  ];

  const clientSummary = [
    {
      LoanID: 1,
      LoanType: "Aaron Ramsey",
      LoanAmount:
        "https://resources.premierleague.com/premierleague/photos/players/40x40/p119765.png",
      AppliedDate: "Wales",
      Status: "Jamaica",
      AcceptanceDate:
        "https://www.countryflags.com/wp-content/uploads/jamaica-flag-png-large.png",
    },
    {
      LoanID: 2,
      LoanType: "Alex Telles",
      LoanAmount:
        "https://resources.premierleague.com/premierleague/photos/players/40x40/p152590.png",
      LoanType: "Manchester United",
      LoanAmount:
        "https://resources.premierleague.com/premierleague/badges/50/t1.png",
      AppliedDate: "Brazil",
      Status:
        "https://www.countryflags.com/wp-content/uploads/brazil-flag-png-large.png",
      AcceptanceDate: "DEF",
    },
    {
      LoanID: 3,
      LoanType: "Allan",
      LoanAmount:
        "https://resources.premierleague.com/premierleague/photos/players/40x40/p119765.png",
      LoanType: "Everton",
      LoanAmount:
        "https://resources.premierleague.com/premierleague/badges/50/t11.png",
      AppliedDate: "England",
      Status:
        "https://www.countryflags.com/wp-content/uploads/england-flag-jpg-xl.jpg",
      AcceptanceDate: "MID",
    },
    {
      LoanID: 4,
      LoanType: "Dele Alli",
      LoanAmount:
        "https://resources.premierleague.com/premierleague/photos/players/40x40/p108823.png",
      LoanType: "Spurs",
      LoanAmount:
        "https://resources.premierleague.com/premierleague/badges/50/t6.png",
      AppliedDate: "Brazil",
      Status:
        "https://www.countryflags.com/wp-content/uploads/brazil-flag-png-large.png",
      AcceptanceDate: "MID",
    },
    {
      LoanID: 5,
      LoanType: "Leon Bailey",
      LoanAmount:
        "https://resources.premierleague.com/premierleague/photos/players/40x40/p215711.png",
      LoanType: "Aston Villa",
      LoanAmount:
        "https://resources.premierleague.com/premierleague/badges/50/t7.png",
      AppliedDate: "Jamaica",
      Status:
        "https://www.countryflags.com/wp-content/uploads/jamaica-flag-png-large.png",
      AcceptanceDate: "FWD",
    },
    {
      LoanID: 6,
      LoanType: "Bernando Silva",
      LoanAmount:
        "https://resources.premierleague.com/premierleague/photos/players/40x40/p165809.png",
      LoanType: "Manchester City",
      LoanAmount:
        "https://resources.premierleague.com/premierleague/badges/50/t43.png",
      AppliedDate: "Portugal",
      Status:
        "https://www.countryflags.com/wp-content/uploads/portugal-flag-400.png",
      AcceptanceDate: "MID",
    },
    {
      LoanID: 7,
      LoanType: "Willy Boly",
      LoanAmount:
        "https://resources.premierleague.com/premierleague/photos/players/40x40/p90585.png",
      LoanType: "Wolves",
      LoanAmount:
        "https://resources.premierleague.com/premierleague/badges/50/t39.png",
      AppliedDate: "Cote D’Ivoire",
      Status:
        "https://www.countryflags.com/wp-content/uploads/cote-d-ivoire-flag-png-large.png",
      AcceptanceDate: "DEF",
    },
    {
      LoanID: 8,
      LoanType: "Bruno Fernandes",
      LoanAmount:
        "https://resources.premierleague.com/premierleague/photos/players/40x40/p141746.png",
      LoanType: "Manchester United",
      LoanAmount:
        "https://resources.premierleague.com/premierleague/badges/50/t1.png",
      AppliedDate: "Portugal",
      Status:
        "https://www.countryflags.com/wp-content/uploads/portugal-flag-400.png",
      AcceptanceDate: "MID",
    },
    {
      LoanID: 9,
      LoanType: "Edinson Cavani",
      LoanAmount:
        "https://resources.premierleague.com/premierleague/photos/players/40x40/p40720.png",
      LoanType: "Manchester United",
      LoanAmount:
        "https://resources.premierleague.com/premierleague/badges/50/t1.png",
      AppliedDate: "Uruguay",
      Status:
        "https://www.countryflags.com/wp-content/uploads/uruguay-flag-png-large.png",
      AcceptanceDate: "FWD",
    },
    {
      LoanID: 10,
      LoanType: "Ben Chilwell",
      LoanAmount:
        "https://resources.premierleague.com/premierleague/photos/players/40x40/p172850.png",
      LoanType: "Chelsea",
      LoanAmount:
        "https://resources.premierleague.com/premierleague/badges/50/t8.png",
      AppliedDate: "England",
      "AppliedDate Image":
        "https://www.countryflags.com/wp-content/uploads/england-flag-jpg-xl.jpg",
      AcceptanceDate: "DEF",
    }
  ];

  // const columnGamePerformance = [
  //     {
  //         name: "Player ID",
  //         selector: (row) => row.LoanID,
  //         sortable: true
  //     },
  //     {
  //         name: "Player Name",
  //         selector: (row) => row.LoanType,
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
      LoanID: 1,
      GameID: 1,
      Value: 8
    },
    {
      LoanID: 1,
      GameID: 2,
      Value: 8
    },
    {
      LoanID: 1,
      GameID: 3,
      Value: 4
    },
    {
      LoanID: 1,
      GameID: 4,
      Value: 2
    },
    {
      LoanID: 1,
      GameID: 5,
      Value: 4
    },
    {
      LoanID: 1,
      GameID: 6,
      Value: 6
    },
    {
      LoanID: 1,
      GameID: 7,
      Value: 6
    },
    {
      LoanID: 1,
      GameID: 8,
      Value: 8
    },
    {
      LoanID: 1,
      GameID: 9,
      Value: 3
    },
    {
      LoanID: 1,
      GameID: 10,
      Value: 5
    },
    {
      LoanID: 2,
      GameID: 1,
      Value: 1
    },
    {
      LoanID: 2,
      GameID: 2,
      Value: 4
    },
    {
      LoanID: 2,
      GameID: 3,
      Value: 6
    },
    {
      LoanID: 2,
      GameID: 4,
      Value: 1
    },
    {
      LoanID: 2,
      GameID: 5,
      Value: 9
    },
    {
      LoanID: 2,
      GameID: 6,
      Value: 3
    },
    {
      LoanID: 2,
      GameID: 7,
      Value: 2
    },
    {
      LoanID: 2,
      GameID: 8,
      Value: 6
    },
    {
      LoanID: 2,
      GameID: 9,
      Value: 7
    },
    {
      LoanID: 2,
      GameID: 10,
      Value: 2
    },
    {
      LoanID: 3,
      GameID: 1,
      Value: 8
    },
    {
      LoanID: 3,
      GameID: 2,
      Value: 6
    },
    {
      LoanID: 3,
      GameID: 3,
      Value: 4
    },
    {
      LoanID: 3,
      GameID: 4,
      Value: 8
    },
    {
      LoanID: 3,
      GameID: 5,
      Value: 10
    },
    {
      LoanID: 3,
      GameID: 6,
      Value: 5
    },
    {
      LoanID: 3,
      GameID: 7,
      Value: 6
    },
    {
      LoanID: 3,
      GameID: 8,
      Value: 2
    },
    {
      LoanID: 3,
      GameID: 9,
      Value: 10
    },
    {
      LoanID: 3,
      GameID: 10,
      Value: 6
    },
    {
      LoanID: 4,
      GameID: 1,
      Value: 3
    },
    {
      LoanID: 4,
      GameID: 2,
      Value: 1
    },
    {
      LoanID: 4,
      GameID: 3,
      Value: 2
    },
    {
      LoanID: 4,
      GameID: 4,
      Value: 5
    },
    {
      LoanID: 4,
      GameID: 5,
      Value: 4
    },
    {
      LoanID: 4,
      GameID: 6,
      Value: 9
    },
    {
      LoanID: 4,
      GameID: 7,
      Value: 8
    },
    {
      LoanID: 4,
      GameID: 8,
      Value: 3
    },
    {
      LoanID: 4,
      GameID: 9,
      Value: 6
    },
    {
      LoanID: 4,
      GameID: 10,
      Value: 4
    },
    {
      LoanID: 5,
      GameID: 1,
      Value: 3
    },
    {
      LoanID: 5,
      GameID: 2,
      Value: 6
    },
    {
      LoanID: 5,
      GameID: 3,
      Value: 3
    },
    {
      LoanID: 5,
      GameID: 4,
      Value: 9
    },
    {
      LoanID: 5,
      GameID: 5,
      Value: 6
    },
    {
      LoanID: 5,
      GameID: 6,
      Value: 3
    },
    {
      LoanID: 5,
      GameID: 7,
      Value: 8
    },
    {
      LoanID: 5,
      GameID: 8,
      Value: 5
    },
    {
      LoanID: 5,
      GameID: 9,
      Value: 1
    },
    {
      LoanID: 5,
      GameID: 10,
      Value: 3
    },
    {
      LoanID: 6,
      GameID: 1,
      Value: 7
    },
    {
      LoanID: 6,
      GameID: 2,
      Value: 3
    },
    {
      LoanID: 6,
      GameID: 3,
      Value: 9
    },
    {
      LoanID: 6,
      GameID: 4,
      Value: 5
    },
    {
      LoanID: 6,
      GameID: 5,
      Value: 1
    },
    {
      LoanID: 6,
      GameID: 6,
      Value: 4
    },
    {
      LoanID: 6,
      GameID: 7,
      Value: 2
    },
    {
      LoanID: 6,
      GameID: 8,
      Value: 3
    },
    {
      LoanID: 6,
      GameID: 9,
      Value: 4
    },
    {
      LoanID: 6,
      GameID: 10,
      Value: 7
    },
    {
      LoanID: 7,
      GameID: 1,
      Value: 3
    },
    {
      LoanID: 7,
      GameID: 2,
      Value: 8
    },
    {
      LoanID: 7,
      GameID: 3,
      Value: 1
    },
    {
      LoanID: 7,
      GameID: 4,
      Value: 7
    },
    {
      LoanID: 7,
      GameID: 5,
      Value: 4
    },
    {
      LoanID: 7,
      GameID: 6,
      Value: 6
    },
    {
      LoanID: 7,
      GameID: 7,
      Value: 10
    },
    {
      LoanID: 7,
      GameID: 8,
      Value: 8
    },
    {
      LoanID: 7,
      GameID: 9,
      Value: 2
    },
    {
      LoanID: 7,
      GameID: 10,
      Value: 4
    },
    {
      LoanID: 8,
      GameID: 1,
      Value: 5
    },
    {
      LoanID: 8,
      GameID: 2,
      Value: 2
    },
    {
      LoanID: 8,
      GameID: 3,
      Value: 3
    },
    {
      LoanID: 8,
      GameID: 4,
      Value: 7
    },
    {
      LoanID: 8,
      GameID: 5,
      Value: 4
    },
    {
      LoanID: 8,
      GameID: 6,
      Value: 8
    },
    {
      LoanID: 8,
      GameID: 7,
      Value: 3
    },
    {
      LoanID: 8,
      GameID: 8,
      Value: 1
    },
    {
      LoanID: 8,
      GameID: 9,
      Value: 3
    },
    {
      LoanID: 8,
      GameID: 10,
      Value: 5
    },
    {
      LoanID: 9,
      GameID: 1,
      Value: 3
    },
    {
      LoanID: 9,
      GameID: 2,
      Value: 7
    },
    {
      LoanID: 9,
      GameID: 3,
      Value: 5
    },
    {
      LoanID: 9,
      GameID: 4,
      Value: 8
    },
    {
      LoanID: 9,
      GameID: 5,
      Value: 4
    },
    {
      LoanID: 9,
      GameID: 6,
      Value: 2
    },
    {
      LoanID: 9,
      GameID: 7,
      Value: 10
    },
    {
      LoanID: 9,
      GameID: 8,
      Value: 7
    },
    {
      LoanID: 9,
      GameID: 9,
      Value: 3
    },
    {
      LoanID: 9,
      GameID: 10,
      Value: 7
    },
    {
      LoanID: 10,
      GameID: 1,
      Value: 7
    },
    {
      LoanID: 10,
      GameID: 2,
      Value: 2
    },
    {
      LoanID: 10,
      GameID: 3,
      Value: 5
    },
    {
      LoanID: 10,
      GameID: 4,
      Value: 9
    },
    {
      LoanID: 10,
      GameID: 5,
      Value: 10
    },
    {
      LoanID: 10,
      GameID: 6,
      Value: 6
    },
    {
      LoanID: 10,
      GameID: 7,
      Value: 7
    },
    {
      LoanID: 10,
      GameID: 8,
      Value: 2
    },
    {
      LoanID: 10,
      GameID: 9,
      Value: 3
    },
    {
      LoanID: 10,
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

  const arrInfoMap = new Map(clientSummary.map((o) => [o.LoanID, o]));
  //maps the id onto the playerSummary of respective players

  const result = gamePerformance.map((o) => ({
    ...o,
    ...arrInfoMap.get(o.LoanID)
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
    console.log(row.LoanType);
  };
  //outputs the name property into the console

  return (
    <>
      <PostLoginNavBar />
      <div style={{ display: 'flex' }}>
        <SideBar />
        <div style={{ display: 'inline-block' }}>


          <DataTable
            title="Loan History"
            columns={columns}
            data={clientSummary}
            defaultSortFieldId
            pagination={5}
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
