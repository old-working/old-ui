import { useIsomorphicLayoutEffect } from "../../hooks"
import { MontserratFontStyle } from "../../style/font.css"

export const ApplyFontFamily = () => {
  useIsomorphicLayoutEffect(() => {
    document.body.classList.add(MontserratFontStyle)
  }, [])

  return null
}
