#!/usr/bin/env python3
"""Convert all PNG images to WebP format for optimization"""

import os
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("Installing Pillow...")
    os.system("pip3 install --quiet Pillow")
    from PIL import Image

def convert_png_to_webp(png_path):
    """Convert a single PNG to WebP"""
    webp_path = png_path.with_suffix('.webp')
    
    try:
        with Image.open(png_path) as img:
            # Convert to RGB if necessary (WebP doesn't support all modes)
            if img.mode in ('RGBA',  'LA', 'P'):
                # Convert RGBA to RGB with white background
                if img.mode == 'RGBA' or img.mode == 'LA':
                    background = Image.new('RGB', img.size, (255, 255, 255))
                    if img.mode == 'RGBA':
                        background.paste(img, mask=img.split()[3])  # Use alpha channel as mask
                    else:
                        background.paste(img, mask=img.split()[1])
                    img = background
                else:
                    img = img.convert('RGB')
            
            # Save as WebP with high quality
            img.save(webp_path, 'WEBP', quality=85, method=6)
            
        # Get file sizes
        png_size = png_path.stat().st_size / 1024  # KB
        webp_size = webp_path.stat().st_size / 1024  # KB
        savings = ((png_size - webp_size) / png_size) * 100
        
        print(f"✓ {png_path.name}")
        print(f"  PNG: {png_size:.1f}KB → WebP: {webp_size:.1f}KB ({savings:.1f}% savings)")
        
        return True
    except Exception as e:
        print(f"✗ Failed: {png_path.name} - {e}")
        return False

def main():
    images_dir = Path('public/images')
    png_files = list(images_dir.glob('*.png'))
    
    if not png_files:
        print("No PNG files found!")
        return
    
    print(f"Converting {len(png_files)} PNG files to WebP...\n")
    
    successful = 0
    total_png_size = 0
    total_webp_size = 0
    
    for png_file in png_files:
        total_png_size += png_file.stat().st_size
        if convert_png_to_webp(png_file):
            successful += 1
            webp_file = png_file.with_suffix('.webp')
            if webp_file.exists():
                total_webp_size += webp_file.stat().st_size
    
    print(f"\n{'='*60}")
    print(f"Conversion complete!")
    print(f"Successful: {successful}/{len(png_files)}")
    print(f"Total PNG size: {total_png_size/1024/1024:.2f} MB")
    print(f"Total WebP size: {total_webp_size/1024/1024:.2f} MB")
    print(f"Total savings: {((total_png_size - total_webp_size)/total_png_size)*100:.1f}%")
    print(f"Space saved: {(total_png_size - total_webp_size)/1024/1024:.2f} MB")
    print(f"{'='*60}")

if __name__ == '__main__':
    main()
