import React from 'react'
import { useTranslation } from 'react-i18next';
const LinksRead = ({ linksData, handleEditClick}) => {
  const { t, i18n } = useTranslation(["ABOUT"]);
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <th
      scope="row"
      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
    >
      {linksData?._id}
    </th>
    <td className="py-4 px-6 text-center">{linksData?.number}</td>
    <td className="py-4 px-6 text-center">{linksData?.facebook}</td>
    <td className="py-4 px-6 text-center">{linksData?.instagram}</td>
    <td className="py-4 px-6 text-center">{linksData?.twitter}</td>
    <td className="py-4 px-6 text-center">{linksData?.hospitalEmail}</td>
    <td class="py-4 px-6 flex flex-col justify-center items-center">
      <button
        type="button"
        className="group relative flex
                w-20  justify-center rounded-md border border-transparent bg-secondary
                 py-1 px-2 text-sm font-medium text-white hover:bg-white
                 hover:text-black hover:border-secondary
                  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={(event) => handleEditClick(event, linksData)}
      >
        {t("Edit")}
      </button>
    </td>
  </tr>
  )
}

export default LinksRead
