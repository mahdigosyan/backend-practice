import http from "node:http";
import { readFile } from "node:fs/promises";

const PORT = 3001;
const productsFileUrl = new URL("./data/products.json", import.meta.url);

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload));
}

async function getProducts() {
  const fileContents = await readFile(productsFileUrl, "utf-8");
  return JSON.parse(fileContents);
}

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/") {
    sendJson(res, 200, {
      success: true,
      message: "Welcome to Product API (Part 04 - Get by ID)",
    });
    return;
  }

  if (method === "GET" && url === "/products") {
    try {
      const products = await getProducts();
      sendJson(res, 200, {
        success: true,
        count: products.length,
        data: products,
      });
    } catch (error) {
      console.error("Error loading products:", error);
      sendJson(res, 500, { success: false, message: "Could not load products" });
    }
    return;
  }

  if (method === "GET" && url.startsWith("/products/")) {
    const parts = url.split("/"); // ['', 'products', '1']
    const idParam = parts[2];
    const productId = Number(idParam);

    if (Number.isNaN(productId)) {
      sendJson(res, 400, {
        success: false,
        message: "Invalid product ID. ID must be a number.",
      });
      return;
    }

    try {
      const products = await getProducts();
      const product = products.find((item) => item.id === productId);

      if (!product) {
        sendJson(res, 404, {
          success: false,
          message: `Product with ID ${productId} not found.`,
        });
        return;
      }

      sendJson(res, 200, {
        success: true,
        data: product,
      });
    } catch (error) {
      console.error("Error finding product:", error);
      sendJson(res, 500, { success: false, message: "Server error" });
    }
    return;
  }

  sendJson(res, 404, {
    success: false,
    message: "Route not found",
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
