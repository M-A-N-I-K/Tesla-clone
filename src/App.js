import './App.css';
import Header from './Header';
import Image from './Image';

function App() {
  return (
    <div className="App">
      <Header />
      <Image imgUrl="https://wallpapercave.com/dwp2x/wp10314287.jpg" modelName="Model Y" desc="Schedule a demo drive" rightButton="Custom Order" />
      <Image imgUrl="https://wallpaperaccess.com/full/800353.jpg" modelName="Model 3" desc="Schedule a demo drive" rightButton="Custom Order" />
      <Image imgUrl="https://www.supercars.net/blog/wp-content/uploads/2021/06/2021-Tesla-Model-S-003-2160-scaled.jpg" modelName="Model S" desc="Schedule a demo drive" rightButton="Custom Order" />
      <Image imgUrl="https://images4.alphacoders.com/121/1210649.jpg" modelName="Model X" desc="Schedule a demo drive" rightButton="Custom Order" />
      <Image imgUrl="https://media.wired.com/photos/5926a72e7034dc5f91bec2fb/master/pass/TeslaSolar.jpg" modelName="Solar Panels" desc="Lowest Cost Solar Panels in America " rightButton="Learn More" />
      <Image imgUrl="https://electrek.co/wp-content/uploads/sites/3/2020/09/Tesla-solar-roof-refresh-hero.jpg?quality=82&strip=all" modelName="Solar Roof" desc="Produce Clean Energy From Your Roof" rightButton="Learn More" />
      <Image imgUrl="https://img2link.com/images/2022/12/27/a6c9b03df92bd4b847c142c73a3b9959.jpg" modelName="Accessories" desc="" rightButton="" />
      {/* Footer */}
    </div>
  );
}

export default App;
