import React, {  useRef} from 'react';
import { Card } from 'react-bootstrap';
import useGetNewsByCategory from '../custom_hook/useGetNewsByCategory'
import ReactTimeAgo from 'react-time-ago';

const TrendingCards = ({category , homeElement , show , setShow }) => {

    const trendingNews = useRef();
    const { data, isLoading } = useGetNewsByCategory(category);
    // const [clickedArticle , setClickedArticle] = useState();



    const getTopNews = () => {
        let articles = [];
        let count = 0;

        while (count < 5) {
            let article = Math.floor(Math.random() * 20);
            if (articles.includes(article)) {
                continue;
            }
            articles.push(article)
            count++;
        }
        return articles;
    }

    let toFetch, articles = [] ;
    if (!isLoading) {
        toFetch = getTopNews();
        for (let i = 0; i < toFetch.length; i++) {
            // console.log(data);
            articles.push(data.articles[toFetch[i]])
        }

    }

    const handleClick = (e) => {
        const key = e.target.getAttribute('data-key');
        setShow(true);
        // console.log(show);
        localStorage.setItem('article' ,JSON.stringify(articles[key]))
        // setClickedArticle(articles[key]);
        const div = homeElement.current;
        div.classList.add('active')
    }


    const displayCard = (article, index) => {
        return (
            <Card style={{ width: '19.3rem', margin: '10px' }} key={article.title}>
                <Card.Img variant="top" src={article.urlToImage} />
                <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text className='text-muted'>
                        publised at :   <ReactTimeAgo date={article.publishedAt} locale="en-US" timeStyle="twitter" /> ago
                    </Card.Text>
                    <Card.Link variant="primary" className = 'card-link' data-key = {index} onClick = {(e) =>{handleClick(e)}} >Read more</Card.Link>
                </Card.Body>
            </Card> 
        )
    }

    return (
        isLoading ? <div></div> :
            <>
                <div ref = {trendingNews} className='trending-news'>

                    {articles.map(displayCard)}

                </div>
            </>
    );
}

export default TrendingCards;
