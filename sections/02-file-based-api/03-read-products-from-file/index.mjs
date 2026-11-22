import http from "node:http";
import { readFile } from "node:fs/promises";

const PORT = 3001;
const productsFileUrl = new URL("./data/products.json", import.meta.url);

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
  });

  res.end(JSON.stringify(data));
}

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/") {
    sendJson(res, 200, {
      success: true,
      message: "Product API is running",
    });
    return;
  }

  if (method === "GET" && url === "/products") {
    try {
      const fileContents = await readFile(productsFileUrl, "utf-8");
      const products = JSON.parse(fileContents);

      sendJson(res, 200, {
        success: true,
        data: products,
      });
    } catch (error) {
      console.error("Failed to read products file:", error);

      sendJson(res, 500, {
        success: false,
        message: "Could not load products",
      });
    }

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
