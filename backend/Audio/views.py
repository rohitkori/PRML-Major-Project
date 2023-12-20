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
# ann = load('./ann_final.joblib')

# Create your views here.

class AudioViewSet(viewsets.ModelViewSet):
    queryset = Audio.objects.all()
    serializer_class = AudioSerializer

class Predict(APIView):
    queryset = Audio.objects.all()
    serializer_class = AudioSerializer

    def post(self,request):
        audio = request.data['audio_file']
        map = {1 : 'neutral', 2 : 'calm', 3 : 'happy', 4 : 'sad', 5 : 'angry', 6 : 'fearful', 7 : 'disgust', 8 : 'surprised'}
        # map  = {'neutral' : 1 , 'calm' : 2 , 'happy' : 3 , 'sad' : 4 , 'angry' : 5,  'fearful' : 6 ,  'disgust' : 7 , 'surprised' : 8 }
        signal, sample_rate = librosa.load(audio)
        # Extract MFCC features
        feature_info = librosa.feature.mfcc(y=signal, sr=sample_rate)
        feature_info = np.mean(feature_info.T, axis=0)
        data = scaler.transform(feature_info.reshape(1,-1))
        # a = ann.predict(data)
        # print(a)
        output = svm.predict(data)
        return Response({'output':map[output[0]]})
        # return Response({'output':svm.predict(data)})
    
