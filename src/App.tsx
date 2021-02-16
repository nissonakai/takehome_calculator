import React, { useState } from "react";
import { AgeSelect } from "./components/AgeSelect";
import { SalaryInput } from "./components/SalaryInput";
import { Results } from "./components/Results";
import { useResults } from "./logic/useResults";
import { FamilySelect } from "./components/FamilySelect";

interface Userinfo {
  salary: string;
  age: string;
  family: string;
}

const App = () => {
  const initialUserinfo = {
    salary: "0",
    age: "40歳未満",
    family: "0人",
  };
  const [userinfo, setUserinfo] = useState<Userinfo>(initialUserinfo);
  const { salary, age, family } = userinfo;
  const result = useResults(salary, age, family);

  const handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void = (e) =>
    setUserinfo({ ...userinfo, [e.target.name]: e.target.value });

  return (
    <div id="app">
      <h1>給与手取り額シュミレーター</h1>
      <SalaryInput salary={salary} handleChange={handleChange} />
      <AgeSelect age={age} handleChange={handleChange} />
      {/* <FamilySelect family={family} handleChange={handleChange} /> */}
      <Results result={result} age={age} />
    </div>
  );
};

export default App;
