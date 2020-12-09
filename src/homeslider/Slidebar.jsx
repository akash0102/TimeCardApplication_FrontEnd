import React, { Component } from 'react' 
import Carousel from 'react-bootstrap/Carousel' 
export default class Slider extends Component {  

 render() {  
    return (  
    <div>  
    <div class='flex' >   
      </div>  
      <div className='container-fluid' >  
      <Carousel interval={1200} keyboard={false} pauseOnHover={true}>  
      <Carousel.Item style={{'height':"100%"}}  >  
      <img style={{'height':"100%"}}  
      className="d-block w-100"  
      src={'https://thumbs.dreamstime.com/b/european-daylight-saving-time-red-alarm-clock-wooden-desk-black-background-banner-d-illustration-end-copy-space-138299556.jpg'} alt="banner1"  />  
      <Carousel.Caption>  
      <button><h3>Attendance </h3></button>  
      </Carousel.Caption>  
      </Carousel.Item  >  
      <Carousel.Item style={{'height':"100%"}}>  
      <img style={{'height':"100%"}}  
      className="d-block w-100"  
      src={'https://thumbs.dreamstime.com/b/time-concept-web-banner-website-retro-alarm-clock-89571488.jpg'}   alt="banner2" />  
      <Carousel.Caption>  
      <button><h3>Leave</h3></button>
      </Carousel.Caption>  
      </Carousel.Item>  
      <Carousel.Item style={{'height':"100%"}}>  
      <img style={{'height':"100%"}}  
      className="d-block w-100"  
      src={'https://thumbs.dreamstime.com/b/hourglass-time-banner-background-format-wood-54533019.jpg'} alt="banner3"  />  
      <Carousel.Caption>  
      <button><h3>TimeCard</h3>  </button>
      </Carousel.Caption>  
      </Carousel.Item>
      <Carousel.Item style={{'height':"100%"}}>  
      <img style={{'height':"100%"}}  
      className="d-block w-100"  
      src={'https://thumbs.dreamstime.com/b/time-concept-banner-red-alarm-clock-standing-stone-web-copy-space-102239870.jpg'}   alt="banner4"/>  
      <Carousel.Caption>  
      <button><h3>Profile</h3></button>  
      </Carousel.Caption>  
      </Carousel.Item>  
       </Carousel>  
       </div>  
       </div>  
    )  
    }  
}