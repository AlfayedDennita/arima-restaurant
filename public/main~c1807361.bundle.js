(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{16:function(e,t,n){"use strict";var a=n(17),i=n(18),l=n(19),o=n(20),s=n(21),r=n(6),c=n(4),u=n(22),d=n(23),m=n(24),f=n(25),h=n(7),b=n(26),v={init:function(){this.defineCustomElements()},defineCustomElements:function(){customElements.define("full-jumbotron",a.a),customElements.define("main-content",i.a),customElements.define("best-rating",l.a),customElements.define("best-list",o.a),customElements.define("best-item",s.a),customElements.define("restaurants-container",r.a),customElements.define("restaurant-list",c.a),customElements.define("detail-container",u.a),customElements.define("detail-image",d.a),customElements.define("detail-info",m.a),customElements.define("detail-menu",f.a),customElements.define("detail-reviews",h.a),customElements.define("nearest-restaurants",b.a)}};t.a=v},2:function(e,t,n){"use strict";var a=n(13),i=n(14),l=n(0),o={init:function(e){var t=e.underBreakpoint,n=e.upperBreakpoint,a=e.skipToContentButton,i=e.header,l=e.nav,o=e.hamburgerMenu,s=e.menuListItem,r=e.dropDownType;this.underBreakpoint=t,this.upperBreakpoint=n,this.skipToContentButton=a,this.header=i,this.nav=l,this.hamburgerMenu=o,this.menuListItem=s,this.dropDownType=r,this.defineCustomElements(),this.initialCustomElements(),this.changeNavTypeInVariousDevice(),this.hoverEffectMenuItem(),this.hamburgerMenuEvent(),this.dropDownConfig()},defineCustomElements:function(){customElements.define("credit-info",a.a),customElements.define("brand-logo",i.a)},initialCustomElements:function(){var e=document.createElement("credit-info");this.nav.appendChild(e),e.innerHTML+='<p data-lang="13">Copyright &copy; 2020</p>'},arrowStyleSkipButtonInit:function(){var e=this.skipToContentButton;e.innerHTML='<i class="fas fa-chevron-down fa-fw"></i>',e.classList.add("arrow"),e.classList.remove("regular")},regularStyleSkipButtonInit:function(){var e=this.skipToContentButton;e.innerHTML=l.a.getSpecificContent("skip-to-content"),e.classList.add("regular"),e.classList.remove("arrow")},skipToContentEvent:function(e){e.setAttribute("tabindex","-1"),this.skipToContentButton.addEventListener("click",(function(){return e.focus()}))},changeNavTypeInVariousDevice:function(){var e=this,t=function(){var t=document.body;e.upperBreakpoint.matches?(t.classList.contains("mobile-menu-active")&&e.removeOffCanvasMenu(),e.nav.classList.add("desktop"),e.nav.classList.remove("mobile")):(e.nav.classList.add("mobile"),e.nav.classList.remove("desktop"))};t(),this.upperBreakpoint.addListener(t)},dynamicHeaderBackground:function(){window.addEventListener("scroll",this.dynamicHeaderEvent),this.dynamicHeaderEvent()},staticHeaderBackground:function(){window.removeEventListener("scroll",this.dynamicHeaderEvent),this.staticHeaderEvent()},dynamicHeaderEvent:function(){var e=document.documentElement.scrollTop,t=document.querySelector("header");e>0?t.classList.add("active"):t.classList.remove("active")},staticHeaderEvent:function(){this.header.classList.add("active")},hoverEffectMenuItem:function(){this.menuListItem.forEach((function(e){e.addEventListener("mouseover",(function(){e.classList.remove("before"),e.classList.add("active")})),e.addEventListener("mouseout",(function(){e.classList.remove("active"),e.classList.add("after");setTimeout((function(){e.classList.remove("after"),e.classList.add("before")}),300)}))}))},hamburgerMenuEvent:function(){var e=this,t=this.hamburgerMenu;t.addEventListener("click",(function(){e.toggleOffCanvasMenu(),t.classList.contains("close")?t.setAttribute("tabindex","1"):t.removeAttribute("tabindex")}))},removeOffCanvasMenu:function(){this.hamburgerMenu.classList.remove("close"),this.nav.classList.remove("active"),document.body.classList.remove("mobile-menu-active")},toggleOffCanvasMenu:function(){this.hamburgerMenu.classList.toggle("close"),this.nav.classList.toggle("active"),document.body.classList.toggle("mobile-menu-active")},dropDownConfig:function(){var e=this;this.dropDownType.forEach((function(t){e.displayButtonConfig(t),e.floatButtonsConfig(t)}))},displayButtonConfig:function(e){var t=this;document.querySelector(".".concat(e,"-setting > button")).addEventListener("click",(function(){t.underBreakpoint.matches&&t.floatMenuRemove(e),t.dropDownToggle(e)}))},floatButtonsConfig:function(e){var t=this;document.querySelectorAll(".".concat(e,"-setting .float-setting button")).forEach((function(n){n.addEventListener("click",(function(){t.underBreakpoint.matches&&t.toggleOffCanvasMenu(),t.dropDownToggle(e)}))}))},floatMenuRemove:function(e){var t=this.dropDownType.filter((function(t){return t!==e}));this.dropDownRemove(t)},dropDownRemove:function(e){var t=document.querySelector(".".concat(e,"-setting > button svg")),n=document.querySelector(".".concat(e,"-setting .float-setting"));t.classList.remove("fa-rotate-180"),n.classList.remove("show")},dropDownToggle:function(e){var t=document.querySelector(".".concat(e,"-setting > button svg")),n=document.querySelector(".".concat(e,"-setting .float-setting"));t.classList.toggle("fa-rotate-180"),n.classList.toggle("show")}};t.a=o},27:function(e,t,n){"use strict";var a=n(28),i=n(29),l={init:function(e){var t=e.container;this.container=t,this.defineCustomElements(),this.createFooterTop(),this.createFooterBottom()},defineCustomElements:function(){customElements.define("footer-top",a.a),customElements.define("footer-bottom",i.a)},createFooterTop:function(){var e=document.createElement("footer-top");this.container.appendChild(e)},createFooterBottom:function(){var e=document.createElement("footer-bottom");this.container.appendChild(e)}};t.a=l},30:function(e,t,n){"use strict";var a=n(31),i=n(32),l=n(33),o={init:function(e){var t=e.container;this.footerContainer=t,this.defineCustomElements(),this.createToastContainer()},defineCustomElements:function(){customElements.define("error-page",a.a),customElements.define("toast-container",i.a),customElements.define("toast-item",l.a)},createToastContainer:function(){var e=document.body,t=this.footerContainer,n=document.createElement("toast-container");e.insertBefore(n,t.nextSibling)}};t.a=o},8:function(e){e.exports=JSON.parse('{"specific":[{"item":"title","en":{"content":"Arima - Find Your Restaurant in Here"},"id":{"content":"Arima - Temukan Restoranmu di Sini"}},{"item":"skip-to-content","en":{"content":"Skip to Content"},"id":{"content":"Lompat ke Konten Utama"}},{"item":"main-content","en":{"content":"Main Content"},"id":{"content":"Konten Utama"}},{"item":"error-page","en":{"content":"Error Page"},"id":{"content":"Halaman Eror"}},{"item":"recommended-restaurants","en":{"content":"Recommended Restaurants"},"id":{"content":"Rekomendasi Restoran"}},{"item":"favorites-restaurant","en":{"content":"Favorites Restaurant"},"id":{"content":"Restoran Favorit"}},{"item":"search-name-placeholder","en":{"content":"Search your restaurant in here"},"id":{"content":"Cari restoranmu di sini"}},{"item":"name","en":{"content":"name"},"id":{"content":"nama"}},{"item":"city","en":{"content":"city"},"id":{"content":"kota"}},{"item":"something-wrong","en":{"content":"Sorry, something went wrong."},"id":{"content":"Maaf, sepertinya terjadi kesalahan."}},{"item":"no-favorites","en":{"content":"No Favorites Restaurant"},"id":{"content":"Tidak Ada Restoran Favorit"}},{"item":"no-favorites-message","en":{"content":"Add favorites restaurant in detail page."},"id":{"content":"Tambah restoran favorit di halaman detail."}},{"item":"page-not-found","en":{"content":"Page Not Found"},"id":{"content":"Halaman Tidak Ditemukan"}},{"item":"no-restaurant-list","en":{"content":"No restaurant list."},"id":{"content":"Tidak ada daftar restoran."}},{"item":"cannot-load-restaurants","en":{"content":"Cannot Load Restaurants"},"id":{"content":"Tidak Dapat Memuat Restoran"}},{"item":"cannot-load-detail","en":{"content":"Cannot Load Restaurant Detail"},"id":{"content":"Tidak Dapat Memuat Detail Restoran"}},{"item":"restaurant-added","en":{"content":"Restaurant has been added to favorites."},"id":{"content":"Restoran telah ditambahkan ke favorit."}},{"item":"restaurant-deleted","en":{"content":"Restaurant has been deleted from favorites."},"id":{"content":"Restoran telah dihapus dari favorit."}},{"item":"restaurant-has-added","en":{"content":" has been added to favorites."},"id":{"content":" telah ditambahkan ke favorit."}},{"item":"restaurant-has-deleted","en":{"content":" has been deleted from favorites."},"id":{"content":" telah dihapus dari favorit."}},{"item":"review-name-placeholder","en":{"content":"Name"},"id":{"content":"Nama"}},{"item":"review-content-placeholder","en":{"content":"Review"},"id":{"content":"Ulasan"}},{"item":"form-must-filled","en":{"content":"Form must be filled!"},"id":{"content":"Formulir harus diisi!"}},{"item":"add-review-success","en":{"content":"Review has been added."},"id":{"content":"Ulasan berhasil ditambahkan."}},{"item":"add-review-failed","en":{"content":"Review has failed to added."},"id":{"content":"Ulasan gagal ditambahkan."}}],"general":[{"item":1,"en":{"content":null,"title":"Skip to Content","label":"Skip to Content"},"id":{"content":null,"title":"Lompat ke Konten Utama","label":"Lompat ke Konten Utama"}},{"item":2,"en":{"content":"Home","title":"Home","label":null},"id":{"content":"Beranda","title":"Beranda","label":null}},{"item":3,"en":{"content":"About Us","title":"About Us","label":null},"id":{"content":"Tentang Kami","title":"Tentang Kami","label":null}},{"item":4,"en":{"content":"Favorites","title":"Favorites","label":null},"id":{"content":"Favorit","title":"Favorit","label":null}},{"item":5,"en":{"content":null,"title":"Choose Color Themes","label":"Choose Color Themes"},"id":{"content":null,"title":"Pilih Tema Warna","label":"Pilih Tema Warna"}},{"item":6,"en":{"content":"Color Themes","title":null,"label":null},"id":{"content":"Tema Warna","title":null,"label":null}},{"item":7,"en":{"content":"<i class=\'color-icon\'></i>Orange","title":"Orange","label":"Orange"},"id":{"content":"<i class=\'color-icon\'></i>Oranye","title":"Oranye","label":"Oranye"}},{"item":8,"en":{"content":"<i class=\'color-icon\'></i>Green","title":"Green","label":"Green"},"id":{"content":"<i class=\'color-icon\'></i>Hijau","title":"Hijau","label":"Hijau"}},{"item":9,"en":{"content":"<i class=\'color-icon\'></i>Red","title":"Red","label":"Red"},"id":{"content":"<i class=\'color-icon\'></i>Merah","title":"Merah","label":"Merah"}},{"item":10,"en":{"content":"<i class=\'color-icon\'></i>Blue","title":"Blue","label":"Blue"},"id":{"content":"<i class=\'color-icon\'></i>Biru","title":"Biru","label":"Biru"}},{"item":11,"en":{"content":"<i class=\'color-icon\'></i>Night Mode","title":"Night Mode","label":"Night Mode"},"id":{"content":"<i class=\'color-icon\'></i>Mode Malam","title":"Mode Malam","label":"Mode Malam"}},{"item":12,"en":{"content":null,"title":"Choose Languages","label":"Choose Languages"},"id":{"content":null,"title":"Pilih Bahasa","label":"Pilih Bahasa"}},{"item":13,"en":{"content":"Copyright &copy; 2020","title":null,"label":null},"id":{"content":"Hak Cipta &copy; 2020","title":null,"label":null}},{"item":14,"en":{"content":"Copyright &copy; 2020 <b>Arima</b>","title":null,"label":null},"id":{"content":"Hak Cipta &copy; 2020 <b>Arima</b>","title":null,"label":null}},{"item":15,"en":{"content":"Made with <i class=\'fas fa-heart fa-fw\'></i> by <b>Alfayed Dennita</b>","title":null,"label":null},"id":{"content":"Dibuat dengan <i class=\'fas fa-heart fa-fw\'></i> oleh <b>Alfayed Dennita</b>","title":null,"label":null}},{"item":16,"en":{"content":"Find your best restaurant from here, only at Arima!","title":null,"label":null},"id":{"content":"Temukan restoranmu dari sini, hanya di Arima!","title":null,"label":null}},{"item":17,"en":{"content":"#FindTheBest","title":null,"label":null},"id":{"content":"#TemukanYangTerbaik","title":null,"label":null}},{"item":18,"en":{"content":"Best Rating Restaurants","title":null,"label":null},"id":{"content":"Restoran Terbaik","title":null,"label":null}},{"item":19,"en":{"content":"<i class=\'fas fa-exclamation-circle\'></i>Search Restaurant by Name","title":null,"label":null},"id":{"content":"<i class=\'fas fa-exclamation-circle\'></i>Cari Restoran Berdasarkan Nama","title":null,"label":null}},{"item":20,"en":{"content":null,"title":"Search Restaurant by City","label":"Search Restaurant by City"},"id":{"content":null,"title":"Cari Restoran Berdasarkan Kota","label":"Cari Restoran Berdasarkan Kota"}},{"item":21,"en":{"content":"Search by City","title":null,"label":null},"id":{"content":"Cari kota","title":null,"label":null}},{"item":22,"en":{"content":"Show All","title":"Show All Restaurant","label":"Show All Restaurant"},"id":{"content":"Lihat Semua","title":"Lihat Semua Restoran","label":"Lihat Semua Restoran"}},{"item":23,"en":{"content":"Result search by","title":null,"label":null},"id":{"content":"Hasil pencarian berdasarkan","title":null,"label":null}},{"item":24,"en":{"content":null,"title":"Reset Search Settings","label":null},"id":{"content":null,"title":"Reset Pengaturan Pencarian","label":null}},{"item":25,"en":{"content":"is <strong>not found</strong>","title":null,"label":null},"id":{"content":"<strong>tidak ditemukan</strong>","title":null,"label":null}},{"item":26,"en":{"content":null,"title":"Add to Favorites","label":"Add to Favorites"},"id":{"content":null,"title":"Tambahkan ke Favorit","label":"Tambahkan ke Favorit"}},{"item":27,"en":{"content":null,"title":"Delete from Favorites","label":"Delete from Favorites"},"id":{"content":null,"title":"Hapus dari Favorit","label":"Hapus dari Favorit"}},{"item":28,"en":{"content":"<i class=\'fas fa-hamburger\'></i>Foods Menu","title":null,"label":null},"id":{"content":"<i class=\'fas fa-hamburger\'></i>Menu Makanan","title":null,"label":null}},{"item":29,"en":{"content":"<i class=\'fas fa-glass-cheers\'></i>Drinks Menu","title":null,"label":null},"id":{"content":"<i class=\'fas fa-glass-cheers\'></i>Menu Minuman","title":null,"label":null}},{"item":30,"en":{"content":"Show All","title":"Show All Reviews","label":"Show All Reviews"},"id":{"content":"Lihat Semua","title":"Lihat Semua Ulasan","label":"Lihat Semua Ulasan"}},{"item":31,"en":{"content":"<i class=\'fas fa-comments\'></i>Consumer Reviews","title":null,"label":null},"id":{"content":"<i class=\'fas fa-comments\'></i>Ulasan Konsumen","title":null,"label":null}},{"item":32,"en":{"content":"<i class=\'fas fa-comment-dots\'></i>Add New Review","title":null,"label":null},"id":{"content":"<i class=\'fas fa-comment-dots\'></i>Beri Ulasan","title":null,"label":null}},{"item":33,"en":{"content":"<i class=\'fas fa-exclamation-circle\'></i>Type Your Name","title":null,"label":null},"id":{"content":"<i class=\'fas fa-exclamation-circle\'></i>Masukkan Nama","title":null,"label":null}},{"item":34,"en":{"content":null,"title":null,"label":"Review"},"id":{"content":null,"title":null,"label":"Ulasan"}},{"item":35,"en":{"content":"<i class=\'fas fa-exclamation-circle\'></i>Type Your Review","title":null,"label":null},"id":{"content":"<i class=\'fas fa-exclamation-circle\'></i>Masukkan Ulasan","title":null,"label":null}},{"item":36,"en":{"content":"Add Review","title":"Add Review","label":null},"id":{"content":"Beri Ulasan","title":"Beri Ulasan","label":null}},{"item":37,"en":{"content":"<i class=\'fas fa-store\'></i>Nearest Restaurants","title":null,"label":null},"id":{"content":"<i class=\'fas fa-store\'></i>Restoran Terdekat","title":null,"label":null}},{"item":38,"en":{"content":"Back to Home","title":"Back to Home","label":null},"id":{"content":"Kembali ke Beranda","title":"Kembali ke Beranda","label":null}},{"item":39,"en":{"content":"There are no reviews yet","title":null,"label":null},"id":{"content":"Belum ada ulasan","title":null,"label":null}}]}')}}]);