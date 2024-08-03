import { MotionValue } from "framer-motion";
import { createContext } from "react";

export const DockContext = createContext<MotionValue<number> | null>(null);
