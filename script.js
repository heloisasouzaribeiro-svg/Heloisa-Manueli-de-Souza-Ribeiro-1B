const botao = document.querySelectorA11("button");

    botes.forEach(function(botao) {
           let curtiu = false; 
    botao.addEventListener("click", botaoClicado);
    function botaoClicado() {
        console.log("fui clicado");
        let texto = botao.querySelector("span");
        if (curtiu === false) {
        texto.textContent++;
        }
    }
    });

const batnTemaEscuro = document.querySelector(".btn-tema-escuro");
btnTemaEscuro.addEventListener("click", mudaTema);
function mudaTema(){
    const corpoPagina = document.body;
    if (corpoPagina.classList.contains("tema-escuro")) {
    corpoPagina.classList.remove("tema-escuro");
    } else {
    corpoPagina.classList.add("tema-escuro");
    }
}
