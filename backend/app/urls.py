from django.urls import path
from .views import profile, blogs

urlpatterns = [
    path('profile/sign/', profile.ProfileLoginOrRegisterView.as_view(),
         name='profile-sign'),
    path('profile/<str:user_address>/update/',
         profile.ProfileUpdateView.as_view(), name='profile-update'),
]

urlpatterns += [
    path('blogs/create/', blogs.BlogCreateView.as_view(), name='blog-create'),
    path('blogs/<int:pk>/update/',
         blogs.BlogUpdateView.as_view(), name='blog-update'),
    path('blogs/<int:pk>/delete/',
         blogs.BlogDeleteView.as_view(), name='blog-delete'),
    path('blogs/', blogs.BlogListView.as_view(), name='blog-list'),
    path('blogs/<int:pk>/', blogs.BlogDetailView.as_view(), name='blog-detail'),
    path('blogs/<int:pk>/like/', blogs.BlogLikeView.as_view(), name='blog-like'),
    path('blogs/<int:pk>/comment/add/',
         blogs.CommentCreateView.as_view(), name='blog-comment-create'),
    path('blogs/<int:pk>/comments/',
         blogs.CommentListView.as_view(), name='blog-comment-list'),
    path('blogs/comments/<int:pk>/delete/',
         blogs.CommentDeleteView.as_view(), name='blog-comment-delete'),
    path('blogs/comments/<int:pk>/update/',
         blogs.CommentUpdateView.as_view(), name='blog-comment-update'),
]
