import { HiMagnifyingGlass, HiOutlineShoppingBag } from 'react-icons/hi2';
import { IoPersonOutline } from 'react-icons/io5';

import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <div className="headerContainer">
          <div className="oneFourth first">
            <h2>{<HiMagnifyingGlass />}</h2>
          </div>
          <div className="oneHalf">
            <h1>Eternal Daze</h1>
          </div>
          <div className="oneFourth third">
            <h2>
              {
                <>
                  {' '}
                  <IoPersonOutline /> <HiOutlineShoppingBag />
                </>
              }
            </h2>
          </div>
        </div>
        <div className="navBarContainer">
          <div className="oneHalf2">
            <h3>Shop All</h3>
            <h3>Shirts</h3>
            <h3>Pants</h3>
            <h3>Shoes</h3>
          </div>
        </div>
        <div className="imageContainer">
          <img src="../Adjusted.png" />
        </div>
        <div className="titleContainer">
          <p className="title">Shop All</p>
        </div>
        <div className="productContainer">
          <div className="gridContainer">
            <div className="grid-item">
              <img
                className="productPic"
                src="../images/IMG_blueShirtFront.JPG"
              />
              <p>Blue Bear Shirt</p>
              <p>$75.00</p>
            </div>
            <div className="grid-item">
              <img
                className="productPic"
                src="../images/IMG_seahorseShirtFront.JPG"
              />
              <p>Yellow SeaHorse Shirt</p>
              <p>$80.00</p>
            </div>
            <div className="grid-item">
              <img
                className="productPic"
                src="../images/IMG_starShirtFront.JPG"
              />
              <p>Blue Star Shirt</p>
              <p>$65.00</p>
            </div>
            <div className="grid-item">
              <img
                className="productPic"
                src="../images/IMG_uclaShirtFront.JPG"
              />
              <p>UCLA Shirt</p>
              <p>$105.00</p>
            </div>
            <div className="grid-item">
              <img
                className="productPic"
                src="../images/IMG_carShirtFront.JPG"
              />
              <p>Green Car Shirt</p>
              <p>$55.00</p>
            </div>
            <div className="grid-item">
              <img className="productPic" src="../images/IMG_japTank.JPG" />
              <p>Japanese Flag Tank</p>
              <p>$55.00</p>
            </div>
            <div className="grid-item">
              <img
                className="productPic"
                src="../images/IMG_makeupShirtFront.JPG"
              />
              <p>Yellow MakeUp Shirt</p>
              <p>$55.00</p>
            </div>
            <div className="grid-item">
              <img
                className="productPic"
                src="../images/IMG_purpleShirtFront.JPG"
              />
              <p>Purple Nature Shirt</p>
              <p>$75.00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
