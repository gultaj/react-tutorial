import { POST, URL_API } from '../constants/actionConstants';

export function getAllPosts() {
	return (dispatch) => {
		dispatch({ type: POST.GET_ALL_REQUEST });
		fetch(`${URL_API}/comments`).then(response => response.json())
		.then(posts => dispatch({
			type: POST.GET_ALL_SUCCESS, 
			payload: posts
		}))
		.catch(error => dispatch({
			type: POST.GET_ALL_FAILURE,
			payload: error
		}));
	}
}
