const message = "Yes! I'll be your valentine. You are my world, and I can't imagine life without those sleepy morning eyes of yours. You're my favorite view.";
let i = 0;
let isOpened = false;

function openSurprise() {
    if (isOpened) return;
    isOpened = true;
    
    document.getElementById('clickHint').style.display = 'none';
    document.getElementById('valentineContainer').classList.add('open');

    // Delay typewriter until card is fully clear of the envelope
    setTimeout(typeWriter, 1400);
    
    setInterval(createHeart, 300);
}

function typeWriter() {
    if (i < message.length) {
        document.getElementById("typewriter").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 45);
    }
}

function createHeart() {
    const heart = document.createElement('div');
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.bottom = '100vh';
    heart.style.fontSize = Math.random() * 20 + 15 + 'px';
    heart.style.color = '#ff4d6d';
    heart.innerHTML = '❤️';
    heart.style.zIndex = '100';
    
    document.body.appendChild(heart);

    const anim = heart.animate([
        { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
        { transform: `translateY(110vh) rotate(${Math.random() * 360}deg)`, opacity: 0 }
    ], {
        duration: 5000,
        easing: 'linear'
    });

    anim.onfinish = () => heart.remove();
}