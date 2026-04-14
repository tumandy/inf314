let zoomed = false;

function openModal(img) {
    const modal = document.getElementById("modal");
    const box = document.getElementById("modal-box");

    modal.classList.add("open");

    box.innerHTML = `
    <div class="modal-frame">
      <img src="${img.src}" class="modal-img">
    </div>
  `;

    zoomed = false;
}

function closeModal() {
    document.getElementById("modal").classList.remove("open");
}

// Prevent modal close when clicking content
document.getElementById("modal-box").onclick = function (e) {
    e.stopPropagation();

    if (!zoomed) {
        this.style.transform = "scale(1.5)";
        this.style.cursor = "zoom-out";
        zoomed = true;
    } else {
        this.style.transform = "scale(1)";
        this.style.cursor = "zoom-in";
        zoomed = false;
    }
};