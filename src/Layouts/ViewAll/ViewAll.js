import React  , {useState , useRef}from 'react'
import {useParams} from 'react-router-dom';
import useGetNewsByCategory from '../../custom_hook/useGetNewsByCategory';
import Modal from './Modal';
import {Card  } from 'react-bootstrap';
import ReactTimeAgo from 'react-time-ago';


function ViewAll() {

    const {category } = useParams();
    const { data, isLoading } = useGetNewsByCategory(category)
    const homeElement = useRef();
    const [show , setShow] = useState(false);
   // const [clickedArticle , setClickedArticle] = useState()

    let articles = []
    if(!isLoading){
     articles = data.articles;
    }

    const ViewAllCard = (article ,index) => {

        const handleClick = (e) => {
            const key = e.target.getAttribute('data-key');
            setShow(true);
            localStorage.setItem('article' ,JSON.stringify(articles[key]))
            const div = homeElement.current;
            div.classList.add('active')
        }
    
    
            return (
                <Card style={{ width: '19.3rem', margin: '10px' }} key={article.title}>
                    <Card.Img variant="top" src={article.urlToImage} />
                    <Card.Body>
                        <Card.Title>{article.title}</Card.Title>
                        <Card.Text className='text-muted'>
                            publised at :   <ReactTimeAgo date={article.publishedAt} locale="en-US" timeStyle="twitter" /> ago
                        </Card.Text>
                        <Card.Link variant="primary" data-key = {index} onClick = {(e) =>{handleClick(e)}} className = 'card-link' >Read more</Card.Link>
                    </Card.Body>
                </Card>
            )
        }
       
    return (
        <>
        <div ref = { homeElement} id = 'blur'>
           {isLoading ? <> </> : <h1 style = {{marginLeft: '2.5%',marginTop :'1.2%' ,textTransform : 'capitalize' , zIndex: '2' , overflow: 'auto'}}>Category is : {category}</h1>}
           <div className='trending-news' style = {{margin : '10px'}}>
         {  articles.map(ViewAllCard) }

        </div>
        </div>
        <div>
        <Modal article={JSON.parse(localStorage.getItem('article'))} show = {show}  setShow={setShow} homeElement = { homeElement}/>
        </div>
        </>
     
    )
}

export default ViewAll;

