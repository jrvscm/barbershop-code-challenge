import React from 'react';
import { shallow, mount } from 'enzyme';
import { MOCK_DATA } from '../config';
import { Gallery } from './Gallery';

describe('<Gallery />', () => {

	let { 
    grid,
    currentImages,
    imageStatus,
    loading,
    show,
    modalImage,
    searchInputValue,
    formError
	} = MOCK_DATA;

	it('Should Render without crashing', () => {
		shallow(
      	<Gallery 
          grid={grid} 
          currentImages={currentImages}
          imageStatus={imageStatus} 
          loading={loading}
          show={show}
          modalImage={modalImage}
          searchInputValue={searchInputValue}
          formError={formError}
   			/>
   		)
	})

	it('Should render six GalleryItems', () => {
		const wrapper = 
		shallow(
      	<Gallery 
          grid={grid} 
          currentImages={currentImages}
          imageStatus={imageStatus} 
          loading={loading}
          show={show}
          modalImage={modalImage}
          searchInputValue={searchInputValue}
          formError={formError}
   			/>	
		)	
		expect(wrapper.find('ul GalleryItem').length).toEqual(6)
	});

	it('Should render the photos button', () => {
		const wrapper = 
		shallow(
      	<Gallery 
          grid={grid} 
          currentImages={currentImages}
          imageStatus={imageStatus} 
          loading={loading}
          show={show}
          modalImage={modalImage}
          searchInputValue={searchInputValue}
          formError={formError}
   			/>	
		)	
		expect(wrapper.find('PhotosButton').length).toEqual(1)
	});

	it('Should render six GalleryItems', () => {
		const wrapper = 
		shallow(
      	<Gallery 
          grid={grid} 
          currentImages={currentImages}
          imageStatus={imageStatus} 
          loading={loading}
          show={show}
          modalImage={modalImage}
          searchInputValue={searchInputValue}
          formError={formError}
   			/>	
		)	
		expect(wrapper.find('ul GalleryItem').length).toEqual(6)
	});

	it('Should render the search Button', () => {
		const wrapper = 
		shallow(
      	<Gallery 
          grid={grid} 
          currentImages={currentImages}
          imageStatus={imageStatus} 
          loading={loading}
          show={show}
          modalImage={modalImage}
          searchInputValue={searchInputValue}
          formError={formError}
   			/>	
		)	
		expect(wrapper.find('SearchInput').length).toEqual(1)
	});
	
	it('Should render the modal', () => {
		const wrapper = 
		shallow(
      	<Gallery 
          grid={grid} 
          currentImages={currentImages}
          imageStatus={imageStatus} 
          loading={loading}
          show={show}
          modalImage={modalImage}
          searchInputValue={searchInputValue}
          formError={formError}
   			/>	
		)	
		expect(wrapper.find('Modal').length).toEqual(1)
	});

	it('Should render two modal images', () => {
		const wrapper = 
		shallow(
      	<Gallery 
          grid={grid} 
          currentImages={currentImages}
          imageStatus={imageStatus} 
          loading={loading}
          show={show}
          modalImage={modalImage}
          searchInputValue={searchInputValue}
          formError={formError}
   			/>	
		)	
		expect(wrapper.find('Modal img').length).toEqual(2)
	});

	it('Should dispatch setModal on click of image', () => {
		const dispatch = jest.fn();
		const wrapper = 
		shallow(
      	<Gallery 
      		dispatch={dispatch}
          grid={grid} 
          currentImages={currentImages}
          imageStatus={imageStatus} 
          loading={loading}
          show={show}
          modalImage={modalImage}
          searchInputValue={searchInputValue}
          formError={formError}
   			/>	
		)	
		wrapper.find('GalleryItem').at(1).simulate('click')
		expect(dispatch).toHaveBeenCalled();
		expect(dispatch.mock.calls[0][0].type).toEqual('SET_MODAL');
	});

	it('Should dispatch requestImages when the getPhotos button is clicked', () => {
		const dispatch = jest.fn();
		const wrapper = 
		mount(
      	<Gallery 
      		dispatch={dispatch}
          grid={grid} 
          currentImages={currentImages}
          imageStatus={imageStatus} 
          loading={loading}
          show={show}
          modalImage={modalImage}
          searchInputValue={searchInputValue}
          formError={formError}
   			/>	
		)	
		wrapper.find('#get-photos-btn').simulate('click')
		expect(dispatch).toHaveBeenCalled();
		expect(dispatch.mock.calls[0][0].type).toEqual('SET_LOADING');
	});	

	it('Should dispatch setFormError if the form is submitted with no text', () => {
		const dispatch = jest.fn();
		const wrapper = 
		mount(
      	<Gallery 
      		dispatch={dispatch}
          grid={grid} 
          currentImages={currentImages}
          imageStatus={imageStatus} 
          loading={loading}
          show={show}
          modalImage={modalImage}
          searchInputValue={searchInputValue}
          formError={formError}
   			/>	
		)	
		wrapper.find('.btn.search-submit-btn').simulate('click');
		expect(dispatch).toHaveBeenCalled();
		expect(dispatch.mock.calls[0][0].type).toEqual('SET_FORM_ERROR');
	});	

	it('Should dispatch set form error to false and set the input value when text is entered in the input', () => {
		const dispatch = jest.fn();
		const wrapper = 
		mount(
      	<Gallery 
      		dispatch={dispatch}
          grid={grid} 
          currentImages={currentImages}
          imageStatus={imageStatus} 
          loading={loading}
          show={show}
          modalImage={modalImage}
          searchInputValue={searchInputValue}
          formError={formError}
   			/>	
			)	
		wrapper.find('.search-input').simulate('change', {target: {value: 'abc' }});
		expect(dispatch).toHaveBeenCalled();
		expect(dispatch.mock.calls[0][0].type).toEqual('SET_FORM_ERROR');
		expect(dispatch.mock.calls[1][0].type).toEqual('SET_SEARCH_INPUT_VALUE');
	})
})