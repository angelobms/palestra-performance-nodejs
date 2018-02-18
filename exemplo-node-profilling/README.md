# Execução

Execute os seguintes comandos depois do `npm install`:

__Rode o exemplo não otimizado__:

```
$ node --prof index.js
$ node --prof-process *.log
```

Apague os arquivos `*.log`

__Rode o exemplo otimizado__:

```
$ node --prof index-optimized.js
$ node --prof-process *.log
```

Node com `--prof` vai criar um arquivo de profiler de baixo nível que deve ser lido com `--prof-process` que vai criar um arquivo txt chamado
`proccess.txt` com as saídas processadas
