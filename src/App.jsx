import { useState } from 'react'
import mob from './assets/mob.png'
import cat1 from './assets/cat1.jpg'
import cat2 from './assets/cat2.jpg'
import cat3 from './assets/cat3.jpg'
import './App.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase,faGraduationCap,faLocationDot,faTimes,faHeart } from '@fortawesome/free-solid-svg-icons'


function App() {

  const images = [
    { src: cat1, alt: 'Image 2',name:"Shakila",age:2,info:"CEO at Catify",edu:"NED",distance:"2 miles away" },
    { src: cat2, alt: 'Image 3',name:"Priya",age:2,info:"Manager at Catify",edu:"NED",distance:"2 miles away" },
    { src: cat3, alt: 'Image 1',name:"Simran",age:2,info:"Developer at Catify",edu:"NED",distance:"2 miles away" },
    // Add more images as needed
  ]

  const settings = {
    //hide buttons
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <div className="App">
      <div className='container'>
        <img id='mob' src={mob} alt="salad" srcSet={""} />
        <div style={{
          width: "68%",
          height: "97%",
          backgroundColor: "white",
          position: "absolute",
          zIndex: "-1",
          borderRadius: "50px"

        }}></div>
        <div className="bg">
          <div className="content">
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index}>
                  <img src={image.src} alt={image.alt} />
                  <div className='info'>
                    <span style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      color:"black",
                      marginTop:"7px"
                    }}>{image.name},{image.age}</span>
                    <span><FontAwesomeIcon icon={faBriefcase} style={{marginRight:"4px"}}/>{image.info}</span>
                    <span><FontAwesomeIcon icon={faGraduationCap} style={{marginRight:"4px"}} />{image.edu}</span>
                    <span><FontAwesomeIcon icon={faLocationDot} style={{marginRight:"4px"}} />{image.distance}</span>
                    <hr style={{
                      width:"100%",
                      paddingLeft:"0px!important",
                      height:"1px",
                      backgroundColor:"rgb(151, 151, 140)",
                      opacity:"0.2",
                      marginTop:"10px",
                    }} />
                      <span>
                        {image.name} is a {image.age} year old {image.info} from {image.edu}. She is {image.distance} away from you.
                      </span>
                  </div>
                </div>
              ))}
              
            </Slider>
            <div className="buttons">
              <button className="dislike">
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <button style={{
                marginLeft:"10px"
              }} className="like">
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
