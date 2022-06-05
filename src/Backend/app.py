
from flask import Flask, request,json,jsonify
from flask_cors import CORS
import json
from verify import Rec1
import urllib.request
import re
import PIL.Image as Image
import io
import base64
import os
from registercheck import Rec
from retry import retry
import shutil
app = Flask(__name__)
CORS(app)

@retry(urllib.error.URLError, tries=4)
@app.route('/detect', methods=['POST', 'GET'])
def api():
    test1='testing'
    test2="test"
    img1=request.json['imgurl1']
    img2=request.json['imgurl2']
    directory ='./registredImages'
    #shutil.rmtree(directory)
    image_data = re.sub('^data:image/.+;base64,', '', img2)
    b=base64.b64decode(image_data)

    Im=Image.open(io.BytesIO(b))
    Im.save('testing.jpg')
    Im.save(directory+f'/{img1}')
    # filename2="%s.jpg" % test2
    # urllib.request.urlretrieve(img1, filename2)
    
    # filename = "%s.jpg" % test1
    # urllib.request.urlretrieve(img2, filename)
    obj1=Rec(img1,'testing.jpg')
    fact=obj1.rec()
    if (fact== True):
        return  json.dumps(True)
    else:
        return  json.dumps(False)
@app.route('/verify', methods=['POST', 'GET'])
def aps():
   
    img1=request.json['imgurl1']
    img2=request.json['imgurl2']
    image_data = re.sub('^data:image/.+;base64,', '', img2)
    b=base64.b64decode(image_data)

    Im=Image.open(io.BytesIO(b))
    Im.save('testing.jpg')
    
  
    # filename2="%s.jpg" % test2
    # urllib.request.urlretrieve(img1, filename2)
    
    # filename = "%s.jpg" % test1
    # urllib.request.urlretrieve(img2, filename)
    obj1=Rec1(img1,'testing.jpg')
    fact=obj1.rec()
    
    if (fact== True):
        return  json.dumps(True)
    else:
        return  json.dumps(False)


    
            
   
  


	







if __name__ == '__main__':
	app.run()