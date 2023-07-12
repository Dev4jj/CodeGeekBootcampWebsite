




document.getElementById("contactSendBtn").addEventListener("click", function () {

    var firstName = document.querySelector("#fname")
    var Email = document.querySelector("#email")

    if (firstName.value !== "" && Email.value !== "") {
        alert("Your contact request has been recieved and we will contact you shortly through Email.")
    }
});

document.getElementById("submitApplyBtn").addEventListener("click", applyMsg)

function applyMsg() {

    var name = document.querySelector("#applyFname")
    var mailAddress = document.querySelector("#applyEmail")

    if (name.value !== "" && mailAddress.value !== "") {

        //The code below selects the <select> html with the #bootcamp id 
        //selects the index of the chosen option through [document.querySelector("#bootcamp").selectedIndex]
        //then prints the tex through .text
        var course = document.querySelector("#bootcamp").options[document.querySelector("#bootcamp").selectedIndex].text

        alert(" Thank you, " + name.value + " for choosing to learn how to code with CodeGeek" + " and for signing up for our " + course + " bootcamp.")
    }

}