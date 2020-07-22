import {useState} from 'react'
import axios from 'axios'

const useFetch = url =>{

    const[response, setResponse] = useState({error: false, isLoading: false, data: null})

    const doFetch = async ()=>{
        try{
            setResponse({error: false, isLoading: true, data: null})

            const response = await axios(url, {
                method: 'get',
            })

            setResponse({error: false, isLoading: false, data: response.data})
            
        } catch(err){
            setResponse({error: err, isLoading: false, data: null})
        }
    }
    
    return [response, doFetch]
}

export default useFetch