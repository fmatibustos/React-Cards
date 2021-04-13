 import React from 'react'
 import PropTypes from 'prop-types'
 import './cards.css'
 //import image1 from '../assets/image1.jpg'
 // Prueba 1
 
 function card({title, imageSource,url}) {
     return (
         <div className="card text-center bg-dark animate__animated animate__fadeInUp">
             <div className="overflow">
             <img src={imageSource} alt="" className="card-img-top" />
             </div>
              <div className="card-body text-light">
                <h4 className="card-title">{title}</h4>
            <p className="card-text text-secondary">

    'Córdoba, la capital de la provincia argentina del
                 mismo nombre, es conocida por su arquitectura colonial española.
                  Alberga la Manzana Jesuítica, un complejo del siglo XVII con claustros activos,
                   iglesias y el campus original de la Universidad Nacional de Córdoba,.
                    una de las universidades más antiguas de Sudamérica.
                     El punto central de la ciudad es la Plaza San Martín y 
                     la Catedral de Córdoba de estilo neobarroco'
            </p>
                     <a href={url} className="btn btn-outline-secondary rounded-0">
                         Go to this Website
                     </a>
             </div>
         </div>
     )
 }
 
 card.propTypes = {
     title: PropTypes.string.isRequired,
     url: PropTypes.string,
     imageSource: PropTypes.string,
     
 }
 export default card
 