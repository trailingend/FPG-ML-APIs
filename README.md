# FPG-ML-APIs
First Image Recognition API Testout with Clarifai and Google Vision

###Clarifai###
JS based api connection

Install Dependency
```
	npm install
```

Run the app locally
```
	npm run dev
```

Listen at
```
	http://localhost:8080
```

Go Production, in dist folder
```
	npm run build
```

###Google Vision###
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
