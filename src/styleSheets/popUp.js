var btnOpen = document.getElementById('openPopUp'),
    popUp = document.getElementById('popUp');

btnOpen.addEventListener('click', function () {
    popUp.classList.add('active');
    console.log("Presion")
});