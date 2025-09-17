import logo from "./logo.svg";
import prologo from "./pro-logo.svg";
import "./App.css";

const strings = ["Avi-codesmith", "a Fresher", "a New bie", "a Student"];
const random = Math.floor(Math.random() * strings.length);

const data = {
  name: "Scott Churrner",
  work: "Teacher",
  id: "@1928Ow7G",
};

function Header() {
  return (
    <div className="container">
      <img src={prologo} className="img" alt="pro-logo" />
      <p class="pro-para">Warm React Java Script By {strings[random]}</p>
    </div>
  );
}

function Box() {
  return (
    <div class="component">
      <h1>{data.name}</h1>
      <h3>{data.work}</h3>
      <p>
        Work is {data.work} and the ID is "{data.id}"
      </p>
      <button>follow me!</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Box />
    </div>
  );
}

export default App; // its a file name "App" not function
