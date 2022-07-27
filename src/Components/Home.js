import { useRef ,useState} from 'react'
import TrendingCards from '../Layouts/TrendingCards'
import Slider from '../Layouts/Slider'
import {Link }from 'react-router-dom'
import Modal from '../Layouts/ViewAll/Modal';

function Home() {

    const categories = ['general', 'sports', 'entertainment', 'technology']
    const homeElement = useRef();
    const [show , setShow] = useState(false);

    return (
            <>
            <div ref={homeElement} id = 'blur'>
                    <Slider />
                {categories.map((cat , index)=> {
                    return (
                        <div key = {index}>
                            <div className='tags'>
                                <h4 style={{ dislpay: 'block', position: 'absolute', left: '1%', textDecoration: 'underline', textTransform: 'capitalize', zIndex: '2' }}>{cat}</h4>
                                <Link to={`/${cat}`}><h4 style={{ dislpay: 'block', margin: '5px', position: 'absolute', right: '1%', textDecoration: 'underline', zIndex: '2' }}> View all</h4>
                                </Link>
                            </div>
                            <TrendingCards category={`${cat}`} homeElement={homeElement} show = {show} setShow={setShow} />
                        </div>
                    )
                })}
            </div>
            <Modal article={JSON.parse(localStorage.getItem('article'))} show = {show}  setShow={setShow} homeElement = { homeElement}/>
           
            </>
        )

}

export default Home;
