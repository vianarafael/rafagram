import React from "react";
import styled, { css } from "styled-components";
import get from "lodash/get";
import PropTypes from "prop-types";
import propsToStyle from "../../../theme/utils/propToStyle";
import { breakpointsMedia } from "../../../theme/utils/breakpointsMedia";
import Link from "../../commons/Link";

export const TextStyleVariantsMap = {
  paragraph1: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({ theme }) =>
      theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${({ theme }) =>
      theme.typographyVariants.paragraph1.lineHeight};
  `,

  smallestException: css`
    font-size: ${({ theme }) =>
      theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({ theme }) =>
      theme.typographyVariants.smallestException.fontWeight};
    line-height: ${({ theme }) =>
      theme.typographyVariants.smallestException.lineHeight};
  `,
  title: css`
    ${({ theme }) => css`
      font-size: ${theme.typographyVariants.titleXS.fontSize};
      font-weight: ${theme.typographyVariants.titleXS.fontWeight};
      line-height: ${theme.typographyVariants.titleXS.lineHeight};
    `}
    ${breakpointsMedia({
      md: css`
        ${({ theme }) => css`
          font-size: ${theme.typographyVariants.title.fontSize};
          font-weight: ${theme.typographyVariants.title.fontWeight};
          line-height: ${theme.typographyVariants.title.lineHeight};
        `}
      `,
    })}
  `,
};

const TextBase = styled.span`
  color: ${(props) => get(props.theme, `colors.${props.color}.color`)};
  ${(props) => TextStyleVariantsMap[props.variant]}
  ${propsToStyle("textAlign")}
`;

export default function Text({ href, tag, variant, children, ...props }) {
  if (href) {
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <TextBase as={Link} href={href} variant={variant} {...props}>
        {children}
      </TextBase>
    );
  }
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <TextBase as={tag} variant={variant} {...props}>
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node,
  href: PropTypes.string,
};

Text.defaultProps = {
  tag: "span",
  variant: "paragraph1",
  children: null,
  href: "",
};
