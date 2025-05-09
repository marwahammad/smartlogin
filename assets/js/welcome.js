const username=localStorage.getItem('currentuser')
console.log(username)
const welcomeMsg=document.getElementById('welcome-msg');
welcomeMsg.innerHTML=`<p class="blue-para boxshadow w-25 p-5 text-center fs-3">welcome ${username}</p>
`;

const logout=document.querySelector('a.logout');
if(logout){
    logout.addEventListener('click',()=>{
        window.location.href = "https://marwahammad.github.io/smartlogin/index.html";
        // window.location.href='../../index.html'
        localStorage.removeItem('currentuser');
    })
}