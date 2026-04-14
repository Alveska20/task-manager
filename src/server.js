const express = require("express");
const app = express();

app.use(express.json());

let tarefas = [];
let id = 1;

// Criar tarefa
app.post("/tarefas", (req, res) => {
  const { titulo, prioridade } = req.body;

  const novaTarefa = {
    id: id++,
    titulo,
    prioridade,
    status: "Pendente",
  };

  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
});

// Listar tarefas
app.get("/tarefas", (req, res) => {
  res.json(tarefas);
});

// Iniciar servidor
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
