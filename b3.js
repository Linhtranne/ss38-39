window.addEventListener('load', function() {
  let img = document.getElementById('fullscreen-img');
  let overlay = document.getElementById('overlay');
  img.style.opacity = 0.1;
  overlay.style.opacity = 1;
  
  setTimeout(function() {
    img.style.opacity = 1;
  }, 1000); 

  let overlayOpacity = 0;
  let overlayInterval = setInterval(function() {
    if (overlayOpacity >= 1) {
      clearInterval(overlayInterval);
    } else {
      overlayOpacity += 0.01;
      overlay.style.opacity = overlayOpacity;
      overlay.innerHTML = Math.round(overlayOpacity * 100) + "%";
    }
  }, 20);

  setTimeout(function() {
    overlay.style.opacity = 0;
  }, 1000); 
});