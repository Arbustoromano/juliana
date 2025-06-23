
document.addEventListener("DOMContentLoaded", () => {
  const produtos = document.querySelectorAll(".produto");

  produtos.forEach(produto => {
    produto.addEventListener("click", () => {
      alert("Produto clicado: " + produto.textContent);
    });
  });

  console.log("Site PRECIN carregado com sucesso.");
});
