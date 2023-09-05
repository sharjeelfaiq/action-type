import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router"; // Import useNavigate from 'react-router'
import "./App.css";
import Header from "./Components/Header";
import PAGE_2 from "./Pages/Page_2";
import PAGE_3 from "./Pages/Page_3";
import PAGE_4 from "./Pages/Page_4";
import PAGE_5 from "./Pages/Page_5";
import PAGE_6 from "./Pages/Page_6";
import PAGE_26 from "./Pages/Page_26";

function App() {
    const [nextPage, setNextPage] = useState(null);

    const navigate = useNavigate();

    const handleNext = () => {
        if (window.location.pathname === "/") {
            navigate(`/page_2`);
        } else if (nextPage !== null) {
            navigate(`/${nextPage}`);
            setNextPage(null);
        } else if (window.location.pathname === "/page_5") {
            navigate(`/page_6`);
        }
    };

    const handleBack = () => {
        setNextPage(null);
        navigate(-1);
    };

    const handleClearAll = () => {
        localStorage.clear();
        navigate("/");
        window.location.reload();
    };
    return (
        <>
            <div className="container">
                <Header />
                <Routes>
                    <Route path="/" element={<div />} />
                    <Route
                        path="/page_2"
                        element={
                            <PAGE_2
                                nextPage={nextPage}
                                setNextPage={setNextPage}
                            />
                        }
                    />
                    <Route path="/page_3" element={<PAGE_3 />} />
                    <Route path="/page_4" element={<PAGE_4 />} />
                    <Route path="/page_5" element={<PAGE_5 />} />
                    <Route path="/page_6" element={<PAGE_6 />} />
                    <Route path="/page_26" element={<PAGE_26 />} />
                </Routes>
                <br />
                <div className="main-btns-container">
                    <div className="navigation-btns-container">
                        {window.location.pathname !== "/" && (
                            <button
                                onClick={handleBack}
                                className="navigation-btns"
                            >
                                Back
                            </button>
                        )}
                        <button
                            className="navigation-btns"
                            onClick={handleNext}
                        >
                            Next
                        </button>
                    </div>
                    <button
                        onClick={handleClearAll}
                        className="clear-all-btn"
                    >
                        Clear Form
                    </button>
                </div>
            </div>
        </>
    );
}

export default App;
