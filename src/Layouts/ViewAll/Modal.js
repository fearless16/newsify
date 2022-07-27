import { useRef } from 'react';
import '../../CSS/modal.css';

export default function Modal({article ,show , setShow , homeElement}) {

    // const {isLoading} = useContext(NewsContext)

    function convertToPlain(html){

        // Create a new div element
        var tempDivElement = document.createElement("div");
    
        // Set the HTML content with the given value
        tempDivElement.innerHTML = html;
    
        // Retrieve the text property of the element 
        return tempDivElement.textContent || tempDivElement.innerText || "";
    }
    const modal = useRef();
 

    let x = 0, y = 0;
    if(show){
        const body = document.querySelector('body');
        x = window.scrollX;
        y = window.scrollY;
        window.scrollTo(0, 0);
        body.style.overflow = 'hidden';
        modal.current.classList.remove('hide');
    }

    const handleClick = (e) => {
        setShow(false);
        modal.current.classList.add('hide');
        const body = document.querySelector('body')
        body.style.overflow = 'visible';
        window.scrollTo(x, y);
        homeElement.current.classList.toggle('active')
    }

    return (
        
        <div className ="containerX hide" id =  'pop-up' ref = {modal} >
            
        <button type="button" className="btn btn-dark close-btn" onClick={handleClick}>X</button>

        <img src = { (article && article.urlToImage) || ''} alt = '404.jpg' />
        <h3>{ article &&  article.title}</h3>
        <p>{article &&  convertToPlain(article.description) || ''}</p> 
        {article &&  <a href={ article.url} target={'_blank'} rel="noreferrer" className = 'btn btn-info'>Go to source</a>
         }
        </div>
        
    )
}
