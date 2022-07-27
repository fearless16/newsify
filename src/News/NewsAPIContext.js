import { createContext, useEffect, useState  } from "react";
import axios from 'axios';

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const api_key = 'ee9b6ddfb599468982d9769b067c576e';

        axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${api_key}`)
            .then(res => {
                // console.log(res.data.articles);
                setData(res.data);
                setIsLoading(false);
            }).catch(err => {
                console.log(err);
                setIsLoading(false);
            })
    }, [])


    return <NewsContext.Provider value={{ data, isLoading }}>
        {props.children}
    </NewsContext.Provider>
}