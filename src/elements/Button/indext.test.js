import React from 'react';
import { render } from "@testing-library/react";
import Button from './index';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import { MemoryRouter } from 'react-router-dom';

test("Should not allowed click button if isDisable is present", () => {
    const { container } = render(
  <MemoryRouter>
    <Button isDisable />
  </MemoryRouter>
);

    expect(container.querySelector('span.disabled')).toBeInTheDocument();
});
test("Should render loading/spinner", () => {
    const { container, getByText } = render(
  <MemoryRouter>
    <Button isLoading />
  </MemoryRouter>
);

    expect(getByText(/loading/i)).toBeInTheDocument();
    expect(container.querySelector ("span")).toBeInTheDocument();
});
test("Should render <a> tag", () => {
    const { container } = render(
    <Button type="link" isExternal>
  </Button>
);

    expect(container.querySelector ("a")).toBeInTheDocument();
})
test("Should render <link> component", () => {
    const { container, getByText } = render(
  <Router>
    <Button href="" type="link" isExternal/></Router>
  
);

    expect(container.querySelector ("a")).toBeInTheDocument();
})