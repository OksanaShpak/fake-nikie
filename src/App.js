import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  return (
    <div className="wrapper">

      <Drawer />

      <Header />

      <div className="c-content">
        <div className="c-content__title-container">

          <h1 className="c-content__title">
            All shoes
          </h1>

          <div className="c-content__search">
            <img className="c-content__search-icon" src="img/search.svg" alt="Search">
            </img>
            <input className="c-content__search-input" placeholder="Search..."></input>
          </div>
        </div>

        {/* Product Card */}
        <div className="c-card__container">
          <Card />
        </div>
      </div>
    </div >
  );
}

export default App;
