fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response)=>{
        return response.json()
    }).then((data)=>{
    let someThing = data.map((item)=>{
        const {userId, title} = item;
        // console.log(item)
        return `
               <div class="col-lg-10 margin-50px-bottom center-col">
                    <div class="listing-detail margin-10px-bottom sm-margin-35px-bottom">
                        <h6 class="font-weight-400 pl-4"><a href="oficiu-cadastru.html"
                                                       class="margin-10px-right text-theme-color">
                            <i class="fas fa-home  text-theme-color"></i>
                            Oficiul de cadastru si publicitate imobiliara
                            ${title}</a></h6>
                    </div>
                    <table class="table table-hover table-bordered table-responsive-sm">
                        <tbody>
                        <tr class="bg-light-gray">
                            <th class="pl-3">Birou</th>
                            <td class="text-center"><b>Adresa</b></td>
                        </tr>
                        <tr>
                            <td class="pl-3"><a href="#" class="font-weight-bold">${userId}</a></td>
                            <td class="pl-3">${title}</td>
                        </tr>
                          <tr>
                            <td class="pl-3"><a href="#" class="font-weight-bold">${userId}</a></td>
                            <td class="pl-3">${title}</td>
                        </tr>
                          <tr>
                            <td class="pl-3"><a href="#" class="font-weight-bold">${userId}</a></td>
                            <td class="pl-3">${title}</td>
                        </tr>
                          <tr>
                            <td class="pl-3"><a href="#" class="font-weight-bold">${userId}</a></td>
                            <td class="pl-3">${title}</td>
                        </tr>
                          <tr>
                            <td class="pl-3"><a href="#" class="font-weight-bold">${userId}</a></td>
                            <td class="pl-3">${title}</td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            `
    }).join("")
    birouriCadastruRomania.innerHTML = someThing
})