# Execução 

Execute os seguintes comandos depois do `npm install`:

```
$ node --prof index.js
$ node --prof-process *.log
```

Node com `--prof` vai criar um arquivo de profiler de baixo nível que deve ser lido com `--prof-process` que vai criar um arquivo txt chamado
`proccess.txt` com as saídas processadas
