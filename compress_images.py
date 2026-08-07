from PIL import Image
import os

def compress_image(input_path, output_path, max_width=1200, quality=85):
    """Compress an image: resize and optimize."""
    try:
        img = Image.open(input_path)
        # Get original dimensions
        orig_w, orig_h = img.size
        orig_size = os.path.getsize(input_path)
        
        # Resize if larger than max_width
        if orig_w > max_width:
            ratio = max_width / float(orig_w)
            new_h = int((float(orig_h) * float(ratio)))
            new_size = (max_width, new_h)
            img = img.resize(new_size, Image.LANCZOS)
        
        # Convert RGBA/P to RGB for JPEG
        ext = os.path.splitext(output_path)[1].lower()
        
        if ext in ['.jpg', '.jpeg']:
            if img.mode in ('RGBA', 'P'):
                # Create white background for transparency
                bg = Image.new('RGB', img.size, (255, 255, 255))
                bg.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
                img = bg
            img.save(output_path, 'JPEG', quality=quality, optimize=True)
        elif ext == '.png':
            # For PNG, optimize
            if img.mode in ('RGBA', 'P'):
                img.save(output_path, 'PNG', optimize=True, compress_level=9)
            else:
                # Convert to JPEG if not transparent
                base = os.path.splitext(output_path)[0]
                jpg_path = base + '.jpg'
                img.save(jpg_path, 'JPEG', quality=quality, optimize=True)
                # Remove original PNG if JPEG created
                if os.path.exists(jpg_path) and os.path.exists(output_path):
                    os.remove(output_path)
                    output_path = jpg_path
        
        new_size = os.path.getsize(output_path)
        print(f"  {os.path.basename(input_path)}: {orig_size//1024}KB -> {new_size//1024}KB")
        return output_path
    except Exception as e:
        print(f"  ERROR on {input_path}: {e}")
        return input_path

# Process all images
folders = ['Images', 'Images/Projects']
total_orig = 0
total_new = 0

for folder in folders:
    if not os.path.exists(folder):
        continue
    for filename in os.listdir(folder):
        filepath = os.path.join(folder, filename)
        if not os.path.isfile(filepath):
            continue
        ext = os.path.splitext(filename)[1].lower()
        if ext in ['.jpg', '.jpeg', '.png', '.gif']:
            total_orig += os.path.getsize(filepath)
            new_path = compress_image(filepath, filepath)
            total_new += os.path.getsize(new_path)

print(f"\nTotal: {total_orig//1024}KB -> {total_new//1024}KB (saved {(total_orig-total_new)//1024}KB)")
