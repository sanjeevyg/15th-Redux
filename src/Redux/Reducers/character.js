import { GET_CHARACTERS } from '../Types'
 
export default function characters(state=[], action) {
    switch(action.type) {
        case GET_CHARACTERS:
            return action.characters
        default:    
            return state 
    }
}