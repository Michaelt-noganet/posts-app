import uvicorn
import postgres
from fastapi import FastAPI

app = FastAPI()

@app.get("/posts")
def get_posts():
    result = postgres.postgres_read()
    return result


@app.get("/post/")
def get_post(id: int):
    result = postgres.postgres_read(id)
    return {
        "res": "OK",
        "data": [result]
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


