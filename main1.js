//function to validate name
function checkname() {
    var nam = document.getElementById('name').value;
    var rel = /^[a-zA-Z\s\'\-]{2,30}$/;
    if (rel.test(nam)) {
        document.getElementById("nmsg").style.color = "blue";
        document.getElementById("nmsg").innerHTML = "<strong>  Valid </strong>";
        return true;
    } else {
        document.getElementById("nmsg").style.color = "red";
        document.getElementById("nmsg").innerHTML = "<strong>   Enter 2-30 character </strong>";
        return false;
    }
}
//function to validate mobile number
function checkno() {
    var pho = document.getElementById('number').value;
    var rel = /^\d{10}$/;
    if (rel.test(pho)) {
        document.getElementById("pmsg").style.color = "green";
        document.getElementById("pmsg").innerHTML = "<strong> Valid </strong>";
        return true;
    } else {
        document.getElementById("pmsg").style.color = "red";
        document.getElementById("pmsg").innerHTML = "<strong>  Enter 10 digits </strong>";
        return false;
    }
}

//function to display order details

function display() {
    var name = document.getElementById("name").value;
    var mai = document.getElementById("mail").value;
    var no = document.getElementById("number").value;
    var flv = document.getElementById("model").value;
    var dat = document.getElementById("dat").value;
    var qnt = document.getElementById("qt").value;
    var area= document.getElementById("area").value;
    if (mai == "" || name == '' || no == '' || dat == '' || model == '' || qnt == '' || qnt > 5 || qnt < 1 || no < 0) {
        if (name != '') {
            alert(name + ', Please fill the details correctly')
        } else
            alert('Please fill the details correctly');
    } else {
        alert('Thankyou  ' + name + ',  Your order is confirmed.\nOrder Details-\nName: ' + name + '\nPhone.no: ' + no + '\nEmail: ' + mai + '\nYour ' + flv  + '  will be delivered on ' + dat+'\nMessage: '+area);
    }
}