import React, { FormEvent } from "react";
import clsx from "clsx";
import { Input } from "@components";
import { useAppSelector, useAppDispatch } from "@hooks";
import { selectFilterValue, setFilterValue } from "@store";
import { Props } from "./filter.props";

export const Filter = ({ className, ...props }: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const filterValue = useAppSelector(selectFilterValue);

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    dispatch(setFilterValue(newValue));
  };

  const onClear = () => {
    dispatch(setFilterValue(""));
  };

  return (
    <div className={clsx(className, "flex flex-col")} {...props}>
      <div className="flex gap-4 items-center">
        <span>По имени: </span>
        <Input
          icon="search"
          onChange={handleChange}
          onClear={onClear}
          value={filterValue}
        />
      </div>
    </div>
  );
};
