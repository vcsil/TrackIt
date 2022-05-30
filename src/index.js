import ReactDOM from "react-dom";

import App from "./components/App.js";
import { AuthProvider } from "./providers/Auth.js";

ReactDOM.render(
    <AuthProvider>
        <App />
    </AuthProvider>, 
    document.querySelector(".root"));