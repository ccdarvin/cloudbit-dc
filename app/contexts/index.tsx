import React, {
  createContext,
  useEffect,
  useState,
} from "react";
import { ConfigProvider, theme } from "antd";
import { parseCookies, setCookie } from "nookies";
import { generate } from '@ant-design/colors';
import esES from 'antd/locale/es_ES'

type ColorModeContextType = {
  mode: string;
  setMode: (mode: string) => void;
};

export const ColorModeContext = createContext<ColorModeContextType>(
  {} as ColorModeContextType
);

export function ColorModeContextProvider ({
  children,
  defaultMode="light",
}: {
  children: React.ReactNode;
  defaultMode: string;
}) {
  const [isMounted, setIsMounted] = useState(false);
  const [mode, setMode] = useState(defaultMode);
  const [color, setColor] = useState(generate('#1890ff', {
    theme: defaultMode === "light" ? 'default' : 'dark',
  }));

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      setMode(parseCookies()["theme"]);
    }
  }, [isMounted]);

  useEffect(() => {
    setColor(generate('#1890ff', {
      theme: mode === "light" ? 'default' : 'dark',
    }));
  }, [mode]);

  const setColorMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    // save in cookies including expiration date and all subdomains
    setCookie(null, "theme", newMode, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });
    setMode(newMode);
  }

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
              colorBgHeader: mode === "light" ? '#fff' : color[0],
            },
            Menu: {
              colorBgMask: color[0],
            },
          }
        }}
        locale={{ 
          ...esES
        }}
      >
        {children}
      </ConfigProvider>
    </ColorModeContext.Provider>
  );
};
