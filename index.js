 // Change navbar on scroll
  window.addEventListener("scroll", function () {
    document.querySelector(".navbar").classList.toggle("scrolled", window.scrollY > 10);
  });


   fetch("footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });

     fetch("navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;
    });

      fetch("coming-banner.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("coming-banner-placeholder").innerHTML = data;
    });

      fetch("contact.html")
      .then(res => res.text())
      .then(data => {
        document.getElementById("contact-placeholder").innerHTML = data;
      });

   const choices = new Choices('#service', {
    searchEnabled: false,
    itemSelectText: '',
  });



  // Wait for the DOM to load
window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value
      };

      try {
        const res = await fetch('https://email.techscaleups.in/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        const data = await res.json();

        if (data.success) {
          alert('✅ Message sent successfully!');
          form.reset();
        } else {
          alert('❌ Failed: ' + data.message);
        }

      } catch (err) {
        console.error('❌ Error:', err);
        alert('❌ Something went wrong.');
      }
    });
  }
});
