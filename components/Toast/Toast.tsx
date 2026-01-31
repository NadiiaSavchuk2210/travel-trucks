import { Toaster } from "react-hot-toast";

export default function Toast() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: {
          background: "#fff",
          color: "#000",
          border: "1px solid #e0e0e0",
          borderRadius: "12px",
        },
      }}
    />
  );
}
