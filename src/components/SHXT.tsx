import { Config } from "@/app/layout";
import { useContext } from "react";

interface CourseInfo {
  name: string;
  ID: string;
};

export enum CourseStatus {
  ALREADY_SELECTED = 'ALREADY_SELECTED',

};

interface SelectedCourse extends CourseInfo {
  status: CourseStatus;
};

interface SHXTProps {
  ID: string;
  pwd: string;
  listedCourses: CourseInfo[];
  selectedCourses: SelectedCourse[]
};

export const SHXT = ({
  ID,
  pwd,

}: SHXTProps) => {
  return <div className="bg-cyan-400/60 flex-wrap flex-row flex rounded-xl p-2">
    <div className="mr-1 flex flex-col items-center">
      <div className="m-1 font-bold text-xl"
      >預排課程</div>
      <div>
      </div>
    </div>
    <div className="bg-green-300/70 w-1 rounded-sm"></div>
    <div className="ml-1">
      <div className="m-1 font-bold text-xl">已選課程</div>
    </div>
  </div>;
};