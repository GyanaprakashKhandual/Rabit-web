const mongoose = require("mongoose");

// Helper function to avoid repeating metric schema
function metricTemplate() {
  return {
    avg: { type: Number, required: true },
    min: { type: Number, required: true },
    med: { type: Number, required: true },
    max: { type: Number, required: true },
    p90: { type: Number, required: true },
    p95: { type: Number, required: true }
  };
}

// Single schema for TestData (includes K6 result data)
const testDataSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  },
  apiName: {
    type: String,
    required: true
  },
  networkType: {
    type: String,
    required: true,
    enum: [
      '1KB - 1MB', '1MB - 10MB', '10MB - 20MB',
      '20MB - 40MB', '40MB - 60MB', '60MB - 80MB', 'Above 80MB'
    ]
  },
  apiLink: {
    type: String,
    required: true
  },

  // Embedded K6 result data
  k6Result: {
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
      http_req_blocked: metricTemplate(),
      http_req_connecting: metricTemplate(),
      http_req_duration: metricTemplate(),
      http_req_receiving: metricTemplate(),
      http_req_sending: metricTemplate(),
      http_req_tls_handshaking: metricTemplate(),
      http_req_waiting: metricTemplate(),
      iteration_duration: metricTemplate()
    },

    vus: {
      min: { type: Number, required: true },
      max: { type: Number, required: true },
      max_total: { type: Number, required: true }
    },

    timestamp: { type: Date, required: true }
  }
}, { timestamps: true });

module.exports = mongoose.model("TestData", testDataSchema);
