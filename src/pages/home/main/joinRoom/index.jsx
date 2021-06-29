import Button from '../../../../components/styleguide/molecules/buttons'
import { useState } from 'react'
import {database} from '../../../../services/firebase'
import { useHistory } from 'react-router'
export function JoinRoom (){
    const [roomCode, setRoomCode]=useState("")
    const history = useHistory();
    async function handleJoinRoom(event){
        event.preventDefault()
        if(roomCode.trim()===""){
            return
        }
        const roomRef = await database.ref(`rooms/${roomCode}`).get()
        if(!roomRef.exists()){
            alert('This room does not exists')
            return;
        }
        history.push(`/rooms/${roomCode}`)
    }
    return(
        <form onSubmit={handleJoinRoom}>
            <input 
                type='text'
                placeholder='Digite o código da sala'
                onChange={event=>setRoomCode(event.target.value)}
                value = {roomCode}
            />
            <Button type='submit'>
                entrar na sala
            </Button>
        </form>   
    )
}