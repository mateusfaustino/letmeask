import { Aside } from "../../components/this-project/aside"
import { Main } from "./main"
import styled from "styled-components"
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
export const Home = ()=>
    <Auth>
        <Aside/>
        <Main/>
    </Auth>
    
