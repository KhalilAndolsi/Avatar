import { styles } from "../utils/getStyles";
import { getSchema } from "../utils/getSchema";
import { colors } from "../utils/colors";
import { useEffect } from "react";

const StylesContainer = ({ setData, data }) => {

  const handelSchemaStyle = async (style) => {
    const schema = await getSchema(style || "");
    let newSchema = {
      ...data,
      currentStyle: style || ""
    };
    Object.keys(schema).forEach((key) => {
      if (key.includes("Probability")) {

        newSchema[key] = "100";
      } else {
        newSchema[key] = "";
      }
    });
    setData(newSchema);
  };

  useEffect(() => {
    handelSchemaStyle;
  }, []);

  return (
    <div className="stylesContainer">
      {styles.map((style, i) => (
        <button key={i} onClick={() => handelSchemaStyle(style)}>
          <img
            src={`https://api.dicebear.com/7.x/${style}/svg/seed=${data.seed}`}
            alt="style"
          />
        </button>
      ))}
    </div>
  );
};

export default StylesContainer;
