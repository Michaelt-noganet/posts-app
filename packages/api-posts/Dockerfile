# Use the official Python base image
FROM python:3.9

# Set the working directory inside the container
WORKDIR /app

RUN apt-get update && apt-get install gcc

RUN pip install --upgrade pip

# Copy the requirements file to the working directory
COPY ./packages/api-posts/requirements.txt .

# Install the dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application code to the working directory
COPY ./packages/api-posts/ .

# Expose the port that the application will listen on
EXPOSE 3100

# Run the application with Uvicorn server
CMD ["python", "./main.py"]