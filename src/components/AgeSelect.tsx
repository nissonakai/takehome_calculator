import React from "react";
import Constants from "../constants";

interface Props {
  age: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const AgeSelect: React.FC<Props> = ({ age, handleChange }) => {
  const { age_options } = Constants;
  return (
    <div>
      <label htmlFor="age">年齢</label>
      <select name="age" id="age" value={age} onChange={(e) => handleChange(e)}>
        {age_options.map((age_option) => (
          <option key={age_option}>{age_option}</option>
        ))}
      </select>
    </div>
  );
};
