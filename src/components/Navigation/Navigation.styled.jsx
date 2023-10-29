import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: 12px;
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-weight: 700;
  padding: 12px 0;
  color: white;

  transition: transform 350ms cubic-bezier(0.65, 0.05, 0.36, 1),
    color 350ms cubic-bezier(0.65, 0.05, 0.36, 1);

  &.active {
    color: white;
  }

  &:hover,
  &:focus {
    color: #1c16d4;
    transform: scale(1.05);
  }
`;
