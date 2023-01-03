import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';

const app = new Clarifai.App({
  apiKey: '31f92ddc6edc479b96d4507b33dbded2',
});

function App() {
  // create a function that logs the event target value for an input element
  const logEvent = (event) => {
    console.log(event.target.value);
  };

  const onBtnSubmit = () => {
    app.models
      .predict(
        '53e1df302c079b3db8a0a36033ed2d15',
        'https://samples.clarifai.com/dog2.jpeg'
      )
      .then((response) => {
        console.log('hi', response);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm logEvent={logEvent} onBtnSubmit={onBtnSubmit} />
    </div>
  );
}

export default App;
