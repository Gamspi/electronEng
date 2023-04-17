import {useState} from "react";

const useController = () => {
    const [first, setFirst] =useState('')
    return{first}
}
export default useController
