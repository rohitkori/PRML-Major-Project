from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Audio
from .serializers import AudioSerializer
from joblib import load

import librosa
import soundfile
import os, glob, pickle
import numpy as np

scaler = load('./scaler.joblib')
svm = load('./svm.joblib')


# Create your views here.

class AudioViewSet(viewsets.ModelViewSet):
    queryset = Audio.objects.all()
    serializer_class = AudioSerializer

class Predict(APIView):
    queryset = Audio.objects.all()
    serializer_class = AudioSerializer

    def post(self,request):
        audio = request.data['audio_file']

        signal, sample_rate = librosa.load(audio)
        # Extract MFCC features
        feature_info = librosa.feature.mfcc(y=signal, sr=sample_rate)
        feature_info = np.mean(feature_info.T, axis=0)
        data = scaler.transform(feature_info.reshape(1,-1))

        return Response({'output':svm.predict(data)})
    
