import psycopg2
from postgres.postgres_config import config


def postgres_init():
    conn = None
    params = config()
    try:
        print('Connecting to the PostgreSQL database...')
        conn = psycopg2.connect(**params)

        conn.autocommit = True

        cursor = conn.cursor()

        print('PostgreSQL database version:')
        cursor.execute('SELECT version()')

        db_version = cursor.fetchone()
        print(db_version)

        cursor.execute("DROP TABLE IF EXISTS POSTS")

        sql = '''CREATE TABLE POSTS(
                   ID SERIAL PRIMARY KEY,
                   TITLE VARCHAR(255) NOT NULL,
                   CONTENT TEXT
                )'''

        cursor.execute(sql)

        i = 1
        while i <= 4:
            title = 'Test Post ' + str(i)
            content = 'Post ' + str(i)
            cursor.execute("INSERT INTO POSTS VALUES (%s, %s, %s)", (i, title, content))
            i += 1

        conn.commit()

        # close the communication with the PostgreSQL
        cursor.close()
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)

    finally:
        if conn is not None:
            conn.close()
            print('Database connection closed.')
