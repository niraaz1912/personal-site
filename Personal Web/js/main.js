var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.008em solid #000}";
    document.body.appendChild(css);
};


document.getElementById("project").onclick = function(){

    document.getElementById("name").style.opacity="0";
    
    document.querySelector('.all-projects').style.opacity="1";
    document.querySelector('.all-projects').style.transform="translateY(-1rem)";    

    document.querySelector('.pdf-resume').style.visibility="hidden";
    document.querySelector('.pdf-resume').style.opacity="0";
    document.querySelector('.pdf-resume').style.transform="translateY(50rem)";

    document.querySelector('.all-projects').style.visibility="visible";
    document.querySelector('.all-projects').style.maxHeight="none";
    document.querySelector('.all-projects').style.opacity="1";
    
    document.getElementById("resume").style.background = "linear-gradient(to left , rgb(0,47,28), rgb(232,232,232))";
    document.querySelector('.button:hover').style.background="#e8e8e8"
    document.querySelector('.button:hover').style.color="black"


    document.getElementById("resume").style.color = "white";
    document.getElementById("resume").style.border = "none";
    document.getElementById("typewrite").style.visibility ="hidden";
    document.getElementById("typewrite").style.padding ="none";

    document.getElementById("contacts").style.float ="left";    
    document.getElementById("contacts").style.transform ="translateY(60%)";  
    document.getElementById("contacts").style.flexDirection ="column";
    document.getElementById("contacts").style.width ="3%";
    document.getElementById("contacts").style.paddingLeft ="30px"; 
    document.querySelector('.fa-linkedin-in').style.color="white";
    document.querySelector('.fa-instagram').style.color="white";
    document.querySelector('.fa-twitter').style.color="white";
    document.querySelector('.fa-github').style.color="white";

    document.getElementById("name").style.visibility="hidden";
    document.getElementById("pp").style.transform= "translateY(60%)";
    document.getElementById("pp").style.float= "left";
    
    document.getElementById("project").style.transform = "translateX(-40rem)";
    document.getElementById("resume").style.transform = "translateY(-7rem)";

    document.getElementById("project").style.background = "#e8e8e8";
    document.getElementById("project").style.color = "black";
    document.getElementById("project").style.borderBottom = "3px solid rgb(0,39,24)";

}

document.getElementById("resume").onclick = function() {
    document.querySelector('.pdf-resume').style.transform="translateY(-1rem)";

    document.querySelector('.all-projects').style.opacity="0";
    document.querySelector('.all-projects').style.transform="translateY(50rem)";
    document.querySelector('.all-projects').style.visibility="hidden";
    document.querySelector('.pdf-resume').style.visibility="visible";
    document.querySelector('.pdf-resume').style.opacity="1";
    

    document.getElementById("project").style.background = "linear-gradient(to left , rgb(0,47,28), rgb(232,232,232))";
    document.getElementById("project").style.color = "white";
    document.getElementById("project").style.border = "none";
    document.getElementById("typewrite").style.visibility ="hidden"

    document.getElementById("contacts").style.float ="left";    
    document.getElementById("contacts").style.transform ="translateY(60%)";  
    document.getElementById("contacts").style.paddingLeft ="30px"; 
    document.getElementById("contacts").style.flexDirection ="column";
    document.getElementById("contacts").style.width ="3%";
    document.querySelector('.fa-linkedin-in').style.color="white";
    document.querySelector('.fa-instagram').style.color="white";
    document.querySelector('.fa-twitter').style.color="white";
    document.querySelector('.fa-github').style.color="white";

    document.getElementById("name").style.visibility="hidden";
    document.getElementById("pp").style.transform= "translateY(60%)";
    document.getElementById("pp").style.float= "left";

    document.getElementById("resume").style.transform = "translate(-40rem, -7rem)";
    document.getElementById("project").style.transform = "translateX(0rem)";

    document.getElementById("resume").style.background = "#e8e8e8";
    document.getElementById("resume").style.color = "black";
    document.getElementById("resume").style.borderBottom = "3px solid rgb(0,39,24)";

}


document.getElementById("pp").onclick = function(){
    document.getElementById("pp").style.transform= "translateY(60%)";
    location.reload()
}