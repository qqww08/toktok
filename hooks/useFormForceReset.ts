import React, { useEffect } from "react";

export default function useFormForceReset<T>(
  setState: React.Dispatch<React.SetStateAction<T>>,
  forceUpdate: boolean,
  value: T
) {
  useEffect(() => {
    if (forceUpdate) {
      setState(value);
    }
    return () => {
      setState(null);
    };
  }, [forceUpdate]);
}
