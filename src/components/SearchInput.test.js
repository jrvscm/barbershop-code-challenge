import React from 'react';
import { shallow, mount } from 'enzyme';
import { MOCK_DATA } from '../config';
import SearchInput from './SearchInput';

describe('<SearchInput />', () => {
	
	it('Renders without crashing', () => {
		shallow(<SearchInput />)
	});

	it('Should render with error and search-input classes', () => {
		let error = MOCK_DATA.formError;
		error = true;
		const wrapper = shallow(<SearchInput formError={error} />)
		expect(wrapper.find('input.error.search-input').length).toEqual(1);
	});

	it('Should render without the error class when form Error is false',() => {
		let error = MOCK_DATA.formError;
		error = false;
		const wrapper = shallow(<SearchInput formError={error} />)
		expect(wrapper.find('input.error').length).toEqual(0);
		expect(wrapper.find('input.search-input').length).toEqual(1);
	});

	it('Should render the button with the error class when formError is true', () => {
		let error = MOCK_DATA.formError;
		error = true;
		const wrapper = shallow(<SearchInput formError={error} />)
		expect(wrapper.find('button.error.btn.search-submit-btn').length).toEqual(1);
	});

	it('Should render the button without the error class with no error', () => {
		let error = MOCK_DATA.formError;
		error = false;
		const wrapper = shallow(<SearchInput formError={error} />)
		expect(wrapper.find('button.error').length).toEqual(0);
		expect(wrapper.find('button.btn.search-submit-btn').length).toEqual(1);
	});

	it('Should render the search icon', () => {
		const wrapper = shallow(<SearchInput />)
		expect(wrapper.find('i.fa.fa-search').length).toEqual(1);
	})

	it('Should render the button with tabIndex -1 if the modal is shown', () => {
		let show = MOCK_DATA.show;
		show = true;
		const wrapper = shallow(<SearchInput show={show} />)
		expect(wrapper.find('button').props().tabIndex).toEqual("-1");
	})
	
	it('Should render the SearchInput with tab index -1 if the modal is shown', () => {
		let show = MOCK_DATA.show;
		show = true;
		const wrapper = shallow(<SearchInput show={show} />)
		expect(wrapper.find('input[type="text"]').props().tabIndex).toEqual("-1");
	})
});