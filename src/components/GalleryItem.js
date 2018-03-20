import React, { Component } from 'react';
import { RingLoader } from 'react-spinners';
import '../reset.css';
import './GalleryItem.css';

class GalleryItem extends Component {

	render() {

		let { 
			grid, 
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
		} = this.props;

		let tabIndex = show === true ? "" : "0";
		let classNames = grid === true ? "image-li" : "image-li list-view";
		let h2ClassNames = grid === true ? "hidden" : null;
		let overlayDiv;
			if(imageStatus[i].status === "loading") {
				overlayDiv = (
				<div className={"loading-overlay sweet-loading"} i={i}>
					<RingLoader color={'#0070FF'} />
				</div>
			);
		} else {
			overlayDiv = (
				<div className={'info-overlay behind'}>
					<img 
						className="profile-img" 
						src={user.profile_image.medium}
						alt={`${user.username}'s profile`} 
					/>
					<h2>{user.name}</h2>
				</div>
			);
		}

		return(
			<li className={classNames}>
				{overlayDiv}
				<img 
        	tabIndex={tabIndex}
        	role={"button"}
					src={src} 
					alt={alt} 
					onLoad={onLoad} 
					onError={onError}
					onClick={onClick}
					onKeyUp={handleKeyUp}
					onMouseOver={onMouseOver}
					i={i}
				/>
				<div className="link-container">
					<h2 className={h2ClassNames}>
						<a href={link} 
							target="_blank">
								{link}
						</a>
					</h2>
				</div>
			</li>
		)
	}
}

export default GalleryItem;