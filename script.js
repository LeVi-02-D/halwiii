// typing effect
  const phrases = ["insert coin to continue.", "achievement unlocked: cat nap.", "respawning in 3...2...1..."];
  const typedEl = document.getElementById('typed');
  let pIndex=0, cIndex=0, deleting=false;
  function typeLoop(){
    const current = phrases[pIndex];
    if(!deleting){
      cIndex++;
      typedEl.textContent = current.slice(0,cIndex);
      if(cIndex===current.length){ deleting=true; setTimeout(typeLoop,1400); return; }
    } else {
      cIndex--;
      typedEl.textContent = current.slice(0,cIndex);
      if(cIndex===0){ deleting=false; pIndex=(pIndex+1)%phrases.length; }
    }
    setTimeout(typeLoop, deleting?35:60);
  }
  typeLoop();

  // paw cursor trail
  let lastTrail = 0;
  document.addEventListener('mousemove', (e)=>{
    const now = Date.now();
    if(now - lastTrail < 90) return;
    lastTrail = now;
    const paw = document.createElement('div');
    paw.className = 'paw-trail';
    paw.textContent = '🐾';
    paw.style.left = (e.clientX - 8) + 'px';
    paw.style.top = (e.clientY - 8) + 'px';
    paw.style.setProperty('--rot', (Math.random()*40-20)+'deg');
    document.body.appendChild(paw);
    setTimeout(()=>paw.remove(), 900);
  });

  function copyUpi(){
    navigator.clipboard.writeText('bhumi@paytm').then(()=>{
      const line = document.getElementById('upiLine');
      const btn = line.querySelector('.copy-btn');
      const old = btn.textContent;
      btn.textContent = 'Copied!';
      setTimeout(()=>btn.textContent = old, 1500);
    });
  }
