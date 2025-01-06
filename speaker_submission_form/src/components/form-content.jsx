import React, { Component } from "react";

import FormRowInputText from "./form-row-input-text";
import FormRowInputRadio from "./form-row-input-radio";
import FormRowInputSelect from "./form-row-input-select";
import FormRowInputTextArea from "./form-row-input-textarea";
import FormRowSubmitBtn from "./form-row-submit-btn";

const radioOptions = [
    {id:"mainstage", label:"Main Stage"},
    {id:"workshop", label:"Workshop"}
];
const selectOptions = [
    {value:"es", label:"Extra Small"},
    {value:"s", label:"Small"},
    {value:"m", label:"Medium"},
    {value:"l", label:"Large"},
    {value:"el", label:"Extra Large"}
];

class FormContent extends Component {
    render() {
        return <>
            <div class="info-white-box form-content">
                <FormRowInputText label="Name" nameId="name"/>
                <FormRowInputText label="Email" nameId="email"/>
                <FormRowInputRadio label="Type of Talk" nameId="type-of-talk" radioOptions={radioOptions} />
                <FormRowInputSelect label="T-Shirt Size" nameId="t-shirt-size" selectOptions={selectOptions} />
                <FormRowInputTextArea label="Abstract" nameId="abstract"/>
                <FormRowSubmitBtn />
            </div>
        </>;
    }
}
 
export default FormContent;