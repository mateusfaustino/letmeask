import styled from "styled-components"
import { Main } from "./main"
import { Aside } from "../../components/this-project/aside"

const Auth = styled.div`
    display:flex;
    align-items:stretch;
    height:100vh;

    aside{
        flex:7;
    }
    main{
        flex:8;
    }
`
export const NewRoom = ()=>
    <Auth>
        <Aside/>
        <Main/>
    </Auth>
    
