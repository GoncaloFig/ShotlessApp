import './App.css';
import Game from './Components/Game'
import { CookieBanner } from '@keepist/react-gdpr-cookie-banner';


function App() {

  document.documentElement.requestFullscreen();

  return (
    <div>
      <CookieBanner
      message="Cookie banner message"
      onAcceptPreferences = {() => { 
        // load your preferences trackers here
      }}
      onAcceptStatistics = {() => {
        // load your statistics trackers here
      }}
      onAcceptMarketing = {() => {
        // load your marketing trackers here
      }}
      styles={{
        // dialog: { backgroundColor: '#ffffff' },
      }}
    />
    <Game></Game>
    </div>
  );
}

export default App;