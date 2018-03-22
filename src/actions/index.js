import { UNSPLASH_BASE_URL, UNSPLASH_ACCESS_KEY } from '../config';

export const SET_IMAGE_STATUS = 'SET_IMAGE_STATUS';
export const setImageStatus = (imageStatus) => ({
	type: SET_IMAGE_STATUS,
	imageStatus: imageStatus
})

export const SET_GRID = 'SET_GRID';
export const setGrid = (gridStatus) => ({
	type: SET_GRID,
	grid: gridStatus
})

export const SET_CURRENT_IMAGES = 'SET_CURRENT_IMAGES';
export const setCurrentImages = (json) => ({
	type: SET_CURRENT_IMAGES,
	currentImages: json
})

export const SET_LOADING = 'SET_LOADING';
export const setLoading = (status) => ({
	type: SET_LOADING,
	loading: status
})

export const SET_MODAL = 'SET_MODAL';
export const setModal = (status) => ({
	type: SET_MODAL,
	show: status
})

export const SET_MODAL_IMAGE = 'SET_MODAL_IMAGE';
export const setModalImage = (image) => ({
	type: SET_MODAL_IMAGE,
	modalImage: image
})

export const SET_SEARCH_INPUT_VALUE = 'SET_SEARCH_INPUT_VALUE';
export const setSearchInputValue = (val) => ({
	type: SET_SEARCH_INPUT_VALUE,
	value: val
})

export const SET_FORM_ERROR = 'SET_FORM_ERROR';
export const setFormError = (status) => ({
	type:SET_FORM_ERROR,
	error: status
})

export const requestImages = () => (dispatch) => {
	return fetch(`${UNSPLASH_BASE_URL}/photos/random?count=6&h350=&w=200&orientation=landscape`, {
		method: 'GET',
		headers: {
			Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
		},
	})
	.then(response => response.json())
	.then(json => dispatch(setCurrentImages(json)))
	.then(json => {

	const nextImageStatus = [
		{'index':0, status:'loading'},
		{'index':1, status:'loading'},
		{'index':2, status:'loading'},
		{'index':3, status:'loading'},
		{'index':4, status:'loading'},
		{'index':5, status:'loading'}
	];
	
	dispatch(setLoading(true))
	dispatch(setImageStatus(nextImageStatus))
	})
	//the reason for this error message is because the Unsplash API was undergoing
	//major outages as I was devloping. Unsuccessful requests recieves CORS erros 
	//because when the API response returns 500 due to the API being down, no
	//headers are present. It's an open issue on github since Sep. 2017.
	//https://github.com/unsplash/unsplash-js/issues/47
	//hopefully service will be restored when whomever views this application.
	.catch((ex) => alert(`${ex}, likely an issue with the Unsplash API`))
}

export const requestImagesQuery = (query) => (dispatch) => {
	return fetch(`${UNSPLASH_BASE_URL}/photos/random?query=${query}&count=6&h350=&w=200&orientation=landscape`, {
		method: 'GET',
		headers: {
			Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
		},
	})
	.then(response => response.json())
	.then(json => dispatch(setCurrentImages(json)))
	.then(json => {

	const nextImageStatus = [
		{'index':0, status:'loading'},
		{'index':1, status:'loading'},
		{'index':2, status:'loading'},
		{'index':3, status:'loading'},
		{'index':4, status:'loading'},
		{'index':5, status:'loading'}
	];

	dispatch(setLoading(true))
	dispatch(setImageStatus(nextImageStatus))
	})
	.catch((ex) => alert(`${ex}, likely an issue with the Unsplash API`))
}
