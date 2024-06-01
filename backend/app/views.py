from django.http import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from .models import Profile
import json


@method_decorator(csrf_exempt, name='dispatch')
class ProfileLoginOrRegisterView(View):
    def post(self, request):
        data = json.loads(request.body)
        if Profile.objects.filter(user_address=data['user_address']).exists():
            return JsonResponse({'user_address': data['user_address'], 'message': 'Profile already exists'}, status=200)

        if not data.get('user_address'):
            return JsonResponse({'error': 'User address is required'}, status=400)

        name = data.get('name', None)
        bio = data.get('bio', None)

        profile = Profile.objects.create(
            user_address=data['user_address'],
            name=name,
            bio=bio
        )
        return JsonResponse({'user_address': profile.user_address, 'message': 'Profile created successfully'}, status=201)


@method_decorator(csrf_exempt, name='dispatch')
class ProfileUpdateView(View):
    def put(self, request, user_address):
        data = json.loads(request.body)
        try:
            profile = Profile.objects.get(pk=user_address)
        except Profile.DoesNotExist:
            return JsonResponse({'error': 'Profile not found'}, status=404)

        profile.name = data.get('name', profile.name)
        profile.bio = data.get('bio', profile.bio)
        profile.save()

        return JsonResponse({'user_address': profile.user_address, 'message': 'Profile updated successfully'})
