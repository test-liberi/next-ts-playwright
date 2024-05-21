module.exports = {
    apps: [
      {
        script: "node_modules/next/dist/bin/next",
        args: "start",
        instances: "1",
        exec_mode: "fork",
        cwd: "./",
        env: {
          NODE_ENV: process.env.NODE_ENV || "production",
        },
      },
    ],
  };
  