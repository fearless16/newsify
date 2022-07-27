import { useParams } from 'react-router-dom';
import { useRef , useState} from 'react'
import { Card } from 'react-bootstrap';
import ReactTimeAgo from 'react-time-ago';
import useGetByLanguage from '../custom_hook/useGetByLanguage';
import Modal from '../Layouts/ViewAll/Modal'

function LangResult() {

    const {language} = useParams();
    console.log(language);
    const homeElement = useRef();
    const {data : articles , isLoading} = useGetByLanguage(language);
    const [show , setShow] = useState(false)

    const handleClick = (e) => {
        const key = e.target.getAttribute('data-key');
        setShow(true);
        localStorage.setItem('article', JSON.stringify(articles[key]))
        const div = homeElement.current;
        div.classList.add('active')
    }

    const showCards = (article, index) => {
        return (
            <Card style={{ width: '19.3rem', margin: '10px' }} key={article.title} >
                <Card.Img variant="top" src={article.urlToImage} />
                <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text className='text-muted'>
                        publised at :   <ReactTimeAgo date={article.publishedAt} locale="en-US" timeStyle="twitter" /> ago
                    </Card.Text>
                    <Card.Link 
                    variant="primary" className='card-link' data-key={index} onClick={(e) => handleClick(e) } >Read more</Card.Link>
                </Card.Body>
            </Card>
        )
    }

    return (
               isLoading ? <></> :
                <>
                <div  className="trending-news" id='blur' ref={homeElement}>
                {articles.map(showCards)}
                </div>
                <>
                <Modal article={JSON.parse(localStorage.getItem('article'))} show = {show}  setShow={setShow} homeElement = { homeElement}/>
                </>
                </> 
                
    )
}

export default LangResult;
