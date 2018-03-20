import React, { Component } from 'react';
import '../reset.css';
import './SearchInput.css';

class SearchInput extends Component {
	render() {
		const {
			onChange,
			onSubmit,
			onClick,
			formError,
			show
		} = this.props;

		const inputClassNames = formError === true ? "error search-input" : "search-input";
		const btnClassNames = formError === true ? "error btn search-submit-btn" : "btn search-submit-btn";
		const tabIndex = show === true ? "-1" : "0";

		return(
		<form 
			action="#" 
			id="search-form" 
			name="search-form"
			onSubmit={onSubmit}
		>
			<input  
				tabIndex={tabIndex}
				type="text" 
				name="search-input" 
				aria-labelledby="search-input"
				onChange={onChange} 
				autoComplete="off"
				className={inputClassNames}
			/>
			<button 
				tabIndex={tabIndex}
				className={btnClassNames}
				type="submit"
				onClick={onClick}
			>
				<i className="fa fa-search"></i>
			</button> 
		</form>
		)
	}
}

export default SearchInput;