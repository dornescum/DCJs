const template = document.createElement('template');
template.innerHTML = `
  <style>
  .footer-card {
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    font-size: 15px;
}
.footer-card .container{
    width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.footer-card .container .row{
 display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.footer-card ul {
margin-top: 0;
margin-bottom: 1rem;
}
li {
list-style: none;
}
a {
color: #6f6f6f;
text-decoration: none;
transition-timing-function: ease-in-out;
-ms-transition-timing-function: ease-in-out;
-moz-transition-timing-function: ease-in-out;
-webkit-transition-timing-function: ease-in-out;
-o-transition-timing-function: ease-in-out;
transition-duration: .2s;
-ms-transition-duration: .2s;
-moz-transition-duration: .2s;
-webkit-transition-duration: .2s;
-o-transition-duration: .2s;
}
a:hover{
color: blue;
}
 .col-lg-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
@media screen and (max-width: 767px) {
    .footer-card .list-style-1 li {
        padding: 0 0 5px 0;
    }
    .footer-card .list-style-1 li:last-child {
        padding: 0;
    }
}

  </style>
  
 <div class="footer-card">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4  sm-margin-30px-bottom">
                  
                        <ul class="col-center">
                            <li ><a href="index.html"><i class="fa fa-map-marked-alt text-theme-color"></i> home page</a></li>
                            <li><a href="about.html"><i class="fa fa-book text-theme-color"></i> about</a></li>
                            <li><a href="oficii-birouri-cadastru.html"><i class="fa fa-building text-theme-color"></i> Oficii si birouri de cadastru</a></li>
                            <li><a href="localizare.html"><i class="fa fa-map-marker text-theme-color"></i>&nbsp; Localizare teren</a></li>
                            <li><a href="parerile-clientilor.html"><i class="fa fa-comment text-theme-color"></i> Parerile clientilor</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-4 sm-margin-30px-bottom">
                    
                        <ul class="col-list">
                            <li><a href="inscriere-firme.html"><i class="fa fa-user-plus text-theme-color"></i> Inscriere firma / PFA</a></li>
                            <li><a href="cauta-firma.html"><i class="fa fa-search text-theme-color"></i> Cauta firma / PFA</a></li>
                            <li><a href="termeni-conditii.html"><i class="fa fa-info-circle text-theme-color"></i> Termeni si conditii</a></li>
                            <li><a href="politica-de-confidentialitate.html"><i class="fa fa-info-circle text-theme-color"></i> Politica de confidentialitate</a></li>
                            <li><a href="politica-cookies.html"><i class="fa fa-info-circle text-theme-color"></i> Politica Cookies</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-4 sm-margin-30px-bottom">
                   
                        <ul class="col-list">
                            <li><a href="http://www.ancpi.ro/" target="_blank"><i class="fa fa-globe text-theme-color"></i> ANCPI</a></li>
                            <li><a href="http://geoportal.ancpi.ro/geoportal/imobile/Harta.html" target="_blank"><i class="fa fa-globe text-theme-color"></i> Geoportal ANCPI (Harta)</a></li>
                            <li><a href="http://epay.ancpi.ro/epay/SelectProd.action?prodId=1420" target="_blank"><i class="fa fa-globe text-theme-color"></i> Extras carte funciara online</a></li>
                            <li><a href="http://www.topo-online.ro/" target="_blank"><i class="fa fa-globe text-theme-color" ></i> Topo-Online</a></li>
                            <li><a href="https://old-rtk.topo-service.ro/" target="_blank"><i class="fa fa-globe text-theme-color"></i> Statii Permanente GPS</a></li>
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    

`;


class FooterCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        // this.shadowRoot.querySelector('h6').innerText = this.getAttribute('title');

    }


}

window.customElements.define('footer-card', FooterCard);