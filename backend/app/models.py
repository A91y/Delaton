from django.db import models


class Blog(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    author = models.ForeignKey('Profile', on_delete=models.CASCADE)
    liked_by = models.ManyToManyField(
        'Profile', related_name='liked_blogs', blank=True)

    class Meta:
        verbose_name = "Blog"
        verbose_name_plural = "Blogs"
        ordering = ['title']

    def __str__(self):
        return self.title


class Profile(models.Model):
    user_address = models.CharField(max_length=42, primary_key=True)
    name = models.CharField(max_length=200, blank=True, null=True)
    bio = models.TextField(blank=True, null=True)
    spent_tokens = models.IntegerField(default=0)
    unspent_tokens = models.IntegerField(default=0)

    class Meta:
        verbose_name = "Profile"
        verbose_name_plural = "Profiles"
        ordering = ['name', 'user_address']

    def __str__(self):
        return f"{self.user_address} - {self.name}"


class Comment(models.Model):
    blog = models.ForeignKey('Blog', on_delete=models.CASCADE)
    author = models.ForeignKey('Profile', on_delete=models.CASCADE)
    content = models.TextField()

    class Meta:
        verbose_name = "Comment"
        verbose_name_plural = "Comments"
        ordering = ['blog', 'author']

    def __str__(self):
        return f"{self.author} - {self.content}"
