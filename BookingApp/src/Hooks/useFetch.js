import {useEffect, useState} from "react";
import axios from "axios";

export default function  useFetch({Url , Query}){
    const [isLoading, setIsLoading] = useState()
    const [data, setData] = useState([])
    
    useEffect(()=>{
    async function fetchData({Url , Query}){
            setIsLoading(true)
            const response = await axios.get(`${Url}${Query}`);
            setData(await response.data)


        }
    }, [isLoading, data])
}
