/**
 * Copiato come un matto da Chackra UI. Bravo lui.
 */

import { forwardRef as forwardReactRef, ForwardRefRenderFunction } from "react"
import {
  As,
  AsProp,
  ComponentWithAs,
  PropsOf,
  RightJoinProps,
} from "../types/system"

export function forwardRef<Props extends object, Component extends As>(
  component: ForwardRefRenderFunction<
    any,
    RightJoinProps<PropsOf<Component>, Props> & AsProp
  >
) {
  return forwardReactRef(component) as unknown as ComponentWithAs<
    Component,
    Props
  >
}
