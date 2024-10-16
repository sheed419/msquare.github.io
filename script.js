document.addEventListener("DOMContentLoaded", function() {
    const sectionContents = document.querySelectorAll('.section-content');
    const observerOptions = {
        threshold: 0.2 //trigger animation when 20% of the section is visible
    };

    const contentObserver = new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); //stop observing after animating
            }
        });
    }, observerOptions);

    sectionContents.forEach(content => {
        contentObserver.observe(content);
    });


    //hamburger menu for the links
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show'); //toggles visibility of the links
        hamburger.classList.toggle('active');//toggles the transformation of the hamburger
    });
    //hamburger menu for the links

    //modal for image viewer
    //get the modal
    const modal = document.getElementById('modal');
        
    //get the image and insert it into the modal
    const modalImg = document.getElementById('modalImg');
    const captionText = document.getElementById('caption');

    document.querySelectorAll('.image-card').forEach(card => {
        card.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.querySelector('.image').src;
            captionText.innerHTML = this.querySelector('.image').alt;
        });
    });
    //closing the modal
    const span = document.getElementsByClassName('close')[0];

    //when the user clicks the "x" button, close the modal
    span.onclick = function() {
        modal.style.display = 'none';
    };

    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
});



