import { MdOutlineDeleteForever } from "react-icons/md";

const YourCartItem = () => {
    return (
        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Apple MacBook Pro 17"
            </td>
            <td className="px-6 py-4">
                Silver
            </td>
            <td className="px-6 py-4">
                Laptop
            </td>
            <td className="px-6 py-4">
                $2999
            </td>
            <td className="px-6 py-4">
                <MdOutlineDeleteForever className="text-xl cursor-pointer text-red-600" />
            </td>
        </tr>
    )
}

export default YourCartItem