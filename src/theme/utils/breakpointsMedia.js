export function breakpointsMedia(cssByBreakpoints) {
  const breakpointsNames = Object.keys(cssByBreakpoints);
  console.log(breakpointsNames);
  return breakpointsNames.map((breakpointsName) => {
    return `
            @media screen and (min-width : $breakpoints[breakpointName]}px) {
            }
        `;
  });
}
