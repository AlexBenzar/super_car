### Running the Frontend

- Place the url to the backend in the `frontend/.env` file, if you don't do this, it's going to use http://localhost:8000/query by default. There is already a .env.example file that you can use as a template.

You can run the Frontend:

```bash
docker build -t supersar-assistant-fronend .
docker run -p 3000:3000 supersar-assistant-fronend
```
