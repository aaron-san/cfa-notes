import { spawn } from "child_process";

console.log("✅ NODE_ENV =", process.env.NODE_ENV || "not set");

const child = spawn("npx", ["serve", "out"], {
  stdio: "inherit",
  shell: true,
});

child.on("close", (code) => {
  console.log(`serve exited with code ${code}`);
});
