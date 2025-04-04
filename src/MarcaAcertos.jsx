import iconErro from "./assets/icone_erro.png";
import iconMeio from "./assets/icone_quase.png";
import iconAcerto from "./assets/icone_certo.png";

export default function MarcaAcertos(props) {
  const { states } = props;
  
  return (
    <>
      {states === "erro" ? (
        <img src={iconErro} alt={iconErro} />
      ) : states === "meio" ? (
        <img src={iconMeio} alt={iconMeio} />
      ) : states === "acerto" ? (
        <img src={iconAcerto} alt={iconAcerto} />
      ) : (
        <p></p>
      )}

      
    </>
  );
}