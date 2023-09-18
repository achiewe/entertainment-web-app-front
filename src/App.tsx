import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Login from "./components/UserAccess/Login";
import SignUp from "./components/UserAccess/SignUp";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import entertainmentType from "../type";
import { useDispatch, useSelector } from "react-redux";
import { setEntertainment } from "./store/EntertainmentSlice";
import { useEffect } from "react";
import { RootState } from "./store/redux";
import { setClientEmail } from "./store/ClientEmailSlice";
import { setLogIn } from "./store/LoggedInSlice";
import { Dispatch } from "redux";

export const takeInfo = async (
  clientEmail: string,
  logIn: boolean,
  dispatch: Dispatch
): Promise<void> => {
  if (logIn) {
    const url = `http://localhost:3000/client?email=${clientEmail}`;

    try {
      const response = await axios.get<entertainmentType[]>(url);
      dispatch(setEntertainment(response.data));
    } catch (error) {
      console.log("can't take data");
    }
  } else {
    const url = "http://localhost:3000/takeEntertainment";
    try {
      const response = await axios.get<entertainmentType[]>(url);
      dispatch(setEntertainment(response.data));
    } catch (error) {
      console.log("can't take data");
    }
  }
};

function App() {
  const dispatch = useDispatch();

  const clientEmail = useSelector(
    (store: RootState) => store.clientEmail.clientEmail
  );
  const logIn = useSelector((store: RootState) => store.logIn.logIn);

  const isUserLoggedIn = localStorage.getItem("logIn");
  const userEmail = localStorage.getItem("clientEmail");

  if (isUserLoggedIn && userEmail) {
    dispatch(setClientEmail(userEmail));
    dispatch(setLogIn(true));
  }

  useEffect(() => {
    takeInfo(clientEmail, logIn, dispatch);
  }, [logIn]);

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
