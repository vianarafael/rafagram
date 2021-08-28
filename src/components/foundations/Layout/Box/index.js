/* eslint-disable no-unused-vars */
import styled from "styled-components";
import propToStyle from "../../../../theme/utils/propToStyle";

export const Box = styled.div`
  ${propToStyle("flex")}
  ${propToStyle("display")}
  ${propToStyle("flexDirection")}
  ${propToStyle("justifyContent")}
  ${propToStyle("flexWrap")}
  ${propToStyle("backgroundColor")}
  ${propToStyle("backgroundImage")}
  ${propToStyle("backgroundRepeat")}
  ${propToStyle("backgroundPosition")}

  ${propToStyle("boxShadow")}
  ${propToStyle("padding")}

  ${propToStyle("width")}
  ${propToStyle("listStyle")}
  ${propToStyle("margin")}
  ${propToStyle("marginLeft")}
  ${propToStyle("marginTop")}
  ${propToStyle("marginBottom")}
  ${propToStyle("marginRight")}
  ${({ theme, borderRadiusTheme }) =>
    // eslint-disable-next-line no-template-curly-in-string
    borderRadiusTheme && "border-radius: ${theme.borderRadius}"};
`;
