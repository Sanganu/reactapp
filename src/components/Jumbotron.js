import React from 'react';

function Jumbotron() {
    return (<main className="container jumbo">
        {/* <div className="row">
            <div className="col sm 12"> */}
              <h6>Clicky Game using React</h6>
        <ul>
                    <li>Memory game</li>
                    <li>Try to Click all the images once </li>
                    <li>The Cards are shuffled for each click</li>
                    <li>If you click the same card twice the game is restarted</li>
                </ul>
            {/* </div>
        </div> */}
    </main>)
}

export default Jumbotron;
