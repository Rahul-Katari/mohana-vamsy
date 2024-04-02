const headerHtml = `<div class="container">
<div class="row align-items-center">
  <div class="col-lg-4 col-5">
    <!-- <div class="site_logo"><a class="site_link" href="index.html"><img
          src="assets/images/site_logo/site_logo_primary.svg" alt="Site Logo – Dr. Mohana Vamsy"></a></div> -->
    <div>
      <a class="site_link" href="index.html">
        <h2 class="text-primary"><i class="fa-solid fa-ribbon me-2"></i>Dr. Mohana Vamsy</h2>
      </a>
    </div>
  </div>
  <div class="col-lg-8 col-2">
    <nav class="main_menu navbar navbar-expand-lg">
      <div class="main_menu_inner collapse navbar-collapse justify-content-center" id="main_menu_dropdown">
        <ul class="main_menu_list unordered_list">
          <li ><a class="nav-link" href="index.html">Home</a></li>
          <li class="active"><a class="nav-link" href="speciality.html">Speciality</a></li>
          <li><a class="nav-link" href="oncology.html">Oncology</a></li>
          <li><a class="nav-link" href="achievements.html">Achievements</a></li>
          <li><a class="nav-link" href="myths-facts.html">Myths & facts</a></li>
          <li><a class="nav-link" href="gallery.html">Gallery</a></li>
          <li><a class="nav-link" href="contact.html">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  </div>
  <div class="col-5 d-md-none">
    <ul class="header_btns_group unordered_list justify-content-end">
      <li><button class="mobile_menu_btn" type="button" data-bs-toggle="collapse"
          data-bs-target="#main_menu_dropdown" aria-expanded="false" aria-label="Toggle navigation"><i
            class="far fa-bars"></i></button></li>
    </ul>
  </div>
</div>
</div>`;
$(document).ready(function () {
  $(".site_header").html(headerHtml);
  // Get the pathname
  var pathname = document.location.pathname;

  // Extract the filename without extension
  var filename = pathname.split("/").pop().split(".").shift();
  $(".main_menu_list li .nav-link").each(function () {
    let url = $(this).attr("href").split(".").shift().toLowerCase();
    filename === url
      ? $(this).parent().addClass("active")
      : $(this).parent().removeClass("active");
  });
});
