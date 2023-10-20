import React from "react";
import {BrowserRouter} from 'react-router-dom';
import AppRouter from "./components/appRouter/appRouter.jsx";
import classes from "./styles/general-styles.module.css";

function App() {

  return (
    <div className={classes}>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
