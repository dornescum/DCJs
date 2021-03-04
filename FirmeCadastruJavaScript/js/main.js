
/*-----------------------------------------------------------------------------------

    Theme Name: Finders - Directory Listing Template
    Description: Directory Listing Template
    Author: Chitrakoot Web
    Version: 1.0

    /* ----------------------------------

    JS Active Code Index
            
        01. Preloader
        02. Header class - on scroll
        03. Scroll To Top
        04. Parallax
        05. Resize function
        06. FullScreenHeight function
        07. ScreenFixedHeight function
        08. FullScreenHeight and screenHeight with resize function
        09. Copy to clipboard
        10. Sliders
        11. Tabs
        12. CountUp
        13. Countdown
        14. Stellar
        15. Range slider
        
    ---------------------------------- */


(function ($) {

    "use strict";

    let $window = $(window);


    /*------------------------------------
        01. Preloader
    --------------------------------------*/

    $('#preloader').fadeOut('normall', function () {
        $(this).remove();
    });

    /*------------------------------------
        02. Header class - on scroll
    --------------------------------------*/

    $window.on('scroll', function () {
        let scroll = $window.scrollTop();
        if (scroll <= 50) {
            $("header").removeClass("scrollHeader").addClass("fixedHeader");
        } else {
            $("header").removeClass("fixedHeader").addClass("scrollHeader");
        }
    });

    /*------------------------------------
        03. Scroll To Top
    --------------------------------------*/

    $window.on('scroll', function () {
        if ($(this).scrollTop() > 500) {
            $(".scroll-to-top").fadeIn(400);

        } else {
            $(".scroll-to-top").fadeOut(400);
        }
    });

    $(".scroll-to-top").on('click', function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 600);
    });

    /*------------------------------------
        04. Parallax
    --------------------------------------*/

    // sections background image from data background
    let pageSection = $(".parallax,.bg-img");
    pageSection.each(function () {
        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });


    /*------------------------------------
        05. Resize function
    --------------------------------------*/

    $window.resize(function (event) {
        setTimeout(function () {
            SetResizeContent();
        }, 500);
        event.preventDefault();
    });


    /*------------------------------------
        06. FullScreenHeight function
    --------------------------------------*/

    function fullScreenHeight() {
        let element = $(".full-screen");
        let $minheight = $window.height();
        element.css('min-height', $minheight);
    }


    /*------------------------------------
        07. ScreenFixedHeight function
    --------------------------------------*/

    function ScreenFixedHeight() {
        let $headerHeight = $("header").height();
        let element = $(".screen-height");
        let $screenheight = $window.height() - $headerHeight;
        element.css('height', $screenheight);
    }


    /*------------------------------------
        08. FullScreenHeight and screenHeight with resize function
    --------------------------------------*/

    function SetResizeContent() {
        fullScreenHeight();
        ScreenFixedHeight();
    }

    SetResizeContent();

    // === when document ready === //
    $(document).on("ready", function () {


        /*------------------------------------
            09. copy to clipboard
        --------------------------------------*/

        if ($(".copy-clipboard").length !== 0) {
            new clipboardjs('.copy-clipboard');
            $('.copy-clipboard').on('click', function () {
                let $this = $(this);
                // var originaltext = $this.text();
                $this.text('copied');
                settimeout(function () {
                    $this.text('copy')
                }, 2000);
            });
        }

        $(".slow-redirect a[href^='#']").click(function (e) {
            e.preventdefault();

            let position = $($(this).attr("href")).offset().top - 200;

            $("body, html").animate({
                scrolltop: position
            }, 1000);
        });


        /*------------------------------------
            10. sliders
        --------------------------------------*/

        // testmonials carousel1
        $('#testmonials-carousel').owlCarousel({
            loop: true,
            responsiveclass: true,
            autoplay: true,
            smartspeed: 800,
            nav: false,
            dots: true,
            center: true,
            margin: 0,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                }
            }
        });

        // default owlcarousel
        $('.listing-grid').owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            margin: 10,
            autoplay: true,
            smartspeed: 1000
        });

        // default owlcarousel
        $('.owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            margin: 0,
            autoplay: true,
            smartspeed: 500
        });


        /*------------------------------------
            11. tabs
        --------------------------------------*/

        //horizontal tab
        if ($(".horizontaltab").length !== 0) {
            $('.horizontaltab').easyresponsivetabs({
                type: 'default', //types: default, vertical, accordion
                width: 'auto', //auto or any width like 600px
                fit: true, // 100% fit in a container
                tabidentify: 'hor_1', // the tab groups identifier
                activate: function () { // callback function if tab is switched
                    let $tab = $(this);
                    let $info = $('#nested-tabinfo');
                    let $name = $('span', $info);
                    $name.text($tab.text());
                    $info.show();
                }
            });
        }


        /*------------------------------------
            12. countup
        --------------------------------------*/

        $('.countup').counterUp({
            delay: 25,
            time: 2000
        });


    });

    // === when window loading === //
    $window.on("load", function () {

        /*------------------------------------
            14. Stellar
        --------------------------------------*/

        // stellar
        $window.stellar();

        /*------------------------------------
            15. Range slider
        --------------------------------------*/

        let $priceRange = $(".price-range");
        if ($priceRange.length !== 0) {
            $priceRange.ionRangeSlider({
                type: "double",
                grid: true,
                min: 0,
                max: 1000,
                from: 200,
                to: 800,
                prefix: "$"
            });
        }

    });

})(jQuery);

