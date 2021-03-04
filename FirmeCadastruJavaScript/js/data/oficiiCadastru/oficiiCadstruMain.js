const oficiiJudete = [
    {
        judet:"Alba",
        adresa:"jilava 22",
        coordonate:"46.077701,23.566273",
        telefon:"07252525",
        email:"rest@rest.com",
        fax:"07252525",
        website: "ceva.com",
        programPublic:{
            luni: "10-12",
            marti: "09-12",
            miercuri:"11-13",
            joi: "10-12",
            vineri: "11-16"
        },
         programAutorizati:{
            luni: "10-16",
            marti: "09-16",
            miercuri:"11-13",
            joi: "10-12",
            vineri: "11-16"
        },
        id: 1
    },
     {
        judet:"Arad",
        adresa:"jilava 22",
        coordonate:"46.077701,23.566273",
        telefon:"07252525",
        email:"rest@rest.com",
        fax:"07252525",
        website: "ceva.com",
        programPublic:{
            luni: "10-12",
            marti: "09-12",
            miercuri:"11-13",
            joi: "10-12",
            vineri: "11-16"
        },
         programAutorizati:{
            luni: "10-16",
            marti: "09-16",
            miercuri:"11-13",
            joi: "10-12",
            vineri: "11-16"
        },
         id: 2
    },
     {
        judet:"Arges",
        adresa:"jilava 22",
        coordonate:"46.077701,23.566273",
        telefon:"07252525",
        email:"rest@rest.com",
        fax:"07252525",
        website: "ceva.com",
        programPublic:{
            luni: "10-12",
            marti: "09-12",
            miercuri:"11-13",
            joi: "10-12",
            vineri: "11-16"
        },
         programAutorizati:{
            luni: "10-16",
            marti: "09-16",
            miercuri:"11-13",
            joi: "10-12",
            vineri: "11-16"
        },
         id: 3
    },
]
const linkOficii = document.getElementById("test")
console.log(linkOficii)

const birouriCadastru = oficiiJudete.map((item)=>{
    const {judet, adresa, coordonate, telefon, email, fax, website, programAutorizati, programPublic} = item;
    console.log(item)
    return `

            <div class="container" >
            <div class="listing-detail margin-50px-bottom sm-margin-35px-bottom">
                <h3 class="font-weight-900 border-bottom text-center">Oficii si birouri de cadastru din judetul
                    <code>${judet}</code></h3>
            </div>


            <div class="margin-10px-bottom">
                <a href="#" class="font-weight-bold margin-10px-right text-theme-color">
                    <i class="fas fa-arrow-alt-circle-right"></i>
                    Lista firmelor de cadastru din judetul ${judet}</a>
            </div>
            <div><h6>

                Oficiul de cadastru si publicitate imobiliara ${judet}
            </h6></div>
            <div class="row">


                <div class="col-lg-8 margin-10px-bottom pt-1">

                    <table class="table table-hover table-bordered table-responsive-sm">
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
                            <td class="pl-3">${adresa}
                                <a href="#"  data-tool-tip="${coordonate}">
                                    <i class="fa fa-map-marked-alt text-theme-color"></i>
                                </a>
                            </td>
                        </tr>

                        <tr>
                            <td class="pl-3">Telefon</td>
                            <td class="pl-3"> ${telefon}</td>
                        </tr>
                        <tr>
                            <td class="pl-3">Email</td>
                            <td class="pl-3"><a href="" class="text-theme-color"> ${email}</a></td>
                        </tr>
                        <tr>
                            <td class="pl-3">Fax</td>
                            <td class="pl-3">${fax}</td>
                        </tr>
                        <tr>
                            <td class="pl-3">Website</td>
                            <td class="pl-3"><a href="#" class="text-theme-color">${website}</a></td>
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
                            <td class="pl-3">${programPublic.luni}</td>
                            <td class="pl-3">${programAutorizati.luni}</td>

                        </tr>
                        <tr>
                            <th scope="row" class="pl-3">Marti</th>
                            <td class="pl-3">${programPublic.marti}</td>
                            <td class="pl-3">${programAutorizati.marti}</td>

                        </tr>
                        <tr>
                            <th scope="row" class="pl-3">Miercuri</th>
                            <td class="pl-3">${programPublic.miercuri}</td>
                            <td class="pl-3">${programAutorizati.miercuri}</td>

                        </tr>
                        <tr>
                            <th scope="row" class="pl-3">Joi</th>
                            <td class="pl-3">${programPublic.joi}</td>
                            <td class="pl-3">${programAutorizati.joi}</td>

                        </tr>
                        <tr>
                            <th scope="row" class="pl-3">Vineri</th>
                            <td class="pl-3">${programPublic.vineri}</td>
                            <td class="pl-3">${programAutorizati.vineri}</td>

                        </tr>
                    </table>
                </div>
            </div>


        </div>
        `

})
linkOficii.innerHTML = birouriCadastru

export default linkOficii