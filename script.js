// 1. COUNTDOWN
const weddingDate = new Date("Jan 18, 2026 15:30:00").getTime();
setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    document.getElementById("days").innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerHTML = Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);

// 2. MÚSICA
const musicBtn = document.getElementById('musicBtn');
const music = document.getElementById('weddingMusic');
let isPlaying = false;
musicBtn.onclick = () => {
    if (isPlaying) { music.pause(); musicBtn.querySelector('span').innerHTML = "PLAY"; }
    else { music.play(); musicBtn.querySelector('span').innerHTML = "PAUSE"; }
    isPlaying = !isPlaying;
};


// 3. COPIAR CLABE
function copyText(text) {
    navigator.clipboard.writeText(text);
    alert("¡CLABE copiada!");
}

// 4. RSVP A WHATSAPP
document.getElementById('rsvpForm').onsubmit = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('guestName').value;
    const asistencia = document.getElementById('attendance').value === "si" ? "Confirmo mi asistencia ✅" : "No podré asistir ❌";
    const msg = encodeURIComponent(`Hola, soy ${nombre}. ${asistencia}`);
    window.open(`https://wa.me/528186694938?text=${msg}`, '_blank');
};

// Intento de Autoplay al primer toque
window.addEventListener('click', function() {
    const audio = document.getElementById('weddingMusic');
    if (audio.paused) {
        audio.play();
    }
}, { once: true }); // El 'once: true' hace que solo se ejecute el primer clic

window.addEventListener('scroll', function() {
    const audio = document.getElementById('weddingMusic');
    if (audio.paused) {
        audio.play();
    }
}, { once: true });






AOS.init({
    once: true, // La animación solo sucede una vez al bajar
    mirror: false
});
