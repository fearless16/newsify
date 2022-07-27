import axios from 'axios';
import {useEffect , useState } from 'react'

 const useGetByLanguage = (language) => {

    const [isLoading , setIsLoading] = useState(true)
    const [data , setData] = useState()
    const api_key = 'ee9b6ddfb599468982d9769b067c576e'

    let url = `https://newsapi.org/v2/top-headlines?language=${language}&popularity&apiKey=${api_key}`;

    if(language === 'hi'){
         url = `https://newsapi.org/v2/top-headlines?category=general&language=${language}&popularity&apiKey=${api_key}`;
    }

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data.articles)
            setIsLoading(false)
            console.log(language);
        }).catch((error) => {
            setIsLoading(false);
        })
   } , [language,url])

   return {data , isLoading , setIsLoading};
}

export default useGetByLanguage;
