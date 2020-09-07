import React, {useState, ReactNode, createContext} from 'react';

interface IProps {
  children: ReactNode;
}

interface ISidebarStateContext {
  sidebarState: boolean;
  toggle: () => void;
}

const SidebarStateContext = createContext<ISidebarStateContext>({
  sidebarState: true,
  toggle: () => {},
});

const SidebarStateProvider = (props: IProps) => {
  const [sidebarState, setSidebarState] = useState<boolean>(true);

  const toggle = () => {
    setSidebarState(!sidebarState);
  };

  return (
    <SidebarStateContext.Provider
      value={{
        sidebarState,
        toggle,
      }}
    >
      {props.children}
    </SidebarStateContext.Provider>
  );
};

export {SidebarStateContext, SidebarStateProvider};
