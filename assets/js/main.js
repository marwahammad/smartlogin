document.addEventListener('DOMContentLoaded',()=>{


  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  const nameRegex = /^[a-z0-9_-]{3,15}$/;
  /* sign up elements*/
  const signupEmail = document.getElementById("uemail");
  const signupPassword = document.getElementById("upassword");
  const signupName = document.getElementById("uname");
  
  /* sign in  elements*/
  const signinEmail = document.getElementById("useremail");
  const signinPassword = document.getElementById("userpassword");
  
  /*check data validation*/
  const validateInputs = (regex, inputvalue) => {
    return regex.test(inputvalue);
  };
  
  /* hide all msgs */
  const hideMsgs = () => {
     const msgs=document.querySelectorAll('p.text-danger , p.text-success');
    // const msgs = document.querySelectorAll(
    //   ".text-danger:not(.d-none) , .text-success:not(.d-none)"
    // );
    msgs.forEach((msg) => {
      msg.classList.add("d-none");
    });
  };
  
  /* signup method*/
  const signup = document.querySelector("button.signup");
  if(signup){

    signup.addEventListener("click", (e) => {
      e.preventDefault();
      const email = signupEmail.value;
      const username = signupName.value;
      const password = signupPassword.value;
    
      hideMsgs();
    
      if (email === "" || username === "" || password === "") {
        document.querySelector("p.required").classList.remove("d-none");
      } else {
        if (localStorage.getItem(email)) {
          document.querySelector("p.exists").classList.remove("d-none");
        } else {
          if (
            validateInputs(emailRegex, email) &&
            validateInputs(nameRegex, username) &&
            validateInputs(passwordRegex, password)
          ) {
            document.querySelector("p.success").classList.remove("d-none");
            localStorage.setItem(email, JSON.stringify({ username, password }));
          } else {
            document.querySelector("p.invalid").classList.remove("d-none");
          }
        }
      }
    });
  }
  
  /* control login & signup form appereance */
  const viewHideForm = (viewoneID, hideoneID) => {
    document.getElementById(viewoneID).classList.remove("d-none");
    document.getElementById(hideoneID).classList.add("d-none");
  };
  /* signin link */
  const loginLink = document.querySelector("a.login-link");
  if(loginLink){

    loginLink.addEventListener("click", () => {
      loginLink.setAttribute("href", "#loginme");
      viewHideForm("loginme", "signmeup");
    });
    
  }
  /* signup link */
  const signupLink = document.querySelector("a.signup-link");
if(signupLink){
  signupLink.addEventListener("click", () => {
    signupLink.setAttribute("href", "#signmeup");
    viewHideForm("signmeup", "loginme");
  });
}
  
  /* login method */
  const login = document.querySelector("button.login");
  if(login){
    login.addEventListener("click", (e) => {
      e.preventDefault();
      email = signinEmail.value;
      password = signinPassword.value;
      hideMsgs();
      if (email === "" || password === "") {
        document.querySelector("p.requiredInputs").classList.remove("d-none");
      } else {
        if (localStorage.getItem(email) !== null) {
          const data = JSON.parse(localStorage.getItem(email));
          // console.log(data);
          if (data.password === password) {
            localStorage.setItem('currentuser',data.username)
            window.location.href = "../../pages/welcome.html";
          } else {
            document.querySelector("p.incorrectInputs").classList.remove("d-none");
          }
        } else {
          document.querySelector("p.incorrectInputs").classList.remove("d-none");
        }
      }
    });
  }


  /*  */
});
