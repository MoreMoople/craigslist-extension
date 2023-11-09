// content.js
if (window.location.hostname.includes('craigslist.org')) {
  const navbar = document.createElement('div');
  navbar.innerHTML = '<h2>Craigslist Navbar Extension</h2>';
  navbar.style.background = '#333';
  navbar.style.color = '#fff';
  navbar.style.padding = '10px';
  navbar.style.position = 'fixed';
  navbar.style.top = '0';
  navbar.style.left = '0';
  navbar.style.width = '100%';
  document.body.prepend(navbar);
}