// extra
// nume site
// document.title = 'Firme Cadastru'
//
// import Testimonials from "./data/testimonials.js";
//
// const reviewsCarousel1 =document.getElementById('review1')
// const reviewsCarousel2 =document.getElementById('review2')
// const reviewsCarousel3 =document.getElementById('review3')
// const numeReview1 = document.getElementById('numeReview1')
// const numeReview2 = document.getElementById('numeReview2')
// const numeReview3 = document.getElementById('numeReview3')
// window.addEventListener('DOMContentLoaded', function (){
//     let primulReview = Testimonials;
//     reviewsCarousel1.innerHTML = primulReview[0].text;
//     reviewsCarousel2.innerHTML = primulReview[1].text;
//     reviewsCarousel3.innerHTML = primulReview[2].text;
//     numeReview1.innerHTML = primulReview[0].nume;
//     numeReview2.innerHTML = primulReview[1].nume;
//     numeReview3.innerHTML = primulReview[2].nume;
// })
// import footer from "js/data/footer"

// template
// const template = document.createElement('template');
// template.innerHTML = `
//   <style>
//   .footer-card {
//     border-top: 1px solid rgba(0, 0, 0, 0.08);
//     font-size: 15px;
// }
// .footer-card .container{
//     width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;
//   margin-right: auto;
//   margin-left: auto;
// }d

