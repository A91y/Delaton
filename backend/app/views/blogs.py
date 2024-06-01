from django.http import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from ..models import Blog, Profile, Comment
import json


@method_decorator(csrf_exempt, name='dispatch')
class BlogCreateView(View):
    def post(self, request):
        data = json.loads(request.body)
        author_address = data.get('author_address', None)

        if not author_address:
            return JsonResponse({'error': 'Author address parameter is missing'}, status=400)

        try:
            author = Profile.objects.get(pk=author_address)
        except Profile.DoesNotExist:
            return JsonResponse({'error': 'Author not found'}, status=404)

        blog = Blog.objects.create(
            title=data['title'],
            content=data['content'],
            author=author
        )
        return JsonResponse({'id': blog.id, 'message': 'Blog created successfully'})


@method_decorator(csrf_exempt, name='dispatch')
class BlogUpdateView(View):
    def put(self, request, pk):
        data = json.loads(request.body)
        author_address = data.get('author_address', None)

        try:
            author = Profile.objects.get(pk=author_address)
        except Profile.DoesNotExist:
            return JsonResponse({'error': 'Author not found'}, status=404)

        try:
            blog = Blog.objects.get(pk=pk)
        except Blog.DoesNotExist:
            return JsonResponse({'error': 'Blog not found'}, status=404)

        if blog.author != author:
            return JsonResponse({'error': 'You are not the author of this blog'}, status=403)

        blog.title = data['title']
        blog.content = data['content']
        blog.save()
        return JsonResponse({'message': 'Blog updated successfully'})


@method_decorator(csrf_exempt, name='dispatch')
class BlogDeleteView(View):
    def delete(self, request, pk):
        data = json.loads(request.body)
        author_address = data.get('author_address', None)

        try:
            author = Profile.objects.get(pk=author_address)
        except Profile.DoesNotExist:
            return JsonResponse({'error': 'Author not found'}, status=404)

        try:
            blog = Blog.objects.get(pk=pk)
        except Blog.DoesNotExist:
            return JsonResponse({'error': 'Blog not found'}, status=404)

        if blog.author != author:
            return JsonResponse({'error': 'You are not the author of this blog'}, status=403)

        blog.delete()
        return JsonResponse({'message': 'Blog deleted successfully'})


class BlogListView(View):
    def get(self, request):
        data = json.loads(request.body)
        author_address = data.get('author_address', None)
        blogs = Blog.objects.all()
        liked_by = []
        # for blog in blogs:
        #     for author in blog.liked_by.all():
        #         liked_by.append(author.user_address)
        data = [{'id': blog.id, 'title': blog.title, 'content': blog.content,
                 'author': blog.author.user_address, 'liked_by': [author.user_address for author in blog.liked_by.all()]} for blog in blogs]
        return JsonResponse(data, safe=False)


class BlogDetailView(View):
    def get(self, request, pk):
        try:
            blog = Blog.objects.get(pk=pk)
        except Blog.DoesNotExist:
            return JsonResponse({'error': 'Blog not found'}, status=404)

        data = {'id': blog.id, 'title': blog.title,
                'content': blog.content, 'author': blog.author.user_address, 'liked_by': [author.user_address for author in blog.liked_by.all()]}
        return JsonResponse(data)


@method_decorator(csrf_exempt, name='dispatch')
class BlogLikeView(View):
    @method_decorator(csrf_exempt)
    def post(self, request, pk):
        data = json.loads(request.body)
        author_address = data.get('author_address', None)
        try:
            author = Profile.objects.get(pk=author_address)
        except Profile.DoesNotExist:
            return JsonResponse({'error': 'Author not found'}, status=404)

        try:
            blog = Blog.objects.get(pk=pk)
        except Blog.DoesNotExist:
            return JsonResponse({'error': 'Blog not found'}, status=404)

        if author in blog.liked_by.all():
            blog.liked_by.remove(author)
            action = 'unliked'
        else:
            blog.liked_by.add(author)
            action = 'liked'

        blog.save()
        return JsonResponse({'message': f'Blog {action} successfully'})


@method_decorator(csrf_exempt, name='dispatch')
class CommentCreateView(View):
    def post(self, request, pk):
        data = json.loads(request.body)
        author_address = data.get('author_address', None)

        try:
            author = Profile.objects.get(pk=author_address)
        except Profile.DoesNotExist:
            return JsonResponse({'error': 'Author not found'}, status=404)

        try:
            blog = Blog.objects.get(pk=pk)
        except Blog.DoesNotExist:
            return JsonResponse({'error': 'Blog not found'}, status=404)

        comment = Comment.objects.create(
            blog=blog,
            author=author,
            content=data['content']
        )
        return JsonResponse({'id': comment.id, 'message': 'Comment added successfully'})


@method_decorator(csrf_exempt, name='dispatch')
class CommentUpdateView(View):
    def put(self, request, pk, comment_id):
        data = json.loads(request.body)
        author_address = data.get('author_address', None)

        try:
            author = Profile.objects.get(pk=author_address)
        except Profile.DoesNotExist:
            return JsonResponse({'error': 'Author not found'}, status=404)

        try:
            comment = Comment.objects.get(pk=comment_id)
        except Comment.DoesNotExist:
            return JsonResponse({'error': 'Comment not found'}, status=404)

        if comment.author != author:
            return JsonResponse({'error': 'You are not the author of this comment'}, status=403)

        comment.content = data['content']
        comment.save()
        return JsonResponse({'message': 'Comment updated successfully'})


@method_decorator(csrf_exempt, name='dispatch')
class CommentDeleteView(View):
    def delete(self, request, pk, comment_id):
        data = json.loads(request.body)
        author_address = data.get('author_address', None)
        try:
            author = Profile.objects.get(pk=author_address)
        except Profile.DoesNotExist:
            return JsonResponse({'error': 'Author not found'}, status=404)

        try:
            comment = Comment.objects.get(pk=comment_id)
        except Comment.DoesNotExist:
            return JsonResponse({'error': 'Comment not found'}, status=404)

        if comment.author != author:
            return JsonResponse({'error': 'You are not the author of this comment'}, status=403)

        comment.delete()
        return JsonResponse({'message': 'Comment deleted successfully'})


class CommentListView(View):
    def get(self, request, pk):
        try:
            blog = Blog.objects.get(pk=pk)
        except Blog.DoesNotExist:
            return JsonResponse({'error': 'Blog not found'}, status=404)

        comments = Comment.objects.filter(blog=blog)
        data = [{'id': comment.id, 'content': comment.content,
                 'author': comment.author.user_address} for comment in comments]
        return JsonResponse(data, safe=False)
