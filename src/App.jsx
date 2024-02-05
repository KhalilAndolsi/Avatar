import { useEffect, useState } from "react";
import SlideMenu from "./components/SlideMenu.jsx";
import StylesContainer from "./components/StylesContainer.jsx";
import Background from "./components/Background.jsx";
import Custom from "./components/Custom.jsx";
import { colors } from "./utils/colors.js";
import { styles } from "./utils/getStyles.js";
import { generateRandomSeed } from "./utils/generateRandomSeed.js";
//import DownloadBtn from "./components/DownloadBtn.jsx";
import RandomBtn from "./components/RandomBtn.jsx";
import CopyBtn from "./components/CopyBtn.jsx";

const App = () => {
  const [random, setRandom] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    setData({
      currentStyle: styles[Math.floor(Math.random() * styles.length)],
      backgroundColor: colors[
        Math.floor(Math.random() * colors.length)
      ].replace("#", ""),
      seed: generateRandomSeed(),
    });
  }, [random]);

  const [custom, setCustom] = useState("styles");

  function convertObjectToQueryString(obj) {
    return Object.entries(obj)
      .map(([key, value]) => {
        if (!["currentStyle", "seed"].includes(key) && value != "") {
          return `${key}=${encodeURIComponent(value)}`;
        }
      })
      .filter((item) => item)
      .join("&");
  }
  return (
    <>
      {data.currentStyle  &&
        <main
          style={{ backgroundColor: `#${data.backgroundColor || "bbbbbb"}bb` }}>
          <header className="p-2 flex justify-between items-center">
            <RandomBtn random={setRandom} />
            {/* <DownloadBtn
              url={`https://api.dicebear.com/7.x/${
                data.currentStyle
              }/png?seed=${data.seed}&${convertObjectToQueryString(data)}&size=500`}
            /> */}
            <CopyBtn
              url={`https://api.dicebear.com/7.x/${
                data.currentStyle
              }/png?seed=${data.seed}&${convertObjectToQueryString(data)}&size=500`}
            />
          </header>
          <div className="result">
            <img
              src={`https://api.dicebear.com/7.x/${
                data.currentStyle
              }/svg?seed=${data.seed}&${convertObjectToQueryString(data)}`}
              alt="avatar"
            />
          </div>
          <SlideMenu data={data} custom={custom} setCustom={setCustom} />
          {custom == "styles" && (
            <StylesContainer setData={setData} data={data} />
          )}
          {custom == "backgroundColor" && (
            <Background setData={setData} data={data} />
          )}
          {!["styles", "backgroundColor"].includes(custom) && (
            <Custom custom={custom} data={data} setData={setData} />
          )}
          <p className="bg-white p-2 pt-10 text-center">
            ©{new Date().getFullYear()} - Demo Version<br/>
            This application created by <a href="https://github.com/KhalilAndolsi" className="underline">khalil andolsi</a>
          </p>
        </main>
      }
    </>
  );
};

export default App;
