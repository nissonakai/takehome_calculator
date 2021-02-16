import React from "react";
import Constants from "../constants";

interface Props {
  family: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const FamilySelect: React.FC<Props> = ({ family, handleChange }) => {
  const { family_options } = Constants;
  return (
    <div>
      <label htmlFor="age">扶養家族人数</label>
      <select
        name="family"
        id="family"
        value={family}
        onChange={(e) => handleChange(e)}
      >
        {family_options.map((family_option) => (
          <option key={family_option}>{family_option}</option>
        ))}
      </select>
    </div>
  );
};
