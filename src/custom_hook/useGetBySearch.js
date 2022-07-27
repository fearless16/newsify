import axios from "axios";
import { useEffect ,useState} from "react";

const  useGetBySearch = (query ) => {

    const api_key = 'ee9b6ddfb599468982d9769b067c576e'
    const url = `https://newsapi.org/v2/everything?q=${query}&relevancy&apiKey=${api_key}`;
    const [data , setData] = useState();
    const [isLoading , setLoading] = useState(true)
    useEffect(() => {
        axios.get(url).then((res) => {
            setData(res.data.articles)
            setLoading(false)
        }).catch((err) => {
            console.log(err);
            setLoading(false);
        })
    },[query,url])
    return {data ,isLoading }
}

export default useGetBySearch
