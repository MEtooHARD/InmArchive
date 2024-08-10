import { ChangeEventHandler } from "react"


export interface TextInputProps {
  value?: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>
};

export function TextInput({
  onChange,
  placeholder,
  value
}: TextInputProps) {
  return <input type="text"
    value={value}
    className="text-black w-60 h-8 rounded-full p-6 text-2xl focus:outline-none"
    placeholder={placeholder}
    onChange={onChange}
  ></input>
};