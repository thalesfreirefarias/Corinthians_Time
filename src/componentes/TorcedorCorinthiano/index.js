import './TorcedorCorinthiano.css';

const Corinthiano = ({nome, imagem, jogador}) => {
    return (
        <div className="TorcedorCorinthiano">
            <div className='cabecalho'> 
                <img src={imagem} alt={nome} />
                </div >
                <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{jogador}</h5>
            </div>
        </div>
    );
}

export default Corinthiano;
