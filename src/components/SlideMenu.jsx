import { useEffect, useState } from "react";
import { getSchema } from "../utils/getSchema";
import { changeTextStyle } from "../utils/changeTextStyle";

const SlideMenu = ({ data, custom, setCustom }) => {
  const [schema, setSchema] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const theSchema = await getSchema(data.currentStyle);
      setSchema(
        Object.keys(theSchema)
          .sort()
          .filter((key) => key !== "backgroundColor")
      );
    };
    fetchData();
  }, [data.currentStyle]);


  useEffect(() => {
    if (schema) {
      if (!schema.includes(custom)) {
        setCustom("styles")
      }
    }
  }, [schema])

  return (
    <div className="slideMenu">
      <div>
        <button className={`${custom == "styles" && "clicked"}`}  onClick={() => setCustom("styles")}>Styles</button>
        <button className={`${custom == "backgroundColor" && "clicked"}`}  onClick={() => setCustom("backgroundColor")}>Background Color</button>
        {schema &&
          schema.map((item, i) => (
            <button key={i} className={`${custom == item && "clicked"}`} onClick={() => setCustom(item)}>
              {changeTextStyle(item).replace(/\b\w/g, function (match) {
                return match.toUpperCase();
              })}
            </button>
          ))}
      </div>
    </div>
  );
};

export default SlideMenu;
