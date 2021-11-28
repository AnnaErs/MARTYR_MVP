import React from 'react';
import { RouteProps } from 'react-router-dom'

export type TProps = any

export type TSection = {
  name: string
  props?: TProps
}

export type TSections = TSection[]

export type TPage = {
  sections: TSections
  title?: string
  template?: string
} & RouteProps

export type TPages = TPage[]

export type TApplication = {
  pages: TPages
}
