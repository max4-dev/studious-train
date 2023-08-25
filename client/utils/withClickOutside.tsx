'use client'

import { WrappedComponentProps } from "@/types/common";
import { ForwardRefExoticComponent, MutableRefObject, RefAttributes, useEffect, useRef, useState } from "react";

export function withClickOutside(
  WrappedComponent: ForwardRefExoticComponent<WrappedComponentProps> &
    RefAttributes<HTMLDivElement>
) {
  const Component = () => {
    const [open, setOpen] = useState(false);
    const ref = useRef() as MutableRefObject<HTMLDivElement>

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (!ref.current.contains(e.target as HTMLDivElement)) {
          setOpen(false);
        }
      };

      document.addEventListener('mouseown', handleClickOutside);

      return document.removeEventListener('mousedown', handleClickOutside);
    }, [ref])

    return <WrappedComponent open={open} setOpen={setOpen} ref={ref} />
  }

  return Component;
}