import React, { useState } from "react";
import styled from "styled-components/macro";

const Container = styled.div`
  padding: 1rem 0;
  width: 20rem;
  border-style: solid;
  background-color: #e4dac3;
`;

interface MenuItemProps {
  readonly isActive: boolean;
}

const MenuItem = styled.div<MenuItemProps>`
  display: flex;
  ${({ isActive }) => (isActive ? "background-color: #b1a87a;" : "")}
  height: 2rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const AMOUNT_OF_GAMES: number = 10;

const Menu = () => {
  const [activeGame, setActiveGame] = useState(0);
  const MenuItems = (): JSX.Element => {
    const menuItems: JSX.Element[] = [];
    for (let index = 0; index < AMOUNT_OF_GAMES; index++) {
      menuItems.push(
        <MenuItem
          key={`Menu Item ${index}`}
          isActive={activeGame === index}
          onClick={() => {
            if (activeGame !== index) {
              setActiveGame(index);
            }
          }}
        >
          <p>Game {index + 1}</p>
        </MenuItem>
      );
    }
    return <>{menuItems}</>;
  };
  return (
    <Container>
      <MenuItems />
    </Container>
  );
};

export default Menu;
