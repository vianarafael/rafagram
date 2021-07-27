import styled from "styled-components";

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

const Title = ({ children }) => {
  return <h1>{children}</h1>;
};

export default function Home() {
  return <Title>My page</Title>;
}
