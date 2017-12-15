## Gere os certificados primeiro

```
openssl genrsa -des3 -passout pass:x -out server.pass.key 2048
openssl rsa -passin pass:x -in server.pass.key -out server.key
rm server.pass.key
openssl req -new -key server.key -out server.csr
openssl x509 -req -sha256 -days 365 -in server.csr -signkey server.key -out server.crt
``` 

## Execução

Instale as dependencias com `npm install`.

- `npm run start1` - Para rodar o servidor com HTTP1.1
- `npm run start2` - Para rodar o servidor com HTTP2
