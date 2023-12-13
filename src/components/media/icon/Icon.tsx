import React from "react"
import { outlinesIcons } from "./icons"
import { SvgIconProps } from "./SvgIcon"

const icons = {
  ...outlinesIcons,
}

export type IconType = keyof typeof icons

export interface IconProps extends Omit<SvgIconProps, "children"> {
  icon: IconType
}

/**
 * Set of official YoungPlatform icons.
 *
 * @component
 * @example
 * return (
 *   <Icon icon="wallet" size={16} />
 * )
 */
export const Icon = ({ icon, ...props }: IconProps) => {
  const Comp = icons[icon]

  return <Comp {...props} />
}
