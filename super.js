



let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav ul');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });

        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 100);
};

// lets maintain the header
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar ul');

menuIcon.onclick = () => {
    // menuIcon.classList.toggle('close-outline');
    navbar.classList.toggle('active');
};

//  <ion-icon name="close-outline"></ion-icon> 


var typed = new Typed('#multiple-text', {
    strings: ['Java-Developer','Full-Stack-Developer','Youtuber'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

var typed = new Typed('.about-type-text',{
    strings: ['Swastik Mishra is my name, and I come from Kolkata, West Bengal. At present, I am doing my B.TECH with the degree in computer science and engineering from the Seacom Engineering College. I have learned several programming languages like C/C++, Java, JavaScript and Framework like Spring Spring-Boot and front-end technologies like Html, CSS, Js. I also familiar with MySql database. Apart from that I have completed multiple project using those languages and skills. Thats small details about myself.'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

let form_id = document.getElementById("formId");

function sendEmail(){

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "mishra.swastik0211@gmail.com",
        Password : "E41A73D0945213531DE0813DAD832578E117",
        To : 'mishra.swastik0211@gmail.com',
        From : "mishra.swastik0211@gmail.com",
        Subject : "New Email Come from My-portfolio for Enquiry",
        Body : "Name: " + document.getElementById("name").value
                +"<br/> Email: "+ document.getElementById("email").value
                +"<br/> Subject: "+document.getElementById("sub").value
                +"<br/> Phone No: "+ document.getElementById("phone").value
                +"<br/> Message: "+ document.getElementById("message").value
    }).then(
      message => alert("Email send successfully!")
    );
    
}



let cont = document.getElementsByClassName("p-boxes");
for(let i=0;i<cont.length;i++){
    cont[i].addEventListener("click",function(e){
        let sp = cont[i].querySelector(".p-boxes > div > h2");
        console.log(sp.innerHTML)
        switch(sp.innerHTML){
            case "QueryNet":
                window.location.href = "https://github.com/Swastik-123/QueryNet";
                break;
            case "Covid-19 Tracker":
                window.location.href = "https://github.com/Swastik-123/Corona-Virus-Tracker";
                break;
            case "Dsa Master":
                window.location.href = "https://dsa-msater.netlify.app/";
                break;
            case "Konw Tody's Weather":
                window.location.href = "https://swastik-123.github.io/KnowWeather.github.io/";
                break;
            case "Find Earthquake":
                window.location.href = "https://github.com/Swastik-123/Find-earthquake-";
                break;
            case "A-Snake-game":
                window.location.href = "";
                break;
            default :
                console.log("Wrong Area");
                break;
        }
    })
}