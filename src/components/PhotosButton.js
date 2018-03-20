import React, { Component } from 'react';
import '../reset.css';
import './PhotosButton.css';

class PhotosButton extends Component {
	render() { 
		const { 
			loading, 
			onSubmit,
			disabled,
			show 
		} = this.props;
		
		const tabIndex = show === true ? "-1" : "0";
		const icon = loading === true ? 
		<i className='fa fa-refresh fa-spin'></i> 
		: <span><i className='fa fa-plus-square-o'></i> Get Photos</span>;
		
		return(
			<button 
				tabIndex={tabIndex}
				id="get-photos-btn" 
				className={'btn active'} 
				type="submit"
				disabled={disabled}
				onClick={onSubmit}>
					{ icon }
			</button>
		)
	}
}

export default PhotosButton;