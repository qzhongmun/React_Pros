import styled from "styled-components";

export const Button = styled.button`
  border-radius: 8px;
  background-color: #4caf50;
  border: none;
  font-size: 16px;
  cursor: pointer;
  font-family: "Karla"
  font-style: normal;
  font-weight: 700;
  font-size: 16.384px;
  color: #ffffff;
  padding: 9px 23px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  :focus {
    outline: none;
}

:active {
    box-shadow: inset 5px 5px 10px -3px rgba(0, 0, 0, 0.7);
}

`;
