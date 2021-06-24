import styled from 'styled-components'
import illustrationImg from '../../../assets/illustration.svg'
import {palette} from '../../styleguide/atoms/colors'
import atom from '../../styleguide/atoms'
const StyledAside = styled.aside`
display none;
flex-direction:column;
justify-content:center;
padding:180px 80px;
background:${palette.primary.main};
color:${palette.primary.onMainText};
${atom.breakpoint.lg}{
    display flex;
}
img{
    max-width:320px;
}
strong{
    ${atom.typography.header3}
    color:${palette.primary.onMainText};
    margin-top:16px;
}
p{
    ${atom.typography.paragraph}
    color:${palette.primary.onMainText};
    margin-top:16px;
}
`
export const Aside = ()=>
    <StyledAside>
        <img src={illustrationImg} alt="imagem simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas de sua audiência em tempo real</p>
    </StyledAside>
