const LoginForm = async function(event){
    event.preventDefault()
    
    const userNameInput = document.getElementById("usernameLogin");
    const passwordInput = document.getElementById("passwordLogin");
    
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
    
    document.getElementById("loginBtn").addEventListener("click", LoginForm);