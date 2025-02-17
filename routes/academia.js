const express = require("express");
const router = express.Router();
const academiaController = require("../controllers/academia");

const { authMiddleware } = require("../middleware/authMiddleware");

router.get("/", (req, res) => {
  res.render("academia/login");
});

router.get("/cadastro", (req, res) => {
  res.render("academia/cadastro");
});

router.get("/academia/alunos", (req, res) => {
  const id = req.params.id;
  res.render("academia/alunos", { id: id });
});

router.get("/menu/:id", academiaController.renderizaMenu);

router.get("/perfil/:id", academiaController.renderizaPerfil);

router.get("/alunos/:id_academia", academiaController.renderizaListaAlunos);

router.get(
  "/personais/:id_academia",
  academiaController.renderizaListaPersonais
);

router.get("/equipamento/:id", academiaController.renderizaEquipamento);

router.get("/editar/:id", academiaController.editarAcademia);
router.post("/atualizar/:id", academiaController.atualizaAcademia);
router.delete(
  "/removerPersonal/:idPersonal",
  academiaController.deletarPersonal
);
router.delete(
  "/:id_academia/removerAluno/:id_aluno",
  academiaController.deletarAluno
);

router.get("/adcEquipamento", (req, res) => {
  res.render("academia/adcEquipamento");
});

router.get("/detalhe", (req, res) => {
  res.render("academia/adcdetalhe");
});

// router.get("/treinos", (req, res) => {
//   res.render("academia/treinos");
// });
router.get("/treinos/:id", academiaController.renderizaTreinos);

router.post("/cadastro", academiaController.cadastrar);
router.get(
  "/listaAcademias",
  // authMiddleware,
  academiaController.listarAcademias
);
router.get(
  "/listarAcademia/:id",
  // authMiddleware,
  academiaController.listarAcademiaPorId
);

router.delete(
  "/deletar",
  // authMiddleware,
  academiaController.deletar
);
router.post("/login", academiaController.autenticaAcademia);

router.post(
  "/inserirPersonal/:id_academia",
  academiaController.inserirPersonal
);
router.post("/inserirAluno/:id_academia", academiaController.adicionarAluno);

router.get(
  "/:id_academia/aluno/:id_aluno",
  academiaController.renderizaPerfilAluno
);

// router.post("/inserirAluno", academiaController.inserirAluno);
module.exports = router;
