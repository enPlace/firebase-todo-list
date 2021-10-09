import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <small>
          You are running this application in <b>{process.env.REACT_APP_NOT_SECRET_CODE}</b>{" "}
          mode.
        </small>
        <form>
          <input
            type="hidden"
            defaultValue={process.env.REACT_APP_NOT_SECRET_CODE}
          />
        </form>
      </div>
      <div>
        apiKey: <b> {process.env.REACT_APP_API_KEY}</b>, authDomain: {process.env.REACT_APP_AUTH_DOMAIN},
        projectId: {process.env.REACT_APP_PROJECT_ID}, storageBucket:{" "}
        {process.env.REACT_APP_STORAGE_BUCKET}, messagingSenderId:{" "}
        {process.env.REACT_APP_MESSAGING_SENDER_ID}, appId: {process.env.REACT_APP_APP_ID},
      </div>
    </div>
  );
}

export default App;
