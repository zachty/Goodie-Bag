import axios from 'axios';

const SET_CANDY = 'SET_CANDY';
const FETCH_CANDY = 'FETCH_CANDY';

const setCandy = candies => ({
    type: SET_CANDY,
    candies,
});

export const fetchCandy = () => {
    return async dispatch => {
        try {
            const { data } = await axios.get('/api/candy');
            dispatch(setCandy(data));
        } catch (err) {
            console.error(err);
        }
    };
};

export default (state = [], action) => {
    switch (action.type) {
        case SET_CANDY:
            return action.candies;
        default:
            return state;
    }
};
