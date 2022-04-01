import palavrasBloqueadas from './palavrasBloqueadas.js';
import verificaComentarioValido from './verificaComentario.js';

let comentario = "passaporte falso";

if(verificaComentarioValido(palavrasBloqueadas, comentario))
{
    console.log("Seu comentário: "+comentario);
}
else
{
    console.log("Comentário bloqueado!");
}