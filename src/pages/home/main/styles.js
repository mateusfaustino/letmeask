import styled from 'styled-components'
import { palette } from '../../../components/styleguide/atoms/colors'
import atom from '../../../components/styleguide/atoms'
export const StyledMain = styled.main`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
export const MainContent = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    max-width:320px;
    align-items:stretch;
    text-align:center;
    &>img{
        align-self:center;
    }
    &>button{
        margin-top:64px;
    }
    form{
        input{
            height:50px;
            border-radius:8px;
            padding:0 16px;
            background:#fff;
            border 1px solid ${palette.primary.light};
            width:100%;
        }
        button{
            margin-top:16px; 
            width:100%;
        }
    }
`
export const Separator = styled.div`
    ${atom.typography.paragraph}
    margin:32px 0;
    display:flex;
    align-items:center;
    justify-content:center;

    &::before{
        content:'';
        height:1px;
        flex:1;
        margin-right:16px;
        background:${palette.primary.main}
    }
    &::after{
        content:'';
        height:1px;
        flex:1;
        margin-left:16px;
        background:${palette.primary.main}
    }
`