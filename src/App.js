import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestImages } from './actions';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import './reset.css';
import './App.css';

export class App extends Component {
  
  componentDidMount() {
    this.props.dispatch(requestImages())
  }

  render() {

    const { 
      grid,
      currentImages,
      imageStatus,
      loading,
      show,
      modalImage,
      searchInputValue,
      formError
    } = this.props;

    return (
      <div className="App">
      	<Nav 
          grid={grid}
          show={show} 
        />
      	<Gallery 
          grid={grid} 
          currentImages={currentImages}
          imageStatus={imageStatus} 
          loading={loading}
          show={show}
          modalImage={modalImage}
          searchInputValue={searchInputValue}
          formError={formError}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
	grid: state.Reducer.grid,
	currentImages: state.Reducer.currentImages,
  imageStatus: state.Reducer.imageStatus,
  loading: state.Reducer.loading,
  show: state.Reducer.show,
  modalImage: state.Reducer.modalImage,
  searchInputValue: state.Reducer.searchInputValue,
  formError: state.Reducer.formError
})

export default connect(mapStateToProps)(App);
