import { t } from "i18next";
import React from "react";
import { useNavigate } from "react-router-dom";
import Description from "../pages/Description";
import { useContext } from "react";
import AuthContext from "../../../context/AuthContext";
const ReadOnlyRow = ({ item, handleEditClick, handleDeleteClick }) => {
  const navigate = useNavigate();
  const { getOneHospital} = useContext(AuthContext)  
  const handleImageGallery = (i) => {
    //console.log(i)
    localStorage.setItem("ImageHospital", JSON.stringify(i))
    // const base64String = btoa(String.fromCharCode(...new Uint8Array(i)));
    // var binary = "";
    // var bytes = [].slice.call(new Uint8Array(i.data.data));
    // bytes.forEach((b) => (binary += String.fromCharCode(b)));
    // const images = localStorage.setItem(
    //   "Images",
    //   JSON.stringify(window.btoa(binary))
    // );
    // const name = localStorage.setItem("Hospital", JSON.stringify(true))
    navigate("/gallery");
  };
  const handleDescription = (i) => {
    getOneHospital(i)
    navigate("/description");
  };
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {item._id}
      </th>
      <td className="py-4 px-6">{t(item.name)}</td>
      <td className="py-4 px-6">
      <p
          className="group relative flex
      w-24  justify-center rounded-md border border-transparent bg-secondary
       py-1 px-2 text-sm font-medium text-white hover:bg-white
       hover:text-black hover:border-secondary
       cursor-pointer
       "
          onClick={() => handleDescription(item._id)}
        >
          {t("Description")}
        </p></td>
      <td className="py-4 px-6 text-center">
        <p
          className="group relative flex
      w-20  justify-center rounded-md border border-transparent bg-secondary
       py-1 px-2 text-sm font-medium text-white hover:bg-white
       hover:text-black hover:border-secondary
       cursor-pointer
       "
          onClick={() => handleImageGallery(item.picture)}
        >
          {t("Images")}
        </p>
      </td>
      <td class="py-4 px-6  flex flex-col justify-center items-center">
        <button
          type="button"
          className="group relative flex
          cursor-pointer
                  w-20  justify-center rounded-md border border-transparent bg-secondary
                   py-1 px-2 text-sm font-medium text-white hover:bg-white
                   hover:text-black hover:border-secondary
                    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={(event) => handleEditClick(event, item)}
        >
          {t("Edit")}
        </button>
        <button
          type="button"
          className="group relative flex
        cursor-pointer
        w-20 justify-center rounded-md border border-transparent bg-secondary
         py-1 px-2 text-sm font-medium text-white hover:bg-white
         hover:text-black hover:border-secondary
         mt-2
          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={() => handleDeleteClick(item._id)}
        >
          {t("Delete")}
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
