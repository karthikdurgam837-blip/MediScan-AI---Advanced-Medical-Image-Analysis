# System Architecture

## 1. Data Flow
1. **User Upload**: User selects a medical image via the React frontend.
2. **Preprocessing**: The image is converted to a base64 string and validated for size/type.
3. **API Request**: The frontend sends the image to the Gemini Vision API (or a custom backend).
4. **AI Processing**:
   - The Vision model extracts visual features (textures, shapes, densities).
   - The LLM interprets these features based on medical knowledge.
5. **Response**: A structured Markdown report is returned to the frontend.
6. **Visualization**: The report is rendered using `react-markdown` with highlighted findings.

## 2. ML Pipeline (Python)
For the custom model training:
- **Input**: Grayscale or RGB medical images.
- **Augmentation**: Random rotations, flips, and zooms to prevent overfitting.
- **Model**: CNN with 3-4 convolutional blocks followed by dense layers.
- **Loss Function**: Binary Crossentropy (for Normal vs Disease).
- **Optimizer**: Adam.

## 3. Security & Privacy
- Images are processed in-memory and not stored permanently in this simulation.
- In a real-world scenario, HIPAA compliance would require encryption at rest and in transit.
