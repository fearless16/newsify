import useGetBySearch from "../custom_hook/useGetBySearch";
import { useRef, useState } from 'react'
import { Card } from 'react-bootstrap';
import ReactTimeAgo from 'react-time-ago';
import Modal from '../Layouts/ViewAll/Modal';


const Search = () => {
    const query = localStorage.getItem('search')
    const { data: articles, isLoading } = useGetBySearch(query)
    const [show, setShow] = useState(false)
    const homeElement = useRef();


    const handleClick = (e) => {
        const key = e.target.getAttribute('data-key');
        setShow(true);
        localStorage.setItem('article', JSON.stringify(articles[key]))
        const div = homeElement.current;
        div.classList.add('active')
    }


    const showCards = (article, index) => {
        return (
            <Card style={{ width: '18rem', margin: '10px' }} key={index}>
                <Card.Img variant="top" src={article.urlToImage} />
                <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text className='text-muted'>
                        publised at :   <ReactTimeAgo date={article.publishedAt} locale="en-US" timeStyle="twitter" /> ago
                    </Card.Text>
                    <Card.Link
                        variant="primary" className='card-link' data-key={index} onClick={(e) => { handleClick(e) }} >Read more</Card.Link>
                </Card.Body>
            </Card>
        )
    }

    return (
            <>
                {show ? <></> : <h4 style={{ display: 'inline-block', margin: '15px 30px' }}> Search Results for {query}</h4>}
                <div ref={homeElement} className="trending-news" id='blur'>
                    {articles.map(showCards)}
                </div>
                <>
                    <Modal article={JSON.parse(localStorage.getItem('article'))} show={show} setShow={setShow} homeElement={homeElement} />
                </>
            </>


    )
}

export default Search;
