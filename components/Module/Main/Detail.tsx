import React, { useEffect } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import styled from "styled-components";
import themes from "~/styles/themes";
import FormWrapper from "~/components/Template/Main/FormWrapper";
import { useDispatch, useSelector } from "react-redux";
import { getCarData } from "~/store/global/actions";
import { State } from "~/interfaces";
interface Props {
  idx: number;
}
const Detail = ({ idx }: Props) => {
  const dispatch = useDispatch();

  return (
    <__DetailWrapper>
      <Accordion id="accordion-header">
        <AccordionSummary
          expandIcon={<__ArrowImg src="/images/arrow.png" />}
          aria-controls="panel1a-content"
          id="accordion-summary"
        >
          <Typography id="accordion-title">중고차 {idx + 1} 정보</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormWrapper idx={idx} />
        </AccordionDetails>
      </Accordion>
    </__DetailWrapper>
  );
};
const __DetailWrapper = styled.div`
  #accordion-header {
    margin-top: 0;
    box-shadow: none;
    min-height: auto;
    .MuiAccordionDetails-root {
      padding: 0;
    }
    .MuiAccordionSummary-root {
      padding: 0;
      min-height: auto;
    }
    #accordion-title {
      font-size: 1.8rem;
      font-weight: bold;
      line-height: 2.2rem;
      color: ${themes.color.greyishBrown};
      padding: 1.2rem 0 1rem;
    }
    #accordion-summary {
      border-bottom: 0.1rem solid ${themes.color.brownishGrey};
    }
    .MuiAccordionSummary-content {
      margin: 0;
      height: auto;
    }
  }
`;
const __ArrowImg = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`;
export default Detail;
