import React, {Component} from "react"

class LikeButton extends Component {
    constructor() {
        super();
        this.state = {
            liked: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            liked: !this.state.liked
        })
    }

    render(){
        const label = this.state.liked ? "Unlike" : "Like"
        return( 
            <div>
                <button className="btn" onClick={this.handleClick}>
                    {label}
                </button>
            </div>
        )
    }
}

export default LikeButton;