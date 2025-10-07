const pino = require('pino');
const fs = require('fs');

const logDir = 'logs';
const logFile = `${logDir}/local.log`;

// Create the log directory if it doesn't exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

// Delete the log file if it exists
if (fs.existsSync(logFile)) {
  fs.unlinkSync(logFile);
}

const logger = pino(
  {
    level: process.env.LOG_LEVEL || 'info',
    formatters: {
      level: (label) => {
        return { level: label };
      },
    },
  },
  pino.destination(logFile)
);

module.exports = logger;