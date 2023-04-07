import React from "react"
import {
  ColorModeContext,
  useColorMode,
  UseColorModeOptions,
} from "./ColorModeContext"
import { ApplyTheme } from "./ApplyTheme"
import { ApplyFontFamily } from "./ApplyFontFamily"

import "../../style/reset.css"

interface ThemeProviderOptions {
  colorMode: UseColorModeOptions
  /**
   * Whether to apply the font family to the body.
   *
   * @default false
   */
  shouldApplyFontFamily: boolean
}

export interface ThemeProviderProps {
  children: React.ReactNode
  options?: Partial<ThemeProviderOptions>
}

export const ThemeProvider = ({ children, options }: ThemeProviderProps) => {
  const colorMode = useColorMode(options?.colorMode)

  const shouldApplyFontFamily = options?.shouldApplyFontFamily

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ApplyTheme />
      {shouldApplyFontFamily && <ApplyFontFamily />}
      {children}
    </ColorModeContext.Provider>
  )
}
