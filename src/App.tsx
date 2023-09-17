import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Login from "./components/UserAccess/Login";
import SignUp from "./components/UserAccess/SignUp";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import entertainmentType from "../type";
import { useDispatch } from "react-redux";
import { setEntertainment } from "./store/EntertainmentSlice";
import { useEffect } from "react";

function App() {
  const dis = useDispatch();

  const takeInfo = async (): Promise<void> => {
    const url = "http://localhost:3000/takeEntertainment";
    try {
      const response = await axios.get<entertainmentType[]>(url);
      dis(setEntertainment(response.data));
    } catch (error) {
      console.log("can't take data");
    }
  };

  useEffect(() => {
    takeInfo();
  }, []);

  return (
    <Router>
      <MainContainer>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </MainContainer>
    </Router>
  );
}

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #10141e;
`;

export default App;
