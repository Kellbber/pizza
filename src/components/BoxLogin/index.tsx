
import * as S from "./style";
import logo from 'assets/img/logo.png'
const BoxLogin: React.FC = () => {
  return(
  <S.BoxLogin>
    <S.BoxLoginLogo>
      <S.BoxLoginLogoText>
        <span>Pizza</span>
        <span>Fresh</span>
      </S.BoxLoginLogoText>
      <S.BoxLoginLogoImage src={logo} alt="imagem que representa o logo que é uma fatia de pizza em vermelho e verde neon."/>
     
    </S.BoxLoginLogo>
    <S.BoxLoginForm>
        <input type="text" placeholder="nickname"/>
        <input type="password" placeholder="password"/>
        <button>ENTRAR</button>
    </S.BoxLoginForm>
  </S.BoxLogin>
  );
};

export default BoxLogin;
