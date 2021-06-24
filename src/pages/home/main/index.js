import {useHistory} from 'react-router-dom'
import LogoImg from '../../../assets/logo.svg'
import GoogleIcon from '../../../assets/google-icon.svg'
import Button from '../../../components/styleguide/molecules/buttons'
import {StyledMain, MainContent, Separator} from './styles'
import {firebase, auth, database} from '../../../services/firebase'
export const Main = ()=>{
    const history = useHistory();
    function handleCreateRoom (){
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider).then(res=>{
            console.log(res);
            history.push('rooms/new')
        })
    }
    return(
        <StyledMain>
            <MainContent>
                <img src={LogoImg} alt="let me ask"/>
                <Button onClick={handleCreateRoom} color='secondary' startIcon={<img src={GoogleIcon} alt="let me ask"/>}>
                    Crie sua sala com o Google
                </Button>
                <Separator>ou entre em uma sala</Separator>
                <form>
                    <input 
                        type='text'
                        placeholder='Digite o código da sala'
                    />
                    <Button type='submit'>
                        entrar na sala
                    </Button>
                </form>
            </MainContent>
        </StyledMain>  
    )
}
    