/* 
    Package Name : shadowmage
    Creator : Gopal Nipane 
*/

function shadowmage(options) {
  // Selecting all the elements with the class name 'shadowmage'
  let images = document.querySelectorAll(".shadowmage");

  if (options.shadow_type == "hard") {
    options.shadow_type = "0px";
  } else if (options.shadow_type == "blur") {
    options.shadow_type = "10px";
  } else options.shadow_type = `${options.shadow_type}px`;

  // Implementing values to each property of shadowmage class
  images.forEach((image) => {
    image.style.boxShadow = `10px 10px ${options.shadow_type} 2px ${options.shadow_color}`;

    if (options.padding) {
      image.style.padding = `${options.padding}px`;
    }

    if (options.margin) {
      image.style.margin = `${options.margin}px`;
    }

    if (options.border_style) {
      image.style.border = `${options.border_width}px solid ${options.border_style}`;
    }

    if (options.border_rounded) {
      image.style.borderRadius = `${options.border_rounded}px`;
    }
  });
}

module.exports.shadowmage = shadowmage;
