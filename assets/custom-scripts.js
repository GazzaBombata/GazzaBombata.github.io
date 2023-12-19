
var navItemToBeSeized = document.getElementById("navToBeSized");
var height = navItemToBeSeized.offsetHeight;
navItemToBeSeized.style.marginTop = - height + "px";

document.querySelectorAll('.nav-link').forEach(link => {
link.addEventListener('click', function(event) {
    event.preventDefault();

    document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));

    this.classList.add('active');

    let targetSectionID = this.getAttribute('href').substring(1);
    let targetSection = document.getElementById(targetSectionID);

    document.querySelectorAll('section').forEach(sec => sec.classList.remove('active-section'));

    if (targetSection) {
        targetSection.classList.add('active-section');
    }
});
});

  
(function() {
    emailjs.init("H3cgUQWBedpq-h1m0");
})();


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = this;

emailjs.sendForm('service_ts2h0si', 'template_n9th3cs', this)
    .then(function() {
        alert('Thank you, you will be contacted via email ASAP');
        
        form.classList.add('visually-hidden');

        form.querySelector('.email').value = '';

        document.getElementById('show-form-button').classList.remove('visually-hidden');

        document.getElementById('social-icons').classList.remove('visually-hidden');
    }, function(error) {
        alert('Failed to send the message, please try again.');
    });
});


document.getElementById('show-form-button').addEventListener('click', function() {
    this.classList.add('visually-hidden');
    document.getElementById('contact-form').classList.remove('visually-hidden');
    document.getElementById('social-icons').classList.add('visually-hidden');
});


