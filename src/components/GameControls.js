import React from 'react';

const GameControls = props => {

    //MC added contents in <article>
    return (
        <article>
            <form>
                <label> Set the max score to win:</label>
                <input type="number" />
                <br />
                <label> Set the initial velocity of the ball:</label>
                <input type="number" />
                <br />
                <label> Paddle colors for players 1 and 2:</label>
                <input type="color" />
                <br />
                <label> Ball color:</label>
                <input type="color" />
                <br />
                <label> Ball shape:</label>
                <input type="shape" />
            </form>
            <button type="button">Start Game</button>
        </article>
    )
}

export default GameControls;