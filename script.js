function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
  
    const logo = document.getElementById('logo');
    if (body.classList.contains('light-mode')) {
      logo.src = 'white-logo.jpg';
    } else if (body.classList.contains('dark-mode')) {
      logo.src = 'dark-logo.jpg';
    }
    else{
        logo.src = 'dark-logo.jpg';
    }
  }
