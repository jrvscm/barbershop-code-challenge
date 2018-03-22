import React from 'react';
import { shallow, mount } from 'enzyme';
import { MOCK_DATA } from './config';
import { setSearchInputValue } from './actions';
import { App } from './App';

describe('<App />', () => {

  const { 
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
		const dispatch=jest.fn();
		shallow(
			<App
				dispatch={dispatch}
				grid={grid}
				currentImages={currentImages}
				loading={loading}
				show={show}
				modalImage={modalImage}
				setSearchInputValue={setSearchInputValue}
				formError={formError}
			/>
		)
	})
})