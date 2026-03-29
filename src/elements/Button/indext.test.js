import React from 'react';
import { render } from "@testing-library/react";
import Button from './index';

test("Should not allowed click button if isDisable is present", () => {
    const { container } = render(
        <Router>
            <Button isDisable></Button>
        </Router>
    );

    expect(container.querySelector('span.disabled')).toBeInTheDocument();
})