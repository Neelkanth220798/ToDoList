var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var button = document.createElement ("button");
    var txt = document.createTextNode("\u00D7");
    button.className = "close";
    button.appendChild(txt);
    myNodelist[i].appendChild(button);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagname === 'li') {
        ev.target.classList.toggle('checked'); 
    }
}, false);

function newElement() {
    var li = document.createElement("li")
    var inputValue = document.getElementById("myinput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert(" This Field is Mandatory.");
    }else {
        document.getElementById("mylist").appendChild(li);
    }
    document.getElementById("myinput").value = "";

    var button = document.createElement("button");
    var txt = document.createTextNode("\u00D7");
    button.className = "close";
    button.appendChild(txt);
    li.appendChild(button);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function(){
            var div = this. parentElement;
            div.style.display = 'none';
        }
    }
}