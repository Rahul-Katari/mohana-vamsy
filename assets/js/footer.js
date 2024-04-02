let footerHtml = `<div class="container">
<div class="site_footer_content">
  <div class="row align-items-center">
    <div class="col-lg-4">
      <div class="site_logo"><a class="site_link" href="index.html">
          <h2 class="text-white"><i class="fa-solid fa-ribbon me-2"></i>Dr. Mohana Vamsy</h2>
        </a></div>
      <div>
        <table style="text-align:start" cellpadding="5" class="d-flex d-md-block justify-content-center">
          <tr>
            <td><i class="fa-solid fa-location-dot text-secondary"></i></td>
            <td>49, Caradon Hill, ULBSTER</td>
          </tr>
          <tr>
            <td><i class="fa-solid fa-phone text-secondary"></i></td>
            <td><a class="text-body mb-0" href="tel:+1 234 56 78 123">+1 234 56 78 123</a></td>
          </tr>
          <tr>
            <td><i class="fa-solid fa-envelope text-secondary me-md-3"></i></td>
            <td><a class="text-body mb-0" href="mailto:info@mohanavamsy.com">info@mohanavamsy.com</a></td>
          </tr>
          <tr>
            <td><i class="fa-solid fa-clock text-secondary"></i></td>
            <td>09:00 - 20:00</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="col-lg-6">
      <ul class="info_list unordered_list justify-content-center">
        <li><a href="index.html"><span class="info_icon"><i class="fa-solid fa-circle"></i> </span><span
              class="info_text">Home</span></a></li>
        <li><a href="speciality.html"><span class="info_icon"><i class="fa-solid fa-circle"></i> </span><span
              class="info_text">Speciality</span></a></li>
        <li><a href="oncology.html"><span class="info_icon"><i class="fa-solid fa-circle"></i> </span><span
              class="info_text">Oncology</span></a></li>
        <li><a href="gallery.html"><span class="info_icon"><i class="fa-solid fa-circle"></i> </span><span
              class="info_text">Gallery</span></a></li>
        <li><a href="contact.html"><span class="info_icon"><i class="fa-solid fa-circle"></i> </span><span
              class="info_text">Contact Us</span></a></li>
      </ul>
    </div>
    <div class="col-lg-2">
      <ul class="social_links unordered_list justify-content-center justify-content-lg-end">
        <li><a href="https://facebook.com" target="_blank"><i class="fa-brands fa-facebook-f"></i></a></li>
        <li><a href="https://instagram.com" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
        <li><a href="https://x.com" target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
        <li><a href="https://wa.me/46154956" target="_blank"><i class="fa-brands fa-whatsapp"></i></a></li>
      </ul>
    </div>
  </div>
</div>
<div class="copyright_widget text-center">
  <p class="copyright_text m-0"> © <b>Dr. Mohna Vamsy</b> All rights reserved Copyrights 2024
  </p>
</div>
</div>`;
$(document).ready(function () {
  $(".site_footer").html(footerHtml);
});
