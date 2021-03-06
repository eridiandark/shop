const cors = require("cors");

const whitelist = ["http://localhost:3000", "http://localhost:4000"];
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error("Not allowed by CORS"))
        }
    },
    credentials: true,
};
app.use(cors(corsOptions));