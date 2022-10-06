# from azure.cognitiveservices.vision.customvision.training import CustomVisionTrainingClient
from azure.cognitiveservices.vision.customvision.prediction import CustomVisionPredictionClient
from azure.cognitiveservices.vision.customvision.training.models import ImageFileCreateBatch, ImageFileCreateEntry, Region
from msrest.authentication import ApiKeyCredentials
import os, time, uuid
import matplotlib.pyplot as plt
from PIL import Image, ImageDraw, ImageFont
import numpy as np

def predict_image(img_path):
    # Replace with valid values
    prediction_endpoint = "https://foursknspaihack-prediction.cognitiveservices.azure.com/"
    # training_key = "5f84e1195ead47cd920e88d09984e7ef"
    prediction_key = "fcdd642e9cf94df885f770f60ba51959"
    # prediction_resource_id = "/subscriptions/9bd23583-8d4c-4886-9aa8-d0cd3172afb0/resourceGroups/4SKN_SPAI_Hackathon/providers/Microsoft.CognitiveServices/accounts/foursknspaihack-Prediction"
    ProjectID = "3e23020a-2da5-495a-83bf-b48b4645ff81"
    ModelName = "Iteration3"

    # credentials = ApiKeyCredentials(in_headers={"Training-key": training_key})
    credentials = ApiKeyCredentials(in_headers={"Prediction-key": prediction_key})
    prediction_client = CustomVisionPredictionClient(endpoint=prediction_endpoint, credentials=credentials)

    image_file = os.path.abspath(img_path)
    print('Detecting objects in image: ' + image_file)
    
    with open(image_file, mode="rb") as image_data:
        results = prediction_client.detect_image(ProjectID, ModelName, image_data)

    for prediction in results.predictions: 
        if (prediction.probability*100) > 50:
            print(prediction.tag_name + ": {0:.2f}%".format(prediction.probability * 100))


predict_image('./test_cv/photo/can.jpg')