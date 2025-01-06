import React, { Component } from "react";

class FormRowInputSelect extends Component {
    render() {
        return <>
            <div class="form-row">
                <div class="form-row-label">
                    <label for={this.props.nameId}> {this.props.label} </label>
                </div>
                <div class="form-row-input">
                    <select name={this.props.nameId} class="size-select">
                    { this.props.selectOptions.map((selectOption, index) => (
                        <option value={selectOption.value}>{selectOption.label}</option> 
                    ))}
                    </select>
                </div>
            </div>
        </>;
    }
}
 
export default FormRowInputSelect;