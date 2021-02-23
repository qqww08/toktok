import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { __Snackbar, FlexCenter } from "~/styles/global-styles";
import Slider from "react-slick";
import Snackbar, { SnackbarOrigin } from "@material-ui/core/Snackbar";

import themes from "~/styles/themes";
import useFormForceReset from "~/hooks/useFormForceReset";
import { ValueProps } from "~/interfaces";
const Settings = {
  className: "photo-slick",
  dots: false,
  arrows: false,
  infinite: false,
  draggable: true,
  slidesToShow: 2,
  speed: 300,
  centerPadding: "30px",
};
export interface State extends SnackbarOrigin {
  open: boolean;
}
interface Props extends ValueProps<null | string[]> {
  idx: number;
}
/**
 * 차량 사진 카테고리
 * @param valueProps = data props
 * @param forceUpdate = update
 * @param idx = detail index
 * */
const CarPhotos = ({ valueProps, forceUpdate, idx }: Props) => {
  const [image, setImage] = useState([]);
  const [state, setState] = useState<State>({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });
  useFormForceReset<null>(setImage, forceUpdate, null);
  useEffect(() => {
    valueProps(image);
  }, [image]);
  const { vertical, horizontal, open } = state;

  const inputHandler = (e) => {
    const dummy = [];
    const check = image === null;
    const files = [...e.target.files];
    const cleanUp = () => {
      files.map((item) => URL.revokeObjectURL(item));
    };

    if (image?.length > 9) {
      setState({ ...state, open: true });
      setTimeout(() => {
        setState({ ...state, open: false });
      }, 3000);
      return cleanUp();
    } else {
      files.map((item) => {
        check
          ? dummy.push(URL.createObjectURL(item))
          : image.push(URL.createObjectURL(item));
      });
    }

    setImage(check ? [...dummy] : [...image]);
    return cleanUp();
  };

  return (
    <__Wrapper>
      <input
        id={`photo${idx}`}
        type="file"
        hidden
        onChange={inputHandler}
        multiple
      />
      <__PhotoWrapper>
        <Slider {...Settings}>
          <__Label htmlFor={`photo${idx}`}>
            <__ImgWrapper>
              <img src="/images/grey-plus.png" />
            </__ImgWrapper>
          </__Label>

          {image &&
            image.map((item) => (
              <__Photos key={item}>
                <img src={item} />
              </__Photos>
            ))}
        </Slider>
      </__PhotoWrapper>

      <Snackbar
        className="snackbar"
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        message="이미지는 10개가 최대 입니다."
        key={vertical + horizontal}
      />
    </__Wrapper>
  );
};
const __Wrapper = styled.div`
  ${__Snackbar};
`;
const __Label = styled.label`
  outline: none;
  img {
    height: 3rem;
    width: 3rem;
  }
`;
const __ImgWrapper = styled.a`
  ${FlexCenter};
  border-radius: 10px;
  background: rgba(34, 148, 227, 0.2);
  height: 11.5rem;
  width: 11.5rem;
  margin-right: 1rem;
  outline: none;
`;
const __PhotoWrapper = styled.div`
  outline: none;
  .photo-slick {
    .slick-track {
      float: left;
      width: 100%;
    }
    .slick-slide {
      width: auto !important;
    }
  }
`;
const __Photos = styled.div`
  outline: none;
  margin-right: 1rem;
  img {
    border-radius: 10px;
    height: 11.5rem;
    width: 11.5rem;
  }
`;
export default CarPhotos;
