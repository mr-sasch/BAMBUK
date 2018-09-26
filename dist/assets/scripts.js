// активный пункт меню
var activeNavMenu = () =>
{
  var currentUrl = window.location.pathname.split('/'),
    menuA = document.querySelectorAll('.navbar__navs a'),
    menuAlength = menuA.length;

  for (var i = 0; i < menuAlength; i++) {
    for (var q = 0; q < currentUrl.length; q++) {
      if (currentUrl[q] === menuA[i].getAttribute('href')) {
        console.log('for-true');
        menuA[i].classList.add('active');
        break;
      }
    }
  }

};
activeNavMenu();

var activeMenu = () =>
{
  var currentUrl = window.location.pathname.split('/'),
    menuA = document.querySelectorAll('.footer__nav-items a'),
    menuAlength = menuA.length;

  for (var i = 0; i < menuAlength; i++) {
    for (var q = 0; q < currentUrl.length; q++) {
      if (currentUrl[q] === menuA[i].getAttribute('href')) {
        console.log('for-true');
        menuA[i].classList.add('active');
        break;
      }
    }
  }

};
activeMenu();

// /активный пункт меню
