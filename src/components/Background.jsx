import { colors } from "../utils/colors";


const Background = ({ data, setData }) => {
  return (
    <div className="bg-white backroundPicker">
      <button onClick={() => setData((prev) => ({...prev, backgroundColor: ""}))}>
        <img
          src={`https://api.dicebear.com/7.x/${data.currentStyle}/svg/seed=${data.seed}`}
          alt="avatar"
        />
      </button>
      {colors.map((color, i) => (
        <button key={i} onClick={() => setData((prev) => ({...prev, backgroundColor: color.replace("#", "")}))}>
          <img
            src={`https://api.dicebear.com/7.x/${data.currentStyle}/svg?seed=${data.seed}&backgroundColor=${color.replace("#", "")}`}
            alt="avatar"
          />
        </button>
      ))}
    </div>
  );
};

export default Background;
