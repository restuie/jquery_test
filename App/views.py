# Create your views here.
from django.shortcuts import render, redirect

# imported our models
from django.core.paginator import Paginator


def jquery8_2(request):
    return render(request,"jquery8-2.html")

def jquery8_3(request):
    return render(request,"jquery8-3.html")