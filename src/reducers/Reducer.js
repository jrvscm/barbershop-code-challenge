const initialState = {
	currentImages: [],
	grid: true,
	loading: false,
	show: false,
	imageStatus: [
		{'index':0, status:'loaded'},
		{'index':1, status:'loaded'},
		{'index':2, status:'loaded'},
		{'index':3, status:'loaded'},
		{'index':4, status:'loaded'},
		{'index':5, status:'loaded'}
	],
	modalImage: {},
	searchInputValue: '',
	formError: false
}


const Reducer = (state = initialState, action) => {
	switch(action.type) {

		case 'SET_CURRENT_IMAGES':
		return {
			...state,
			currentImages: action.currentImages
		}

		case 'SET_GRID':
		return {
			...state,
			grid: action.grid
		}

		case 'SET_LOADING':
		return {
			...state,
			loading: action.loading
		}

		case 'SET_MODAL':
		return {
			...state,
			show: action.show
		}

		case 'SET_MODAL_IMAGE':
		return {
			...state,
			modalImage: action.modalImage
		}

		case 'SET_IMAGE_STATUS':
		return {
			...state,
			imageStatus: action.imageStatus
		}

		case 'SET_SEARCH_INPUT_VALUE':
		return {
			...state,
			searchInputValue: action.value
		}

		case 'SET_FORM_ERROR':
		return {
		...state,
			formError: action.error
		}

		default:
			return state
	}
} 

export default Reducer;