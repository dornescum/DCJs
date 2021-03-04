
// extra
// nume site
document.title = 'Firme Cadastru'
// parerile clientilor
// ==========================================================================
// info review
let Testimonials = [
    {
        id: 100,
        text: ' Cu mult respect pentru amabilitatea dumneavoastra si promptitudinea in relatiile cu clientii si potentiali clienti. VA MULTUMESC MULT! Sa aveti o zi plina de bucurii si impliniri!',
        nume: 'Gigina.B',
        data: '01.01.2020'
    },
    {
        id: 101,
        text: ' Felicitări! M-ați surprins plăcut! Mulțumesc pentru promptitudine și interes pentru solicitanți! Numai bine va doresc! Acum voi analiza ofertele!',
        nume: 'Gigina.B',
        data: '01.01.2020'
    },
    {
        id: 102,
        text: ' Buna ziua, Vreau sa spun, ca am ramas placut surprinsa ,cand dupa nici 10 minute dupa ce am facut acea cerere, am inceput sa primesc raspunsuri, am putut sa cer detalii si mi s-a raspuns imediat. Totul a decurs rapid, profesionist, si s-a rezolvat nespus de repede. Multumesc si eu pentru serviciile bune pe care le dati, va doresc mult succes, si nu coborati stacheta. Felicitari!',
        nume: 'Ginina.B',
        data: '01.01.2020'
    },
]
// toate info firma
let ListaFirme = [
    {
        id: 101,
        numeFirma: 'Firma cadastru',
        img: 'https://images.unsplash.com/photo-1605812276723-c31bb1a68285?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        telefon: 112,
        fax: 112,
        adresa: ['strada x, nr y, ', 'Oras'],
        juset: 'Marea Neagra',
        clasa: 3,
        verificareAncpi: true,
        website: 'https://en.wikipedia.org/wiki/Victor_Ponta',
        scurtaPrezentare: 'lorem30dsaaaaaaaaaaaaaaaaaaaa dsaasd d sad asd asd asd asd d sa das dsa das ads ad asd asd asd dsadsadasdasdasd dsdas  asd asd asd ad asd ad',
        prezentare: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        abonament: 'pro',
        email: '@bennyhill',
        program: {
            public: {
                luni: '9-12',
                marti: '9-12',
                miercuri: '9-12',
                joi: '9-12',
                vineri: '9-12',
            },
            autorizati: {
                luni: '9-12',
                marti: '9-12',
                miercuri: '9-12',
                joi: '9-12',
                vineri: '9-12',
            },
        }
    }
]
let prezentareFirma = document.getElementById('prezentareFirma');
// console.log(ListaFirme)

let pareriClienti = document.getElementById('parerileClientilor');

window.addEventListener('DOMContentLoaded', function () {
    let displayTestimonials = Testimonials.map(function (item) {

        return `
                                <div class="card blockquote bg-light rounded">
                                    <p key=${item.id} class="p-clienti before-clienti text-extra-medium-gray">${item.text}</p>
                                    <ul class="d-flex justify-content-between">
                                        <li class="font-size12"><i class="far fa-calendar-alt"></i> ${item.data}</li>
                                        <li class="text-extra-medium-gray font-size16 font-italic">
                                            <i class="fas fa-user"></i> ${item.nume}.
                                        </li>

                                    </ul>
                                </div>`
    }).join('');
    // console.log(displayTestimonials)
    pareriClienti.innerHTML = displayTestimonials;
})

