import React from 'react';
import {MainContainer} from "./styles/styles";
import {Route, Routes} from "react-router-dom";
import GlobalStyles from './styles/global'
import Main from "./pages/Main";
import SingleObj from "./pages/SingleObj";


export enum Path {
  Main = "/",
  Single = "/:id",
}

function App() {

  return (
      <MainContainer>
        <Routes>
          <Route path={Path.Main} element={<Main/>}/>
          <Route path={Path.Single} element={<SingleObj/>}/>
        </Routes>
        <GlobalStyles />
      </MainContainer>
  );
}

export default App;
