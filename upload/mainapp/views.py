from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from .models import Upload
from django.http import HttpResponse
from django.core import serializers

# Create your views here.
@csrf_exempt
def upload(request):
    if request.method == 'POST':
        Upload.objects.create(upload_file=request.FILES['file'])
    return HttpResponse('<h1>hello</h1>')

def view(request):
    data = serializers.serialize('json',Upload.objects.all())
    return HttpResponse(data)

def delete(request,pk):
    Upload.objects.get(id=pk).delete()
    return HttpResponse(pk)

