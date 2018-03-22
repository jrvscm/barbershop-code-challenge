import {
SET_IMAGE_STATUS,
setImageStatus,
SET_GRID,
setGrid,
SET_CURRENT_IMAGES,
setCurrentImages,
SET_LOADING,
setLoading,
SET_MODAL,
setModal,
SET_MODAL_IMAGE,
setModalImage,
SET_SEARCH_INPUT_VALUE,
setSearchInputValue,
SET_FORM_ERROR,
setFormError
} from './index';

describe('setImageStatus', () => {
    it('Should return the action', () => {
    		const imageStatus = 'loaded';
        const action = setImageStatus(imageStatus);
        expect(action.type).toEqual(SET_IMAGE_STATUS);
        expect(action.imageStatus).toEqual(imageStatus);
    });
});


describe('setGrid', () => {
    it('Should return the action', () => {
    		const gridStatus = true;
        const action = setGrid(gridStatus);
        expect(action.type).toEqual(SET_GRID);
        expect(action.grid).toEqual(gridStatus);
    });
});

describe('setCurrentImages', () => {
    it('Should return the action', () => {
    		const currentImages = [1, 2, 3];
        const action = setCurrentImages(currentImages);
        expect(action.type).toEqual(SET_CURRENT_IMAGES);
        expect(action.currentImages).toEqual(currentImages);
    });
});

describe('setLoading', () => {
    it('Should return the action', () => {
    		const loading = true;
        const action = setLoading(loading);
        expect(action.type).toEqual(SET_LOADING);
        expect(action.loading).toEqual(loading);
    });
});

describe('setModal', () => {
    it('Should return the action', () => {
    		const modalStatus = true;
        const action = setModal(modalStatus);
        expect(action.type).toEqual(SET_MODAL);
        expect(action.show).toEqual(modalStatus);
    });
});

describe('setModalImage', () => {
    it('Should return the action', () => {
    		const image = {src: "https://bsimageaddress.com", alt: "this is an alt text"};
        const action = setModalImage(image);
        expect(action.type).toEqual(SET_MODAL_IMAGE);
        expect(action.modalImage).toEqual(image);
    });
});

describe('setSearchInputValue', () => {
    it('Should return the action', () => {
    		const value = "abc";
        const action = setSearchInputValue(value);
        expect(action.type).toEqual(SET_SEARCH_INPUT_VALUE);
        expect(action.value).toEqual(value);
    });
});


describe('setFormError', () => {
    it('Should return the action', () => {
    		const error = true;
        const action = setFormError(error);
        expect(action.type).toEqual(SET_FORM_ERROR);
        expect(action.error).toEqual(error);
    });
});

