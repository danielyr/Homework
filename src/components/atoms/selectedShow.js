import { atom } from "recoil";

export const currentShowState = atom({
  key: "currentShowState",
  default: "firstLoad",
});
