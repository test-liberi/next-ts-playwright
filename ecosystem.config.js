module.exports = {
    apps: [
      {
        script: "node_modules/next/dist/bin/next",
        args: "start",
        cwd: "./",
        env: {
          NODE_ENV: process.env.NODE_ENV || "production",
        },
      },
    ],
  };
  