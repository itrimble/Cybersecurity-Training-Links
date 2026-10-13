#!/usr/bin/env python3
"""
AI Image Generator for Cybersecurity Career Roadmap PDF
========================================================
Uses Google Gemini to generate professional cybersecurity illustrations.

Setup:
1. Set GEMINI_API_KEY environment variable
2. Run: python3 generate-ai-images.py

Requires: pip install google-genai Pillow
"""

import os
import sys
from pathlib import Path

# Try new package first, fall back to deprecated
try:
    from google import genai
    USE_NEW_API = True
except ImportError:
    try:
        import google.generativeai as genai
        USE_NEW_API = False
    except ImportError:
        print("Error: Install google-genai or google-generativeai")
        print("  pip install google-genai Pillow")
        sys.exit(1)

from PIL import Image
import io


# Image prompts for the PDF
PROMPTS = {
    "cover-illustration": """
        Professional cybersecurity illustration for a career guide cover.
        Dark blue gradient background (#0a1628 to #1a2d4a).
        Central glowing cyan shield with circuit patterns.
        Abstract neural network connections in cyan and amber.
        Modern, sleek, minimalist tech aesthetic.
        No text, suitable for print at 300 DPI.
        4:3 aspect ratio.
    """,

    "section-ai-security": """
        Abstract AI security concept illustration.
        Robot head with cybersecurity shield overlay.
        Neural network patterns in cyan (#00ffcc) glow.
        Dark tech background with subtle grid.
        Professional, modern, minimalist.
        No text, 1:1 square format.
    """,

    "section-cloud": """
        Cloud security abstract illustration.
        Stylized cloud with lock/shield integration.
        Connected nodes representing multi-cloud.
        Cyan and amber accent colors on dark background.
        Professional tech aesthetic, no text.
        1:1 square format.
    """,

    "section-career-path": """
        Career progression abstract illustration.
        Ascending stairs or pathway motif.
        Digital/cyber aesthetic with glowing lines.
        Silhouette of professional climbing up.
        Cyan highlights on dark background.
        No text, 16:9 wide format.
    """
}


def setup_client():
    """Initialize the Gemini client with API key."""
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("Error: GEMINI_API_KEY environment variable not set")
        print("\nTo set it:")
        print("  export GEMINI_API_KEY='your-api-key-here'")
        print("\nGet an API key at: https://aistudio.google.com/apikey")
        sys.exit(1)

    if USE_NEW_API:
        client = genai.Client(api_key=api_key)
        return client
    else:
        genai.configure(api_key=api_key)
        return genai


def generate_image(client, prompt: str, output_path: str):
    """Generate an image using Gemini native image generation."""
    print(f"Generating: {output_path}")

    try:
        if USE_NEW_API:
            from google.genai import types

            # Use Gemini 2.5 Flash Image model for native image generation
            response = client.models.generate_content(
                model='gemini-2.5-flash-image',
                contents=f"Generate an image: {prompt.strip()}",
                config=types.GenerateContentConfig(
                    response_modalities=['IMAGE', 'TEXT'],
                )
            )

            # Extract image from response
            for part in response.candidates[0].content.parts:
                if hasattr(part, 'inline_data') and part.inline_data:
                    image_data = part.inline_data.data
                    img = Image.open(io.BytesIO(image_data))
                    img.save(output_path)
                    print(f"  Saved: {output_path}")
                    return True

            print(f"  No image in response for {output_path}")
            return False
        else:
            # Deprecated google-generativeai API
            model = client.GenerativeModel('gemini-2.0-flash-exp')
            response = model.generate_content(
                prompt.strip(),
                generation_config={
                    "response_mime_type": "image/png"
                }
            )

            # Save the image
            if response.candidates:
                image_data = response.candidates[0].content.parts[0].inline_data.data
                img = Image.open(io.BytesIO(image_data))
                img.save(output_path)
                print(f"  Saved: {output_path}")

    except Exception as e:
        print(f"  Error generating {output_path}: {e}")
        return False

    return True


def main():
    """Generate all AI images for the PDF."""
    output_dir = Path(__file__).parent.parent

    print("=" * 60)
    print("Cybersecurity Career Roadmap - AI Image Generator")
    print("=" * 60)

    client = setup_client()

    success_count = 0
    for name, prompt in PROMPTS.items():
        output_path = output_dir / f"{name}.png"
        if generate_image(client, prompt, str(output_path)):
            success_count += 1

    print("\n" + "=" * 60)
    print(f"Generated {success_count}/{len(PROMPTS)} images")
    print("=" * 60)


if __name__ == "__main__":
    main()
