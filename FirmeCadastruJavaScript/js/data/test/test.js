let testContainer= document.getElementById("test-container")
console.log(testContainer)

const renderPosts = async () => {
    let uri = 'http://localhost:3000/posts';
    const res = await fetch(uri);
    const posts = await res.json();
    let template = '';
    console.log(template)
    posts.forEach(post => {
        template += `
      <div class="col-lg-10 margin-50px-bottom center-col">
                    <div class="listing-detail margin-10px-bottom sm-margin-35px-bottom">
                        <h6 class="font-weight-400 pl-4"><a href="oficiu-cadastru.html"
                                                       class="margin-10px-right text-theme-color">
                            <i class="fas fa-home  text-theme-color"></i>
                            Oficiul de cadastru si publicitate imobiliara
                            ${post.title}</a></h6>
                    </div>
                    <table class="table table-hover table-bordered table-responsive-sm">
                        <tbody>
                        <tr class="bg-light-gray">
                            <th class="pl-3">Birou</th>
                            <td class="text-center"><b>Adresa</b></td>
                        </tr>
                        <tr>
                            <td class="pl-3"><a href="#" class="font-weight-bold">${post.title}</a></td>
                            <td class="pl-3">${post.likes}</td>
                        </tr>
                          <tr>
                            <td class="pl-3"><a href="#" class="font-weight-bold">${post.title}</a></td>
                            <td class="pl-3">${post.likes}</td>
                        </tr>
                          <tr>
                            <td class="pl-3"><a href="#" class="font-weight-bold">${post.title}</a></td>
                            <td class="pl-3">${post.likes}</td>
                        </tr>
                          <tr>
                            <td class="pl-3"><a href="#" class="font-weight-bold">${post.title}</a></td>
                            <td class="pl-3">${post.likes}</td>
                        </tr>
                          <tr>
                            <td class="pl-3"><a href="#" class="font-weight-bold">${post.title}</a></td>
                            <td class="pl-3">${post.likes}</td>
                        </tr>

                        </tbody>
                    </table>
                </div>
    `
        testContainer.innerHTML = template;
    });
}
// console.log(renderPosts())
