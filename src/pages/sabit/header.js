import React from 'react';

const menuData = [
    { title: "Anasayfa", link: "/" },
    { title: "Hakkında", link: "/about" },
    { title: "Ürünler", link: "/products" },
    { title: "İletişim", link: "/contact" },
  ];

function Header() {
    return (
        <header>
            <div class="xen-nav">
                <div class="xen-content">
                    <a class="brand" data-item="TalhaTabak" href="/">TalhaTabak</a>
                    <div class="xen-links xen-nav-items">
                        {menuData.map((item, index) => (
                            <a href={item.link} data-item={item.title}>{item.title}</a>
                        ))}

                    </div>
                    <i class=" menux fa fa-chevron-circle-down" onclick="menu()">Menü</i>
                </div>
                <div class="dropdown" id="dropdown" >
                    <a href="/products" data-item="Ürünler">Ürünler</a>
                    <a href="/contact" data-item="İletişim">İletişim</a>
                    <a href="/about" data-item="Hakkında">Hakkında</a>
                </div>
            </div>

        </header>
    );
  } 

  export default Header;
