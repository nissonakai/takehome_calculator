import React from "react";

interface Props {
  isAge40over: boolean;
  others: ResultOthers;
}

interface ResultOthers {
  basic_salary: number;
  salary_lower?: number;
  salary_upper?: number;
  health: number;
  welfare: number;
  care: number;
}

export const ResultOthers: React.FC<Props> = ({ isAge40over, others }) => {
  const { basic_salary, health, welfare, care } = others;
  return (
    <>
      <p>標準報酬月額：{basic_salary}</p>
      <p>健康保険料：{health}</p>
      <p>厚生年金保険料：{welfare}</p>
      {isAge40over && <p>介護保険料：{care}</p>}
    </>
  );
};
