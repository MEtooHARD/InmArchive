"use client";
import { DivLine } from "@/components/DivLine";
import { SHXTButton } from "@/components/SHXTButton";
import { TextInput } from "@/components/TextInput";
import { useContext } from "react";
import { Config } from "./layout";
import { useRouter } from "next/navigation";

export default function Home() {
  const config = useContext(Config);
  const router = useRouter();

  return <main className="flex flex-col items-center">
    <div className="flex flex-col items-center pt-10">
      <div className="p-10 bg-slate-400/50 rounded-3xl flex flex-col items-center">
        <TextInput
          onChange={e => config.setOptions({
            ID: e.target.value,
            Password: config.options.Password,
            Time: config.options.Time
          })}
          placeholder="ID"
          value={config.options.ID}
        ></TextInput>
        <DivLine></DivLine>
        <TextInput
          onChange={e => config.setOptions({
            ID: config.options.ID,
            Password: e.target.value,
            Time: config.options.Time
          })}
          placeholder="Password"
          value={config.options.Password}
        ></TextInput>
        <DivLine></DivLine>
        <SHXTButton onClick={() => {
          router.push('/shxt');
        }}></SHXTButton>
      </div>
    </div>
  </main >;
}
