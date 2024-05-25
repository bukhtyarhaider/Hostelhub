import { useState } from "react";
import "./main.scss";
import CustomInput from "./components/CustomInput/CustomInput";

function App() {
  const [value, setValue] = useState<string>("");
  return (
    <>
      <CustomInput
        placeholder="Email"
        label="Email"
        type="text"
        value={value}
        setValue={setValue}
      />
    </>
  );
}

export default App;
