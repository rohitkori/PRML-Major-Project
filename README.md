# Speech Emotion Recognition

<img src="./frontend/src/Assets/Speech-Emotion-Recogniton-cover.png"/>

## Steps to run the project

- Clone the repository using the command

```bash
git clone https://github.com/rohitkori/PRML-Major-Project.git
```

- ### Frontend

  - Go to the frontend directory using the command

  ```bash
  cd frontend
  ```

  - Install the dependencies using the command

  ```bash
  npm install
  ```

  - Run the project using the command

  ```bash
  npm start
  ```

  The frontend will be served at [localhost:3000](http://127.0.0.1:3000/)

- ### Backend

  - Go to the backend directory using the command

  ```bash
  cd backend
  ```

  - Enter the virtual environment using the command

  ```bash
  pipenv shell
  ```

  - Install the dependencies using the command

  ```bash
  pipenv install
  ```

  - Run the command

  ```bash
  python manage.py migrate
  ```

  to migrate the database

  - Run the command

  ```bash
  python manage.py runserver
  ```

  The backend will be served at [localhost:8000](http://localhost:8000/)

## Docker

- If you have docker installed on your system, you can run the project using the command

```bash
cp .env.example .env
```

```bash
docker-compose up
```
