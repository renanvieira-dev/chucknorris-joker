import '../App';

function atualizar(){

    const jokeText = document.getElementById('jokeText');

    function att(e){
        e.preventDefault();
        console.log('opa, fui clicado!');
        window.location.reload();
    }

    return(
        <div className='container-2'>
            <button id='btn' onClick={att}>Atualizar</button>
        </div>
    )
    
}

export default atualizar;