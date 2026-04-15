import { Toaster, toast } from "react-hot-toast";
import { motion } from "framer-motion";
import React from "react";

// Animated Toast wrapper
const AnimatedToast = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 0.95, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="pointer-events-auto"
  >
    {children}
  </motion.div>
);

// ToastContainer: 화면 최상단 우측 fixed 위치
export const ToastContainer = () => (
  <Toaster
    position="top-right"
    containerClassName="fixed top-5 right-5 z-[9999]" // 화면 layout에 절대 영향 없음
    reverseOrder={false}
    toastOptions={{
      duration: 4000,
      style: {
        background: "transparent", // motion div 안에서 처리
        padding: 0,
      },
    }}
  />
);

// Success Toast
export const showSuccess = (message) => {
  toast.custom(() => (
    <AnimatedToast>
      <div className="flex items-center gap-3 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-xl px-6 py-4 shadow-2xl opacity-95">
        <span className="text-xl animate-fadeIn">🎉</span>
        <span>{message}</span>
      </div>
    </AnimatedToast>
  ));
};

// Error Toast
export const showError = (message) => {
  toast.custom(() => (
    <AnimatedToast>
      <div className="flex items-center gap-3 bg-gradient-to-r from-red-400 to-red-600 text-white rounded-xl px-6 py-4 shadow-2xl opacity-95">
        <span className="text-xl animate-fadeIn">⚠️</span>
        <span>{message}</span>
      </div>
    </AnimatedToast>
  ));
};