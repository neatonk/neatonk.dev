import * as fs from "fs";
import * as path from "path";
import { componentTemplate } from "./component-template";

const SVG_PATH = path.join(__dirname, "..", "kn.svg");
const OUTPUT_PATH = path.join(__dirname, "..", "index.tsx");

function generateComponent() {
  // Read SVG content
  const svgContent = fs.readFileSync(SVG_PATH, "utf-8");

  // Extract path data
  const pathMatch = svgContent.match(/d="([^"]+)"/);
  if (!pathMatch) {
    throw new Error("No path data found in SVG");
  }
  const pathData = pathMatch[1];

  // Generate component
  const componentContent = componentTemplate(pathData);

  // Write component file
  fs.writeFileSync(OUTPUT_PATH, componentContent);

  console.log("✓ React component generated successfully");
}

// Check if watch mode is enabled
const isWatchMode = process.argv.includes("--watch");

if (isWatchMode) {
  console.log("Watching for changes...");
  fs.watch(SVG_PATH, (eventType) => {
    if (eventType === "change") {
      console.log("SVG file changed, regenerating component...");
      generateComponent();
    }
  });
} else {
  generateComponent();
}
