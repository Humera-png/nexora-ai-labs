import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useRouterState } from "@tanstack/react-router";

/**
 * RouteTransition — wraps the router Outlet in a spatial crossfade so that
 * route changes feel like a continuous camera move through one interface,
 * not a series of separate pages.
 */
export default function RouteTransition() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
        transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] as const }}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
}
