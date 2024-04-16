const headerHtml = `<div class="container">
<div class="row align-items-center">
  <div class="col-lg-4 col-9">
    <!-- <div class="site_logo"><a class="site_link" href="index.html"><img
          src="assets/images/site_logo/site_logo_primary.svg" alt="Site Logo – Dr. Mohana Vamsy"></a></div> -->
    <div>
      <a class="site_link" href="/">
        <h2 class="text-primary"><i class="fa-solid fa-ribbon me-2"></i>Dr. Ch. Mohana Vamsy</h2>
      </a>
    </div>
  </div>
  <div class="col-lg-8 col-1 px-0">
    <nav class="main_menu navbar navbar-expand-lg">
      <div class="main_menu_inner collapse navbar-collapse justify-content-center" id="main_menu_dropdown">
        <ul class="main_menu_list unordered_list">
          <li ><a class="nav-link" href="/">Home</a></li>
          <li><a class="nav-link" href="services.html">Services</a></li>
          <li><a class="nav-link" href="achievements.html">Achievements</a></li>
          <li><a class="nav-link" href="faqs.html">FAQ's</a></li>
          <li><a class="nav-link" href="blogs.html">Blogs</a></li>
          <li><a class="nav-link" href="gallery.html">Gallery</a></li>
          <li><a class="nav-link" href="contact.html">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  </div>
  <div class="col-2 d-md-none">
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
  if (pathname === "/") {
    $(".main_menu_list li").eq(0).addClass("active");
  } else {
    var filename = pathname?.split("/").pop().split(".").shift();
    $(".main_menu_list li .nav-link").each(function () {
      let url = $(this).attr("href").split(".").shift().toLowerCase();
      filename === url
        ? $(this).parent().addClass("active")
        : $(this).parent().removeClass("active");
    });
  }
});
