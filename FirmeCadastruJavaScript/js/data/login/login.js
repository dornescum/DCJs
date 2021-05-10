const name = document.getElementById('username');
const password = document.getElementById('password');
const formLogin = document.getElementById('form-login');
const errorLogin = document.getElementById('errorLogin');
const loginBtn = document.getElementById('loginBtn');
console.log(formLogin)

// formLogin.addEventListener('submit', (e) => {
//     let messages = []
//     if (name.value === ' ' || name.value == null) {
//         // messages.push('Name is required')
//         alert('test')
//     }
//
//     if (messages.length > 0) {
//         // e.preventDefault();
//         errorLogin.innerText = messages.join(', ')
//     }
// })

loginBtn.addEventListener('click', (e) => {
    let messages = []
    if (name.value === ' ') {
        messages.push('Name is required')
        alert('rerere')
        console.log('test')
    }
    if (messages.length > 0) {
        e.preventDefault();
        alert('test')
        errorLogin.innerText = messages.join(',')
    }
    console.log(messages.length)
})
// errorLogin.innerText = 'test'
