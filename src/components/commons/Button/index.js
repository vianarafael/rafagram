import styled, { css } from "styled-components";
import { get } from "lodash";
import { TextStyleVariantMap } from "../../foundations/Text";

const ButtonGhost = css`
  color: ${(props) => {
    return get(props.theme, `colors.${props.variant}.color`);
  }};
  background: transparent;
`;

const ButtonDefault = css`
  color: ${(props) => {
    return get(props.theme, `colors.${props.variant}.contrastText`);
  }};
  background-color: ${(props) => {
    return get(props.theme, `colors.${props.variant}.color`);
  }};
`;

export const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  border-radius: 8px;

  ${TextStyleVariantMap.smallestException}

  ${function ({ ghost }) {
    if (ghost) {
      return ButtonGhost;
    }
    return ButtonDefault;
  }}
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;
