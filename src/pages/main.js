import React, { useState } from 'react';
import Header from './sabit/header';



  
  // Section bileşeni
  function Section() {
    return (
      <section>
          <h3>Web geliştirme Final Ödevi, React ile yapıldı</h3><br></br>
          <p>Header içerisindeki menü içerikleri sayfanın en üstünde json şeklinde bir dizi tanımlanarak oluşturulmuş ve dizi içeriği döngüden okutularak yazdırılmıştır.</p><br></br>
          <p><a class="dark" href="/products" data-item="Ürünler">Ürünler</a> sayfasındaki içerikler json şeklinde oluşturulmuş <i>products.json</i> dosyasının içerine eklenmiştir. Json dosyası <a href="/products" class="dark" data-item="Ürünler">Ürünler</a> sayfası içerisine çağrılmış ve dizi şeklinde döngüye sokularak yazdırılmıştır.</p><br></br>
          <p>Resimler public klasörü altında bir klasöre eklenmiş ve id ye göre isimlendirilmiştir. Ürünleri listeleyen sayfada ve tek bir ürünü gösteren sayfada resim yolu ve id değişken olmak üzere gösterilmiştir.</p><br></br>
          <p>Tek ürün sayfasıda <a class="dark" href="/products" data-item="Ürünler">Ürünler</a>i gösteren sayfa gibi <i>products.json</i> dosyasını içe aktarıyor ve url'den gelen id ye göre json dizisinin içerisinden o id'nin bulunduğu satırı çekerek ilgili verileri gösteriyor.  </p><br></br>
          <p>Site tasarımıda <a class="dark" href="https://xen.talhatabak.com.tr" >bir önceki html ve css ile hazırlanmış web geliştirme ödevinin</a>  <i>React</i>'e uyarlanmış hali.</p>
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
 
