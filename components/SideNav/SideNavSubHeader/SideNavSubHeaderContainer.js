import styled from "styled-components";

const SideNavSubHeaderContainer = styled.div`
  --primaryBackgroundColor: ${props => props.theme.color.sideNavSubHeaderContainer.primary.backgroundColor};
  --primaryColor: ${props => props.theme.color.sideNavSubHeaderContainer.primary.color};

  --primaryHoverBackgroundColor: ${props => props.theme.color.sideNavSubHeaderContainer.primary.hover.backgroundColor};
  --primaryHoverColor: ${props => props.theme.color.sideNavSubHeaderContainer.primary.hover.color};

  display: flex;
  margin: 0;
  padding: 0;
  position: relative;
  left: 5px;
  color: ${props => props.theme.color.sideNavSubHeaderContainer.color};
  height: 20px;
  cursor: pointer;
  transition: background 175ms ease-in-out, color 300ms ease-in-out;

  &:hover {
    background-color: ${props => props.theme.color.sideNavSubHeaderContainer.hover.backgroundColor};
  }

  ${props => props.primary && `
    background-color: var(--primaryBackgroundColor);
    color: var(--primaryColor);

    &:hover {
      background-color: var(--primaryHoverBackgroundColor);
      color: var(--primaryHoverColor);
    }
  `}
`

export default SideNavSubHeaderContainer
