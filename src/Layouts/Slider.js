// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { NewsContext } from '../News/NewsAPIContext'
import { useContext } from 'react'

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

// import "./styles.css";


// import Swiper core and required modules
import SwiperCore, {
  Keyboard, Pagination, Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Keyboard, Pagination, Navigation]);

const getTopNews = () => {
  let images = [];
  let count = 0;

  while (count < 6) {
    let image = Math.floor(Math.random() * 20);
    if (images.includes(image)) {
      continue;
    }
    images.push(image)
    count++;
  }
  return images;
}

export default function Slider() {

  const { data, isLoading } = useContext(NewsContext);
  // console.log(data);

  let toFetch, articles = [];
  if (!isLoading) {
    toFetch = getTopNews();
    for (let i = 0; i < toFetch.length; i++) {
      articles.push(data.articles[toFetch[i]])
    }

  }

  const displaySlides = (article, index) => {

    return (
      <SwiperSlide className='swiper-slide' key={article.title}>
        <img src={article.urlToImage} alt='Not available' />
        <h3>{article.title}</h3>
      </SwiperSlide>
    )
  }


  return (
    isLoading ? <div></div> : <div className = 'slider-box'>

      <Swiper slidesPerView={1} spaceBetween={30} loop={true} keyboard={{ "enabled": true }} pagination={{
        "clickable": true
      }} navigation={true} className="mySwiper" >

        {articles.map(displaySlides)}

      </Swiper>
    </div>
  )
}