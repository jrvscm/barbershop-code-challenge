import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setGrid } from '../actions';
import '../reset.css';
import './Nav.css';

export class Nav extends Component {

	setGrid(e) {
		e.target.id === 'grid-btn' ? this.props.dispatch(setGrid(true)) : this.props.dispatch(setGrid(false));
	}

	render() {

		const { 
			grid,
			show
		} = this.props;

		let tabIndex = show === true ? "-1" : "0";

		return (
			<div className="nav-container">
				<nav>
					<h1>My Photos</h1>
					<button 
						tabIndex={tabIndex}
						id="grid-btn" 
						className={grid === true ? "btn active" : "btn"} 
						onClick={(e) => this.setGrid(e)}>
							<i className="fa fa-th"></i>
							Grid
					</button>

					<button 
						tabIndex={tabIndex}
						id="list-btn" 
						className={grid === true ? "btn" : "btn active"} 
						onClick={(e) => this.setGrid(e)}>
							<i className="fa fa-list-ul"></i>
							List
					</button>
				</nav>
			</div>
		)
	}
}


export default connect()(Nav);