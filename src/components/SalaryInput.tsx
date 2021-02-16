import React from "react";

interface Props {
  salary: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SalaryInput: React.FC<Props> = ({ salary, handleChange }) => {
  return (
    <div>
      <label htmlFor="salary">月収例（万円）</label>
      <input
        value={salary}
        name="salary"
        id="salary"
        type="number"
        min="0"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};
