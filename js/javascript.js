$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__bmenu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
//scroll fluide
$(document).ready(function () {
  // scroll fluide pour toutes ligne
  $("a").on("click", function (event) {
    //hash
    if (this.hash !== "") {
      event.preventDefault();

      // sovgard hash
      var hash = this.hash;

      // methodeanimate() jQuery pour faire de scroll fluide pour la page
      // second pour le srole de page (800)
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    } // Fin si
  });
});
