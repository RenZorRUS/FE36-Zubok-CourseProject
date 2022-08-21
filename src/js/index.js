/** Gets Y coordinate of element relative to the beginning of the page
 *
 * @param { Element } element, HTML element
 * @return { number } top, Y coordinate in px
 */
function getYCoordinate(element) {
  const top =
    element.getBoundingClientRect().top -
    document.documentElement.getBoundingClientRect().top;

  return top;
}

// Runs script after the page loads
window.addEventListener('load', () => {
  // Returns an Element object representing the element
  // whose 'id' property matches the specified string
  const header = document.getElementById('header');
  const headerContainer = header.querySelector('.container');
  const headerHeight = header.offsetHeight;
  // 'HTMLCollection' - interface represents a generic collection
  //                    (array-like object similar to arguments)
  //                    of elements (in document order)
  // Returns a live 'HTMLCollection' of elements with
  // the given tag name
  const aTags = header.getElementsByTagName('a');
  // Getting Y coordinate of elements relative
  // to the beginning of the page
  const mainTitleY = getYCoordinate(document.querySelector('.title'));
  const featuresSectionY = getYCoordinate(document.getElementById('features'));

  window.addEventListener('scroll', () => {
    // Blurring container
    window.scrollY > mainTitleY - headerHeight ?
      headerContainer.classList.add('blured_container') :
      headerContainer.classList.remove('blured_container');

    // Changing color of a tags to black
    // headerHeight / 2 because color should change when
    // text reaching a section boundary
    if (window.scrollY > featuresSectionY - headerHeight / 2) {
      for (let i = 0; i < aTags.length; i++) {
        aTags[i].classList.add('black_text');
      }
    } else {
      for (let i = 0; i < aTags.length; i++) {
        aTags[i].classList.remove('black_text');
      }
    }
  });
});
