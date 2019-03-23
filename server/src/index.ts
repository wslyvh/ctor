import app from "./app";
import config from "./config/app";

app.listen(config.PORT, () => console.log(`Listening on port ${config.PORT}`));
