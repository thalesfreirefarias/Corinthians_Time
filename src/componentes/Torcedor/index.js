import Corinthiano from '../TorcedorCorinthiano';
import TorcedorCorinthiano from '../TorcedorCorinthiano';
import './Torcedor.css';

const Torcedor = (props) => {
  return (
   (props.torcedores.length> 0) ? <section className="torcedor" style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{ color: props.corPrimaria, borderColor: props.corTerciario }}>{props.nome}</h3>
      <div className="torcedores">
        {props.torcedores.map((torcedor, index) => (
          <Corinthiano key={index} nome={torcedor.nome} jogador={torcedor.jogador} imagem={torcedor.imagem} />
        ))}
      </div>
    </section>
    : ''
  );
}

export default Torcedor;
