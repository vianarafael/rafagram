function breakpointsMedia(cssByBreakpoints) {
    const breakpointsNamess = Object.keys(cssByBreakpoints);
    console.log(breakpointsNames); [ 'md' ]
    return breakpointsNames.map(breakpointsName) => {
        return `
            @media screen and (min-width : $breakpoints[breakpointName]}px) {
            }
        `
    })
}