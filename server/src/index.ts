import app from "./App";
import AppConfig from "./config/App";

app.listen(AppConfig.PORT, () => console.log(`Listening on port ${AppConfig.PORT}`));
