import React, { useEffect } from "react";
import "../App.css";

function Page_2({ nextPage, setNextPage }) {
    useEffect(() => {
        // Check local storage for a saved option and set it as the default
        const savedOption = localStorage.getItem("page_2-option");
        if (savedOption) {
            setNextPage(savedOption);
        }
    }, [setNextPage]);

    const handleChange = (e) => {
        if (e.target.value) {
            setNextPage(e.target.value);
            localStorage.setItem("page_2-option", e.target.value);
        }
    };

    return (
        <>
            <div className="common-container">
                <div className="common-header">
                    <h4
                        style={{
                            fontWeight: "500",
                            color: "#fff",
                            letterSpacing: "1px",
                        }}
                    >
                        Untitled Section
                    </h4>
                </div>
                <div className="common-content-container">
                    <h4 className="common-content-heading">
                        <strong>Action Type <span style={{ color: "red" }}>*</span></strong>
                    </h4>
                    <ul className="primary-list">
                        <li>
                            <b>OFFER/BUY:</b> Create a NEW Offer or a
                            NEW Buy and eventually a SELL in one Go
                        </li>
                        <li>
                            <b>BUY:</b> BUY an existing Offer ticket
                        </li>
                        <li>
                            <b>SELL:</b> SELL an existing BUY ticket
                            (existing Buy or Stock position)
                        </li>
                        <li>
                            <b>SHORT SELL:</b> SELL something before
                            it has been bought
                        </li>
                    </ul>
                    <form className="form">
                        <input
                            type="radio"
                            id="offer-buy"
                            name="Action_Type"
                            value="page_5"
                            onChange={handleChange}
                            checked={nextPage === "page_5"}
                        />
                        {` `}
                        <label htmlFor="offer-buy">OFFER/BUY</label>
                        <br />
                        <br />
                        <input
                            type="radio"
                            id="buy"
                            name="Action_Type"
                            value="page_3"
                            onChange={handleChange}
                            checked={nextPage === "page_3"}
                        />
                        {` `}
                        <label htmlFor="buy">BUY</label>
                        <br />
                        <br />
                        <input
                            type="radio"
                            id="sell"
                            name="Action_Type"
                            value="page_4"
                            onChange={handleChange}
                            checked={nextPage === "page_4"}
                        />
                        {` `}
                        <label htmlFor="sell">SELL</label>
                        <br />
                        <br />
                        <input
                            type="radio"
                            id="short-sell"
                            name="Action_Type"
                            value="page_26"
                            onChange={handleChange}
                            checked={nextPage === "page_26"}
                        />
                        {` `}
                        <label htmlFor="short-sell">SHORT SELL</label>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Page_2;
