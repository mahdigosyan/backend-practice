import http from "node:http";

const PORT = 3001;

/**
 * Sends a JSON response to the client.
 *
 * @param {import("node:http").ServerResponse} res
 * @param {number} statusCode
 * @param {object} data
 */

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
  });

  res.end(JSON.stringify(data));
}
const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/") {
    sendJson(res, 200, {
      success: true,
      message: "Product API is running",
    });
    return;
  }

  if (method === "GET" && url === "/products") {
    sendJson(res, 200, {
      success: true,
      data: [],
    });
    return;
  }

  sendJson(res, 404, {
    success: false,
    message: "Route not found",
  });
});

server.listen(PORT, () => {
  console.log(`Product API is running at http://localhost:${PORT}`);
});