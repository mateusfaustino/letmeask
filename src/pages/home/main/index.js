import {useHistory} from 'react-router-dom'
import LogoImg from '../../../assets/logo.svg'
import Button from '../../../components/styleguide/molecules/buttons'
import {StyledMain, MainContent, Separator} from './styles'
import {firebase, auth, database} from '../../../services/firebase'
import { CreateRoom } from './createRoom'
import { JoinRoom } from './joinRoom'

export const Main = ()=>{
    const history = useHistory();
    
    
    return(
        <StyledMain>
            <MainContent>
                <img src={LogoImg} alt="let me ask"/>
                <CreateRoom/>
                <Separator>ou entre em uma sala</Separator>
                <JoinRoom/>                
            </MainContent>
        </StyledMain>  
    )
}
    