// Adicione aqui qualquer funcionalidade JavaScript que você precisar, como animações, interações, etc.
// Por exemplo, para adicionar um efeito de rolagem suave ao clicar nos links do menu:
const links = document.querySelectorAll('nav a');
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});