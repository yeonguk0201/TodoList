import React from 'react';
import { Container } from './TodolistContainer.style';

const TodolistContainer = ({ children }) => {
  const childrenCount = React.Children.count(children);
  const windowWidth = window.innerWidth;
  const containerWidth = childrenCount * 274;

  const calWidth = containerWidth > windowWidth;

  return <Container className={calWidth ? 'many' : ''}>{children}</Container>;
};

export default TodolistContainer;
