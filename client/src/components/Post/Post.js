// import react
import React, { Component } from 'react';

// import styles
import './post.css';

class Post extends Component {
    
    
    
    render() {
        return (    
            <div className="form-box">
                <form className="form">
                    <input
                        value={this.state.firstName}
                        name="firstName"
                        onChange={this.handleInputChange}
                        type="text"
                    />

                </form>
            </div>
        )
    }    
};

// export 
export default Post;