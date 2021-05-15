import { GET_CHARACTERS } from '../Types'

export const get_characters = (pl) => {
    return {
        type: GET_CHARACTERS,
        characters: pl
    }
}

export const increase = (pl) => {
    return {
        type: 'INCREASE',
        increase: pl 
    }
}

export const decrease = (pl) => {
    return {
        type: 'DECREASE',
        increase: pl 
    }
}