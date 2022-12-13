export interface SwitchButtonItem {
    id: number;
    title: string;
}
export interface EnumServiceItems extends Array<SwitchButtonItem> {}

export const SwitchButtonList: EnumServiceItems = [
    { id: 1, title: "Candidates" },
    { id: 2, title: "Employers" },
];
