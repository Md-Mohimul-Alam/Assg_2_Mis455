function process() {
    var username = document.getElementById("nBox").value;
    var subject = document.getElementById("sBox").value;
    var phone = document.getElementById("phBox").value;
    var mail = document.getElementById("eBox").value;
    var message = document.getElementById("msgBox").value;

    document.getElementById("content").innerHTML = `
    <br> <br> <br>
    Hello <b><span class="blue">${username} </span></b>,<br>
    We have got your message, we'll <br>   
    contact with you very soon through this <br> <b><span class="blue">${mail} </span></b><br>`;
}