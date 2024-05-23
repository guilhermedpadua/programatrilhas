function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "./img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "./img/close_white_36dp.svg";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    loadContent('home.html');
  });
  
  function loadContent(page) {
    fetch(page)
      .then(response => response.text())
      .then(data => {
        document.getElementById('main-content').innerHTML = data;
      })
      .catch(error => console.error('Error loading the content:', error));
  }
  