import React, { Component } from "react";

class Banner extends Component {
    render() {
        return <>
            <div className="info-white-box banner">
                <div className="banner-title">
                    Speaker Submission
                </div>
                <div className="banner-content">
                    Want to speak at our fake conference?
                </div>
                <div className="banner-content">
                    Fill out this form.
                </div>
            </div> 
        </>;
    }
}
 
export default Banner;