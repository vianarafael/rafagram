import styled, { css } from "styled-components";
import { get } from "lodash";
import { TextStyleVariantsMap } from "../../foundations/Text";
import { breakpointsMedia } from "../../../theme/utils/breakpointsMedia";
import propToStyle from "../../../theme/utils/propToStyle";

const ButtonGhost = css`
  color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
  background: transparent;
`;

const ButtonDefault = css`
  color: ${(props) => get(props.theme, `colors.${props.variant}.contrastText`)};
  background-color: ${(props) =>
    get(props.theme, `colors.${props.variant}.color`)};
`;

export const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  border-radius: 8px;

  ${TextStyleVariantsMap.smallestException}

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

  ${propToStyle("margin")}
  ${propToStyle("display")}
`;
