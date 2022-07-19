import styled from "styled-components";

const SideNavHeaderContainer = styled.div`
  --activeBackgroundColor: ${props => props.theme.color.sideNavHeaderContainer.active.backgroundColor};
  --activeColor: ${props => props.theme.color.sideNavHeaderContainer.active.color};
  --activeHoverBackgroundColor: ${props => props.theme.color.sideNavHeaderContainer.active.hover.backgroundColor};

  --primaryBackgroundColor: ${props => props.theme.color.sideNavHeaderContainer.primary.backgroundColor};
  --primaryColor: ${props => props.theme.color.sideNavHeaderContainer.primary.color};

  --primaryHoverBackgroundColor: ${props => props.theme.color.sideNavHeaderContainer.primary.hover.backgroundColor};
  --primaryHoverColor: ${props => props.theme.color.sideNavHeaderContainer.primary.hover.color};

  display: flex;
  margin: 0;
  padding: 0;
  height: 20px;
  color: ${props => props.theme.color.sideNavHeaderContainer.color};
  cursor: pointer;
  transition: background 175ms ease-in-out, color 300ms ease-in-out;


  &:hover {
    background-color: ${props => props.theme.color.sideNavHeaderContainer.hover.backgroundColor};
  }

  ${props => props.active && `
    background-color: var(--activeBackgroundColor);
    color: var(--activeColor);

    &:hover {
      background-color: var(--activeHoverBackgroundColor);
    }
  `}

  ${props => props.primary && `
    background-color: var(--primaryBackgroundColor);
    color: var(--primaryColor);

    &:hover {
      background-color: var(--primaryHoverBackgroundColor);
      color: var(--primaryHoverColor);
    }
  `}
`

export default SideNavHeaderContainer
