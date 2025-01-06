import React, { Component } from "react";

class FormRowInputRadio extends Component {
    render() {
        return <>
            <div class="form-row">
                <div class="form-row-label">
                    <label for={this.props.nameId}> {this.props.label} </label>
                </div>
                <div class="form-row-input">
                    { this.props.radioOptions.map((radioOption, index) => (
                        <>
                        <input type="radio" id={radioOption.id} name={this.props.nameId} />
                        <label for={radioOption.id}> {radioOption.label} </label> 
                        </>
                    ))}
                </div>
            </div>
        </>;
    }
}
 
export default FormRowInputRadio;