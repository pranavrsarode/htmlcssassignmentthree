import React, { Component } from "react";

class FormRowInputTextArea extends Component {
    render() {
        return <>
            <div class="form-row">
                <div class="form-row-label">
                    <label for={this.props.nameId}> {this.props.label} </label>
                </div>
                <div class="form-row-input">
                    <textarea name={this.props.nameId} rows="8" cols="30" class="textarea-max-width-500px"></textarea>
                    <p>Describe your talk in 500 words or less</p>
                    <p><input type="checkbox" name="availability"/>I'm actually available the date of talk</p>
                </div>
            </div>
        </>;
    }
}
 
export default FormRowInputTextArea;