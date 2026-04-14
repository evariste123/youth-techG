const button = document.getElementById('button');
button.addEventListener('click',(e)=>{

    e.preventDefault();
    button.innerHTML=`
    <div class="card">
    <div class="card1">
    <a href="#home">home</a>
     <a href="#service">service</a>
      <a href="#blog">blog</a>
       <a href="#about">about</a>
        <a href="#contact">contact</a>
    </div>
    <div class="card2"><a href="./index.html">✕</a></div>
    </div>
    
    `;
})