// genereaza  firma pro
window.addEventListener('DOMContentLoaded', function () {
    // modul firme
    let displayFirma = ListaFirme.map((item) => {
        return `
                    <div class="listing-detail margin-50px-bottom sm-margin-35px-bottom">
                        <h3 class="font-weight-500">${item.numeFirma}</h3>
                    </div>


                    <div class="widget">

                        <!--varianta table -->
                        <table class="table table-hover">

                            <tbody>

                            <tr>
                                <th scope="col" style="width: 40%"><b>${item.telefon}</b></th>
                                <th scope="col">
                                    <a class="butn btn-class-lenght"  >
                                        <i class="fas fa-phone"></i>
                                        vezi numarul de telefon
                                    </a>
                                </th>
                            </tr>
                            <tr>
                                <th><b>${item.email}</b></th>
                                <th>
                                    <a class="butn btn-class-lenght">
                                        <i class="fas fa-envelope"></i>
                                        vezi adresa de email
                                    </a>
                                </th>
                            </tr>

                            <tr>
                                <td><b>${item.fax}</b></td>
                                <td><i class="fa fa-fax margin-10px-right text-theme-color"></i> +40372873760</td>
                            </tr>

                            <tr>
                                <td><b>${item.adresa}</b></td>
                                <td><i class="fas fa-map-marked-alt margin-10px-right text-theme-color"></i> Str. Mihail Kogalniceanu, Nr. 2, Bl. 26, Sc. C, Ap. 3, Parter, Tulcea, jud. Tulcea</td>
                            </tr>

                            <tr>
                                <td><b>${item.juset}</b></td>
                                <td>
                                    <a href="#">${item.oras}</a>, <a href="#">Tulcea</a>
                                </td>
                            </tr>
                            <tr>
                                <td><b>${item.clasa}</b></td>
                                <td>III</td>
                            </tr>
                            <tr>
                                <td><b>Seria si nr.</b></td>
                                <td>RO-B-J 0037</td>
                            </tr>
                            <tr>
                                <td><b>${item.verificareAncpi}</b></td>
                                <td>
                                    <a class="butn btn-class-lenght">
                                        <i class="fas fa-check"></i> Autorizatie valabila
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td><b>Website</b></td>
                                <td>
                                    <a href="${item.website}" target="_blank">
                                        <i class="fa fa-external-link-alt  margin-10px-right text-theme-color"></i> 
                                        ${item.website}
                                    </a>
                                </td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                    
                      <!--scurta prezentare-->
                    <div class="margin-50px-bottom sm-margin-35px-bottom ">
                        <!--<h5 class="font-size20 border-bottom padding-20px-bottom">Scurta descriere</h5>-->
                        <p>
                          ${item.scurtaPrezentare}
                        </p>
                    </div>
                    
                      <!--prezentare-->
                    <div class="margin-50px-bottom sm-margin-35px-bottom ">
                        <h5 class="font-size20 border-bottom padding-20px-bottom">Prezentare</h5>
                        <p>
                           ${item.prezentare}
                        </p>
                    </div>
                    
                    
                    
                     <!--galeria foto clienti -->
                    <div class="margin-50px-bottom sm-margin-35px-bottom">
                        <h5 class="font-size20 border-bottom padding-20px-bottom">Galerie foto</h5>
                        <div class="owl-carousel owl-theme listing">
                            <div>
                                <img src=${item.img} alt="" />
                            </div>
                            <div>
                                <img src="img/content/clientiProfil.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    
                       <!--formular-->
                    <div class="comment-form">
                        <div class="title-g margin-30px-bottom">
                            <h3>Contact</h3>
                        </div>
                        <!--formular-->
                        <form action="#" id="comment-form" method="post">
                            <div class="controls">
                                <div class="row">
                                    <div class="col-md-6 form-group">
                                        <input id="form_name" type="text" name="name" placeholder="Nume" required="required">
                                    </div>
                                    <div class="col-md-6 form-group">
                                        <input id="form_phone" type="text" name="phone" placeholder="Telefon" required="required">
                                    </div>
                                </div>
                                <div class="row">

                                    <div class="col-md-12 form-group">
                                        <input id="form_email" type="email" name="email" placeholder="Email" required="required">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 form-group">
                                        <textarea id="form_message" name="message" placeholder="Mesaj" rows="4" required="required"></textarea>
                                    </div>
                                    <div class="col-md-12 text-right">
                                        <button type="submit" class="butn">
                                            <i class="fa fa-envelope"></i>
                                            <span>Trimite mesaj</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
        `
    }).join('');
    console.log(displayFirma)
    prezentareFirma.innerHTML = displayFirma;
    console.log(prezentareFirma)
})

