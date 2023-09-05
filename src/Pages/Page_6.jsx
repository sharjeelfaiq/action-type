import React, { useEffect, useState } from "react";

function Page_6() {
    const [selectedOption1, setSelectedOption1] = useState("");
    const [selectedOption2, setSelectedOption2] = useState("");
    const [selectedOption3, setSelectedOption3] = useState("");
    const [other1OptionText, setOther1OptionText] = useState(""); // State to track text for "Other" option
    const [other2OptionText, setOther2OptionText] = useState(""); // State to track text for "Other" option

    useEffect(() => {
        const selectedOption1Info =
            localStorage.getItem("page_6-option1");
        setSelectedOption1(selectedOption1Info);
        const selectedOption2Info =
            localStorage.getItem("page_6-option2");
        setSelectedOption2(selectedOption2Info);
    }, [selectedOption1, selectedOption2]);

    const handleOption1Change = (e) => {
        const value = e.target.value;
        setSelectedOption1(value);
        localStorage.setItem("page_6-option1", value);
    };

    const handleClearOption1 = () => {
        setSelectedOption1("");
        localStorage.removeItem("page_6-option1");
    };

    const handleOption2Change = (e) => {
        const value = e.target.value;
        setSelectedOption2(value);
        localStorage.setItem("page_6-option2", value);
    };

    const handleOption3Change = (e) => {
        const value = e.target.value;
        setSelectedOption3(value);
        localStorage.setItem("page_6-option3", value);
    };

    const handleOther1OptionChange = (e) => {
        setOther1OptionText(e.target.value);
    };

    const handleOther2OptionChange = (e) => {
        setOther2OptionText(e.target.value);
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
                        Offer Material 1 Details
                    </h4>
                </div>{" "}
                <div className="common-content-container">
                    <h4 className="common-content-heading">
                        <strong>Type of Material</strong>
                    </h4>
                    <form>
                        <input
                            type="radio"
                            id="option-1"
                            name="Option 1"
                            value="Option 1"
                            onChange={handleOption1Change}
                            checked={selectedOption1 === "Option 1"}
                        />{" "}
                        <label htmlFor="option-1">Option 1</label>
                    </form>
                    {selectedOption1 && (
                        <button
                            onClick={handleClearOption1}
                            className="clear-selection-btn"
                        >
                            Clear Selection
                        </button>
                    )}
                </div>
            </div>
            <div
                className="common-container"
                style={{ border: "none" }}
            >
                <div className="common-content-container">
                    <h4 className="common-content-heading">
                        Material |{" "}
                        <span style={{ fontWeight: "400" }}>
                            Location
                        </span>{" "}
                        <span style={{ color: "red" }}>*</span>
                    </h4>
                    <p
                        style={{
                            fontSize: "14px",
                            letterSpacing: "1px",
                            marginBottom: "20px",
                        }}
                    >
                        <em>
                            Please try your best to fill out this one,
                            it is better for negotiation and planning!
                        </em>
                    </p>
                    <form>
                        <input
                            type="radio"
                            id="unknown"
                            name="Material Location"
                            value="Unknown"
                            onChange={handleOption2Change}
                            checked={selectedOption2 === "Unknown"}
                        />{" "}
                        <label htmlFor="unknown">Unknown</label>
                        <br />
                        <br />
                        <input
                            type="radio"
                            id="heeze"
                            name="Material Location"
                            value="Heeze"
                            onChange={handleOption2Change}
                            checked={selectedOption2 === "Heeze"}
                        />{" "}
                        <label htmlFor="heeze">Heeze</label>
                        <br />
                        <br />
                        <input
                            type="radio"
                            id="ennigerloh"
                            name="Material Location"
                            value="Ennigerloh"
                            onChange={handleOption2Change}
                            checked={selectedOption2 === "Ennigerloh"}
                        />{" "}
                        <label htmlFor="ennigerloh">Ennigerioh</label>
                        <br />
                        <br />
                        <input
                            type="radio"
                            name="Material Location"
                            value="Choszczno"
                            onChange={handleOption2Change}
                            checked={selectedOption2 === "Choszczno"}
                        />{" "}
                        <label htmlFor="choszczno">Choszczno</label>
                        <br />
                        <br />
                        <input
                            type="radio"
                            id="other-1"
                            name="Material Location"
                            value="Other-1"
                            onChange={handleOption2Change}
                            checked={selectedOption2 === "Other-1"}
                        />{" "}
                        <label htmlFor="other-1">Other: </label>{" "}
                        {selectedOption2 === "Other-1" && (
                            <input
                                type="text"
                                placeholder="Enter other location"
                                value={other1OptionText}
                                onChange={handleOther1OptionChange}
                                style={{
                                    paddingLeft: "10px",
                                    border: "none",
                                    outline: "none",
                                    borderBottom: "1px solid #e2e2e2",
                                    width: "500px",
                                }}
                            />
                        )}
                    </form>
                </div>
            </div>
            <div
                className="common-container"
                style={{ border: "none" }}
            >
                <div className="common-content-container">
                    <h4 className="common-content-heading">
                        Material |{" "}
                        <span style={{ fontWeight: "400" }}>
                            Location (Postcode){" "}
                        </span>
                        <span style={{ color: "red" }}>*</span>
                    </h4>
                    <p
                        style={{
                            fontSize: "14px",
                            letterSpacing: "1px",
                            marginBottom: "20px",
                        }}
                    >
                        Heeze = 5591 JL / Ennigerloh = 59320 /
                        Choszczno = 73-200 / A. Lünen = 44532
                    </p>
                    <form>
                        <input
                            type="radio"
                            id="5591-JL"
                            name="Material Location | Post Code"
                            value="5591-JL"
                            onChange={handleOption3Change}
                            checked={selectedOption3 === "5591-JL"}
                        />{" "}
                        <label htmlFor="5591-JL">5591 JL</label>
                        <br />
                        <br />
                        <input
                            type="radio"
                            id="59320"
                            name="Material Location | Post Code"
                            value="59320"
                            onChange={handleOption3Change}
                            checked={selectedOption3 === "59320"}
                        />{" "}
                        <label htmlFor="59320">59320</label>
                        <br />
                        <br />
                        <input
                            type="radio"
                            id="73-200"
                            name="Material Location | Post Code"
                            value="73-200"
                            onChange={handleOption3Change}
                            checked={selectedOption3 === "73-200"}
                        />{" "}
                        <label htmlFor="73-200">73-200</label>
                        <br />
                        <br />
                        <input
                            type="radio"
                            name="Material Location | Post Code"
                            value="Other"
                            onChange={handleOption3Change}
                            checked={selectedOption3 === "Other"}
                        />{" "}
                        <label htmlFor="other">Other</label>
                        {selectedOption3 === "Other" && (
                            <input
                                type="text"
                                placeholder="Enter other location"
                                value={other2OptionText}
                                onChange={handleOther2OptionChange}
                                style={{
                                    paddingLeft: "10px",
                                    border: "none",
                                    outline: "none",
                                    borderBottom: "1px solid #e2e2e2",
                                    width: "500px",
                                }}
                            />
                        )}
                    </form>
                </div>
            </div>
        </>
    );
}

export default Page_6;
