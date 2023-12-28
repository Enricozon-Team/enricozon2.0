function createFireworks() {
    const container = document.getElementById('fireworks-container');
  
    for (let i = 0; i < 50; i++) {
      const firework = document.createElement('div');
      firework.classList.add('firework');
      firework.style.left = `${Math.random() * 100}vw`;
      firework.style.top = `${Math.random() * 100}vh`;
      container.appendChild(firework);
    }
  }
  
  
  createFireworks();
  
  
  function createFireworks() {
    const container = document.getElementById('fireworks-container');
  
    for (let i = 0; i < 50; i++) {
      const firework = document.createElement('div');
      firework.classList.add('firework');
  
      // Aggiungi classi per colori diversi
      if (i % 3 === 0) {
        firework.classList.add('blue');
      } else if (i % 3 === 1) {
        firework.classList.add('purple');
      } else {
        firework.classList.add('lightblue');
      }
  
      firework.style.left = `${Math.random() * 100}vw`;
      firework.style.top = `${Math.random() * 100}vh`;
      container.appendChild(firework);
    }
  }
  
 
  createFireworks();
  
  
  