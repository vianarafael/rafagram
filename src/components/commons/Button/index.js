import React from "react";
import styled, { css } from "styled-components";
import { get } from "lodash";
import PropTypes from "prop-types";
import Link from "../Link";
import { TextStyleVariantsMap } from "../../foundations/Text";
import { breakpointsMedia } from "../../../theme/utils/breakpointsMedia";
import propToStyle from "../../../theme/utils/propToStyle";

const ButtonGhost = css`
  color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
  background: transparent;
`;

const ButtonDefault = css`
  color: ${(props) => get(props.theme, `colors.${props.variant}.contrastText`)};
  background-color: ${(props) => {
    console.log(props.variant);
    return get(props.theme, `colors.${props.variant}.color`);
  }};
`;

export const ButtonWrapper = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  border-radius: 8px;

  ${TextStyleVariantsMap.smallestException}

  ${({ ghost, variant }) => {
    console.log(variant);
    if (ghost) {
      return ButtonGhost;
    }
    return ButtonDefault;
  }}
  &:hover,
  &:focus {
    opacity: 0.5;
  }

  ${breakpointsMedia({
    xs: css`
      /* all devices */
      ${TextStyleVariantsMap.smallestException}
    `,
    md: css`
      /* from md breakpoin */
      ${TextStyleVariantsMap.paragraph1}
    `,
  })}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.2;
  }
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `};

  ${propToStyle("margin")}
  ${propToStyle("display")}
`;

// eslint-disable-next-line react/prop-types
export function Button({ href, children, onSetModal, variant }) {
  const hasHref = Boolean(href);
  const tag = hasHref ? Link : "button";
  return (
    <ButtonWrapper as={tag} href={href} onClick={onSetModal} variant={variant}>
      {children}
    </ButtonWrapper>
  );
}

Button.defaultProps = {
  href: "",
};

Button.propTypes = {
  href: PropTypes.string,
};
