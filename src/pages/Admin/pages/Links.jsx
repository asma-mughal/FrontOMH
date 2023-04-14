import React, { useState, Fragment, useRef, useEffect } from "react";
import { nanoid } from 'nanoid'
import data from "../components/mock-data.json";
import EditableRow from "../components/EditableRow";
import { useTranslation } from 'react-i18next';
import { useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import { useReducer } from "react";
import LinksRead from "../components/LinksRead";
import LinksEditable from '../components/LinksEditable';
const Links = () => {
  const [contacts, setContacts] = useState(data);
  const {t} = useTranslation(['ABOUT']);
  const [linkId, setLinkId] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const {  tryData,editLinks, getLinks,linksData,showForm,setShowForm } = useContext(AuthContext)
 
  const [editFormData, setEditFormData] = useState({
    number:"",
    facebook:"",
    instagram:"",
    twitter:"",
    email:"",
   }); 
  const [editContactId, setEditContactId] = useState(null);
   //console.log(editFormData); 
  const handleEditFormChange = (event) => {
  event.preventDefault();
  const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData) 
  };
 useEffect(()=>{
getLinks()
 },[])
  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedContact = {
      id:linkId,
      number:editFormData.number,
      facebook:editFormData.facebook,
      instagram:editFormData.instagram,
      twitter:editFormData.twitter,
      email:editFormData.email,
    };
    const newContacts = [...contacts];
    
    setContacts(newContacts);
    setEditContactId(null);
    console.log(editedContact)
    editLinks(editedContact)
    setLinkId(null)
  };
  const handleEditClick = (event, contact) => {
   
    event.preventDefault();
    setShowForm(true)
    const formValues = {
      number:contact.number,
      facebook:contact.facebook,
      instagram:contact.instagram,
     twitter:contact.twitter,
     email:contact.hospitalEmail,
    };
    setEditFormData(formValues)
    //setSelectedImages(formValues.image)
  };
  const handleCancelClick = () => {
    setShowForm(false)
  };
  return (
  <div className="app-container ">
    <form onSubmit={handleEditFormSubmit}>
    <div class="overflow-x-auto relative">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700
         dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                {t("#")}
                </th>
                <th scope="col" class="py-3 px-6">
                {t("Number")}
                </th>

                <th scope="col" class="py-3 px-6">
                {t("Facebook")}
                </th>
                <th scope="col" class="py-3 px-6">
                {t("Instagram")}
                </th>
                <th scope="col" class="py-3 px-6">
                {t("Twitter")}
                </th>
                <th scope="col" class="py-3 px-6">
                {t("Email")}
                </th>
                <th scope="col" class="py-3 px-6 text-center"
                >
                {t("Actions")}
                </th>
            </tr>
        </thead>
        <tbody>
       
               <Fragment>
                
                  <LinksRead
                    linksData={linksData}
                    handleEditClick={handleEditClick}                    
                  />
                
              </Fragment> {/* To check if there is any contact Id or not? if there is no
               contact ID then it means user is reading the row  */ }
           
            
        </tbody>
    </table>
</div>
      </form>
    {showForm  &&     <div className="flex min-h-full
      pb-10
      items-center justify-center px-4 sm:px-6 lg:px-8 font-poppins">
         <div className="w-full max-w-md overflow-hidden space-y-8">
           <div>
             <h2 className="text-center text-base mt-3 font-bold tracking-tight text-gray-900">
             {t("Edit links Here")}
             </h2>
           </div>
           {error && <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
   <strong class="font-bold">{t("Failed!")}</strong>
   <span class="block sm:inline">{error}</span>
   <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
     <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
   </span>
 </div>}

 <form onSubmit={handleEditFormSubmit}>
       
         <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Enter Number
      </label>
      <input
          type="tel"
          name="number"
          className="relative block 
          focus:outline-none 
          w-full appearance-none rounded-none rounded-t-md border 
           px-2 py-2 text-gray-900 placeholder-gray-500 
          sm:text-sm "
          required="required"
          value={editFormData.number}
          placeholder={t("Enter Number")}
          onChange={handleEditFormChange}

        />
    </div>
         
         <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Enter Facebook
      </label>
      <input
          type="url"
          required="required"
          className="relative block mt-2 w-full appearance-none rounded-md border
           border-gray-300 px-3 py-2 overflow-auto text-gray-900 placeholder-gray-500 sm:text-sm"
          placeholder="Enter Facebook Link"
          name="facebook"
          value={editFormData.facebook}
          onChange={handleEditFormChange}
        />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Enter Instagram
      </label>
      <input
          type="url"
          required="required"
          className="relative block mt-2 w-full appearance-none rounded-md border
           border-gray-300 px-3 py-2 overflow-auto text-gray-900 placeholder-gray-500 sm:text-sm"
          placeholder="Enter Instagram Link"
          name="instagram"
          value={editFormData.instagram}
          onChange={handleEditFormChange}
        />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Enter Twitter
      </label>
      <input
          type="url"
          required="required"
          className="relative block mt-2 w-full appearance-none rounded-md border
           border-gray-300 px-3 py-2 overflow-auto text-gray-900 placeholder-gray-500 sm:text-sm"
          placeholder="Enter Twitter Link"
          name="twitter"
          value={editFormData.twitter}
          onChange={handleEditFormChange}
        />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Enter Email
      </label>
      <input
          type="email"
          required="required"
          className="relative block mt-2 w-full appearance-none rounded-md border
           border-gray-300 px-3 py-2 overflow-auto text-gray-900 placeholder-gray-500 sm:text-sm"
          placeholder="Enter Email"
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        />
    </div> 
        
       
       <button
               disabled={loading }
               onClick={handleCancelClick}
                 type="submit"
                 className="group  relative flex
                 cursor-pointer
                  w-full justify-center rounded-md border border-transparent bg-secondary
                   py-2 mt-5 px-4 text-sm font-medium text-white hover:bg-white
                   hover:text-black hover:border-secondary
                    focus:outline-none "
               >
                
                 
             {t("Cancel")}
               </button>
               <button
               disabled={loading }
                 type="submit"
                 className="group  relative flex
                 cursor-pointer
                  w-full justify-center rounded-md border border-transparent bg-secondary
                   py-2 mt-5 px-4 text-sm font-medium text-white hover:bg-white
                   hover:text-black hover:border-secondary
                    focus:outline-none "
               >
                 
             {t("Save")}
               </button>
      </form>
         </div>
       </div>}
  
      
      </div>
  )
}

export default Links
