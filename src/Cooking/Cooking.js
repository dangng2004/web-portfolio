import React from 'react';
import './Cooking.css';

import cupcakes1 from './photos/cupcakes1.png';
import cupcakes2 from './photos/cupcakes2.png';
import cupcakes3 from './photos/cupcakes3.png';
import cupcakes4 from './photos/cupcakes4.png';
import cupcakes5 from './photos/cupcakes5.png';
import cake1 from './photos/cake1.png';
import cake2 from './photos/cake2.png';
import cake3 from './photos/cake3.png';
import cookies from './photos/cookies.png';
import brownies from './photos/brownies.png';
import lamingtons from './photos/lamingtons.png';
import eclairs from './photos/eclairs.png';
import pie from './photos/pie.png';
import tiramisu from './photos/tiramisu.png';


class Cooking extends React.Component {
  render() {
    return (
      <div className="cooking_row">
        <div className="cooking_col">
          <img className="cupcakes_1" alt="cupcakes1" src={cupcakes1}></img>
          <img className="cupcakes_2" alt="cupcakes2" src={cupcakes2}></img>
          <img className="cupcakes_3" alt="cupcakes3" src={cupcakes3}></img>
        </div>
        <div className="cooking_col">
          <img className="cupcakes_4" alt="cupcakes4" src={cupcakes4}></img>
          <img className="cupcakes_5" alt="cupcakes5" src={cupcakes5}></img>
          <img className="cake_1" alt="cake1" src={cake1}></img>
        </div>
        <div className="cooking_col">
          <img className="cake_2" alt="cake2" src={cake2}></img>
          <img className="cake_3" alt="cake3" src={cake3}></img>
          <img className="cookies" alt="cookies" src={cookies}></img>
        </div>
        <div className="cooking_col">
          <img className="brownies" alt="brownies" src={brownies}></img>
          <img className="lamingtons" alt="lamingtons" src={lamingtons}></img>
          <img className="eclairs" alt="eclairs" src={eclairs}></img>
        </div>
        <div className="cooking_col">
          <img className="pie" alt="pie" src={pie}></img>
          <img className="tiramisu" alt="tiramisu" src={tiramisu}></img>
        </div>
      </div>
    );
  }
}

export default Cooking;
