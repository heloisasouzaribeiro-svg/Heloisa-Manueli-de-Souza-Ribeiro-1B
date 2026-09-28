const botao = document.querySelector("button");

    botes.forEach(function (botao) {
           let curtiu = false; 
    botao.addEventListener("click", botaoClicado);
    function botaoClicado() {
        console.log("fui clicado");
        let texto = botao.querySelector("span");
        if (curtiu === false) {
        texto.textContent++;
        curtiu = true;
        } else{
        text.textContent--;
        curtiu = false;
        }
    }
    })
const batnTemaEscuro = document.querySelector(".btn-tema-escuro");

btnTemaEscuro.addEventListener("click", muda Tema);

function mudaTema(){
    const corpoPagina = document.body;
    if (corpoPagina.classList.contains("tema-escuro")) {
    corpoPagina.classList.remove("tema-escuro");
    } else {
    corpoPagina.classList.add("tema-escuro");
    }
}
