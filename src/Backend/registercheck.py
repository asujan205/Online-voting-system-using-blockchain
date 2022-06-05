import face_recognition
import numpy as np

import os
import io
import base64
import cv2
# import ipfs
class Rec():
    def __init__(self, known,unkown):
        self.known = known
        self.unkown= unkown

    def rec(self):
        imgload= face_recognition.load_image_file(f'./images/{self.known}')
        imgload=cv2.cvtColor(imgload,cv2.COLOR_BGR2RGB)
        imgloadtest= face_recognition.load_image_file(self.unkown)
        imgloadtest=cv2.cvtColor(imgloadtest,cv2.COLOR_BGR2RGB)
        faceloc= face_recognition.face_locations(imgload)[0]
        encode_load=face_recognition.face_encodings(imgload)[0]
       
        faceloctest= face_recognition.face_locations(imgloadtest)[0]
        encode_loadtest=face_recognition.face_encodings(imgloadtest)[0]
        results = face_recognition.compare_faces([encode_load],encode_loadtest)

        faceDistance= face_recognition.face_distance([encode_load],encode_loadtest)
        print(faceDistance)
        if(results[0]==True and faceDistance<=0.5):
                return True
        else:
                return False
# face=FaceRec('https://ipfs.io/ipfs/QmYsxRRWTShwDTr1dKTaE4XaqYbcZxg9Kpkwz7mn2SrWti','https://ipfs.io/ipfs/QmbZdKoeJmyHS9hbqBwaFydM3J7WaahnfBTV1VTj5sAGW6')

