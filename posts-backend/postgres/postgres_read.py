import psycopg2
from postgres.postgres_config import config


def postgres_read(id: int = 0):
    try:
        print('Connecting to the PostgreSQL database...')
        params = config()
        conn = psycopg2.connect(**params)
        cursor = conn.cursor()
        if id == 0:
            cursor.execute("SELECT * FROM POSTS")

            rows = cursor.fetchall()

            results = []

            for row in rows:
                post = {
                    "id": row[0],
                    "title": row[1],
                    "content": "<h1>" + row[2] + "</h1>"
                }
                results.append(post)

            return results

        else:
            cursor.execute("SELECT * FROM POSTS WHERE ID = %s", (id,))

            result = cursor.fetchone()

            post = {
                "id": result[0],
                "title": result[1],
                "content": "<h1>" + result[2] + "</h1>"
            }

            return post

        # close the communication with the PostgreSQL
        cursor.close()
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)

    finally:
        conn.close()
        print('Database connection closed.')
