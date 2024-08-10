import { InputHTMLAttributes, MouseEventHandler } from "react"

export interface SHXTButtonProp extends InputHTMLAttributes<HTMLInputElement> {
  onClick: MouseEventHandler<HTMLInputElement>
};

export function SHXTButton({
  onClick,
  disabled
}: SHXTButtonProp) {
  return <input type="button"
    id="shxtbutton"
    disabled={disabled}
    className="bg-blue-300/60 mb-1 p-2 pl-5 pr-5 text-2xl rounded-full transform duration-200 hover:scale-105 focus:outline-none hover:bg-green-300 hover:text-black hover:font-bold"
    value="SHXT"
    onClick={onClick}>
  </input>
};