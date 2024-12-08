// Função para abrir o modal com a imagem ampliada
function openModal(imageSrc) {
    const modalImage = document.getElementById("modal-image");
    modalImage.src = imageSrc;
    document.getElementById("modal").style.display = "flex";
}

// Função para fechar o modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Fecha o modal ao clicar fora do conteúdo
window.onclick = function(event) {
    if (event.target == document.getElementById("modal")) {
        closeModal();
    }
};