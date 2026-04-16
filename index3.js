const menubutton = document.getElementById('menubutton');
menubutton.addEventListener('click', (e) => {
    e.preventDefault(); 
    
    menubutton.innerHTML = `
    <div class="card" id="navcard">
        <div class="card1">
            <a href="#home">Home</a>
            <a href="./index1.html">About</a>
            <a href="./index5.html">Programs</a>
            <a href="./index6.html">Blog</a>
            <a href="#contact">Contact</a>
            <a href="./index4.html">Discord</a>
        </div>
        <div class="card2" id="closebutton"><a href="./index.html">✕</a></div>
    </div>`;

    const navcard = document.getElementById('navcard');
    const closebutton = document.getElementById('closebutton');
    navcard.classList.remove('hidden');

    closebutton.addEventListener('click', (event) => {
        event.stopPropagation(); 
        navcard.classList.add('hidden');
    });
}, { once: true });
