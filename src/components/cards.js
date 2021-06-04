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
        text:   'YouTube is an online video sharing and social media platform owned by Google. Around the world, its users watch more than one billion hours of YouTube videos each day. YouTube creators, popularly referred to as YouTubers, upload over one hundred hours of content per minute. In 2005, YouTube.com was launched by Steve Chen, Chad Hurley, and Jawed Karim.',
         url:     'https://www.youtube.com/'                                                                                     
        
    },
    {
        id:2,
        title: 'Facebook',
        image:image2    ,
        text:   'Facebook (stylized as facebook) is an American online social media and social networking service based in Menlo Park, California, and a flagship service of the namesake company Facebook, Inc. It was founded by Mark Zuckerberg, along with fellow Harvard College students and roommates Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes.',
         url: 'https://es-la.facebook.com/'                                                                                      
    },
    {
        id:3,
        title: 'Twitter',
        image:image3    ,
        text:'Twitter is an American microblogging and social networking service on which users post and interact with messages known as "tweets". Registered users can post, like, and retweet tweets, but unregistered users can only read them. Users access. Twitter was created by Jack Dorsey, Noah Glass, Biz Stone, and Evan Williams in March 2006 and launched in July of that year.',
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
            <Card title={card.title} imageSource={card.image} url={card.url} text={card.text}/>
            </div>
               ))
           }
            </div>
            
        </div>
        
    )
}

export default cards
