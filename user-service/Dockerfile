# Imagem base
FROM node:18

# Diretório de trabalho
WORKDIR /app

# Copia os arquivos
COPY . .

# Instala dependências
RUN npm install express axios

# Expõe a porta do serviço
EXPOSE 3001

# Comando de execução
CMD ["node", "index.js"]
