import React, { useEffect, useState } from "react";

function Page_5() {
    const [selectedOption, setSelectedOption] = useState("");
    const [lotInformation, setLotInformation] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        const lotInfo = localStorage.getItem("page_5-lot_info_text");
        const supplierInfo = localStorage.getItem(
            "page_5-selected_supplier"
        );
        const savedFileMetadata = localStorage.getItem(
            "page_2-file-metadata"
        );
        const savedFileContent = localStorage.getItem(
            "page_2-file-content"
        );

        setLotInformation(lotInfo);
        setSelectedOption(supplierInfo);

        if (savedFileMetadata && savedFileContent) {
            const { name, type } = JSON.parse(savedFileMetadata);
            const blob = new Blob([savedFileContent], { type });
            const file = new File([blob], name, { type });
            setSelectedFile(file);
        }
    }, [selectedOption, lotInformation]);

    const handleOptionChange = (e) => {
        const value = e.target.value;
        setSelectedOption(value);
        localStorage.setItem("page_5-selected_supplier", value);
    };

    const handleClearSelection = () => {
        setSelectedOption("");
        localStorage.removeItem("page_5-selected_supplier");
    };

    const handleLotInfoChange = (e) => {
        const value = e.target.value;
        setLotInformation(value);
        localStorage.setItem("page_5-lot_info_text", value);
    };

    // Function to handle file input change
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        const fileMetadata = JSON.stringify({
            name: file.name,
            type: file.type,
        });
        localStorage.setItem("page_2-file-metadata", fileMetadata);

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            localStorage.setItem(
                "page_2-file-content",
                reader.result
            );
        };
    };

    // Function to handle file upload
    const handleFileUpload = () => {
        if (selectedFile) {
            // You can send the selected file to the server or perform other actions here
            console.log("Selected File:", selectedFile);
        } else {
            alert("Please select a file.");
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
                        LOT Initial Details & Documents
                    </h4>
                </div>{" "}
                <div className="common-content-container">
                    <h4 className="common-content-heading">
                        <strong>Supplier</strong>
                    </h4>
                    <form>
                        <input
                            type="radio"
                            id="supplier"
                            name="Supplier"
                            value="Supplier"
                            onChange={handleOptionChange}
                            checked={selectedOption === "Supplier"}
                        />{" "}
                        <label htmlFor="supplier">Supplier</label>
                        <br />
                        <br />
                        <input
                            type="radio"
                            id="option-2"
                            name="Supplier"
                            value="Option 2"
                            onChange={handleOptionChange}
                            checked={selectedOption === "Option 2"}
                        />{" "}
                        <label htmlFor="option-2">Option 2</label>
                    </form>
                    {selectedOption && (
                        <button
                            onClick={handleClearSelection}
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
                        Tell us about the lot
                    </h4>

                    <input
                        type="text"
                        placeholder="Your answer"
                        className="input-field"
                        onChange={handleLotInfoChange}
                        value={lotInformation ? lotInformation : ""}
                    />
                </div>
            </div>
            <div
                className="common-container"
                style={{ border: "none" }}
            >
                <div className="common-content-container">
                    <h4 className="common-content-heading">
                        Upload Documents
                    </h4>

                    <div className="upload-documents">
                        <input
                            type="file"
                            onChange={handleFileChange}
                            accept=".jpg, .jpeg, .png, .pdf"
                            style={{
                                display: "block",
                                backgroundColor: "#d4d4d4",
                                fontSize: "12px",
                            }}
                        />
                        {selectedFile && (
                            <p
                                style={{
                                    fontSize: "12px",
                                    width: "200px",
                                }}
                            >
                                Selected File: {selectedFile.name}
                            </p>
                        )}
                        <button
                            onClick={handleFileUpload}
                            style={{
                                fontSize: "12px",
                                padding: "2px",
                            }}
                        >
                            Upload
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page_5;
