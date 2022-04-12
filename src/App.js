import "./css/App.css";
import * as React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Settings from "./views/Settings";
import Contact from "./components/settings/Contact";
import ProfileSetting from "./components/settings/ProfileSetting";
import FAQ from "./components/settings/FAQ";
import Securite from "./components/settings/Securite";
import Paiement from "./components/settings/Paiement";
import Historique from "./components/settings/Historique";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/settings" element={<Settings />}>
            <Route index element={<ProfileSetting />}></Route>
            <Route path="paiement" element={<Paiement />}></Route>
            <Route path="securite" element={<Securite />}></Route>
            <Route path="historique" element={<Historique />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="faq" element={<FAQ />}></Route>
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
