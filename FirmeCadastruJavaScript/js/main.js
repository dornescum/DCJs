
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



// let linkOficii = document.getElementById("test")
// const birouriCadastruRomania = document.getElementById("birouriCadastruRomania")
// console.log(birouriCadastruRomania)
// =========================== async await
// const getOficii = async () =>{
//    const response = await fetch("./data/oficiiCadastruJudete.json");
//    const data= await response.json();
//     console.log(data)
//     return data;
// };
// =======================


// ============================= oficiu cadastru judete
// fetch("./data/oficiiCadastruJudete.json")
//     .then((response)=>{
//         return  response.json()
//          console.log("resolve", response)
//      }).then(data=>{
//     // console.log(data)
//     linkOficii.innerHTML =data.map((item)=>{
//         const {judet, adresa, coordonate, telefon, email, fax, website, programAutorizati, programPublic, link} = item;
//         return `
//             <div class="container" >
//             <div class="listing-detail margin-50px-bottom sm-margin-35px-bottom">
//                 <h3 class="font-weight-900 border-bottom text-center">Oficii si birouri de cadastru din judetul
//                     <code>${judet}</code></h3>
//             </div>
//             <div class="margin-10px-bottom">
//                 <a href="${link}" class="font-weight-bold margin-10px-right text-theme-color">
//                     <i class="fas fa-arrow-alt-circle-right"></i>
//                     Lista firmelor de cadastru din judetul ${judet}</a>
//             </div>
//             <div><h6>
//                 Oficiul de cadastru si publicitate imobiliara ${judet}
//             </h6></div>
//             <div class="row">
//                 <div class="col-lg-8 margin-10px-bottom pt-1">
//                     <table class="table table-hover table-bordered">
//                         <thead>
//                         <tr class="bg-light-gray">
//                             <td colspan="2"><i class="fa fa-address-book margin-10px-right text-theme-color padding-25px-left"
//                                    aria-hidden="true"></i>Date de contact
//                             </td>
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
//                 <div class="col-lg-4 pt-1">
//                     <table class="table table-hover table-bordered">
//                          <tr class="bg-light-gray">
//                              <th scope="row"><i class="fas fa-calendar-alt padding-20px-left text-theme-color"
//                                                 aria-hidden="true"></i>
//                              </th>
//                              <td class="pl-3"><b>Public</b></td>
//                              <td class="pl-3"><b>Autorizati</b></td>
//                          </tr>
//                          <tr>
//                              <th scope="row" class="pl-3">Luni</th>
//                              <td class="pl-3">${programPublic.luni}</td>
//                              <td class="pl-3">${programAutorizati.luni}</td>
//                          </tr>
//                          <tr>
//                              <th scope="row" class="pl-3">Marti</th>
//                              <td class="pl-3">${programPublic.marti}</td>
//                              <td class="pl-3">${programAutorizati.marti}</td>
//                          </tr>
//                          <tr>
//                              <th scope="row" class="pl-3">Miercuri</th>
//                              <td class="pl-3">${programPublic.miercuri}</td>
//                              <td class="pl-3">${programAutorizati.miercuri}</td>
//                          </tr>
//                          <tr>
//                              <th scope="row" class="pl-3">Joi</th>
//                              <td class="pl-3">${programPublic.joi}</td>
//                              <td class="pl-3">${programAutorizati.joi}</td>
//                          </tr>
//                          <tr>
//                              <th scope="row" class="pl-3">Vineri</th>
//                              <td class="pl-3">${programPublic.vineri}</td>
//                              <td class="pl-3">${programAutorizati.vineri}</td>
//                          </tr>
//                      </table>
//                  </div>
//              </div>
//          </div>
//          `
//     }).join("")
//      }).catch((err)=>{
//     console.log("reject", err)})
// =============================

// oficii birouri cadastru judete eroare ciudata dar merge
// fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((response)=>{
//         return response.json()
//     }).then((data)=>{
//         let someThing = data.map((item)=>{
//             const {userId, title} = item;
//             // console.log(item)
//             return `
//                <div class="col-lg-10 margin-50px-bottom center-col">
//                     <div class="listing-detail margin-10px-bottom sm-margin-35px-bottom">
//                         <h6 class="font-weight-400 pl-4"><a href="oficiu-cadastru.html"
//                                                        class="margin-10px-right text-theme-color">
//                             <i class="fas fa-home  text-theme-color"></i>
//                             Oficiul de cadastru si publicitate imobiliara
//                             ${title}</a></h6>
//                     </div>
//                     <table class="table table-hover table-bordered table-responsive-sm">
//                         <tbody>
//                         <tr class="bg-light-gray">
//                             <th class="pl-3">Birou</th>
//                             <td class="text-center"><b>Adresa</b></td>
//                         </tr>
//                         <tr>
//                             <td class="pl-3"><a href="#" class="font-weight-bold">${userId}</a></td>
//                             <td class="pl-3">${title}</td>
//                         </tr>
//                           <tr>
//                             <td class="pl-3"><a href="#" class="font-weight-bold">${userId}</a></td>
//                             <td class="pl-3">${title}</td>
//                         </tr>
//                           <tr>
//                             <td class="pl-3"><a href="#" class="font-weight-bold">${userId}</a></td>
//                             <td class="pl-3">${title}</td>
//                         </tr>
//                           <tr>
//                             <td class="pl-3"><a href="#" class="font-weight-bold">${userId}</a></td>
//                             <td class="pl-3">${title}</td>
//                         </tr>
//                           <tr>
//                             <td class="pl-3"><a href="#" class="font-weight-bold">${userId}</a></td>
//                             <td class="pl-3">${title}</td>
//                         </tr>
//
//                         </tbody>
//                     </table>
//                 </div>
//             `
//         }).join("")
//     birouriCadastruRomania.innerHTML = someThing
// })
