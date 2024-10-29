import '@asu/unity-bootstrap-theme';
import "./App.css";
import Page from './components/Page';
import { Outlet } from "react-router-dom";

function App(): JSX.Element {
  return (
    <Page>
      <Outlet />
    </Page>
);
}

export default App;
