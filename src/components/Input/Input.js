import React from "react";
import {
    InputInner,
    InputSubAction,
    InputField,
    AudioMessageButton,
  } from "./Input.styled";
;


const Input = () => {
    return (
        <InputInner>
            <InputSubAction/>
            <InputField></InputField>
            <AudioMessageButton/>
        </InputInner>
    )
}

export default Input;