const btnAbrirModal = document.querySelector("#ServicioCliente");
const btnCerrarModal = document.querySelector("#cerrarmodal");
const modal = document.querySelector("#modal");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
