// When the user clicks on the button, open the modal
const modal = document.body.querySelector('#myModal');

const showModal = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
const hideModal = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target.id === 'myModal') {
    hideModal();
  }
}