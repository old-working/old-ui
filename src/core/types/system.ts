/**
 * This file is part of Chakra UI. All credit goes to the original authors.
 */

import { ComponentProps, ComponentPropsWithoutRef, ElementType } from "react"
import type { Sprinkles } from "../../style/sprinkles.css"

export type As<Props = any> = ElementType<Props>

export type AsProp = {
  as?: As
}

/**
 * Extract the props of a React element or component
 */
export type PropsOf<T extends As> = ComponentPropsWithoutRef<T> & AsProp

type OmitCommonProps<
  Target,
  OmitAdditionalProps extends keyof any = never
> = Omit<Target, "transition" | "as" | "color" | OmitAdditionalProps>

export type RightJoinProps<
  SourceProps extends object = {},
  OverrideProps extends object = {}
> = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps

type MergeWithAs<
  // eslint-disable-next-line no-shadow
  ComponentProps extends object,
  AsComponentProps extends object,
  AdditionalProps extends object = {},
  AsComponent extends As = As
> = RightJoinProps<ComponentProps, AdditionalProps> &
  RightJoinProps<AsComponentProps, AdditionalProps> & {
    as?: AsComponent
  }

export type ComponentWithAs<Component extends As, Props extends object = {}> = {
  <AsComponent extends As = Component>(
    props: MergeWithAs<
      ComponentProps<Component>,
      ComponentProps<AsComponent>,
      Props,
      AsComponent
    >
  ): JSX.Element

  displayName?: string
  defaultProps?: Partial<any>
  id?: string
}

export type SprinklesProp = {
  sprinkles?: Sprinkles & OverrideTokens<Sprinkles>
}

export type OverrideTokens<T> = {
  [K in keyof T as K extends string ? `__${K}` : number]:
    | Extract<T[K], string | number>
    | {}
}

export type HTMLPropsWithoutAs<T extends As> = Omit<PropsOf<T>, "ref" | "as"> &
  SprinklesProp

export type HTMLProps<T extends As> = Omit<PropsOf<T>, "ref"> & SprinklesProp
