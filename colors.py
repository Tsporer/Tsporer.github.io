from PIL import Image

# Load the image
image_path = "black_duck_cleaned.png"  # Replace with your image path
img = Image.open(image_path).convert("RGB")  # Ensure it's in RGB mode

# Get dimensions
width, height = img.size

new_img = Image.new("RGB", (width, height))

# Loop through each pixel
for y in range(height):
    for x in range(width):
        r, g, b = img.getpixel((x, y))
        print(f"Pixel at ({x}, {y}): R={r}, G={g}, B={b}")
        if r == 255:
            new_img.putpixel((x, y), (0, 0, 0))


new_img.save("scripted.png")