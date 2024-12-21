// function to generate random codes
function generateCode() {
    var code = " "; /* Initialize null value */
    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";

    //Generate multiple random characters multiple times using loop

    for (i = 1; i <= 8; i++) {
        var char = Math.random() * str.length;
        code += str.charAt(char);
    }
    return code;
}
document.getElementById("codes").innerHTML = generateCode();
// Disable button
function disableButton(btnvalue) {
    document.getElementById("submit").disabled = btnvalue;
    if (btnvalue == true) {
        document.getElementById().style.backgroundColor = "rgba(73, 119, 209, 0.3)";
        document.getElementById().style.color = "rgba(255, 255, 255, 0.5)";
    } else {
        document.getElementById("submit").style.backgroundColor =
            "rgba(73, 119, 209, 1)";
        document.getElementById().style.color = "rgba(255, 255, 255, 1)";
    }
}
var codebox = document.getElementById("codeentered");
codebox.addEventListener("input", evaluateCode);

function evaluateCode() {
    getCode = document.getElementById("codeenterd").value;
    var charset1 = getCode.trim();
    var charset2 = code.trim();
    if (charset1.length == charset2.length && charset1 == charset2) {
        disableButton(false);
    }
}
disableButton();