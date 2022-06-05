import PIL.Image as Image
import io
import base64
from checking import byte
b=base64.b64decode(byte)

Im=Image.open(io.BytesIO(b))
Im.save('sujan.jpg')