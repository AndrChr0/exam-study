const btn = document.querySelector('button');
const rippedEB = document.querySelector('.energybill__ripped');
const EB = document.querySelector('.energybill__whole');
const msg = document.querySelector('.msg');


btn.addEventListener('click', () => {
    rippedEB.style.display = 'block';
    EB.style.display = 'none';
    msg.style.display = 'inline';
})