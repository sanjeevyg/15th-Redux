import { GET_CHARACTERS } from '../Types'

export const get_characters = (pl) => {
    return {
        type: 'GET_CHARACTERS',
        characters: pl
    }
}