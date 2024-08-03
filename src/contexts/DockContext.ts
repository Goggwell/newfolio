import { MotionValue } from "framer-motion";
import { createContext } from "use-context-selector";

export const DockContext = createContext<MotionValue<number> | null>(null);
