### Running the Frontend

- Place the url to the backend in the `frontend/.env` file. There is already a .env.example file that you can use as a template.

You can run the Frontend:

```bash
docker build -t supersar-assistant-fronend .
docker run -p 8000:8000 supersar-assistant-fronend
```
