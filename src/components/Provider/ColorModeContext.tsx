import React from "react"

export type ColorMode = "light" | "dark"

export type ColorModeContextType = {
  colorMode: ColorMode
  toggleColorMode: () => void
}

export type UseColorModeOptions = {
  defaultMode?: ColorMode
  mode?: ColorMode
}

export const ColorModeContext = React.createContext<ColorModeContextType>({
  colorMode: `light`,
  toggleColorMode: () => {},
})

const getPreferredColorScheme = (): ColorMode | undefined => {
  if (typeof window !== `undefined`) {
    if (window.matchMedia(`(prefers-color-scheme: dark)`).matches) {
      return `dark`
    }
    return `light`
  }
}

const getColorMode = ({
  defaultMode,
  mode,
}: UseColorModeOptions): ColorMode => {
  if (mode) {
    return mode
  }
  let storageValue
  try {
    if (typeof window !== `undefined`) {
      storageValue = localStorage.getItem(`colorMode`)
    }
  } catch (e) {
    // Ignore error
  }
  if (!storageValue || ![`light`, `dark`].includes(storageValue)) {
    return defaultMode || getPreferredColorScheme() || `light`
  }
  return storageValue as ColorMode
}

export const useColorMode = (options: UseColorModeOptions = {}) => {
  const [colorMode, setColorMode] = React.useState<ColorMode>(
    getColorMode(options)
  )

  React.useEffect(() => {
    if (options.mode) {
      setColorMode(options.mode)
    }
  }, [options.mode])

  const toggleColorMode = React.useCallback(() => {
    setColorMode((prevState) => {
      const mode = prevState === `light` ? `dark` : `light`
      try {
        if (typeof window !== `undefined`) {
          localStorage.setItem(`colorMode`, mode)
        }
      } catch (e) {
        // Ignore error
      }
      return mode
    })
  }, [])

  return { colorMode, toggleColorMode }
}

export const useColorModeContext = () => {
  const context = React.useContext(ColorModeContext)
  if (!context) {
    throw new Error(
      `useColorModeContext must be used within a ColorModeProvider`
    )
  }
  return context
}

export const useColorModeValue = <T, U>(lightMode: T, darkMode: U) => {
  const { colorMode } = useColorModeContext()
  return colorMode === `light` ? lightMode : darkMode
}
