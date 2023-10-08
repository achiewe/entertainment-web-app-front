import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Login from "./components/UserAccess/Login";
import SignUp from "./components/UserAccess/SignUp";
import Home from "./components/Home";
import MovieEnt from "./components/MovieEnt";
import TvSeriesEnt from "./components/TvSeriesEnt";
import Header from "./components/Header";
import InputFilter from "./components/InputFilter";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import entertainmentType from "../type";
import { useDispatch, useSelector } from "react-redux";
import { setEntertainment } from "./store/EntertainmentSlice";
import { useEffect, useState } from "react";
import { RootState } from "./store/redux";
import { setClientEmail } from "./store/ClientEmailSlice";
import { setLogIn } from "./store/LoggedInSlice";
import { Dispatch } from "redux";
import BookmarkedEnt from "./components/BookmarkedEnt";
import ClipLoader from "react-spinners/ClipLoader";

export const takeInfo = async (
  clientEmail: string,
  logIn: boolean,
  dispatch: Dispatch
): Promise<void> => {
  if (logIn) {
    const url = `http://localhost:3000/user?email=${clientEmail}`;

    try {
      const response = await axios.get(url);
      // Assuming you have a setEntertainment action defined in your code
      dispatch(setEntertainment(response.data));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  } else {
    const url = "http://localhost:3000/takeEntertainment";
    try {
      const response = await axios.get<entertainmentType[]>(url);
      // Assuming you have a setEntertainment action defined in your code
      dispatch(setEntertainment(response.data));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
};

function App() {
  const dispatch = useDispatch();

  const clientEmail = useSelector(
    (store: RootState) => store.clientEmail.clientEmail
  );
  const logIn = useSelector((store: RootState) => store.logIn.logIn);

  const isUserLoggedIn = localStorage.getItem("login");
  const userEmail = localStorage.getItem("clientEmail");

  if (isUserLoggedIn && userEmail) {
    dispatch(setClientEmail(userEmail));
    dispatch(setLogIn(true));
  }

  useEffect(() => {
    takeInfo(clientEmail, logIn, dispatch);
  }, [logIn]);

  //for loading spinner
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [logIn]);

  return (
    <Router>
      <MainContainer>
        {loading ? (
          <ClipLoader
            color={"#FC4747"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <>
            <GlobalStyles />
            <Header />
            <MainSection>
              <InputFilter />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Movies" element={<MovieEnt />} />
                <Route path="/TVSeries" element={<TvSeriesEnt />} />
                <Route path="/Bookmarked" element={<BookmarkedEnt />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/SignUp" element={<SignUp />} />
              </Routes>
            </MainSection>
          </>
        )}
      </MainContainer>
    </Router>
  );
}

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  background-color: #10141e;
  @media (min-width: 768px) {
    gap: 33px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 36px;
    padding-left: 32px;
  }
`;

const MainSection = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  @media (min-width: 768px) {
    gap: 33px;
  }

  @media (min-width: 1024px) {
    margin-top: 64px;
  }
`;

export default App;
