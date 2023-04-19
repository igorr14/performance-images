// This approach can be used to polifill lazy attribute. But I decided to go with loading-attribute-polyfill package solution

// document.addEventListener("DOMContentLoaded", function () {
//   const lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
//   if ("IntersectionObserver" in window) {
//     let lazyImageObserver = new IntersectionObserver(function (
//       entries,
//       observer
//     ) {
//       entries.forEach(function (entry) {
//         if (entry.isIntersecting) {
//           let lazyImage = entry.target;
//           lazyImage.src = lazyImage.dataset.src;
//           lazyImage.srcset = lazyImage.dataset.srcset;
//           lazyImage.classList.remove("lazy");
//           lazyImageObserver.unobserve(lazyImage);
//         }
//       });
//     });

//     lazyImages.forEach(function (lazyImage) {
//       lazyImageObserver.observe(lazyImage);
//     });
//   }
// });