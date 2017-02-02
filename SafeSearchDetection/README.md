Forked from Google Cloud Vision API Python Samples

Authenticate
```
export GOOGLE_APPLICATION_CREDENTIALS=/path/to/service_account.json
```

Setup Environment
Install `pip` and `virtualenv`  
Create a virtualenv. Samples are compatible with Python 2.7 and 3.4+.
virtualenv: https://virtualenv.pypa.io/
```
virtualenv env
source env/bin/activate
```

Install the dependencies needed to run the samples.
```
pip install -r requirements.txt
```

Call the API
```
python safe_search.py PATH_TO_IMAGE
```
