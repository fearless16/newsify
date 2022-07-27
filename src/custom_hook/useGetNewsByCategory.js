import  {useEffect ,useState} from 'react';
import axios from 'axios';

 const useGetNewsByCategory = (category) => {

    const [isLoading , setIsLoading] = useState(true)
    const [data , setData] = useState()
    const api_key = 'ee9b6ddfb599468982d9769b067c576e'
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${api_key}`;
   
    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
            setIsLoading(false)

        }).catch((error) => {
            setIsLoading(false);
        })
   } , [url])

   return {data , isLoading , setIsLoading};
}

export default useGetNewsByCategory;