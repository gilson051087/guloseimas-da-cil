document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('.whatsapp-order-button').forEach(button => {
    button.addEventListener('click', (e) => {
      const flavor = e.currentTarget.getAttribute('data-flavor');
      const phoneNumber = "5514998190919"; 
      const message = encodeURIComponent(`Olá, gostaria de pedir o ${flavor}`);
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
      window.open(whatsappUrl, '_blank');
    });
  });
});
