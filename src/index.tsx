import { createRoot } from "react-dom/client";
import App from "./components/app";

const root = () => {
  return <App />;
};

createRoot(document.getElementById("app")!).render(root());
