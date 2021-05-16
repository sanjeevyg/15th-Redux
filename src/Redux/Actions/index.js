import { GET_CHARACTERS, INCREASE, DECREASE, DECREASe } from '../Types'

export const get_characters = (pl) => {
    return {
        type: GET_CHARACTERS,
        characters: pl
    }
}

export const increase = (pl) => {
    return {
        type: INCREASE,
        payload: pl 
    }
}

export const decrease = (pl) => {
    return {
        type: DECREASE,
        payload: pl 
    }
}