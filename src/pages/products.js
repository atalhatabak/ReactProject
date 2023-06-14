import React, { useState } from 'react';
import Header from './sabit/header';
import jsonproducts from './DB/products.json'


  
  // Section bileşeni
  function Section() {
    return (
      <section>
      <article>
          {jsonproducts.map((item, index) => (

                            
              <div class="card">
              <img src={`${process.env.PUBLIC_URL}/images/${item.id}.jpg`} alt="Resim" class="card-image" />
              <div class="card-content">
                <h3 class="card-title">{item.marka} - {item.model} - {item.fiyat}</h3>
                <p class="card-description">{item.aciklama}</p>
                <a href={"product/"+item.id} class="card-button">Daha fazla</a>
              </div>
              </div>

              
          ))}



      </article>
  </section>
    );
  }


  function Router() {
    
    return (

      <main>
        <Header />

        <Section />

 
      </main>
            
    );
  }

export default Router;
 
