
from flask import Flask, request,json,jsonify
from flask_cors import CORS
import json
import verify
import urllib.request
from retry import retry
app = Flask(__name__)
CORS(app)

@retry(urllib.error.URLError, tries=4)
@app.route('/detect', methods=['POST', 'GET'])
def api():
    test1='testing'
    test2="test"
    img1=request.json['imgurl1']
    img2=request.json['imgurl2']
    
    filename2="%s.jpg" % test2
    urllib.request.urlretrieve(img1, filename2)
    
    filename = "%s.jpg" % test1
    urllib.request.urlretrieve(img2, filename)
    fact=verify.rec()
    if (fact== True):
        return  json.dumps(True)
    else:
        return  json.dumps(False)

    
            
   
  


	







if __name__ == '__main__':
	app.run()