import Reducer from './Reducer';
import {
	setImageStatus,
	setGrid,
	setCurrentImages,
	setLoading,
	setModal,
	setModalImage,
	setSearchInputValue,
	setFormError
} from '../actions';
import { MOCK_DATA } from '../config';

describe('Reducer', () => {

  it('Should set the initial state when nothing is passed in', () => {
    const state = Reducer(undefined, {type: '__UNKNOWN'});
      expect(state).toEqual({
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
   		});
  	})

  it('Should return the current state on an unknown actions', () => {
  	let currentState = {};
  	const state = Reducer(currentState, {type: '__UNKOWN'});
  	expect(state).toBe(currentState);
  });

  it('should setImageStatus', () => {
  	let state;
  	state = Reducer(state, setImageStatus([{'new': 'status'}]));
  	expect(state).toEqual({
			currentImages: [],
			grid: true,
			loading: false,
			show: false,
			imageStatus: [{'new': 'status'}],
			modalImage: {},
			searchInputValue: '',
			formError: false
   	});
  })

  it('should set gird to false', () => {
  	let state;
  	state = Reducer(state, setGrid(false));
  	expect(state).toEqual({
			currentImages: [],
			grid: false,
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
   	});
  }) 

  it('should set currentImages to ', () => {
  	let state;
  	state = Reducer(state, setCurrentImages([{src: 'https://bssrc.com', alt: 'description'}]));
  	expect(state).toEqual({
			currentImages: [{src: 'https://bssrc.com', alt: 'description'}],
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
   	});
  })

  it('should setLoading to true ', () => {
  	let state;
  	state = Reducer(state, setLoading(true));
  	expect(state).toEqual({
			currentImages: [],
			grid: true,
			loading: true,
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
   	});
  })

  it('should set show to true ', () => {
  	let state;
  	state = Reducer(state, setModal(true));
  	expect(state).toEqual({
			currentImages: [],
			grid: true,
			loading: false,
			show: true,
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
   	});
  })

  it('should set the modal image to ', () => {
  	let state;
  	state = Reducer(state, setModalImage({src: 'https://bssrc.com', alt: 'description'}));
  	expect(state).toEqual({
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
			modalImage: {src: 'https://bssrc.com', alt: 'description'},
			searchInputValue: '',
			formError: false
   	});
  })

  it('should set the search input value ', () => {
  	let state;
  	state = Reducer(state, setSearchInputValue('this is the value'));
  	expect(state).toEqual({
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
			searchInputValue: 'this is the value',
			formError: false
   	});
  }) 
  it('should set the modal image to ', () => {
  	let state;
  	state = Reducer(state, setModalImage({src: 'https://bssrc.com', alt: 'description'}));
  	expect(state).toEqual({
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
			modalImage: {src: 'https://bssrc.com', alt: 'description'},
			searchInputValue: '',
			formError: false
   	});
  })

  it('should set the form error to true ', () => {
  	let state;
  	state = Reducer(state, setFormError(true));
  	expect(state).toEqual({
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
			formError: true
   	});
  })              		
});

