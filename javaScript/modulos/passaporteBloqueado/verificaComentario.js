function verificaComentarioValido(palavrasBloqueadas, comentario)
{
    let comentarioValido = true;
    palavrasBloqueadas.forEach(palavraBloqueada => {
        if(comentario == (palavraBloqueada) > -1){
        comentarioValido = false;
        }
    });
    return comentarioValido;
}

export default verificaComentarioValido;