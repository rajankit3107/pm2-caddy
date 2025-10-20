"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
  res.send("Hello world");
});
app.get("/:id", (req, res) => {
  res.send(`Hey ${req.params.id}`);
});
app.listen(3000, "0.0.0.0", () => {
  console.log(`server is running on port 3000`);
});
