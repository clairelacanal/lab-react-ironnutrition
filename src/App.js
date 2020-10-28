import React from 'react';
import FoodBox from './components/FoodBox';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="box">
        <article className="media">
          <div className="media-left">

            <figure className="image is-64x64">
              <img src="https://i.imgur.com/eTmWoAN.png" />
            </figure>

            <figure className="image is-64x64">
              <img src= "https://i.imgur.com/DupGBz5.jpg" />
            </figure>

            <figure className="image is-64x64">
              <img src= "https://i.imgur.com/hGraGyR.jpg" />
            </figure>
            <figure className="image is-64x64">
              <img src= "https://i.imgur.com/93ekwW0.jpg" />
            </figure>
            <figure className="image is-64x64">
              <img src= "https://i.imgur.com/WCzJDWz.jpg" />
            </figure>
            <figure className="image is-64x64">
              <img src= "https://i.imgur.com/ClxOafl.jpg" />
            </figure>
            <figure className="image is-64x64">
              <img src= "https://i.imgur.com/LoG39wK.jpg" />
            </figure>
            <figure className="image is-64x64">
              <img src= "https://i.imgur.com/5ktcSzF.jpg" />
            </figure>
            <figure className="image is-64x64">
              <img src= "https://i.imgur.com/7GlqDsG.jpg" />
            </figure>
            <figure className="image is-64x64">
              <img src= "https://i.imgur.com/QqVHdRu.jpg" />
            </figure>
            <figure className="image is-64x64">
              <img src= "https://i.imgur.com/yrgzA9x.jpg" />
            </figure>
            <figure className="image is-64x64">
              <img src= "https://i.imgur.com/TsWzMfM.jpg" />
            </figure>
            <figure className="image is-64x64">
              <img src= "https://i.imgur.com/abKGOcv.jpg" />
            </figure>
            <figure className="image is-64x64">
              <img src= "https://i.imgur.com/BMdJhu5.jpg" />
            </figure>
            <figure className="image is-64x64">
              <img src= "https://i.imgur.com/URhdrAm.png" />
            </figure>


          </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>Pizza</strong> <br />
              <small>400 cal</small>
            </p>
          </div>

          <div className="content">
            <p>
              <strong>Salade</strong> <br />
              <small>150 cal</small>
            </p>
          </div>

          <div className="content">
            <p>
              <strong>Sweet Potato</strong> <br />
              <small>120 cal</small>
            </p>
          </div>

          <div className="content">
            <p>
              <strong>Gnocchi</strong> <br />
              <small>500 cal</small>
            </p>
          </div>
          <div className="content">
            <p>
              <strong>Pot Roast</strong> <br />
              <small>350 cal</small>
            </p>
          </div>
          <div className="content">
            <p>
              <strong>Lasagna</strong> <br />
              <small>750 cal</small>
            </p>
          </div>
          <div className="content">
            <p>
              <strong>Hamburger</strong> <br />
              <small>400 cal</small>
            </p>
          </div>
          <div className="content">
            <p>
              <strong>Pad Thai</strong> <br />
              <small>475 cal</small>
            </p>
          </div>
          <div className="content">
            <p>
              <strong>Almonds</strong> <br />
              <small>75 cal</small>
            </p>
          </div>
          <div className="content">
            <p>
              <strong>Bacon</strong> <br />
              <small>175 cal</small>
            </p>
          </div>
          <div className="content">
            <p>
              <strong>Hot Dog</strong> <br />
              <small>275 cal</small>
            </p>
          </div>
          <div className="content">
            <p>
              <strong>Chocolate Cake</strong> <br />
              <small>490 cal</small>
            </p>
          </div>
          <div className="content">
            <p>
              <strong>Wheat Bread</strong> <br />
              <small>175 cal</small>
            </p>
          </div>
          <div className="content">
            <p>
              <strong>Orange</strong> <br />
              <small>85 cal</small>
            </p>
          </div>
          <div className="content">
            <p>
              <strong>Banana</strong> <br />
              <small>175 cal</small>
            </p>
          </div>
          <div className="content">
            <p>
              <strong>Yogurt</strong> <br />
              <small>125 cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" value="1" />
            </div>
            <div className="control">
              <button className="button is-info">
                +
              </button>
            </div>
          </div>

          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" value="1" />
            </div>
            <div className="control">
              <button className="button is-info">
                +
              </button>
            </div>
          </div>
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" value="1" />
            </div>
            <div className="control">
              <button className="button is-info">
                +
              </button>
            </div>
          </div>
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" value="1" />
            </div>
            <div className="control">
              <button className="button is-info">
                +
              </button>
            </div>
          </div>
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" value="1" />
            </div>
            <div className="control">
              <button className="button is-info">
                +
              </button>
            </div>
          </div>
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" value="1" />
            </div>
            <div className="control">
              <button className="button is-info">
                +
              </button>
            </div>
          </div>
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" value="1" />
            </div>
            <div className="control">
              <button className="button is-info">
                +
              </button>
            </div>
          </div>

          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" value="1" />
            </div>
            <div className="control">
              <button className="button is-info">
                +
              </button>
            </div>
          </div>

          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" value="1" />
            </div>
            <div className="control">
              <button className="button is-info">
                +
              </button>
            </div>
          </div>

          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" value="1" />
            </div>
            <div className="control">
              <button className="button is-info">
                +
              </button>
            </div>
          </div>
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" value="1" />
            </div>
            <div className="control">
              <button className="button is-info">
                +
              </button>
            </div>
          </div>

          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" value="1" />
            </div>
            <div className="control">
              <button className="button is-info">
                +
              </button>
            </div>
          </div>
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" value="1" />
            </div>
            <div className="control">
              <button className="button is-info">
                +
              </button>
            </div>
          </div>
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" value="1" />
            </div>
            <div className="control">
              <button className="button is-info">
                +
              </button>
            </div>
          </div>
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" value="1" />
            </div>
            <div className="control">
              <button className="button is-info">
                +
              </button>
            </div>
          </div>
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" value="1" />
            </div>
            <div className="control">
              <button className="button is-info">
                +
              </button>
            </div>
          </div>
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" value="1" />
            </div>
            <div className="control">
              <button className="button is-info">
                +
              </button>
            </div>
          </div>
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" value="1" />
            </div>
            <div className="control">
              <button className="button is-info">
                +
              </button>
            </div>
          </div>
          

        </div>
      </article>
    </div>
  </div>
  );
}

export default App;
