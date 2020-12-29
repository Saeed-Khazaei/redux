import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGallery } from './redux/Gallery/galleryActions';
class gallery extends Component {
    render() {
        console.log(this.props.gallery);
        return (
            <>
                <h1>Gallery</h1>
                <button onClick={() => this.props.getGallery(21)}>Get New Gallery Items</button>
                {this.props.gallery && this.props.gallery.loading && <div className="loader"></div>}
                <ul className='gallery-box'>
                    {
                        this.props.gallery.gallery && this.props.gallery.gallery.length &&
                        this.props.gallery.gallery.map(i =>
                            <li key={i.author + i.id} className='card'>
                                <img src={i.download_url} alt={i.download_url} />
                                <p>{i.author}</p>
                            </li>)
                    }
                </ul>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        gallery: state.gallery
    }
}
export default connect(mapStateToProps, { getGallery })(gallery);