import React, { useState } from 'react';
import Header from './sabit/header';



  
  // Section bileşeni
  function Section() {
    return (
      <section>
        <article>
            <h2>Talha Tabak tarafından İnternet ve Web geliştirme dersi için hazırlanan örnek ödev</h2>
            <h4>İletişim</h4>
            <a href="https://instagram.com/atalhatabak" ><h4>Instagram:</h4></a>
            <a href="https://github.com/atalhatabak" ><h4>Github:atalhatabak</h4></a>
            <a href="https://www.linkedin.com/in/atalhatabak" ><h4>Linkedin:atalhatabak</h4></a>
            <a href="https://github.com/atalhatabak/BasicHtmlSite" ><h4>Proje Kodu</h4></a>
        </article>
      </section>
    );
  }


  function Router() {
    
    return (

      <div>
        <Header />
        <main>
          <Section />
        </main>
        <footer>
          <h4>Footer</h4>
        </footer>
      </div>
    );
  }

export default Router;
 
