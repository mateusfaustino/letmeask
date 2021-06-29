import {useHistory} from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../../../contexts/AuthContext'
import Button from '../../../../components/styleguide/molecules/buttons'
import GoogleIcon from '../../../../assets/google-icon.svg'

export function CreateRoom (){
    const history = useHistory();
    const {user,signinWithGoogle} = useContext(AuthContext)
    async function handleCreateRoom (){
        if (!user)
           await signinWithGoogle()

        history.push('rooms/new')
    }
    return(
            <Button onClick={handleCreateRoom} color='secondary' startIcon={<img src={GoogleIcon} alt="let me ask"/>}>
                Crie sua sala com o Google
            </Button>
    )
}