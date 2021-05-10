let linkOficii = document.getElementById("test")

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


// export default linkOficii

const OCM ='./data/data.json';
const getInfoBi = async ()=>{
    const response = await fetch(OCM);
    const data = await response.json();
    return data;
}

getInfoBi().then((data)=>{
    console.log(data)

    linkOficii.innerHTML =data.map((item)=>{
        const {country, adress, phone, email, town, id, link} = item;

        return `
            <div class="container" >
            <div class="listing-detail margin-50px-bottom sm-margin-35px-bottom">
                <h3 class="font-weight-900 border-bottom text-center">Oficii si birouri de cadastru din judetul
                    <code>${town}</code></h3>
            </div>
            <div class="margin-10px-bottom">
                <a href="${link}" class="font-weight-bold margin-10px-right text-theme-color">
                    <i class="fas fa-arrow-alt-circle-right"></i>
                    Lista firmelor de cadastru din judetul ${town}</a>
            </div>
            <div><h6>
                Oficiul de cadastru si publicitate imobiliara ${country}
            </h6></div>
            <div class="row">
                <div class="col-lg-8 margin-10px-bottom pt-1">
                    <table class="table table-hover table-bordered">
                        <thead>
                        <tr class="bg-light-gray">
                            <td colspan="2"><i class="fa fa-address-book margin-10px-right text-theme-color padding-25px-left"
                                   aria-hidden="true"></i>Date de contact
                            </td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td class="pl-3">Adresa</td>
                            <td class="pl-3">${adress}
                                <a href="#"  data-tool-tip="${town}">
                                    <i class="fa fa-map-marked-alt text-theme-color"></i>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td class="pl-3">Telefon</td>
                            <td class="pl-3"> ${phone}</td>
                        </tr>
                        <tr>
                            <td class="pl-3">Email</td>
                            <td class="pl-3"><a href="" class="text-theme-color"> ${email}</a></td>
                        </tr>
                        <tr>
                            <td class="pl-3">Id</td>
                            <td class="pl-3">${id}</td>
                        </tr>
                        <tr>
                            <td class="pl-3">Website</td>
                            <td class="pl-3"><a href="#" class="text-theme-color">${email}</a></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-lg-4 pt-1">
                    <table class="table table-hover table-bordered">
                         <tr class="bg-light-gray">
                             <th scope="row"><i class="fas fa-calendar-alt padding-20px-left text-theme-color"
                                                aria-hidden="true"></i>
                             </th>
                             <td class="pl-3"><b>Public</b></td>
                             <td class="pl-3"><b>Autorizati</b></td>
                         </tr>
                         <tr>
                             <th scope="row" class="pl-3">Luni</th>
                             <td class="pl-3"></td>
                             <td class="pl-3"></td>
                         </tr>
                         <tr>
                             <th scope="row" class="pl-3">Marti</th>
                             <td class="pl-3"></td>
                             <td class="pl-3"></td>
                         </tr>
                         <tr>
                             <th scope="row" class="pl-3">Miercuri</th>
                             <td class="pl-3"></td>
                             <td class="pl-3"></td>
                         </tr>
                         <tr>
                             <th scope="row" class="pl-3">Joi</th>
                             <td class="pl-3"></td>
                             <td class="pl-3"></td>
                         </tr>
                         <tr>
                             <th scope="row" class="pl-3">Vineri</th>
                             <td class="pl-3"></td>
                             <td class="pl-3"></td>
                         </tr>
                     </table>
                 </div>
             </div>
         </div>
         `
    }).join('')
    console.log(linkOficii)
}).catch(err => console.log(err))


// const paginate =(el)=>{
//     const numberPerPage =10;
//     const numberOfPages =Math.ceil(el.length / numberPerPage)
//     const newEl = Array.from({length: numberOfPages}, (_index)=>{
//         const start = _index * numberPerPage;
//         return el.slice(start, start+numberPerPage)
//     })
//     return newEl;
// }


