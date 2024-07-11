import { createServer } from "node:http";
import { readFile } from "node:fs/promises";

const PORT = 3000;
const getPageForUrl = (url) => {
  switch (url) {
    case "/": {
      return "index.html";
    }
    case "/about": {
      return "about.html";
    }
    case "/contact-me": {
      return "contact-me.html";
    }
    default: {
      return "404.html";
    }
  }
};

const server = createServer(async (req, res) => {
  const page = getPageForUrl(req.url);
  console.log(req.url);
  const pageAsData = await readFile(page);
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(pageAsData);
  res.end();
});

server.listen(PORT, "localhost", () => {
  console.log("Server listening on " + PORT);
});
