import React from 'react';
import { shallow, mount } from 'enzyme';
import { MOCK_DATA } from '../config';
import { Nav } from './Nav';

describe('<Nav />', () => {
	
	it('Renders without crashing', () => {
		shallow(<Nav />)
	});

	it('Should render the grid-btn with the .active class when grid is true', () => {
		let grid = MOCK_DATA.grid;
		grid = true;
		const wrapper = shallow(<Nav grid={grid} />)
		expect(wrapper.find('#grid-btn.active').length).toEqual(1);
		expect(wrapper.find('#list-btn.active').length).toEqual(0);
	})

	it('Should render the list-btn with the .active class when grid is false', () => {
		let grid = MOCK_DATA.grid;
		grid = false;
		const wrapper = shallow(<Nav grid={grid} />)
		expect(wrapper.find('#list-btn.active').length).toEqual(1);
		expect(wrapper.find('#grid-btn.active').length).toEqual(0);
	})

	it('When the modal is shown both buttons should have tabIndex of -1', () => {
		let show = MOCK_DATA.show;
		show = true;
		const wrapper = shallow(<Nav show={show} />)
		expect(wrapper.find('#grid-btn').props().tabIndex).toEqual("-1");
		expect(wrapper.find('#list-btn').props().tabIndex).toEqual("-1");
	})

	it('Buttons should have tab index 0 when modal is not shown', () => {
		let show = MOCK_DATA.show;
		show = false;
		const wrapper = shallow(<Nav show={show} />)
		expect(wrapper.find('#grid-btn').props().tabIndex).toEqual("0");
		expect(wrapper.find('#list-btn').props().tabIndex).toEqual("0");
	})
});