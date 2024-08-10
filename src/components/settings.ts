
export interface IConfig {
    // showViewPort: boolean;
    ID: string;
    Password: string;
    Time: number;
};

// export const SettingsGroup = (prop: SwitchProp) => {
//     return <div className="flex justify-center" title="Settings">
//         <div className="flex flex-col items-center m-1 flex-wrap bg-slate-400 p-2 rounded-2xl">
//             {prop.map((prop, i) => <Switch on={prop.on} toggle={prop.toggle} key={i} text={prop.text}></Switch>)}
//         </div>
//     </div>
// };