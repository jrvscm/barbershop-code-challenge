import React from 'react';
import { shallow, mount } from 'enzyme';
import { MOCK_DATA } from '../config';
import { GalleryItem } from './GalleryItem';

describe('<GalleryItem />', () => {

	let { 
		grid, 
		currentImages,
		imageStatus, 
		link,
		src,
		alt,
		onLoad,
		onError,
		user,
		onClick,
		onMouseOver,
		handleKeyUp,
		show,
		i 
	} = MOCK_DATA;
	
	it('Renders without crashing', () => {
		shallow(
			<GalleryItem 
				key={1}
				i={1}
				src={currentImages[1].urls.small} 
				alt={currentImages[1].description}
				link={currentImages[1].links.html}
				user={currentImages[1].user}
				onLoad={(e) => this.onLoad(e, i)}
				onError={(e) => this.onError(e, i)}
				onClick={(e) => this.show(e, i)}
				onMouseOver={(e) => this.onMouseOver(e, i)}
				handleKeyUp={(e) => this.onMouseOver(e, i )}
				grid={grid}
				imageStatus={imageStatus} 
				show={show}
			/>	
		)
	});

	it('Should display the loading div if status is loading', () => {
		imageStatus[0].status = "loading";
		const wrapper = 
		shallow(
			<GalleryItem 
				key={0}
				i={0}
				src={currentImages[0].urls.small} 
				alt={currentImages[0].description}
				link={currentImages[0].links.html}
				user={currentImages[0].user}
				onLoad={(e) => this.onLoad(e, i)}
				onError={(e) => this.onError(e, i)}
				onClick={(e) => this.show(e, i)}
				onMouseOver={(e) => this.onMouseOver(e, i)}
				handleKeyUp={(e) => this.onMouseOver(e, i )}
				grid={grid}
				imageStatus={imageStatus} 
				show={show}
			/>	
		)	
		expect(wrapper.find('li div').at(0).props().className).toEqual('loading-overlay sweet-loading');
	});

	it('Should display the overlay div if status is loaded', () => {
		imageStatus[0].status = "loaded";
		const wrapper = 
		shallow(
			<GalleryItem 
				key={0}
				i={0}
				src={currentImages[0].urls.small} 
				alt={currentImages[0].description}
				link={currentImages[0].links.html}
				user={currentImages[0].user}
				onLoad={(e) => this.onLoad(e, i)}
				onError={(e) => this.onError(e, i)}
				onClick={(e) => this.show(e, i)}
				onMouseOver={(e) => this.onMouseOver(e, i)}
				handleKeyUp={(e) => this.onMouseOver(e, i )}
				grid={grid}
				imageStatus={imageStatus} 
				show={show}
			/>	
		)	
		expect(wrapper.find('li div').at(0).props().className).toEqual('info-overlay behind');
	});

	it('Should change the img tab index to "-1" if the modal is shown', () => {
		show = true;
		const wrapper = 
		shallow(
			<GalleryItem 
				key={0}
				i={0}
				src={currentImages[0].urls.small} 
				alt={currentImages[0].description}
				link={currentImages[0].links.html}
				user={currentImages[0].user}
				onLoad={(e) => this.onLoad(e, i)}
				onError={(e) => this.onError(e, i)}
				onClick={(e) => this.show(e, i)}
				onMouseOver={(e) => this.onMouseOver(e, i)}
				handleKeyUp={(e) => this.onMouseOver(e, i )}
				grid={grid}
				imageStatus={imageStatus} 
				show={show}
			/>	
		)	
		expect(wrapper.find('.image-li img').at(1).props().tabIndex).toEqual("-1");
	});

	it('Should change the tab index to 0 if the modal is hidden', () => {
		show = false;
		const wrapper = 
		shallow(
			<GalleryItem 
				key={0}
				i={0}
				src={currentImages[0].urls.small} 
				alt={currentImages[0].description}
				link={currentImages[0].links.html}
				user={currentImages[0].user}
				onLoad={(e) => this.onLoad(e, i)}
				onError={(e) => this.onError(e, i)}
				onClick={(e) => this.show(e, i)}
				onMouseOver={(e) => this.onMouseOver(e, i)}
				handleKeyUp={(e) => this.onMouseOver(e, i )}
				grid={grid}
				imageStatus={imageStatus} 
				show={show}
			/>	
		)	
		expect(wrapper.find('.image-li img').at(1).props().tabIndex).toEqual("0");
	});

	it('should show the list view if grid is false', () => {
		grid=false;
		const wrapper = 
		shallow(
			<GalleryItem 
				key={0}
				i={0}
				src={currentImages[0].urls.small} 
				alt={currentImages[0].description}
				link={currentImages[0].links.html}
				user={currentImages[0].user}
				onLoad={(e) => this.onLoad(e, i)}
				onError={(e) => this.onError(e, i)}
				onClick={(e) => this.show(e, i)}
				onMouseOver={(e) => this.onMouseOver(e, i)}
				handleKeyUp={(e) => this.onMouseOver(e, i )}
				grid={grid}
				imageStatus={imageStatus} 
				show={show}
			/>	
		)	
		expect(wrapper.find('.image-li .list-view').length).toEqual(1);
	});	

	it('Should hide the h2 external links if grid is true', () => {
		grid=true;
		const wrapper = 
		shallow(
			<GalleryItem 
				key={0}
				i={0}
				src={currentImages[0].urls.small} 
				alt={currentImages[0].description}
				link={currentImages[0].links.html}
				user={currentImages[0].user}
				onLoad={(e) => this.onLoad(e, i)}
				onError={(e) => this.onError(e, i)}
				onClick={(e) => this.show(e, i)}
				onMouseOver={(e) => this.onMouseOver(e, i)}
				handleKeyUp={(e) => this.onMouseOver(e, i )}
				grid={grid}
				imageStatus={imageStatus} 
				show={show}
			/>	
		)	
		expect(wrapper.find('h2.hidden').length).toEqual(1);
	});

	it('Should display the image alt text', () => {
		grid=true;
		const wrapper = 
		shallow(
			<GalleryItem 
				key={0}
				i={0}
				src={currentImages[0].urls.small} 
				alt={currentImages[0].description}
				link={currentImages[0].links.html}
				user={currentImages[0].user}
				onLoad={(e) => this.onLoad(e, i)}
				onError={(e) => this.onError(e, i)}
				onClick={(e) => this.show(e, i)}
				onMouseOver={(e) => this.onMouseOver(e, i)}
				handleKeyUp={(e) => this.onMouseOver(e, i )}
				grid={grid}
				imageStatus={imageStatus} 
				show={show}
			/>	
		)	
		expect(wrapper.find('.image-li img').at(0).props().alt).toEqual("lastly's profile");
	});

	it('Should display the h2 text in the overlay', () => {
		grid=true;
		const wrapper = 
		shallow(
			<GalleryItem 
				key={0}
				i={0}
				src={currentImages[0].urls.small} 
				alt={currentImages[0].description}
				link={currentImages[0].links.html}
				user={currentImages[0].user}
				onLoad={(e) => this.onLoad(e, i)}
				onError={(e) => this.onError(e, i)}
				onClick={(e) => this.show(e, i)}
				onMouseOver={(e) => this.onMouseOver(e, i)}
				handleKeyUp={(e) => this.onMouseOver(e, i )}
				grid={grid}
				imageStatus={imageStatus} 
				show={show}
			/>	
		)	
		expect(wrapper.find('.image-li div h2').at(0).props().children).toEqual('Tyler Lastovich')
	})

	it('Should render the users profile image', () => {
		grid=true;
		const wrapper = 
		shallow(
			<GalleryItem 
				key={0}
				i={0}
				src={currentImages[0].urls.small} 
				alt={currentImages[0].description}
				link={currentImages[0].links.html}
				user={currentImages[0].user}
				onLoad={(e) => this.onLoad(e, i)}
				onError={(e) => this.onError(e, i)}
				onClick={(e) => this.show(e, i)}
				onMouseOver={(e) => this.onMouseOver(e, i)}
				handleKeyUp={(e) => this.onMouseOver(e, i )}
				grid={grid}
				imageStatus={imageStatus} 
				show={show}
			/>	
		)	
		expect(wrapper.find('.image-li div img').at(0).props().className).toEqual('profile-img')
	})


	it('Should have the link and text as the h2 child', () => {
		grid=true;
		const wrapper = 
		shallow(
			<GalleryItem 
				key={0}
				i={0}
				src={currentImages[0].urls.small} 
				alt={currentImages[0].description}
				link={currentImages[0].links.html}
				user={currentImages[0].user}
				onLoad={(e) => this.onLoad(e, i)}
				onError={(e) => this.onError(e, i)}
				onClick={(e) => this.show(e, i)}
				onMouseOver={(e) => this.onMouseOver(e, i)}
				handleKeyUp={(e) => this.onMouseOver(e, i )}
				grid={grid}
				imageStatus={imageStatus} 
				show={show}
			/>	
		)	
		expect(wrapper.find('.image-li div h2').at(1).props().children).toEqual(
		<a href="https://unsplash.com/photos/P2cn9rt8pII" target="_blank">
			https://unsplash.com/photos/P2cn9rt8pII
		</a>
		)
	})	

	it('Should fire the onClick callback when clicked', () => {
		grid=true;
		const callback = jest.fn();
		const wrapper = 
		shallow(
			<GalleryItem 
				key={0}
				i={0}
				src={currentImages[0].urls.small} 
				alt={currentImages[0].description}
				link={currentImages[0].links.html}
				user={currentImages[0].user}
				onLoad={(e) => this.onLoad(e, i)}
				onError={(e) => this.onError(e, i)}
				onClick={callback}
				onMouseOver={(e) => this.onMouseOver(e, i)}
				handleKeyUp={(e) => this.onMouseOver(e, i )}
				grid={grid}
				imageStatus={imageStatus} 
				show={show}
			/>	
		)	
		wrapper.find('.image-li img').at(1).simulate('click');
		expect(callback).toHaveBeenCalled();
	})
})

