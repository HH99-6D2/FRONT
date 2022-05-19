import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {
    children,
    width,
    flex,
    justifyContent,
    alignItems,
    direction,
    inlineStyles,
    margin,
    onClick,
    signupFlex,
    height,
    Category,
    border,
    borderRadius,
    borderBottom,
    between,
    bottomborder,
    textAlign,
    profileFlex,
    cursor,
    position,
    left,
    top,
  } = props;

  const styles = {
    width,
    margin,
    flex,
    justifyContent,
    alignItems,
    direction,
    inlineStyles,
    signupFlex,
    height,
    Category,
    border,
    borderRadius,
    borderBottom,
    between,
    bottomborder,
    textAlign,
    profileFlex,
    cursor,
    position,
    left,
    top,
  };

  return (
    <Wrapper {...styles} onClick={onClick}>
      {children}
    </Wrapper>
  );
};

Grid.defaultProps = {
  margin: "",
  flex: false,
  justifyContent: false,
  alignItems: false,
  direction: "",
  inlineStyles: false,
  onClick: () => {},
  signupFlex: false,
  bottomborder: false,
};

const Wrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  border-bottom: ${(props) => props.borderBottom};
  cursor: ${(props) => props.cursor};
  position: ${(props) => props.position};
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  ${(props) => (props.flex ? "display: flex" : "")};
  ${(props) =>
    props.justifyContent ? `justify-content: ${props.justifyContent}` : ""};
  ${(props) => (props.alignItems ? `align-items: ${props.alignItems}` : "")};
  ${(props) => (props.textAlign ? `text-align: ${props.textAlign}` : "")};
  ${(props) => (props.direction ? `flex-direction: ${props.direction}` : "")};
  ${(props) => (props.inlineStyles ? `${props.inlineStyles}` : "")};
  ${(props) =>
    props.signupFlex ? `display: flex; justify-content: center;` : ""};
  ${(props) =>
    props.Category ? `position: absolute; top:20px; left:19px;` : ""};
  ${(props) =>
    props.between ? `display: flex; justify-content: space-between;` : ""};
  ${(props) => (props.bottomborder ? `border-bottom:1px solid gray` : "")};
  ${(props) => (props.profileFlex ? `display: flex; align-items: center` : "")}
`;

export default Grid;
