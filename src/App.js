/*import reactLocalStorage from "reactjs-localstorage";



  const [theme, setTheme] = reactLocalStorage("theme" ? "dark" : "light");
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };*/
import React from "react";
import "./index.css";

function App() {
  /*  function useLocalStorageState(key, initialValue) {
    const [value, setValue] = useState(() => {
      const persistedValue = localStorage.getItem(key);
      return persistedValue !== null ? persistedValue : initialValue;
    });

    useEffect(() => {
      localStorage.setItem(key, value);
    }, [key, value]);

    return [value, setValue];
  }

  const [theme, setTheme] = useLocalStorageState("mode", "lightMode");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };*/

  const [darkMode, setDarkMode] = React.useState(false);
  const [lightMode, setLightMode] = React.useState(false);
  React.useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    const theme = JSON.parse(json);
    if (theme) {
      setLightMode(false);
    } else {
      setLightMode(true);
    }
  }, []);

  React.useEffect(() => {
    if (lightMode) {
      document.body.classList.add("app");
    } else {
      document.body.classList.remove("app");
    }
    const json = JSON.stringify(lightMode);
    localStorage.setItem("site-dark-mode", json);
  }, [lightMode]);

  React.useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    const theme = JSON.parse(json);
    if (theme) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    const json = JSON.stringify(darkMode);
    localStorage.setItem("site-dark-mode", json);
  }, [darkMode]);

  return (
    <div className="App">
      <div className="login">
        <h1>Login</h1>
        <div className="container">
          <div className="top">
            <i class="fab fa-google"></i>
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-linkedin"></i>
            <i class="fab fa-twitter-square"></i>
            <i class="fab fa-apple"></i>
          </div>
          <p className="divider">
            <span>Or</span>
          </p>
          <form>
            <label htmlFor="Email">E-mail</label>
            <input type="email" placeholder="Enter your Email" />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter your password" />
            <div className="remember">
              <input type="checkbox" checked="checked" />
              <p>Remember Me</p>
            </div>
            <button>Log In</button>
          </form>
          <div className="bottom">
            <p>Forget your password</p>
            <a href="/">Reset Password</a>
          </div>
          <p className="create">create Account</p>
        </div>
        <div className="theme-toggle">
          <h2>Light Theme</h2>
          <i
            onClick={() => setDarkMode(!darkMode)}
            className="fa fa-toggle-on"
          ></i>
        </div>
      </div>
    </div>
  );
}

export default App;
