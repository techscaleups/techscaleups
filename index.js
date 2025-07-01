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

 