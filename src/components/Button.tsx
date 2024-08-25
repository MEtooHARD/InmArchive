import { InputHTMLAttributes } from "react";

class Color {
    readonly color: string;
    private _hover: string;
    constructor(c: string, h: string) { this.color = c; this._hover = h; };
    toString(): string { return this.color + ' ' + this.hover; };
    get hover(): string { return this._hover; };
};

const txtColor = "text-white";
const bgColor = "bg-gray-600/70";
const bdColor = "";

const colorMap: { [key: string]: string } = {
    [txtColor]: 'hover:text-white',
    [bgColor]: 'hover:bg-gray-600',
};

const testColor = new Color('bg-blue-500', 'hover:bg-blue-500/70');

const hover = (name: string) => colorMap[name] || "";

export interface ButtonProps extends InputHTMLAttributes<HTMLInputElement> {
};

export function Button({
    value,
}: ButtonProps) {
    return <input
        type="button"
        value={value}
        className={`${txtColor} ${hover(txtColor)} ${testColor} rounded-md p-3 pt-2 pb-2 transform duration-200 hover:cursor-pointer`}
    ></input>
};

