import { render } from '@testing-library/react';
import React from 'react';

const FoodBox = (props) => {
    render(
        <div>
            <p>{props.content.p}</p>
        </div>
    )
}

export default FoodBox;