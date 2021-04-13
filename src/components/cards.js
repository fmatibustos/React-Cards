import React from 'react'
import Card from './card'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'


 const Tarjetas = [
    {
        id:1,
        title: 'Youtube',
        image: image1 ,
         url:     'https://www.youtube.com/'                                                                                     
        
    },
    {
        id:2,
        title: 'Facebook',
        image:image2    ,
         url: 'https://es-la.facebook.com/'                                                                                      
    },
    {
        id:3,
        title: 'Twitter',
        image:image3    ,
        url: 'https://twitter.com/'                                                                                        
    }
 ]


function cards() {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100 ">
            <div className="row">
           {
               Tarjetas.map(card=>(
                <div className="col-md-4" key={card.id}>
            <Card title={card.title} imageSource={card.image} url={card.url}/>
            </div>
               ))
           }
            </div>
            
        </div>
        
    )
}

export default cards
