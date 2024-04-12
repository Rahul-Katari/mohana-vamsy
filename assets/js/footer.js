let footerHtml = `<div class="container"><div class="site_footer_content">
<div class="row">
  <div class="col-lg-5">
    <div class="site_logo"><a class="site_link" href="index.html">
        <h2 class="text-white"><i class="fa-solid fa-ribbon me-2"></i>Dr. Mohana Vamsy</h2>
      </a></div>
    <div>
      <table style="text-align:start" cellpadding="5" class="d-flex d-md-block justify-content-center">
        <tr>
          <td><i class="fa-solid fa-phone text-secondary"></i></td>
          <td><a class="text-black mb-0" href="tel:+919849022121">+91 98490 22121</a></td>
        </tr>
        <tr>
          <td><i class="fa-solid fa-envelope text-secondary me-md-3"></i></td>
          <td><a class="text-black mb-0" href="mailto:info@omegahospital.com">info@omegahospital.com</a></td>
        </tr>
        <tr>
          <td><i class="fa-solid fa-clock text-secondary"></i></td>
          <td class="text-black"><strong>Mon</strong> to <strong>Sat</strong> : <strong class="text-white"> 08:00 - 20:00</strong></td>
        </tr>
      </table>
    </div>
  </div>
  <div class="col-lg-4">
    <a class="site_link text-black" href="https://maps.app.goo.gl/F35d8HXCZrDHWucJ8" target="_blank">
      <div class="site_logo">
        <h4 class="text-white"><i class="fa-solid fa-location-dot me-2"></i>Address</h4>
      </div>
      <div>
        <ul class="list-unstyled">
          <li>CHR Lane, Road No. 1/7,</li>
          <li>near Omega Hospitals, </li>
          <li>Hills Colony,Gachibowli, </li>
          <li>Hyderabad,Telangana</li>
          <li>500032.</li>
        </ul>
      </div>
    </a>
  </div>
  <div class="col-lg-2 d-none">
    <ul class="info_list unordered_list align-items-baseline flex-column">
      <li><a href="index.html"><span class="info_icon"><i class="fa-solid fa-circle"></i> </span><span
            class="info_text">Home</span></a></li>
      <li><a href="services.html"><span class="info_icon"><i class="fa-solid fa-circle"></i> </span><span
            class="info_text">Services</span></a></li>
      <li><a href="gallery.html"><span class="info_icon"><i class="fa-solid fa-circle"></i> </span><span
            class="info_text">Gallery</span></a></li>
      <li><a href="contact.html"><span class="info_icon"><i class="fa-solid fa-circle"></i> </span><span
            class="info_text">Contact Us</span></a></li>
    </ul>
  </div>
  <div class="col-lg-3 d-flex justify-content-center">
    <ul class="social_links unordered_list justify-content-center justify-content-lg-end mt-auto">
      <li class="d-none"><a href="https://facebook.com" target="_blank"><i class="fa-brands fa-facebook-f"></i></a></li>
      <li class="d-none"><a href="https://instagram.com" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
      <li><a href="https://www.linkedin.com/in/dr-ch-mohana-vamsy-19442b187/" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
      <li><a href="https://twitter.com/yourcancerdr" target="_blank"><i class="fa-brands fa-twitter"></i></a>
      </li>
      <li><a href="https://youtube.com/@dr.mohanavamsy7513?si=InOU4DIR1DDL7UqS" target="_blank"><i
            class="fa-brands fa-youtube"></i></a></li>
      <li class="d-none"><a href="https://wa.me/9849022121" target="_blank"><i class="fa-brands fa-whatsapp"></i></a></li>
    </ul>
  </div>
</div>
</div>
<div class="copyright_widget text-center">
<p class="copyright_text m-0"> © <b>Dr. Ch. Mohna Vamsy</b> All rights reserved Copyrights ${new Date().getFullYear()}</p>
</div></div>`;
$(document).ready(function () {
  $(".site_footer").html(footerHtml);
});
