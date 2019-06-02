import React, { Component } from 'react';

class newPost extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">
                Basic textarea
                </label>
                <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                />
            </div>
        
        )
    }


}
    
export default newPost;