// .footer-card .container .row{
//  display: -ms-flexbox;
//   display: flex;
//   -ms-flex-wrap: wrap;
//   flex-wrap: wrap;
//   margin-right: -15px;
//   margin-left: -15px;
// }
//
// .footer-card ul {
// margin-top: 0;
// margin-bottom: 1rem;
// }
// li {
// list-style: none;
// }
// a {
// color: #6f6f6f;
// text-decoration: none;
// transition-timing-function: ease-in-out;
// -ms-transition-timing-function: ease-in-out;
// -moz-transition-timing-function: ease-in-out;
// -webkit-transition-timing-function: ease-in-out;
// -o-transition-timing-function: ease-in-out;
// transition-duration: .2s;
// -ms-transition-duration: .2s;
// -moz-transition-duration: .2s;
// -webkit-transition-duration: .2s;
// -o-transition-duration: .2s;
// }
// a:hover{
// color: blue;
// }
//  .col-lg-4 {
//     -ms-flex: 0 0 33.333333%;
//     flex: 0 0 33.333333%;
//     max-width: 33.333333%;
//   }
// @media screen and (max-width: 767px) {
//     .footer-card .list-style-1 li {
//         padding: 0 0 5px 0;
//     }
//     .footer-card .list-style-1 li:last-child {
//         padding: 0;
//     }
// }
//
//   </style>
//
//  <div class="footer-card">
//             <div class="container">
//                 <div class="row">
//                     <div class="col-lg-4  sm-margin-30px-bottom">
//
//                         <ul class="col-center">
//                             <li ><a href="index.html"><i class="fa fa-map-marked-alt text-theme-color"></i> home page</a></li>
//                             <li><a href="about.html"><i class="fa fa-book text-theme-color"></i> about</a></li>
//                             <li><a href="oficii-birouri-cadastru.html"><i class="fa fa-building text-theme-color"></i> Oficii si birouri de cadastru</a></li>
//                             <li><a href="localizare.html"><i class="fa fa-map-marker text-theme-color"></i>Localizare teren</a></li>
//                             <li><a href="parerile-clientilor.html"><i class="fa fa-comment text-theme-color"></i> Parerile clientilor</a></li>
//                         </ul>
//                     </div>
//
//                     <div class="col-lg-4 sm-margin-30px-bottom">
//
//                         <ul class="col-list">
//                             <li><a href="inscriere-firme.html"><i class="fa fa-user-plus text-theme-color"></i> Inscriere firma / PFA</a></li>
//                             <li><a href="cauta-firma.html"><i class="fa fa-search text-theme-color"></i> Cauta firma / PFA</a></li>
//                             <li><a href="termeni-conditii.html"><i class="fa fa-info-circle text-theme-color"></i> Termeni si conditii</a></li>
//                             <li><a href="politica-de-confidentialitate.html"><i class="fa fa-info-circle text-theme-color"></i> Politica de confidentialitate</a></li>
//                             <li><a href="politica-cookies.html"><i class="fa fa-info-circle text-theme-color"></i> Politica Cookies</a></li>
//                         </ul>
//                     </div>
//
//                     <div class="col-lg-4 sm-margin-30px-bottom">
//
//                         <ul class="col-list">
//                             <li><a href="http://www.ancpi.ro/" target="_blank"><i class="fa fa-globe text-theme-color"></i> ANCPI</a></li>
//                             <li><a href="http://geoportal.ancpi.ro/geoportal/imobile/Harta.html" target="_blank"><i class="fa fa-globe text-theme-color"></i> Geoportal ANCPI (Harta)</a></li>
//                             <li><a href="http://epay.ancpi.ro/epay/SelectProd.action?prodId=1420" target="_blank"><i class="fa fa-globe text-theme-color"></i> Extras carte funciara online</a></li>
//                             <li><a href="http://www.topo-online.ro/" target="_blank"><i class="fa fa-globe text-theme-color" ></i> Topo-Online</a></li>
//                             <li><a href="https://old-rtk.topo-service.ro/" target="_blank"><i class="fa fa-globe text-theme-color"></i> Statii Permanente GPS</a></li>
//                         </ul>
//                     </div>
//
//                 </div>
//
//             </div>
//         </div>
//
//
// `;
//
//
// class FooterCard extends HTMLElement {
//     constructor() {
//         super();
//         this.attachShadow({mode: 'open'});
//         this.shadowRoot.appendChild(template.content.cloneNode(true));
//         // this.shadowRoot.querySelector('h6').innerText = this.getAttribute('title');
//     }
// }
//
// window.customElements.define('footer-card', FooterCard);

// import {linkOficii} from "./data/oficiiCadastru/oficiiCadstruMain";

let linkOficii = document.getElementById("test")
let ceva;
// =========================== async await
// const getOficii = async () =>{
//    const response = await fetch("./data/oficiiCadastruJudete.json");
//    const data= await response.json();
//     console.log(data)
//     return data;
// };
// =======================


// =============================
fetch("./data/oficiiCadastruJudete.json")
    .then((response)=>{
        return  response.json()
         console.log("resolve", response)
     }).then(data=>{
    // const values = Object.entries(data)
    // console.log(values)
    linkOficii.innerHTML =data.sentence.map((item)=>{
        return `<p>${item}</p>`
    })

}).catch((err)=>{
    console.log("reject", err)})
