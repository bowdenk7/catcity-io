$(document).ready(function() {
  // Place JavaScript code here...
  // @ts-ignore
  for (const id of JSON.parse($("#catIds")[0].value)) {
    const selector = "#" + id;
    // @ts-ignore
    $(selector).slick({
      centerMode: true,
      centerPadding: false,
      dots:true
    });
  }
});