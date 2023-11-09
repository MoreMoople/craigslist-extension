// content.js
const navbar = document.createElement('div');
navbar.innerHTML = '<h2>This is a custom navbar!</h2>';
navbar.style.background = '#333';
navbar.style.color = '#fff';
navbar.style.padding = '10px';
navbar.style.position = 'fixed';
navbar.style.top = '0';
navbar.style.left = '0';
navbar.style.width = '100%';
document.body.prepend(navbar);