// =============================
// const birouriCadastru = data.map((item)=>{
//     const {judet, adresa, coordonate, telefon, email, fax, website, programAutorizati, programPublic} = item;
//     console.log(item)
//     return `
//
//             <div class="container" >
//             <div class="listing-detail margin-50px-bottom sm-margin-35px-bottom">
//                 <h3 class="font-weight-900 border-bottom text-center">Oficii si birouri de cadastru din judetul
//                     <code>${judet}</code></h3>
//             </div>
//
//
//             <div class="margin-10px-bottom">
//                 <a href="#" class="font-weight-bold margin-10px-right text-theme-color">
//                     <i class="fas fa-arrow-alt-circle-right"></i>
//                     Lista firmelor de cadastru din judetul ${judet}</a>
//             </div>
//             <div><h6>
//
//                 Oficiul de cadastru si publicitate imobiliara ${judet}
//             </h6></div>
//             <div class="row">
//
//
//                 <div class="col-lg-8 margin-10px-bottom pt-1">
//
//                     <table class="table table-hover table-bordered table-responsive-sm">
//                         <thead>
//                         <tr class="bg-light-gray">
//                             <td colspan="2"><i class="fa fa-address-book margin-10px-right text-theme-color padding-25px-left"
//                                    aria-hidden="true"></i>Date de contact
//                             </td>
//
//                         </tr>
//                         </thead>
//                         <tbody>
//                         <tr>
//                             <td class="pl-3">Adresa</td>
//                             <td class="pl-3">${adresa}
//                                 <a href="#"  data-tool-tip="${coordonate}">
//                                     <i class="fa fa-map-marked-alt text-theme-color"></i>
//                                 </a>
//                             </td>
//                         </tr>
//
//                         <tr>
//                             <td class="pl-3">Telefon</td>
//                             <td class="pl-3"> ${telefon}</td>
//                         </tr>
//                         <tr>
//                             <td class="pl-3">Email</td>
//                             <td class="pl-3"><a href="" class="text-theme-color"> ${email}</a></td>
//                         </tr>
//                         <tr>
//                             <td class="pl-3">Fax</td>
//                             <td class="pl-3">${fax}</td>
//                         </tr>
//                         <tr>
//                             <td class="pl-3">Website</td>
//                             <td class="pl-3"><a href="#" class="text-theme-color">${website}</a></td>
//                         </tr>
//                         </tbody>
//                     </table>
//                 </div>
//
//                 <div class="col-lg-4 pt-1">
//                     <table class="table table-hover table-bordered">
//                         <tr class="bg-light-gray">
//                             <th scope="row"><i class="fas fa-calendar-alt padding-20px-left text-theme-color"
//                                                aria-hidden="true"></i>
//                             </th>
//                             <td class="pl-3"><b>Public</b></td>
//                             <td class="pl-3"><b>Autorizati</b></td>
//
//                         </tr>
//                         <tr>
//                             <th scope="row" class="pl-3">Luni</th>
//                             <td class="pl-3">${programPublic.luni}</td>
//                             <td class="pl-3">${programAutorizati.luni}</td>
//
//                         </tr>
//                         <tr>
//                             <th scope="row" class="pl-3">Marti</th>
//                             <td class="pl-3">${programPublic.marti}</td>
//                             <td class="pl-3">${programAutorizati.marti}</td>
//
//                         </tr>
//                         <tr>
//                             <th scope="row" class="pl-3">Miercuri</th>
//                             <td class="pl-3">${programPublic.miercuri}</td>
//                             <td class="pl-3">${programAutorizati.miercuri}</td>
//
//                         </tr>
//                         <tr>
//                             <th scope="row" class="pl-3">Joi</th>
//                             <td class="pl-3">${programPublic.joi}</td>
//                             <td class="pl-3">${programAutorizati.joi}</td>
//
//                         </tr>
//                         <tr>
//                             <th scope="row" class="pl-3">Vineri</th>
//                             <td class="pl-3">${programPublic.vineri}</td>
//                             <td class="pl-3">${programAutorizati.vineri}</td>
//
//                         </tr>
//                     </table>
//                 </div>
//             </div>
//
//
//         </div>
//         `
//
// })
// linkOficii.innerHTML = birouriCadastru
