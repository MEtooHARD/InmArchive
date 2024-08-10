"use client";
import { shxt } from "@/shxt/shxt";
import { useContext } from "react";
import { Config } from "../layout";

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
    selectedCourses: SelectedCourse[];
};

export default function Page() {
    const config = useContext(Config);
    // shxt(config.options);

    return <div className="bg-cyan-400/60 flex-row flex justify-center rounded-xl p-2">
        <div className="mr-1 flex flex-col items-center">
            <div className="m-1 font-bold text-xl">
                預排課程</div>
        </div>
        <div className="bg-green-300/70 w-1 rounded-sm"></div>
        <div className="ml-1">
            <div className="m-1 font-bold text-xl">已選課程</div>
        </div>
    </div>;
};