var posts=["post/8a81cf60.html","post/95f630a1.html","post/7a5s6x2a.html","post/95f630e6.html","post/6c39bdac.html","post/6bcb6b2a.html","post/10acbf84.html","post/99b2lhg6.html","post/99b27ad4.html","post/7acn6b2a.html","post/566092e4.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };