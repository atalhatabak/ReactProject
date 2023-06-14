import React, { useState } from 'react';
import Header from './sabit/header';



  
  // Section bileşeni
  function Section() {
    return (
      <section>
            <article>
                <form method="POST" >
                      <input type="text" placeholder="İsim " name="isim" />
                      <input type="text" placeholder="Soyisimiz" name="soyisim" />
                      <input type="password" placeholder="Şifreniz" name="password" />
                      <input type="text" placeholder="E-Postanız" name="eposta" />
                      <select>
                          <option>Cinsiyetiniz</option>
                          <option>Erkek</option>
                          <option>Kadın</option>
                          <option>Belirtmek İstemiyorum</option>
                      </select>
                      <input type="number" placeholder="Yaşınız" name="yas" id="yas" min="18" max="88" />
                      <textarea placeholder="Mesajınız" name="mesaj"></textarea>
                      <input type="submit" value="Gönder" />
                </form>
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
 
