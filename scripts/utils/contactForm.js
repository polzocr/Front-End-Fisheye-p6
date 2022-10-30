function displayModal() {
    const body = document.querySelector('body')
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    body.style.overflow = 'hidden';

}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
