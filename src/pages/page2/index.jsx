import React, { useEffect, useState } from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { RiSearchLine } from "react-icons/ri";
import { BsCheckLg } from "react-icons/bs";
import data from "../../data.js";
import { useDispatch, useSelector } from "react-redux";

function Page2() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialData = useSelector((state) => state.firstReducer);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const backTOHomePage = (url, name, imgURL) => {
    dispatch({ type: "CHANGE_TOKEN", url: url, name: name, imgURL: imgURL });
    navigate("/");
  };

  return (
      <div className="page2">
        <div className="left2">
          <div className="logo_side2">
            <img src="/up.png" alt="" />
            <img src="down.png" alt="" />
          </div>
          <div className="logo_text2">Neofi</div>
        </div>
        <div className="middle2">
          <Link to="#">Trade</Link>
          <Link to="#">Earn</Link>
          <Link to="#">Support</Link>
          <Link to="#">About</Link>
        </div>
        <div className="right2">
          <button>Connect Wallet</button>
        </div>

        <div className="main_card2">
          <div className="outer_circle2">
            <div className="inner_circle2">
              <img src={initialData.imgURL} alt="" />
            </div>
          </div>

          <div className="currencies">
            <div className="cross">
              <Link to="/">
                <RxCross2 color="#fff" />{" "}
              </Link>
            </div>
              <div className="currencies_input_and_names"  >
                <div className="input_wrap">
                  <RiSearchLine />
                  <input type="text" placeholder="Search chains" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
                </div>
              </div>
              <div className="scrolling_names" style={{ outline: "none" }}>
                {filteredItems.map((item, i) => {
                  return (
                    <div
                      className="each_name"
                      key={i}
                      onClick={() =>
                        backTOHomePage(item.url, item.name, item.img)
                      }
                    >
                      <div className="side_image">
                        <img src={item.img} />
                      </div>
                      <p style={{ display: "inline" }}>{item?.name}</p>
                      <div className="icon">
                        <BsCheckLg />
                      </div>
                    </div>
                  );
                })}
              </div>
          </div>
      <div className="empty"></div>
        </div>
      </div>
  );
}

export default Page2;
