const isUser = false
const loggedUserame = 'John Doe' 

const header = document.getElementById('main-header')
const Authheader = document.getElementById('auth-header')
const loggedUser = document.getElementById('logged-user')

if(isUser){
    header.style.display = 'none'
    Authheader.style.display = 'block'
    loggedUser.innerHTML = loggedUserame
}
else{
    header.style.display = 'block'
    Authheader.style.display = 'none'
}