#!/usr/bin/env python3
import argparse
from pathlib import Path
import numpy as np
from PIL import Image
from skimage import measure
import svgwrite
import os

def parse_args():
    p = argparse.ArgumentParser(
        description="Convert a bitmap KN sketch into a clean SVG"
    )
    p.add_argument(
        "-i", "--input", type=Path, default=Path("kn.png"),
        help="Path to input image (PNG, JPG, etc.)"
    )
    p.add_argument(
        "-o", "--output", type=Path, default=Path("kn.svg"),
        help="Path to write SVG output"
    )
    p.add_argument(
        "-t", "--threshold", type=int, default=128,
        help="Grayscale threshold (0–255) to binarize"
    )
    p.add_argument(
        "-d", "--decimate", type=int, default=5,
        help="Decimation factor for contour points (higher = simpler)"
    )
    return p.parse_args()

def main():
    args = parse_args()
    
    # Ensure dist directory exists
    os.makedirs(args.output.parent, exist_ok=True)
    
    img = Image.open(args.input).convert("L")
    arr = np.array(img)
    mask = arr < args.threshold
    contours = measure.find_contours(mask.astype(float), 0.5)

    h, w = arr.shape
    dwg = svgwrite.Drawing(str(args.output), size=(w, h))
    dwg.viewbox(0, 0, w, h)

    def contour_to_path(contour):
        pts = contour[::args.decimate]
        cmds = []
        for i, (y, x) in enumerate(pts):
            cmd = "M" if i == 0 else "L"
            cmds.append(f"{cmd}{x:.2f},{y:.2f}")
        cmds.append("Z")
        return " ".join(cmds)

    for contour in contours:
        path = contour_to_path(contour)
        dwg.add(dwg.path(d=path, fill="black", stroke="none"))

    dwg.save()
    print(f"✓ SVG saved to {args.output}")

if __name__ == "__main__":
    main()
