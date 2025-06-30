from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")
print("API Key loaded:", api_key is not None)
genai.configure(api_key=api_key)

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Backend is running"

@app.route("/test")
def test():
    return "Test route is working"

# Support both /analyze and /analyze/ for POST
@app.route("/analyze", methods=["POST"])
@app.route("/analyze/", methods=["POST"])
def analyze_image():
    if "image" not in request.files:
        print("No image uploaded")
        return jsonify({"error": "No image uploaded"}), 400

    image_file = request.files["image"]
    print(f"Received image filename: {image_file.filename}")

    image_data = image_file.read()
    print(f"Image data length: {len(image_data)} bytes")

    # Use updated model name
    model = genai.GenerativeModel("gemini-1.5-flash")

    prompt = """
    You are a plant disease expert.
    Analyze the image and give a short, clear answer:
    🌱 Plant: ...
    🦠 Disease: ...
    💊 Treatment: ...
    🌿 Fertilizer: ...
    Keep it under 6 lines.
    """

    try:
        response = model.generate_content([
            prompt,
            {"mime_type": "image/jpeg", "data": image_data}
        ])
        print(f"Model response: {response.text}")
        return jsonify({"result": response.text})
    except Exception as e:
        print(f"Error during model generate_content: {e}")
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    # listen on all interfaces, port 5000
    app.run(host="0.0.0.0", port=5000, debug=True)
