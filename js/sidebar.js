$(".sidebar-btn").on("click", function (e) {
  e.preventDefault();
  $(".sidebar").toggleClass("sidebar_active");
  $(".content").toggleClass("content_active");
});
/**/
