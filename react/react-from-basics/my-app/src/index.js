import ReactDOM from "react-dom";
import { App } from "./App";

import { AdminFlagProvider } from "./components/NameEdits/providers/AdminFlagProvider";

// const style = {
//     witdh: "100px",
//     padding: "6px",
//     borderRadius: "8px",
// };

ReactDOM.render(
    <AdminFlagProvider>
        <App />
    </AdminFlagProvider>,
    document.getElementById("root")
);