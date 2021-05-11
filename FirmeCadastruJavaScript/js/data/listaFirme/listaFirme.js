const listaFirme = document.getElementById("lista-firme");
const firmeSilver = document.getElementById("firmeSilver");
const firmeFree = document.getElementById("firmeFree")
const testLista = document.getElementById("testLista")
console.log(testLista)
// pro
fetch("./data/firme/listaFirme.json")
.then((response)=>{
    return response.json();
}).then((data)=>{
    let dataFirme = data.map((item)=>{
        // const {judet, oras, adresa, nume, website, clasa,telefon, email, seria, verificare, desc, isPro, isSilver, isFree, img} = item;
        // console.log(item)
        return `
           <div class="container">
            <div class="row margin-20px-bottom">
                    <div class="col-12">
                        <!-- 1 firma  -->
                        <div class="border-bottom margin-40px-bottom padding-40px-bottom xs-padding-30px-bottom shadow-lg p-3 mb-5 bg-white rounded">
                            <div class="card card-list border-0">
                                <div class="row align-items-center">

                                    <!-- poza stanga  -->
                                    <div class="col-md-5 col-lg-4 xs-margin-20px-bottom">
                                        <div class="card-list-img">
                                            <a href="firma-pro.html">
                                                <!--todo cum ai facut asta cursor pointer, ca nu am gasit clasa imgbox-->
                                                <img class="border-radius-5 imgbox" src="${item.img}" alt="Big Logo" />
                                            </a>
                                        </div>
                                    </div>

                                    <!-- continut dreapta  -->
                                    <div class="col-md-7 col-lg-8">
                                        <div class="card-body no-padding-tb">
                                            <div class="star">&nbsp;</div>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h5 class="card-title no-margin-bottom font-size22">
                                                    <a href="firma-pro.html" class="text-extra-dark-gray">
                                                        ${item.nume}
                                                    </a>
                                                </h5>
                                                <ul class="no-margin-bottom">
                                                    <li>
                                                        <a href="#" class="green-color">
                                                            <i class="fa fa-user-secret margin-5px-right sma"></i>${item.isPro}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p class="margin-20px-tb sm-margin-10px-top">
                                                ${item.desc}
                                            </p>

                                            <div class="row justify-content-between">


                                                <!--varianta butoane-->
<!--test-->
                                                <button class="btn btn-primary text-lowercase mobile1"><i class="fa fa-phone padding-5px-all"></i> ${item.telefon}</button>

                                                <button class="btn btn-primary text-lowercase mobile1"><i class="fa fa-envelope padding-5px-all"></i> ${item.email}</button>


                                            </div>


                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        `
    })
    listaFirme.innerHTML = dataFirme;
})
// silver
fetch("./data/firme/listaFirmeSilver.json")
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data)
    const firme = data.map((item)=>{
        const { nume, email,  desc, isSilver, img, link} = item;
        return `
          <div class="border-bottom margin-20px-bottom padding-20px-bottom xs-padding-20px-bottom">
                            <div class="card card-list border-0">
                                <div class="row align-items-center">
                                    <div class="col-md-5 col-lg-4 xs-margin-10px-bottom">
                                        <div class="card-img">
                                            <a href="${link}">
                                            <img class="border-radius-5 cursor-pointer" src="${img}" alt="" />
                                        </a>
                                        </div>
                                    </div>
                                    <div class="col-md-7 col-lg-8">
                                        <div class="card-body no-padding-tb">

                                            <div class="d-flex justify-content-between align-items-center">
                                                <h5 class="card-title no-margin-bottom font-size22">
                                                    <a href="firma-standard.html" class="text-extra-medium-gray">${nume}
                                                    </a>
                                                </h5>
                                                <ul class="no-margin-bottom">
                                                    <li style="font-size: .9em">
                                                        <a href="#" class="blue-color">
                                                            <i class="fa fa-user-alt margin-5px-right"></i>${isSilver}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <!--todo varianta temporara cu font mai mic-->
                                            <p class="margin-10px-tb sm-margin-10px-top font-size15">
                                                ${desc}
                                            </p>
                                            <div class="row justify-content-end">
                                                <button class="butn text-lowercase margin-10px-right">
                                                    <i class="fa fa-envelope"></i> ${email}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        `
    })
    firmeSilver.innerHTML = firme;
    console.log(firmeSilver)
})
// free
fetch("./data/firme/listaFirmeFree.json")
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data)
    const firme = data.map((item)=>{
        const { nume} = item;
        return `


                    <div class="col-lg-4 col-md-6 col-xs-12">
                        <div class="card card-1 text-lg-center">
                            <a class="font-size14 text-uppercase" href="firma-standard.html">${nume}</a>
                        </div>
                    </div>
        `
    }).join(" ")
    const firmeFilter = data.filter((item)=>{
        return item.nume === "Nume firma free 2"

    })


    // firmeFree.innerHTML = firmeFilter[0].nume;
    testLista.innerHTML = `
                    <div class="col-lg-4 col-md-6 col-xs-12">
                        <div class="card card-1 text-lg-center">
                            <a class="font-size14 text-uppercase" href="firma-standard.html">${firmeFilter[0].nume}</a>
                        </div>
                    </div>
        `;
    console.log(firmeFilter)
})
// test
// fetch("./data/firme/test.json")
//     .then((response)=>{
//         return response.json();
//     }).then((data)=>{
//     let dataFirme = data.map((item)=>{
//         // const {judet, oras, adresa, nume, website, clasa,telefon, email, seria, verificare, desc, isPro, isSilver, isFree, img} = item;
//         console.log(item)
//         return `
//            <div class="container">
//             <div class="row margin-20px-bottom">
//                     <div class="col-12">
//                         <!-- 1 firma  -->
//                         <div class="border-bottom margin-40px-bottom padding-40px-bottom xs-padding-30px-bottom shadow-lg p-3 mb-5 bg-white rounded">
//                             <div class="card card-list border-0">
//                                 <div class="row align-items-center">
//
//                                     <!-- poza stanga  -->
//                                     <div class="col-md-5 col-lg-4 xs-margin-20px-bottom">
//                                         <div class="card-list-img">
//                                             <a href="firma-pro.html">
//                                                 <!--todo cum ai facut asta cursor pointer, ca nu am gasit clasa imgbox-->
//                                                 <img class="border-radius-5 imgbox" src="${firme.img}" alt="Big Logo" />
//                                             </a>
//                                         </div>
//                                     </div>
//
//                                     <!-- continut dreapta  -->
//                                     <div class="col-md-7 col-lg-8">
//                                         <div class="card-body no-padding-tb">
//                                             <div class="star">&nbsp;</div>
//                                             <div class="d-flex justify-content-between align-items-center">
//                                                 <h5 class="card-title no-margin-bottom font-size22">
//                                                     <a href="firma-pro.html" class="text-extra-dark-gray">
//
//                                                     </a>
//                                                 </h5>
//                                                 <ul class="no-margin-bottom">
//                                                     <li>
//                                                         <a href="#" class="green-color">
//                                                             <i class="fa fa-user-secret margin-5px-right sma"></i>$
//                                                         </a>
//                                                     </li>
//                                                 </ul>
//                                             </div>
//                                             <p class="margin-20px-tb sm-margin-10px-top">
//
//                                             </p>
//
//                                             <div class="row justify-content-between">
//
//
//                                                 <!--varianta butoane-->
// <!--test-->
//                                                 <button class="btn btn-primary text-lowercase mobile1"><i class="fa fa-phone padding-5px-all"></i> </button>
//
//                                                 <button class="btn btn-primary text-lowercase mobile1"><i class="fa fa-envelope padding-5px-all"></i> </button>
//
//
//                                             </div>
//
//
//                                         </div>
//
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 </div>
//         `
//     })
//     listaFirme.innerHTML = dataFirme;
// })
