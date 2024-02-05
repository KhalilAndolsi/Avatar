export const getSchema = async (style) => {
  const url = `https://raw.githubusercontent.com/dicebear/dicebear/7.x/packages/%40dicebear/${style}/src/schema.ts`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch schema: ${response.statusText}`);
    }
    const data = await response.text();
    const startIndex = data.indexOf("export const schema: StyleSchema = {");
    const endIndex = data.lastIndexOf("}");
    const schemaText = data
      .slice(startIndex, endIndex + 1)
      .replace("export const schema: StyleSchema =", "");
      const schema = JSON.parse(schemaText).properties;
    return schema;
  } catch (error) {
    console.error("Error fetching schema:", error);
    throw error;
  }
};
