import "../App.css";
import heroImage from "../Images/hero-image.png";

function Header() {
    return (
        <>
            <img
                src={heroImage}
                alt="top-uses-of-reactjs"
                width="620px"
                height="150px"
                className="header-image"
            />
            <div className="header-content">
                <h1
                    style={{
                        marginBottom: "15px",
                        fontWeight: "normal",
                    }}
                >
                    Action Type
                </h1>
                {window.location.pathname === "/" ? (
                    <p>
                        Choose whether you want to OFFER/BUY a
                        material or SHORT SELL it
                    </p>
                ) : (
                    ""
                )}
                <hr style={{ margin: "20px 0" }} />
            </div>
        </>
    );
}

export default Header;
