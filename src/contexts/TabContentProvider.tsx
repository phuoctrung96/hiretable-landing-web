import { createContext, ReactNode, useContext, useState } from 'react';

type tabContextType = {
  tab: number;
  setTab: (n: number) => void;
};
type Props = {
  children: ReactNode;
};
const tabContextDefault: tabContextType = {
  tab: 1,
  setTab: () => {}
};

export const TabContext = createContext(tabContextDefault);

export function useTabContext() {
  return useContext(TabContext);
}
export function TabContentProvider({ children }: Props) {
  const [tabCurrent, setTabCurrent] = useState<number>(1);

  const setTab = (n: number) => {
    setTabCurrent(n);
  };

  const value = {
    tab: tabCurrent,
    setTab
  };
  return (
    <>
      <TabContext.Provider value={value}>{children}</TabContext.Provider>
    </>
  );
}
