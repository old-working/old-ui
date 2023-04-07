import { useIsomorphicLayoutEffect } from "../../hooks"
import { useColorModeValue } from "./ColorModeContext"
import { darkThemeClass, lightThemeClass } from "../../style/theme/theme.css"

function useTheme() {
  const themeClass = useColorModeValue(lightThemeClass, darkThemeClass)

  useIsomorphicLayoutEffect(() => {
    document.body.classList.add(themeClass)
    return () => {
      document.body.classList.remove(themeClass)
    }
  }, [themeClass])

  return null
}

export const ApplyTheme = () => {
  useTheme()
  return null
}
