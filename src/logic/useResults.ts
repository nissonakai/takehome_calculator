import React from "react";
import Constants from "../constants";

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

export const useResults = (salary: string, age: string, family: string) => {
  const { taxtable } = Constants;

  const judge_tax: (salary_int: any) => ResultOthers = (salary_int) => {
    for (let i = 0; i < taxtable.length; i++) {
      const this_tax = taxtable[i];
      if (
        this_tax.salary_lower <= salary_int &&
        this_tax.salary_upper > salary_int
      ) {
        return this_tax;
      }
    }
  };
  const this_salary_int: number = parseFloat(salary) * 10000;
  const { health, welfare, care, basic_salary } = isNaN(Number(salary))
    ? { health: 0, welfare: 0, care: 0, basic_salary: 0 }
    : judge_tax(this_salary_int);
  const base_sum =
    age === "40歳以上"
      ? this_salary_int - health - welfare - care
      : this_salary_int - health - welfare;

  const result: Result =
    this_salary_int >= 50000
      ? {
          title: `おおよそ ${Math.floor(base_sum * 0.9)}円`,
          others: {
            basic_salary: basic_salary,
            health: health,
            welfare: welfare,
            care: care,
          },
        }
      : { title: "ここに手取り額が表示されます。" };
  return result;
};
