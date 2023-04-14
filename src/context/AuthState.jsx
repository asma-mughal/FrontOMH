import React from "react";
import AuthContext from "./AuthContext";
import axios from "axios";
import { useState } from "react";
export const url = "https://omigahealth.omigahealth.com";
//export const url = "http://127.0.0.1:2300";
const AuthState = (props) => {
  const [hospitalData, setHospData] = useState();
  const [doctorData, setDoctorData] = useState();
  const [hospitalAdded, setHospitalAdded] = useState(false);
  const [docDeptAdded, setDocDeptAdded] = useState(false);
  const [token, setToken] = useState("");
  const [onHosp, setHosp] = useState({});
  const [selectedImages, setSelectedImages] = useState([]);
  const [deptArray, setDeptarray] = useState([]);
  const [docUniqueId, setDocUniqueId] = useState();
  const [doctorArray, setDoctorArray] = useState([]);
  const [singleDoc, setSingleDoc] = useState([]);
  const [ImageGallery, setImageGallery] = useState();
  const [imageSaveHosp, setImageSave] = useState();
  const [tryData, setTryData] = useState();
  const [tryDocData, setTryDocData] = useState();
  const [linksData, setLinksData] =useState([])
  const [DocImage, setSelectedDocImage] = useState(false);
  const [hospEditImage, setHospEditImg] = useState(false);
  const [showForm , setShowForm] = useState(false)
  const [deptName,setDeptName] = useState(null);
  const [hospName, setHospName] = useState(null);
  function addHospital(fullName,description1) {
    const formData = new FormData();
    formData.append("name", fullName);
    selectedImages.forEach(function (value) {
      formData.append("picture", value); // you have to add array symbol after the key name
    });
    formData.append("description", description1)
     try{
      axios.post(`${url}/api/v1/hospital/`, formData).then((res) => {

        alert("Hospital added");
        setHospData(res.data.data.data);
        loadHospital()
        setSelectedImages([]);
      });
     }catch(error) {
      console.log(error.toString())
     }
    // fetch(`${url}/api/v1/hospital/`, {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name: fullName,
    //     //picture :[""],
    //     description: description1,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((responseData) => {
    //     console.log(
    //       "POST Response",
    //       "Response Body -> " +
    //         JSON.stringify(responseData) +
    //         "Hospital registered" +
    //         alert("Hospital Added!") +
    //         setSelectedImages([])
    //     );
    //   })
    //   .catch((error) =>
    //     console.log(error.toString() + alert("Oops! Some error occured"))
    //   );
    //addDepartment(hospitalData._id,address)
  }
  function addDepartment(address, id, desc) {
    let entries = Object.entries(address);
    let data = entries.map(([key, val] = entry) => {
      return `${val}`;
    });

    //${url}/api/v1/dep/
    fetch(`${url}/api/v1/dep/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data[0],
        hospital: id,
        description:desc
      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(
          "POST Response",
          "Response Body -> " +
            // JSON.stringify(responseData) +
            "department registered" +
            alert("Department Added!") +
            setSelectedImages([])
        );
      })
      .catch((error) =>
        console.log(error.toString() + alert("Oops! Some error occured"))
      );
  }
  function addImage(dataEdit, image) {
    const Id = dataEdit.id;
    const formData = new FormData();
    formData.append("picture", image);
    axios
      .patch(`${url}/api/v1/hospital/imageUpload/${Id}`, formData)
      .then((res) => {
        // console.log(res.data.data);
        setImageSave(res.data.data);
        //alert("Hospital Edited")
      });
  }
  function editHospImage(id, image) {
    const formData = new FormData()
    formData.append("picture", image);
    axios.patch(`${url}/api/v1/hospital/uploadImage/${id}`, formData).then((res) => {
      // console.log(res.data);
    });
  }
  function editHospital(dataEdit, img) {
    const Id = dataEdit.id;
    img && editHospImage(Id,img)
    fetch(`${url}/api/v1/hospital/${Id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: dataEdit.name,
        description: dataEdit.description
      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(
          "PUT Response",
          "Response Body -> " +
            // JSON.stringify(responseData) +
            "Hospital Updated" +
            alert("Hospital Updated! Refresh to see change") +
            setSelectedImages([])
        );
      })
      .catch((error) =>
        console.log(error.toString() + alert("Oops! Some error occured"))
      );
  }
  function getOneHospital(id) {
    //console.log(id)
    axios
      .get(`${url}/api/v1/hospital/${id}`)
      .then((response) => {
        const oneHospital = response.data;
        //console.log(oneHospital.data)
        setHosp(oneHospital.data);
        localStorage.setItem("HospDataOne", JSON.stringify(oneHospital));
        // console.log(oneHospital.data);
      })
      .catch((error) => console.log(`Error: ${error}`));
  }
  function getLinks() {
    axios
      .get(`${url}/api/v1/user/642ae5a3ccfc2ce328c6b0c8`)
      .then((response) => {
        setLinksData(response.data.data.user)
      })
      .catch((error) => console.log(`Error: ${error}`));
  }
  function getOneDept(id) {
    //console.log(id)
    axios
      .get(`${url}/api/v1/dep/${id}`)
      .then((response) => {
        const oneHospital = response.data;
        // console.log(oneHospital.data.doctor);
        localStorage.setItem("DocDataUnique", JSON.stringify(oneHospital));
      })
      .catch((error) => console.log(`Error: ${error}`));
  }
  function getOneDoctor(id) {
    axios
      .get(`${url}/api/v1/doctor/${id}`)
      .then((response) => {
        const oneHospital = response.data;
        //console.log(oneHospital.data)
        localStorage.setItem("DocDataOne", JSON.stringify(oneHospital));
      })
      .catch((error) => console.log(`Error: ${error}`));
  }
  function deleteHospital(id) {
    fetch(`${url}/api/v1/hospital/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(
          "DELETE Response",
          "Response Body -> " +
            // JSON.stringify(responseData) +
            console.log(responseData) +
            alert("Congratulations! Hospital Deleted, Refresh to see results") +
            loadHospital()
        );
      })
      .catch((error) => console.log(error.toString()));
  }

  function addDoctor(
    id,
    fullName,
    certificate,
    experience,
    dept,
    hospital,
    image
  ) {
    console.log(id, fullName, certificate, experience, dept, hospital, image);
    const formData = new FormData();
    formData.append("name", fullName);
    formData.append("qualification", certificate);
    formData.append("experiance", experience);
    formData.append("picture", image);
    formData.append("hospital", hospital);
    formData.append("department", dept);
    axios.post(`${url}/api/v1/doctor/`, formData).then((res) => {
      // console.log(res.data.data);
      setDoctorData(res.data.data);
      alert('Doctor Added')
      loadDoctor()
      setDocDeptAdded(false)
      setDeptName(null)
      setHospName(null)
    });
    // //${url}/api/v1/doctor/
    // fetch(`${url}/api/v1/doctor/`, {
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         name:fullName,
    //         qualification:certificate,
    //         experiance:experience,
    //         picture:image,
    //         hospital:hospital,
    //         department:dept
    //     })
    // })
    //     .then((response) => response.json())
    //     .then((responseData) => {
    //         console.log(
    //             "POST Response",
    //             "Response Body -> " + JSON.stringify(responseData) +
    //             alert("Congratulations! Doctor is registered") +
    //             setDoctorData(responseData.data.data)
    //         )
    //     })
    //     .catch(error => console.log(error.toString()+ alert("Oops! Some error occured")))
  }
  function editDoctorImage(id, image) {
    console.log(id, image)
    const formData = new FormData()
    formData.append("picture", image);
    axios.patch(`${url}/api/v1/doctor/imageUpload/${id}`, formData).then((res) => {
      // console.log(res?.data?.data);
    });
  }
  function editDoctor(id, fullName, certificate, experience, image) {
    console.log("image not selected");
    // const formData = new FormData()
    // formData.append('name', fullName)
    // formData.append('qualification',certificate)
    // formData.append('experiance', experience)
    // formData.append('picture', "abc")
    // //formData.append('picture', image)
    //   axios.patch(`http://localhost:2300/api/v1/doctor/${id}`,formData).then((res)=>{
    //       console.log(res.data.data)
    //       setDoctorData(res.data.data)
    //       retrieveDoctor()
    // })
    DocImage &&  editDoctorImage(id, image)
    fetch(`${url}/api/v1/doctor/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: fullName,
        qualification: certificate,
        experiance: experience,
        picture: image,
      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(
          "PUT Response",
          "Response Body -> " +
            // JSON.stringify(responseData) +
            "Doctor Updated" +
            alert("Doctor Updated! Refresh to see change")
        );
      })
      .catch((error) =>
        console.log(error.toString() + alert("Oops! Some error occured"))
      );
  }
  function editLinks(contact) {
    fetch(`${url}/api/v1/user/642ae5a3ccfc2ce328c6b0c8`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        number: contact.number,
        instagram: contact.instagram ,
        facebook: contact.facebook,
        twitter:contact.twitter,
        hospitalEmail:contact.email,
      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(
          "PUT Response",
          "Response Body -> " +
            // JSON.stringify(responseData) +
            "Links Updated" +
            alert("Links Updated! Refresh to see change") + setShowForm(false) + getLinks()
        );
      })
      .catch((error) =>
        console.log(error.toString() + alert("Oops! Some error occured"))
      );
  }
  function deleteDoctor(id) {
    // console.log(id);
    fetch(`${url}/api/v1/doctor/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(
          "POST Response",
          "Response Body -> " +
            // JSON.stringify(responseData) +
            alert(
              "Congratulations! Doctor is Deleted, Refresh to see results"
            ) +
          loadDoctor()
        );
      })
      .catch((error) =>
        console.log(error.toString() + alert("Oops! Some error occured"))
      );
  }
  const loadDoctor = async() =>{
    const response = await axios.get(`${url}/api/v1/doctor/`);
    setTryDocData(response?.data?.data?.doctors)
    //console.log(response?.data?.data?.doctors)
  }
  function retrieveDoctor() {
    
    // axios
    //   .get(`${url}/api/v1/doctor/`)
    //   .then((response) => {
    //     const allHospital = response.data;
    //     console.log(allHospital.data);
    //     localStorage.setItem("DocData", JSON.stringify(allHospital));
    //   })
    //   .catch((error) => console.log(`Error: ${error}`));
  }
  function login(email, password) {
    fetch(`${url}/api/v1/user/logIn`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(
          "POST Response",
          "Response Body -> " +
            // JSON.stringify(responseData) +
            alert("Congratulations! User is LoggedIn") +
            setToken(responseData.token) +
            localStorage.setItem("Token", responseData.token)
        );
      })
      .catch((error) => console.log(error.toString()));
  }
  const loadHospital = async() =>{
    const response = await axios.get(`${url}/api/v1/hospital/`);
    setTryData(response.data.data)
    //console.log(response.data.data)
  }
  function passChange(oldPass, newPass) {
    console.log(oldPass, newPass);
  }
  function logOut() {
    console.log("Logging out");
  }
  const getImage = (name) =>{
    //console.log(name)
    axios
      .get(`${url}/api/v1/hospital/getImage/${name}`)
      .then((response) => {
        const onImage = response.data;
        return onImage;
        
      })
      .catch((error) => console.log(`Error: ${error}`));
  }
  const state = {
    name: "harry",
    addHospital,
    editHospital,
    deleteHospital,
    addDoctor,
    editDoctor,
    deleteDoctor,
    retrieveDoctor,
    login,
    passChange,
    logOut,
    hospitalData,
    hospitalAdded,
    setHospitalAdded,
    addDepartment,
    getOneHospital,
    onHosp,
    docDeptAdded,
    setDocDeptAdded,
    selectedImages,
    setSelectedImages,
    getOneDept,
    deptArray,
    setDeptarray,
    docUniqueId,
    setDocUniqueId,
    getOneDoctor,
    doctorArray,
    setDoctorArray,
    singleDoc,
    setSingleDoc,
    ImageGallery,
    setImageGallery,
    editDoctorImage,
    addImage,
    imageSaveHosp,
    setImageSave,
    tryData,
    loadHospital,
    loadDoctor,
    tryDocData,
    getImage,
    DocImage,
    setSelectedDocImage,
    hospEditImage, 
    setHospEditImg,
    editLinks,
    getLinks,
    linksData,
    showForm,
    setShowForm,
    deptName,setDeptName,
    hospName, setHospName
  };
  return (
    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
  );
};
export default AuthState;
