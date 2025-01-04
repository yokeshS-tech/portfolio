
/*=== menu icon navbar ===*/ 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}



/*===scroll  selections active line ===*/
let selections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    selections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id+']').classList.add('active');
            });

        };
    });

let header = document.querySelector('.header');
header.classList.toggle('sticky', window.scrollY > 100);

/*===remove menu icon navbar when click navbar link(scroll)===*/ 
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};

/*====== dark light mode ======*/ 
let darkModeIcon = document.querySelector('#darkmode-icon');
darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
}

/*====== scroll reveal ======*/ 
ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:100,
 });

 ScrollReveal().reveal(' .home-content h1,.home-content p,.home-content .resume,.home-content .btn,.heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img img, .service-container, .portfolio-box, .contact', { origin: 'bottom' });
 ScrollReveal().reveal(' .home-content h1,.profile,.about-img img', { origin: 'left' });
 ScrollReveal().reveal('.about-content p,.about-content h3,.home-content p,.about-content .btn', { origin: 'right' });

//  /*==== download cv ====*/
//  document.getElementById("downloadBtn").addEventListener("click",
//     function() {
//         const filePath = "portfolio/yokesh_Web Developer resume.pdf";
//         const link = document.createElement("a");
//         link.href = filePath;
//         link.download = "yokesh_Web Developer resume.pdf";
//         link.click();
//     }
//  );

