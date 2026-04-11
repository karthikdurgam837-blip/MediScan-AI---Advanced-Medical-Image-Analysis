export const PYTHON_TRAINING_CODE = `
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, Dropout
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import matplotlib.pyplot as plt
import os

# 1. Setup Data Generators (Augmentation)
train_datagen = ImageDataGenerator(
    rescale=1./255,
    rotation_range=20,
    width_shift_range=0.2,
    height_shift_range=0.2,
    shear_range=0.2,
    zoom_range=0.2,
    horizontal_flip=True,
    fill_mode='nearest'
)

# 2. Build the CNN Model
def build_model():
    model = Sequential([
        # Convolutional Block 1
        Conv2D(32, (3, 3), activation='relu', input_shape=(224, 224, 3)),
        MaxPooling2D(2, 2),
        
        # Convolutional Block 2
        Conv2D(64, (3, 3), activation='relu'),
        MaxPooling2D(2, 2),
        
        # Convolutional Block 3
        Conv2D(128, (3, 3), activation='relu'),
        MaxPooling2D(2, 2),
        
        # Flatten and Dense Layers
        Flatten(),
        Dense(512, activation='relu'),
        Dropout(0.5),
        Dense(1, activation='sigmoid') # Binary classification: Normal vs Pneumonia
    ])
    
    model.compile(
        optimizer='adam',
        loss='binary_crossentropy',
        metrics=['accuracy']
    )
    return model

# 3. Training Logic (Simplified)
# In a real scenario, you would point to your dataset directory
# model = build_model()
# history = model.fit(train_generator, epochs=25, validation_data=val_generator)

print("Model architecture built successfully.")
`;

export const PROJECT_README = `
# AI-Powered Medical Image Analysis System

## Overview
This project demonstrates an end-to-end AI system for medical image diagnostics. It uses Deep Learning (CNNs) to classify medical images and a modern web interface for real-time analysis.

## Tech Stack
- **AI/ML**: Python, TensorFlow, Keras, OpenCV
- **Frontend**: React, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express
- **LLM**: Google Gemini (for advanced vision analysis)

## Key Features
- Real-time X-ray/MRI analysis
- Automated report generation
- Interactive dashboard for radiologists
- Data augmentation for robust training
`;
