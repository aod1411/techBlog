const SignUpForm = async function(event){
event.preventDefault()

const userNameInput = document.getElementById("usernameSignup");
const passwordInput = document.getElementById("passwordSignup");

const response = await fetch("/api/user", {
    method: 'POST',
    body: JSON.stringify({
        username: userNameInput.value,
        password: passwordInput.value,
    }),
    headers: { "Content-Type": "application/json"},
})

if(response.ok){
    document.location.replace("/dashboard")
} else {
    alert("Sign Up Failed! Try Again!")
}


}

document.getElementById("signupBtn").addEventListener("click", SignUpForm);