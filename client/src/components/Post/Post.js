// import react
import React, { Component } from 'react';

// import styles
import './post.css';

class Post extends Component {
    state = {
        firstName: "",
        title: "",
        description: "",
        email: ""
    }
    
    handleInputChange = event => {

    }

    handleForumSubmit = event => {


    }
    
    render() {
        return (  
            <div className="form-box">
                <h4>New Post:</h4>  
                <form className="form">
                    <input
                        value={this.state.firstName}
                        name="firstName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="First Name"
                    />
                    <input
                        value={this.state.email}
                        name="email"
                        onChange={this.handleInputChange}
                        type="email"
                        placeholder="Email"
                    />    
                    <input
                        value={this.state.title}
                        name="Title"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Title"
                    />
                    <textarea value={this.state.description} onChange={this.handleInputChange} placeHolder='Description'/>
                    
                </form>
            </div>
        )
    }    
};

// export 
export default Post;