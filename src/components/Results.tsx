import React from "react";
import { ResultOthers } from "./ResultOthers";

type Result = {
  title: string;
  others?: ResultOthers;
};

type ResultOthers = {
  basic_salary: number;
  salary_lower?: number;
  salary_upper?: number;
  health: number;
  welfare: number;
  care: number;
};

interface Props {
  result: Result;
  age: string;
}

export const Results: React.FC<Props> = ({ result, age }) => {
  const { title, others } = result;
  const isAge40over = age === "40歳以上";
  return (
    <div>
      <p>あなたの手取り額は…</p>
      <h2>{title}</h2>
      {others && <ResultOthers isAge40over={isAge40over} others={others} />}
    </div>
  );
};
