from django.shortcuts import render

# Create your views here.
import json
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.decorators.http import require_POST
import vonage
client = vonage.Client(key="64520c27", secret="C88nZWO1xe6Gyat2")  ### Remove Key & Secret Before Pushing to GitHub
sms = vonage.Sms(client)



@require_POST
def login_view(request):
    data = json.loads(request.body)
    username = data.get("username")  #data['username'] 
    password = data.get("password")  #data['password'] 

    if username is None or password is None:
        return JsonResponse({'detail':"Please Provide Username and password"}) #,'success': False}
    user = authenticate(username=username, password=password)  #request, username=username, password=password
    if user is None:
        return JsonResponse({"detail":"invalid Credentials"}, status=400)
    
    # if user is not None:
    login(request, user)
    return JsonResponse({"detail":"Succesfully logged in"})#,'success': True ,detail
    #return JsonResponse({'success': False})

def logout_view(request):
    if not request.user.is_authenticated:
        return JsonResponse({"detail":"You are not logged in!"},status = 400)
    logout(request)
    return JsonResponse({"detail":"Succesfully logged out!"})


@ensure_csrf_cookie
def session_view(request):
    if not request.user.is_authenticated:
        return JsonResponse({"isauthenticated":False})
    return JsonResponse({"isauthenticated":True})

def whoami_view(request):
    if not request.user.is_authenticated:
        return JsonResponse({"isauthenticated":False})
    return JsonResponse({"username":request.user.username})


def form_fill(request):
    data = json.loads(request.body)
    form_name = data.get("formname")
    if form_name is None:
        return JsonResponse({"detail":"Please provide form name"}, status=400)
    waste_type = data.get("waste_type")
    First_name = data.get("firstName")
    Last_name = data.get("lastName")
    phone = data.get("contactNumber")
    text = f"{First_name} {Last_name}, your enquiry for {form_name} {waste_type} has been recieved and will be processed soon. Thank you for contacting us. "
    responseData = sms.send_message(
    {
        "from": "Vonage APIs",
        "to": phone,
        "text": text,
    }
    )

    if responseData["messages"][0]["status"] == "0":
        print("Message sent successfully.")
    else:
        print(f"Message failed with error: {responseData['messages'][0]['error-text']}")
    return JsonResponse({'success': True})

def home(request):
    return render(request, 'home.html')

# formname: "E-Waste",
    #   firstName: "",
    #   lastName: "",
    #   eWasteType: "",
    #   productAge: "",
    #   contactNumber: "",
    #   addressLine1: "",
    #   addressLine2: "",
    #   pincode: ""