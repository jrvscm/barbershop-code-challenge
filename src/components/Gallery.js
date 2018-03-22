import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
requestImages,
setImageStatus, 
setLoading, 
setModal,
setModalImage,
setSearchInputValue,
requestImagesQuery,
setFormError 
} from '../actions';
import Modal from 'simple-react-modal';
import GalleryItem from './GalleryItem';
import PhotosButton from './PhotosButton';
import SearchInput from './SearchInput';
import '../reset.css';
import './Gallery.css';

export class Gallery extends Component {

	onMouseOver(e, i) {
		//setting up our image for the popup before we send it to the store
		const modalImage = {
			'src': this.props.currentImages[i].urls.small,
			'alt': this.props.currentImages[i].description,
			'name': this.props.currentImages[i].user.name,
			'twitter_username': this.props.currentImages[i].user.twitter_username,
			'location': this.props.currentImages[i].user.location,
			'instagram': this.props.currentImages[i].user.instagram_username,
			'profile_image': this.props.currentImages[i].user.profile_image.medium
		}

		this.props.dispatch(setModalImage(modalImage));

		if((e.keyCode === 32 && this.props.show === false) ||
			(e.keyCode === 13 && this.props.show === false)) {
				this.props.dispatch(setModal(true))
		} else {
			return true;
		}
	}

	show(e, i) {
		this.props.dispatch(setModal(true))
	}

	close(e) {
	//handling keyboard actions and click for the close button	
		if(
			e.keyCode === 32 ||
			e.keyCode === 13 || 
			e.type === 'click') {
			this.props.dispatch(setModal(false))
		}
	}

	onLoad(e, i) {
		const imageStatus = this.props.imageStatus;
		const newImageStatus = JSON.parse(JSON.stringify(imageStatus))
			newImageStatus[i] = {"index":i, status:"loaded"};
			this.props.dispatch(setImageStatus(newImageStatus))

		//if all of the images are loaded we set loading to false
			if(
					newImageStatus[0].status === "loaded" &&
					newImageStatus[1].status === "loaded" &&
					newImageStatus[2].status === "loaded" &&
					newImageStatus[3].status === "loaded" &&
					newImageStatus[4].status === "loaded" &&
					newImageStatus[5].status === "loaded") {	
					this.props.dispatch(setLoading(false))
				}
	}

	onError(e) {
		alert('Something went wrong, try refreshing the page.')
	}

	getPhotos(e) {
		this.props.dispatch(setLoading(true))
		this.props.dispatch(requestImages())
	}


	handleInput(e) {
		this.props.dispatch(setFormError(false))
		this.props.dispatch(setSearchInputValue(e.target.value))
	}

	formSubmit(e) {
		e.preventDefault();
	}

	inputSubmit(e) {
		const query = `${this.props.searchInputValue}`.trim();
			if(query !== '') {
				this.props.dispatch(requestImagesQuery(query))
			} else {
				this.props.dispatch(setFormError(true))
			}
	}

	render() {

		const { 
			currentImages,
			imageStatus,
			loading,
			grid,
			show,
			modalImage,
			formError
		} = this.props;
		
		const mappedImages = currentImages.map((image, i) =>
			<GalleryItem 
				key={i}
				i={i}
				src={image.urls.small} 
				alt={image.description}
				link={image.links.html}
				user={image.user}
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

		return (
			<div className="gallery-container">	
				<Modal 
					containerClassName="modal-container"
					closeOnOuterClick={true}
					show={show}
					onClose={(e) => this.close(e)}>
					<i
						className="fa fa-times-thin fa-3x" 
						tabIndex="1"
						role="button" 
						onClick={this.close.bind(this)}
						onKeyUp={this.close.bind(this)}>
					</i>
						<div id="modal-content">
							<img
								src={modalImage.src}
								alt={modalImage.description}
							/>
							<img 
								src={modalImage.profile_image}
								alt={`${modalImage.username}'s profile`}
								className="profile-img" 
							/>
							<h2 className={modalImage.name === null ? "hidden" : "user-name"}>{modalImage.name}</h2>
							<h2 className={modalImage.twitter_username === null ? "hidden" : "twitter-handle"}>@{modalImage.twitter_username}</h2>
							<h2 className={modalImage.location === null ? "hidden" : "location"}>
								<i className="fa fa-map-marker"></i> {modalImage.location}
							</h2>
						</div>
				</Modal>
				<ul id='images-list'>
					{ mappedImages }
				</ul>
				<PhotosButton 
					onSubmit={(e) => this.getPhotos(e)} 
					loading={loading}
					show={show} 
					disabled={loading}
				/>
				<SearchInput
					show={show} 
					onChange={(e) => this.handleInput(e)}
					onSubmit={(e) => this.formSubmit(e)} 
					onClick={(e) => this.inputSubmit(e)}
					formError={formError}
				/>
			</div>
		)
	}
}

export default connect()(Gallery);