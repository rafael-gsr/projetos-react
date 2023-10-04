import redesSociaisStyle from "../css/partials/RedesSociais.style";

const RedesSociais = ({ nome, logo, link }) => {
  return (
    <a 
      href={link}
      style={redesSociaisStyle.divMain}
    >
      <img 
        alt={nome} 
        src={logo} 
        style={redesSociaisStyle.logo}  
      />
      <p
        style={redesSociaisStyle.nome}
      >
        {nome}
      </p>
    
    </a>
  );
};

export default RedesSociais;
