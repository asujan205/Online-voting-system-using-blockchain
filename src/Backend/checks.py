
import urllib.request
from retry import retry

LINKS = [
    "https://ipfs.io/ipfs/QmRRPWG96cmgTn2qSzjwr2qvfNEuhunv6FNeMFGa9bx6mQ",
    "https://ipfs.io/ipfs/QmPbxeGcXhYQQNgsC6a36dDyYUcHgMLnGKnF8pVFmGsvqi",
    "https://ipfs.io/ipfs/QmcJYkCKK7QPmYWjp4FD2e3Lv5WCGFuHNUByvGKBaytif4",
    "https://ipfs.io/ipfs/QmYxT4LnK8sqLupjbS6eRvu1si7Ly2wFQAqFebxhWntcf6",
    "https://ipfs.io/ipfs/QmSg9bPzW9anFYc3wWU5KnvymwkxQTpmqcRSfYj7UmiBa7",
    "https://ipfs.io/ipfs/QmNwbd7ctEhGpVkP8nZvBBQfiNeFKRdxftJAxxEdkUKLcQ",
    "https://ipfs.io/ipfs/QmWBgfBhyVmHNhBfEQ7p1P4Mpn7pm5b8KgSab2caELnTuV",
    "https://ipfs.io/ipfs/QmRsJLrg27GQ1ZWyrXZFuJFdU5bapfzsyBfm3CAX1V1bw6",
]

@retry(urllib.error.URLError, tries=4)
def download(index, url):
    filename = "%s.png" % index
    urllib.request.urlretrieve(url, filename)

def main():
    for index, link in enumerate(LINKS):
        print(index, link)
        download(index, link)

if __name__ == '__main__':
    main()