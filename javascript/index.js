const input = document.getElementById('email')
const subscribeButton = document.getElementById('subscribeButton')
const overlay = document.getElementById('overlay')
const dismisButton = document.getElementById('dismissButton')
const confirmedEmail = document.getElementById('confirmedEmail')
const errorMsg = document.getElementById('error-msg')
let storedValue = ""



function isValidEmail(email) {
    // Basic RFC-2822 compliant regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}


    subscribeButton.addEventListener('click', () => {
      const value = input.value.trim()
      
      if (value === "" || !isValidEmail(value)) {
        //mark as empty so that placeholder pseudo-element can detect
        input.classList.add('empty')
        errorMsg.style.visibility = "visible"
        input.style.backgroundColor = 'hsl(2, 37%, 86%)'
        input.style.borderRadius = "8px"
        input.style.borderColor = 'hsl(4, 100%, 67%)'
        input.value = "";              
        input.placeholder = 'email@company.com'
      } else {
        errorMsg.style.visibility = "hidden"
        const storedValue = value;
        confirmedEmail.innerHTML = storedValue
        overlay.style.visibility = "visible"
      }
    });

    dismisButton.addEventListener("click",() => {
        overlay.style.visibility = "hidden"
        confirmedEmail.innerHTML = ""
    })

    input.addEventListener('click', (e) => {
        e.target.style.backgroundColor = 'white'
        e.target.style.borderColor = "black"
        input.classList.remove('empty')
        errorMsg.style.visibility = "hidden"
    });


