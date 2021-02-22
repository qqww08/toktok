import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import styled, { css } from "styled-components";
import themes from "~/styles/themes";
import InputAdornment from "@material-ui/core/InputAdornment";
const PriceInput = ({ valueProps }) => {
  const [value, setValue] = useState<string>("");
  useEffect(() => {
    valueProps(value);
  }, [value]);
  return (
    <__InputWrapper>
      <TextField
        id="standard-required"
        placeholder="0"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        InputProps={{
          endAdornment: <InputAdornment position="end">만원</InputAdornment>,
        }}
      />
    </__InputWrapper>
  );
};
const __InputCss = css`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.2rem;
  letter-spacing: -0.53pt;
  color: ${themes.color.brownGrey};
`;
const __InputWrapper = styled.div`
  .MuiFormControl-root {
    width: 100%;
    .MuiInputBase-input {
      text-align: right;
      ${__InputCss};
      &::placeholder {
        ${__InputCss};
      }
    }
    .MuiTypography-colorTextSecondary {
      ${__InputCss};
    }
    .MuiInput-underline:before {
      opacity: 0.3;
      border-bottom: 1px solid ${themes.color.brownishGrey};
    }
    .MuiInput-underline:after {
      border-bottom: 2px solid ${themes.color.darkSkyBlue};
    }
  }
`;
export default PriceInput;
