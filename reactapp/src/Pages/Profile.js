// import { useState } from "react";
// import React from "react";
// import axios from "axios";
// import { useEffect } from "react";
// import Topnav from "../Components/Topnav";


// const Profile = () => {


//     const [userData, setUserData] = useState({}); // Initialize with an empty object
//   const [Data, setData] = useState({}); 

//   let id = localStorage.getItem('id');
//   useEffect(() => {
//     const fetchUserData = async () => {
//       let token = localStorage.getItem('token');
//       let name=localStorage.getItem('name');
//       // alert(id)
      
//       try {
//         const response = await axios.get(`http://localhost:8181/api/v1/demo/get/${name}`, {
//           headers: {
//             "Authorization": `Bearer ${token}`,
//             'Content-Type': 'application/json'
//           },
//         });
//         setData(response.data); // Update the state with the response data
//         console.log('Success:', response.data);
//     }
//         catch (error) {
//             console.error('Error:', error);
//           }
//         };
    
//         fetchUserData();
//       }, []);


//     return(


//         <>
//         <div>
//             <Topnav/>
//         </div>

//         <div style={{textAlign:"center"}}>

//             <h1>User Details</h1>
//             <br></br>
//             <br></br>

//             <label> UserName:  </label>
//             <input  value={Data.name}/>
//             <br></br>
//             <br></br>
//             <label> DOB:  </label>
//             <input  value={Data.age}/>
//             <br></br>
//             <br></br>
            


//             <label> Mobile Number:  </label>
//             <input  value={Data.mobile}/>
//             <br></br>
//             <br></br>
//             <label> Vehicle Number:  </label>
//             <input  value={Data.vehicle_Number}/>
//             <br></br>
//             <br></br>
//             <label> Licence Number:  </label>
//             <input  value={Data.licence_Number}/>

//             <br></br>
//             <br></br>
//             <button style={{width:'200px',marginLeft:'-3em',height:'40px',fontSize:'15px',color:'white'} }>Edit Details</button>


            
//         </div>
        
//         </>
//     );
// };
// export default Profile;

import { useState } from "react";
import React from "react";
import axios from "axios";
import { useEffect } from "react";
import Topnav from "../Components/Topnav";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [Data, setData] = useState({});
  const [editMode, setEditMode] = useState(false); // State to track edit mode
  const [updatedData, setUpdatedData] = useState({}); // State to hold modified user data

  let id = localStorage.getItem("id");

  useEffect(() => {
    const fetchUserData = async () => {
      let token = localStorage.getItem("token");
      let name = localStorage.getItem("name");

      try {
        const response = await axios.get(
          `http://localhost:8181/api/v1/demo/get/${name}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        setData(response.data);
        setUpdatedData(response.data); // Set the initial value of updatedData to the fetched data
        console.log("Success:", response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchUserData();
  }, []);

  // Function to handle changes in input fields during edit mode
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Function to handle the form submission and update the user data
  const handleSubmit = async () => {
    let token = localStorage.getItem("token");
    let name = localStorage.getItem("name");

    try {
      const response = await axios.put(
        `http://localhost:8181/api/v1/demo/update/${name}`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // If the update is successful, update the state with the new data
      setData(response.data);
      setEditMode(false); // Exit edit mode after successful update
      console.log("Update Success:", response.data);
    } catch (error) {
      console.error("Update Error:", error);
    }
  };

  return (
    <>
      <div>
        <Topnav />
      </div>

      <div style={{ textAlign: "center" }}>
        <h1>User Details</h1>
        <br />
        <br />

        <label> UserName: </label>
        {editMode ? ( // If in edit mode, display an input field
          <input
            name="name"
            value={updatedData.name}
            onChange={handleInputChange}
          />
        ) : (
          <input value={Data.name} readOnly />
        )}
        <br />
        <br />
        <label> Age: </label>
        {editMode ? (
          <input
            name="age"
            value={updatedData.age}
            onChange={handleInputChange}
          />
        ) : (
          <input value={Data.age} readOnly />
        )}
        <br />
        <br />

        <label> Mobile Number: </label>
        {editMode ? (
          <input
            name="mobile"
            value={updatedData.mobile}
            onChange={handleInputChange}
          />
        ) : (
          <input value={Data.mobile} readOnly />
        )}
        <br />
        <br />
        <label> Vehicle Number: </label>
        {editMode ? (
          <input
            name="vehicle_Number"
            value={updatedData.vehicle_Number}
            onChange={handleInputChange}
          />
        ) : (
          <input value={Data.vehicle_Number} readOnly />
        )}
        <br />
        <br />
        <label> Licence Number: </label>
        {editMode ? (
          <input
            name="licence_Number"
            value={updatedData.licence_Number}
            onChange={handleInputChange}
          />
        ) : (
          <input value={Data.licence_Number} readOnly />
        )}

        <br />
        <br />
        {editMode ? ( // Show "Save Changes" button in edit mode
          <button
            style={{
              width: "200px",
              marginLeft: "-3em",
              height: "40px",
              fontSize: "15px",
              color: "white",
            }}
            onClick={handleSubmit}
          >
            Save Changes
          </button>
        ) : ( // Show "Edit Details" button when not in edit mode
          <button
            style={{
              width: "200px",
              marginLeft: "-3em",
              height: "40px",
              fontSize: "15px",
              color: "white",
            }}
            onClick={() => setEditMode(true)}
          >
            Edit Details
          </button>
        )}
      </div>
    </>
  );
};

export default Profile;
