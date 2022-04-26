import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';


const  App=() =>{
 const [index,setIndex]=useState(0);
 const [people,setPeople]=useState(data)

 useEffect(() =>{
    let lastIndex= people.length-1
    if(index<0){
        setIndex(lastIndex)
    }
    if(index>lastIndex){
      setIndex(0)
    }
},[index,people])





  
    return (
      
        <section className='section'>
      <h1 className='head'><span className='slash'>/</span>    Reviews</h1> 

       <div className='buttons'>
    
         

         <button className='btn prev'
         onClick={() =>setIndex(index-1)}>
             <FiChevronLeft />
         </button>

         <button className='btn next'
         onClick={() =>setIndex(index+1)}>
             <FiChevronRight/>
         </button>

     </div>

       <div className='section-center'>
           {people.map((person,personIndex) =>{
                 const {id,image,name,title,quote}=person
                 
                 let position='nextSlide'
                
                 if(personIndex===index){
                     position='activeSlide'
                 }

                 if(personIndex===index-1 ||
                    index===0 && personIndex===people.length-1){
                     position='lastSlide'
                 }
         

               return (
                   
                   <article className={position}
                   key={id} >
            <img src={image}  alt={name} className='person-img'/>
            <h3 className='name'>{name}</h3>
            <h4 className='title'>{title}</h4>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon'/>
                   </article>
               )
           })}
           
           </div>  
           
     
       
        </section>
    )
}
export default App;