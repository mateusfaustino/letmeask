import { Link, useHistory} from 'react-router-dom'
import { useContext, useState} from 'react'
import LogoImg from '../../../assets/logo.svg'
import GoogleIcon from '../../../assets/google-icon.svg'
import Button from '../../../components/styleguide/molecules/buttons'
import { AuthContext } from '../../../contexts/AuthContext'
import { StyledMain, MainContent } from './styles'
import { database } from '../../../services/firebase'
export const Main = ()=>{
    const [newRoomName,setNewRoomName]=useState('');
    const {user} = useContext(AuthContext)
    const history = useHistory();
    async function handleCreateRoom(event){
        event.preventDefault();
        if (newRoomName.trim()===''){
            return
        }
        
        const roomRef = database.ref('rooms')
        const fifebaseRoom = await roomRef.push({
            title:newRoomName,
            authorId: user?.id
        })
        
        history.push(`/rooms/${fifebaseRoom.key}`)
    }
    return(
        <StyledMain>
        <MainContent>
            <img src={LogoImg} alt="let me ask"/>
            <h1>{user?.name}</h1>
            <h2>Crie uma nova sala</h2>
            <form onSubmit={handleCreateRoom}> 
                <input 
                    type='text'
                    placeholder='Nome da sala'
                    onChange={event=>setNewRoomName(event.target.value)}
                    value={newRoomName}
                />
                <Button type='submit'>
                    criar sala
                </Button>
            </form>
            <p>
                Quer entrar em uma sala existente?<Link to='/'>clique aqui</Link>
            </p>
        </MainContent>
    </StyledMain> 
    )
}
    