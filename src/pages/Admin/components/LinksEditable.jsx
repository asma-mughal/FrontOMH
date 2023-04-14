import React from 'react'
import { useTranslation } from 'react-i18next';
const LinksEditable = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  item,
  
})=>{
  const {t, i18n} = useTranslation(['ABOUT']);
  return (
    <tr className="border-b bg-white">
      <td className="text-sm text-gray-900 font-light px-1 py-4 
      text-center
      whitespace-nowrap">{item._id}</td>
    <td className="text-sm text-gray-900 font-light px-1 py-4 whitespace-nowrap">
    <input
          type="number"
          required="required"
          className="relative block w-full appearance-none rounded-md border
           border-gray-300 px-3 py-2 overflow-auto text-gray-900 placeholder-gray-500 sm:text-sm"
          placeholder="Enter name"
          name="number"
          value={editFormData.number}
          onChange={handleEditFormChange}
        />
    </td>
    <td className="text-sm text-gray-900 font-light px-1 py-4 whitespace-nowrap">
    <input
          type="url"
          required="required"
          className="relative block w-full appearance-none rounded-md border
           border-gray-300 px-3 py-2 overflow-auto text-gray-900 placeholder-gray-500 sm:text-sm"
          placeholder="Enter name"
          name="name"
          value={editFormData.name}
          onChange={handleEditFormChange}
        />
    </td>
    
    <td className="text-sm text-gray-900 font-light px-1 py-4 whitespace-nowrap">
    <input
          type="url"
          required="required"
          className="relative block w-full appearance-none rounded-md border
           border-gray-300 px-3 py-2 overflow-auto text-gray-900 placeholder-gray-500 sm:text-sm"
          placeholder="Enter name"
          name="name"
          value={editFormData.name}
          onChange={handleEditFormChange}
        />
    </td>
    <td className="text-sm text-gray-900 font-light px-1 py-4 whitespace-nowrap">
    <input
          type="url"
          required="required"
          className="relative block w-full appearance-none rounded-md border
           border-gray-300 px-3 py-2 overflow-auto text-gray-900 placeholder-gray-500 sm:text-sm"
          placeholder="Enter name"
          name="name"
          value={editFormData.name}
          onChange={handleEditFormChange}
        />
    </td>
    <td className="text-sm text-gray-900 font-light px-1 py-4 whitespace-nowrap">
    <input
          type="email"
          required="required"
          className="relative block w-full appearance-none rounded-md border
           border-gray-300 px-3 py-2 overflow-auto text-gray-900 placeholder-gray-500 sm:text-sm"
          placeholder="Enter name"
          name="name"
          value={editFormData.name}
          onChange={handleEditFormChange}
        />
    </td>
   
  
    <td class="text-sm text-gray-900 font-light px-3 flex flex-col justify-center items-center
     py-4 whitespace-nowrap">
    <button
        
          className="group relative flex
          cursor-pointer
                  w-20 justify-center rounded-md border border-transparent bg-secondary
                   py-1 px-2 text-sm font-medium text-white hover:bg-white
                   hover:text-black hover:border-secondary
                    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >{t("Save")}</button>
        <button
          type="button"
          className="group relative flex
          mt-2
          cursor-pointer
                  w-20 justify-center rounded-md border border-transparent bg-secondary
                  py-1 px-2 text-sm font-medium text-white hover:bg-white
                   hover:text-black hover:border-secondary
                    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={handleCancelClick}
        >{t("Cancel")}</button>
            
    </td>
    </tr>
  )
}

export default LinksEditable
