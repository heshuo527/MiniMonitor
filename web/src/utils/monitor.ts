// src/utils/monitor.js
function report(
  data: {
    type: string;
    message?: string;
    url?: string;
    line?: number;
    col?: number;
    stack?: string;
}) {
  const blob = new Blob(
    [JSON.stringify(data)],
    { type: "application/json" }   // ✅ 显式声明 application/json
  );
  navigator.sendBeacon(
    "http://localhost:4000/monitor",
   blob
  );
}

// ---- JS 错误 ----
window.onerror = function (msg, url, line, col, error) {
  report({
    type: "jsError",
    message: msg as string,
    url,
    line,
    col,
    stack: error?.stack,
  });
};

window.onunhandledrejection = function (event) {
  report({
    type: "promiseError",
    message: event.reason?.message || event.reason,
    stack: event.reason?.stack,
  });
};

// ---- HTTP 错误 ----
export async function fetchWithMonitor(input: string, init: RequestInit = {}) {
  try {
    const res = await fetch(input, init);
    if (!res.ok) {
      report({
        type: "httpError",
        url: input,
        status: res.status,
      });
    }
    return res;
  } catch (err) {
    report({
      type: "httpError",
      url: input,
      message: err.message,
    });
    throw err;
  }
}

// ---- 性能指标 ----
if ("PerformanceObserver" in window) {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === "largest-contentful-paint") {
        report({
          type: "performance",
          metric: "LCP",
          value: entry.startTime,
        });
        observer.disconnect();
      }
    }
  });
  observer.observe({ type: "largest-contentful-paint", buffered: true });
}
