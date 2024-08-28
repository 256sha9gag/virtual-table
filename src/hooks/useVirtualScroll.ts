import { useCallback, useEffect, useState } from "react";
import {
  IScroll,
  IUseVirtualScrollArgs,
  IUseVirtualScrollReturn,
} from "../types/types";

export function useVirtualScroll({
  options,
  ref,
}: IUseVirtualScrollArgs): IUseVirtualScrollReturn {
  const { tableHeight, rowHeight } = options;
  const [scroll, setScroll] = useState<IScroll>({
    top: 0,
    index: 0,
    end: Math.ceil((tableHeight * 2) / rowHeight),
  });

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrollTop = ref.current.scrollTop;
        const index = Math.floor(scrollTop / rowHeight);
        const end = index + Math.ceil((tableHeight * 2) / rowHeight);
        const top = (scrollTop / rowHeight) * rowHeight;
        setScroll({ top, index, end });
      }
    };

    if (ref.current) {
      ref.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [rowHeight, tableHeight, ref]);

  const onScroll = useCallback((event: React.UIEvent<HTMLTableElement>) => {
    const target = event.target as HTMLTableElement;
    const scrollTop = target.scrollTop;
    const index = Math.floor(scrollTop / rowHeight);
    const end = index + Math.ceil((tableHeight * 2) / rowHeight);
    const top = (scrollTop / rowHeight) * rowHeight;
    setScroll({ top, index, end });
  }, []);

  return { scroll, onScroll };
}
