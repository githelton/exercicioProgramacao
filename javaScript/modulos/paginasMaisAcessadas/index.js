import verificaMaisAcessadas from "./verificaMaisAcessadas.js"
import paginas from "./paginas.js"

let paginasMaisAcessadas = paginas.filter(verificaMaisAcessadas);

paginasMaisAcessadas.forEach(pagina => {
    console.log(pagina.ToUpperCase());
});