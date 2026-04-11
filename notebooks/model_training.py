import os
import cv2
import matplotlib.pyplot as plt
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, Dropout
from tensorflow.keras.preprocessing.image import ImageDataGenerator

# --- 1. Data Loading & Preview ---
def load_and_preview(image_path):
    """Loads a sample medical image and displays it."""
    image = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    plt.imshow(image, cmap='gray')
    plt.title("Sample X-Ray Image")
    plt.show()

# --- 2. Data Preprocessing ---
# Define Image Data Generator for Augmentation
# This helps the model generalize better by creating variations of the training data
datagen = ImageDataGenerator(
    rescale=1./255, 
    rotation_range=10,
    width_shift_range=0.1, 
    height_shift_range=0.1, 
    shear_range=0.1, 
    zoom_range=0.1,
    horizontal_flip=True
)

# --- 3. Model Architecture ---
def create_medical_cnn(input_shape=(256, 256, 1)):
    """Creates a CNN model for medical image classification."""
    model = Sequential([
        Conv2D(32, (3,3), activation='relu', input_shape=input_shape),
        MaxPooling2D(pool_size=(2,2)),
        
        Conv2D(64, (3,3), activation='relu'),
        MaxPooling2D(pool_size=(2,2)),
        
        Conv2D(128, (3,3), activation='relu'),
        MaxPooling2D(pool_size=(2,2)),
        
        Flatten(),
        Dense(128, activation='relu'),
        Dropout(0.5),
        Dense(1, activation='sigmoid') # Binary: Normal vs Pneumonia
    ])
    
    model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
    return model

if __name__ == "__main__":
    print("Initializing Medical AI Pipeline...")
    model = create_medical_cnn()
    model.summary()
    print("Pipeline ready for training.")
