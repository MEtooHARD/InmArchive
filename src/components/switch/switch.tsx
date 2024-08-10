import { ChangeEventHandler, Dispatch, SetStateAction } from 'react';
import './switch.css';

export interface SwitchProp {
  on: boolean;
  text?: string;
  toggle: () => void
};

export default function Switch({
  text = '',
  on = false,
  toggle
}: SwitchProp) {
  return (
    <div className="flex items-center justify-center flex-wrap h-10 m-1">
      <label className='mr-3 text-lg'>{text}</label>
      <div
        className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer 
      ${on ? "bg-blue-500" : "bg-gray-300"}`}
        onClick={toggle}>
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-75
          ${on ? "translate-x-6" : "translate-x-0"}`}
        ></div>
      </div>
    </div>)
};