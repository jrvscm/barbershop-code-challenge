import React from 'react';
import { shallow, mount } from 'enzyme';
import { MOCK_DATA } from '../config';
import PhotosButton from './PhotosButton';

describe('<PhotosButton />', () => {
	
	it('Renders without crashing', () => {
		shallow(<PhotosButton />)
	});

	it('Should render the loading icon, and not the plus sign when loading is true', () => {
		let loading = MOCK_DATA.loading;
		loading = true;
		const wrapper = shallow(<PhotosButton loading={loading} />)
			expect(wrapper.find('i.fa.fa-refresh.fa-spin').length).toEqual(1);
			expect(wrapper.find('i.fa.fa-plus-square-o').length).toEqual(0);
	})

	it('Should render the plus icon when loading is false', () => {
		let loading = MOCK_DATA.loading;
		loading = false;
		const wrapper = shallow(<PhotosButton loading={loading} />)
		expect(wrapper.find('i.fa.fa-refresh.fa-spin').length).toEqual(0);
		expect(wrapper.find('i.fa.fa-plus-square-o').length).toEqual(1);
	});

	it('Should fire the onSubmit callback when clicked', () => {
		const callback = jest.fn();
		const wrapper = shallow(<PhotosButton onSubmit={callback} />)
		wrapper.simulate('click');
		expect(callback).toHaveBeenCalled();
	})

	it('Should not fire the onSubmit callback when loading is true', () => {
		let loading = MOCK_DATA.loading;
		loading=true;
		const callback = jest.fn();
		const wrapper = shallow(<PhotosButton disabled={loading} onSubmit={callback} />)
		expect(wrapper.props().disabled).toEqual(true);
	})

	it('Should have tabIndex -1 if the modal is shown', () => {
		let show = MOCK_DATA.show;
		show = true;
		const wrapper = shallow(<PhotosButton show={show} />)
		expect(wrapper.props().tabIndex).toEqual("-1")
	})
});