"""Convert project preview images to webp (748x433)."""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
PREVIEW_SIZE = (748, 433)
QUALITY = 82

CONVERSIONS = [
    {
        "src": ROOT / "img/ongles/Capture d'écran 2026-06-01 165850.png",
        "dst": ROOT / "img/ongles/ongles-preview.webp",
    },
    {
        "src": ROOT / "img/portfolios-builders/Capture d'écran 2026-06-01 165912.png",
        "dst": ROOT / "img/portfolios-builders/portfolios-builders-preview.webp",
    },
    {
        "src": ROOT / "img/the-bakery/project-the-bakery.png",
        "dst": ROOT / "img/the-bakery/project-the-bakery.webp",
    },
    {
        "src": ROOT / "img/covoiturage-maui/project-maui-covoiturage.png",
        "dst": ROOT / "img/covoiturage-maui/project-maui-covoiturage.webp",
    },
]


def to_preview(src: Path, dst: Path) -> None:
    img = Image.open(src).convert("RGB")
    img = img.resize(PREVIEW_SIZE, Image.Resampling.LANCZOS)
    dst.parent.mkdir(parents=True, exist_ok=True)
    img.save(dst, "WEBP", quality=QUALITY, method=6)
    print(f"OK  {src.name} -> {dst.relative_to(ROOT)} ({PREVIEW_SIZE[0]}x{PREVIEW_SIZE[1]})")


def main() -> None:
    for item in CONVERSIONS:
        src = item["src"]
        dst = item["dst"]
        if not src.exists():
            print(f"SKIP (missing) {src.relative_to(ROOT)}")
            continue
        to_preview(src, dst)


if __name__ == "__main__":
    main()
