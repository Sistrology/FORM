function func(){
    var email = document.getElementById("Username").value;
    var pass = document.getElementById("Pssword").value;
    if(email === "syedafizanaz497@gmail.com" && pass == "123456"){
        alert("sucess full!")
        window.location.assign("des.html")
    }
    else{
        alert("Wrong entry valid")
    }
}