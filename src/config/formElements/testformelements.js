import React from "react";
import { enumToArray } from "config/utils";
import {  testEnum } from "config/enums";

const testformelements = () => {
  console.log("testformelements")
  const test2Opt = enumToArray(testEnum);
  return {
    test: {
      name: "test",
      type: "password",
      rules: { required: "Zorunluasdadsasd" },
      title: "İnput",
      labelOpt: {
        color: "huseyin",
        fontSize: 4,
      },
    },
    test2: {
      name: "test2",
      title: "Select",
      rules: {validate: {}},
      options: test2Opt,
      mode: "multiple",
      optionFilterProp: "test2",
      showSearch: true,
    },
    test3: {
      name: "test3",
      title: "Select 2",
      rules: { required: "Zorunluasdadsasd" },
      options: [
        { test1: 123, test2: "Jack" },
        { test1: 321, test2: "Lucy" },
      ],
      showSearch: true,
      optionFilterProp: "test2",
    },
    test4: {
      name: "test4",
      title: "Radio",
      rules: { required: "Zorunluasdadsasd" },
      options: [
        { label: "Apple", value: "Apple" },
        { label: "Pear", value: "Pear" },
        { label: "Orange", value: "Orange" },
      ],
    },
  };
};

export default  testformelements