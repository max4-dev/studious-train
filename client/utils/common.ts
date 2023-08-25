import { WrappedComponentProps } from "@/types/common"
import { ForwardRefExoticComponent, MutableRefObject, RefAttributes, useEffect, useRef, useState } from "react"

export const getWindowWidth = () => {
  const { innerWidth: windowWidth } =
    typeof window !== 'undefined' ? window : { innerWidth: 0 }

  return { windowWidth }
}

