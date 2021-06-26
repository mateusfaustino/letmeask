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
    &>h2{
        ${atom.typography.header2}
        margin:64px 0 24px;
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
    p{
        ${atom.typography.paragraph}
        margin-top:8px;
        a{
            color:${palette.primary.main}
        }        
    }
`