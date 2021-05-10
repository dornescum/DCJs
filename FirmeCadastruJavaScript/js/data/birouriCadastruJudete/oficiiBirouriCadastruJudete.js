const OBC ='./data/data.json'
// fetch("./data/oficiiBirouriCadastru.json")
// // fetch(OBC)
//     .then((response) => {
//         return response.json()})
//     .then((data) => {
//     let someThing = data.map((item) => {
//         const {judet, orase} = item;
//         // console.log(judet)
//         // console.log(orase)
//         return `
//                <div class="col-lg-10 margin-50px-bottom center-col">
//                     <div class="listing-detail margin-10px-bottom sm-margin-35px-bottom">
//                         <h6 class="font-weight-400 pl-4"><a href="oficiu-cadastru.html"
//                                                        class="margin-10px-right text-theme-color">
//                             <i class="fas fa-home  text-theme-color"></i>
//                             Oficiul de cadastru si publicitate imobiliara
//                             ${judet}</a></h6>
//                     </div>
//                     <table class="table table-hover table-bordered table-responsive-sm">
//                         <tbody>
//                         <tr class="bg-light-gray">
//                             <th class="pl-3">Birou</th>
//                             <td class="text-center"><b>Adresa</b></td>
//                         </tr>
//                         <tr>
//                             <td class="pl-3"><a href="#" class="font-weight-bold">${orase.map((item) => {
//             return item.oras
//         })}</a></td>
//                             <td class="pl-3">${orase.map((item) => {
//             return item.adresa
//         })}</td>
//                         </tr>
//
//                         </tbody>
//                     </table>
//                 </div>
//             `
//     }).join("")
//     birouriCadastruRomania.innerHTML = someThing
// })

const getInfo = async ()=>{
     const response = await fetch(OBC);
     const data = await response.json();
    return data;
}
getInfo().then(data =>{
    console.log(data)
    let someThing = data.map((item) => {
        const {town, country, id, email, adress} = item;

        return `
             <div class="col-lg-10 margin-50px-bottom>
                     <div class="listing-detail margin-10px-bottom sm-margin-35px-bottom">
                         <h6 class="font-weight-400 pl-4"><a href="oficiu-cadastru.html"
                                                        class="margin-10px-right text-theme-color">
                             <i class="fas fa-home  text-theme-color"></i>
                             Oficiul de cadastru si publicitate imobiliara
                             ${town}</a></h6>
                     </div>
                    <table class="table table-hover table-bordered table-responsive-sm" width="100%">
  <thead>
    <tr class="text-center">
      <th width="5%" >nr</th> 
      <th width="30%">adresa</th>
      <th width="20%">oras</th> 
      <th width="20%">email</th>
      <th  width="20%">tara</th>
    </tr>
  </thead>
  <tbody class="text-center">
    <tr>
      <th scope="row">${id}</th>
      <td>${adress}</td>
      <td>${town}</td>
      <td>${email}</td>
      <td>${country}</td>
    </tr>
   
  </tbody>
</table>
                </div>
            `
    }).join("")
    birouriCadastruRomania.innerHTML = someThing




}).catch(err => console.log(err));
