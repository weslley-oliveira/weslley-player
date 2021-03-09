export const initialState = {
    user: null,
    playlists: [],
    isPlaying: false,
    // token: 'BQBSO6s3rtLJfpNFEovYk959F3JCgldllElGHZ6mzu301CDkW8bj432FliZSuzV2rT5bZSWWR4RRbg-_hrub-TwqGvTalRuIKrjp_EflRgTTifpZv5ayUny-ZZvNM22JBlf7qjk6ozlzm4iZbuTdO39Rt9GBredWT5lIpr6dKS0Rv0RQ',
    token: 'BQAMWlFHRyVzn9OJ-l12JU9xNdQtnKh0twegAstIBxl08A59H_Csubb8dnRfV8oP8qu-MOmIjKalQ34zK_ocUCF5cNRy1d9JRjhNY4RW3bAshdiosstNFRi2WP-R89uY4ejfVX-66z2cqAYENOFhvCovqREDGQ',
}

const reducer = (state, action) => {
    
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
               token: action.token,
            }
        case 'SET_PLAYLIST':
            return {
                ...state,
               playlists: action.playlists,
            }
        default:
            return state;

    }

}

export default reducer

