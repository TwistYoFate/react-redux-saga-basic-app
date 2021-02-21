import "./styles.css";
import Home from "./home";
import { Provider } from "react-redux";
import store from "./redux";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}
