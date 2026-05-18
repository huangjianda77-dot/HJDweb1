
// 1st Plunge - Order Button Redirect
document.addEventListener("DOMContentLoaded", function() {
  var productUrl = "https://c4ma8z-bc.myshopify.com/products/1st-plunge-ice-bath-recovery-kit-premium-cold-therapy-system";
  
  document.querySelectorAll("a, button").forEach(function(el) {
    var text = el.textContent.trim();
    if (text.indexOf("Order Now") !== -1 || text.indexOf("Get Yours") !== -1 || text.indexOf("Add to Cart") !== -1) {
      el.addEventListener("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        window.location.href = productUrl;
      });
    }
  });
});
