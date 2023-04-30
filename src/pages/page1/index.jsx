import React, { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom/dist/umd/react-router-dom.development";
import { useSelector } from "react-redux";

function Page1() {
  const initialData =  useSelector(state=> state.firstReducer)
  const [realTimePrice, setRealTimePrice] = useState(0);
  const [inputValue, setInputValue] = useState(null);
  const [tokenValue, setTokenValue] = useState(null);



  useEffect(() => {
    const socket = new WebSocket(initialData.url);

    socket.onopen = () => {
      console.log("WebSocket connection opened.");
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(data);
      setRealTimePrice(parseFloat(data.p));
      setTokenValue(inputValue / 80 / parseFloat(data.p));
    };
    return () => {
      socket.close();
    };
  }, [inputValue]);

  return (
    <div className="page1">
      <div className="left">
        <div className="logo_side">
          <img src="/up.png" alt="" />
          <img src="down.png" alt="" />
        </div>
        <div className="logo_text">Neofi</div>
      </div>
      <div className="middle">
        <Link to="#">Trade</Link>
        <Link to="#">Earn</Link>
        <Link to="#">Support</Link>
        <Link to="#">About</Link>
      </div>
      <div className="right">
        <button>Connect Wallet</button>
      </div>

      <div className="main_card">
        <div className="outer_circle">
          <div className="inner_circle">
            <img src={initialData.imgURL} alt="" />
          </div>
        </div>
        <div className="card_info">
          <div
            className="price"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>cuurent value</span>
            <p
              style={{
                color: "#627eea",
                background: "transparent",
                fontSize: "24px",
              }}
            >
              USD {realTimePrice}
            </p>
          </div>
        </div>
        <Link id="first_link" to="/selectPage">
          <div className="currency_name">
            <div
              className="lf"
              style={{
                color: "#fff",
                background: "transparent",
                fontSize: "24px",
              }}
            >
              <img
                src={initialData.imgURL}
                width="25px"
                height="25px"
                alt="69"
                style={{
                  background: "transparent",
                  marginTop: "5px",
                  marginLeft: "40px",
                borderRadius:"50%"

                }}
              />
              <span id="crpt_name">{initialData.name}</span>
            </div>
            <img
              id="arrow_down"
              src="/dddd.png"
              alt=""
              style={{
                background: "transparent",
                position: "absolute",
                right: "75px",
              }}
            />
          </div>
        </Link>
        <div className="amount">
          <p>Amout you want to invest</p>
          <div className="input">
            <input
              type="text"
              placeholder="0.00"
              name=""
              id=""
              onChange={(e) => setInputValue(e.target.value)}
            />
            <span>INR</span>
          </div>
        </div>
        <div className="amount">
          <p>Estimate Number of ETH You will Get</p>
          <div className="input" style={{ background: "#1c1731" }}>
            <input
              type="text"
              placeholder={tokenValue}
              disabled
              name=""
              id=""
            />
          </div>
        </div>
        <button id="buy">Buy</button>
      <div className="empty"></div>
      </div>
    </div>
  );
}

export default Page1;
