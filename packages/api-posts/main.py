import uvicorn
import postgres
from fastapi import FastAPI

app = FastAPI()

posts = [
    {"id": 1, "title": "Post 1", "content": "<h1>This is the first post.</h1>"},
    {"id": 2, "title": "Post 2", "content": "<h1>This is the second post.</h1>"},
    {"id": 3, "title": "Post 3", "content": "<h1>This is the third post.</h1>"},
    {"id": 4, "title": "Post 4", "content": "<h1>This is the fourth post.</h1>"},
]

@app.get("/posts")
def get_posts():
    try:
        result = postgres.postgres_read()
        return result
    except:
        return posts


@app.get("/post/")
def get_post(id: int):
    try:
        result = postgres.postgres_read(id)
        return {
            "res": "OK",
            "data": [result]
        }
    except:
        if id == 0:
            return posts
        for post in posts:
            if post["id"] == id:
                return {
                    "res": "OK",
                    "data": [post]
                }


@app.get("/index")
def get_hp_data():
    headline = "<h1>Welcome</h1>"
    subtitle = "<h3>The best place to share your posts</h3>"
    return {
        "res": "OK",
        "data": {
            "headline": headline,
            "subtitle": subtitle
        }
    }


if __name__ == "__main__":
    postgres.postgres_init()
    uvicorn.run(app, host="0.0.0.0", port=3100)


