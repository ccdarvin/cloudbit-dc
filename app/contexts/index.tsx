import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import { ConfigProvider, theme } from "@pankod/refine-antd";
import { parseCookies, setCookie } from "nookies";
import { geekblue as color } from '@ant-design/colors';


type ColorModeContextType = {
  mode: string;
  setMode: (mode: string) => void;
};

export const ColorModeContext = createContext<ColorModeContextType>(
  {} as ColorModeContextType
);

export const ColorModeContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [mode, setMode] = useState("light");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      setMode(parseCookies()["theme"]);
    }
  }, [isMounted]);

  const setColorMode = () => {
    if (mode === "light") {
      setMode("dark");
      setCookie(null, "theme", "dark")
    } else {
      setMode("light")
      setCookie(null, "theme", "light")
    }
  };

  const { darkAlgorithm, defaultAlgorithm } = theme;

  return (
    <ColorModeContext.Provider
      value={{
        setMode: setColorMode,
        mode,
      }}
    >
      <ConfigProvider
        theme={{
          algorithm: mode === "light" ? defaultAlgorithm : darkAlgorithm,
          token: {
            colorPrimary: color[5],
          },
          components: {
            Layout: {
              colorBgHeader: mode === "light" ? "#fff" : '#141414',
              colorBgLayout: mode === "light" ? "#fff" : '#001529',
            }
          }
        }}
      >
        {children}
      </ConfigProvider>
    </ColorModeContext.Provider>
  );
};
