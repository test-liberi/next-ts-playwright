module.exports = {
    apps: [
      {
        name: "test",
        script: "node_modules/next/dist/bin/next",
        args: "start",
        instances: "max",
        exec_mode: "cluster",
        cwd: "./",
        env: {
          NODE_ENV: process.env.NODE_ENV || "production",
        },
      },
    ],
  };
  