# Usa una imagen base de Node.js
FROM node:14

# Instala herramientas necesarias para compilar dependencias nativas
RUN apt-get update && apt-get install -y python3 make g++ && apt-get clean

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto 
COPY . .

# Instala las dependencias 
RUN npm install

# Reconstruye bcrypt para el entorno Docker
RUN npm rebuild bcrypt --build-from-source

# Expone el puerto
EXPOSE 8080

# Comando para iniciar la aplicación
CMD ["npm", "start"]


