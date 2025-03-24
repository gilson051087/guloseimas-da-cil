document.addEventListener('DOMContentLoaded', (event) => {
  const whatsappButton = document.getElementById('whatsapp-button');
  whatsappButton.addEventListener('click', () => {
    whatsappButton.classList.add('clicked');
    setTimeout(() => {
      whatsappButton.classList.remove('clicked');
      const message = encodeURIComponent('Olá, gostaria de fazer um pedido!');
      const phoneNumber = '5514998190919';
      window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
    }, 200);
  });
});
