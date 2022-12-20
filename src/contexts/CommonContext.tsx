import { createContext, ReactNode, useContext, useState } from 'react';

type commonContextType = {
  selectedRole: string;
  setSelectedRole: (value: string) => void;
};
type Props = {
  children: ReactNode;
};
const commonContextDefault: commonContextType = {
  selectedRole: 'candidates',
  setSelectedRole: () => {}
};

export const CommonContext = createContext(commonContextDefault);

export function useCommonContext() {
  return useContext(CommonContext);
}
export function CommonContextProvider({ children }: Props) {
  const [currentRole, setCurrentRole] = useState<string>('candidates');

  const setSelectedRole = (role: string) => {
    setCurrentRole(role);
  };

  const value = {
    selectedRole: currentRole,
    setSelectedRole
  };
  return (
    <>
      <CommonContext.Provider value={value}>{children}</CommonContext.Provider>
    </>
  );
}
