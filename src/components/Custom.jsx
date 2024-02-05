import { useEffect, useState } from "react";
import { getSchema } from "../utils/getSchema.js";

const Custom = ({ custom, data, setData }) => {
  const [schema, setSchema] = useState();

  const getSchemaOfcustom = async () => {
    await getSchema(data.currentStyle)
      .then((res) => setSchema(res[custom]))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getSchemaOfcustom();
  }, [custom]);

  // useEffect(() => {
  //   if (schema) {
  //     console.log(custom)
  //     console.log(schema);
  //   }
  // }, [schema]);

  function convertObjectToQueryString(obj) {
    return Object.entries(obj)
      .map(([key, value]) => {
        if (
          !["currentStyle", "seed", custom].includes(key) &&
          value != ""
        ) {
          return `${key}=${encodeURIComponent(value)}`;
        }
      })
      .filter((item) => item)
      .join("&");
  }

  const handelCustomStyle = (s) => {
    let newData = data;
    newData[custom] = s;
    setData((prev) => ({ ...prev, ...newData }));
  };
  const handelRangeCustomStyle = (range) => {
    let newData = data;
    newData[custom] = range;
    setData((prev) => ({ ...prev, ...newData }));
  };

  return (
    <>
      {schema && (
        <>
          {schema.type == "array" && (
            <div className="customContainer">
              {schema.default.map((s, i) => (
                <button key={i} onClick={() => handelCustomStyle(s)}>
                  <img
                    src={`https://api.dicebear.com/7.x/${data.currentStyle}/svg?seed=${data.seed}&${convertObjectToQueryString(data)}&${custom}=${s}`}
                    alt="avatar"
                  />
                </button>
              ))}
            </div>
          )}
          {schema.type == "integer" && (
            <div className="bg-white grid place-items-center">
              <input
                type="range"
                step={10}
                className="w-1/2"
                max={schema.maximum}
                min={schema.minimum}
                defaultValue={data[custom] == "" ? schema.default : "100"}
                onChange={(e) => handelRangeCustomStyle(e.target.value)}
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Custom;
