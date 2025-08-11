const mongoose = require("mongoose");

const k6ResultSchema = new mongoose.Schema({
  summary: {
    checks: {
      passed: { type: Number, required: true },
      total: { type: Number, required: true },
      percentage: { type: Number, required: true }
    },
    data: {
      received: {
        total: { type: Number, required: true }, // bytes
        rate: { type: Number, required: true }   // bytes/sec
      },
      sent: {
        total: { type: Number, required: true }, // bytes
        rate: { type: Number, required: true }   // bytes/sec
      }
    },
    http_requests: {
      total: { type: Number, required: true },
      rate: { type: Number, required: true },
      failed: { type: Number, required: true },
      failed_percentage: { type: Number, required: true }
    },
    iterations: {
      total: { type: Number, required: true },
      rate: { type: Number, required: true }
    }
  },

  metrics: {
    http_req_blocked: {
      avg: { type: Number, required: true },
      min: { type: Number, required: true },
      med: { type: Number, required: true },
      max: { type: Number, required: true },
      p90: { type: Number, required: true },
      p95: { type: Number, required: true }
    },
    http_req_connecting: {
      avg: { type: Number, required: true },
      min: { type: Number, required: true },
      med: { type: Number, required: true },
      max: { type: Number, required: true },
      p90: { type: Number, required: true },
      p95: { type: Number, required: true }
    },
    http_req_duration: {
      avg: { type: Number, required: true },
      min: { type: Number, required: true },
      med: { type: Number, required: true },
      max: { type: Number, required: true },
      p90: { type: Number, required: true },
      p95: { type: Number, required: true }
    },
    http_req_receiving: {
      avg: { type: Number, required: true },
      min: { type: Number, required: true },
      med: { type: Number, required: true },
      max: { type: Number, required: true },
      p90: { type: Number, required: true },
      p95: { type: Number, required: true }
    },
    http_req_sending: {
      avg: { type: Number, required: true },
      min: { type: Number, required: true },
      med: { type: Number, required: true },
      max: { type: Number, required: true },
      p90: { type: Number, required: true },
      p95: { type: Number, required: true }
    },
    http_req_tls_handshaking: {
      avg: { type: Number, required: true },
      min: { type: Number, required: true },
      med: { type: Number, required: true },
      max: { type: Number, required: true },
      p90: { type: Number, required: true },
      p95: { type: Number, required: true }
    },
    http_req_waiting: {
      avg: { type: Number, required: true },
      min: { type: Number, required: true },
      med: { type: Number, required: true },
      max: { type: Number, required: true },
      p90: { type: Number, required: true },
      p95: { type: Number, required: true }
    },
    iteration_duration: {
      avg: { type: Number, required: true },
      min: { type: Number, required: true },
      med: { type: Number, required: true },
      max: { type: Number, required: true },
      p90: { type: Number, required: true },
      p95: { type: Number, required: true }
    }
  },

  vus: {
    min: { type: Number, required: true },
    max: { type: Number, required: true },
    max_total: { type: Number, required: true }
  },

  timestamp: { type: Date, required: true }
}, { timestamps: true });

module.exports = mongoose.model("K6Result", k6ResultSchema);
