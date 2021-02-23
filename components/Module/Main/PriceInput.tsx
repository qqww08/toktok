import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import styled, { css } from "styled-components";
import themes from "~/styles/themes";
import InputAdornment from "@material-ui/core/InputAdornment";
import useFormForceReset from "~/hooks/useFormForceReset";
import { ValueProps } from "~/interfaces";
/**
 * 가격 제시하기 카테고리
 * @param valueProps = data props
 * @param forceUpdate = update
 * */
const PriceInput = ({ valueProps, forceUpdate }: ValueProps<string>) => {
  const [value, setValue] = useState<string>("");
  useFormForceReset<string>(setValue, forceUpdate, "");

  useEffect(() => {
    valueProps(value);
  }, [value]);

  const NumberComma = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/,/g, "");
    const _pattern2 = /^\d*[.]\d{9}$/;
    if (_pattern2.test(value)) {
      return false;
    }
    const regex = /^[0-9\b ,]{0,100}$/;
    if (regex.test(event.target.value)) {
      const comma = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      setValue(comma);
    }
  };

  return (
    <__InputWrapper>
      <TextField
        id="standard-required"
        placeholder="0"
        value={value}
        onChange={NumberComma}
        InputProps={{
          endAdornment: <InputAdornment position="end">만원</InputAdornment>,
        }}
      />
    </__InputWrapper>
  );
};
const __InputCss = css`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 2.2rem;
  letter-spacing: -0.53pt;
  color: ${themes.color.brownishGrey};
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
