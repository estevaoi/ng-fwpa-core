/**
 * @author PabloFLanmarion
 *
 */
class Message {
  constructor() {}
}

const message = {
  ERRO_INTERNO: "Erro interno do Servidor",
  REGISTRO_NAO_LOCALIZADO: "Registro não localizado!",
  JA_EXISTE_REGISTRO: "Já existe um registro com a descrição informada!",
  REGISTRO_GRAVADO_SUCESSO: "Registro gravado com sucesso!",
  REGISTRO_DELETADO_SUCESSO: "Registro deletado com sucesso!",
  REGISTRO_DESABILITADO_SUCESSO: "Registro desabilitado com sucesso!",
  ERRO_NO_TOKEN_PROVIDER: "Error: No Token provider.",
  ERRO_AUTH_AUSENTE: "Auth ausente na requisição.",
  ERRO_TOKEN: "Error: Token error.",
  ERRO_TOKEN_INCOMPLETO: "Token incompleto.",
  ERRO_TOKEN_BADFORMAT: "Error: Token badFormatted.",
  ERRO_TOKEN_INVALIDO: "Token inválido",
  ERRO_DADO_NAO_LOCALIZADO: "Dado nao encontrado.",
  ERRO_COFIG_OFFLINE:
    "O Serviço config-server está offline ou inacessível, verificar com a administração do serviço.",
  ERRO_FILE_ENV_NOT_FOUND: "Variáveis de ambiente não localizadas.",
  TOKEN_VALIDO: "Token válido.",
  LOGIN_SENHA_INVALIDO: "Login ou Senha inválido.",
  USUARIO_INATIVO: "Usuário inativo.",
  USUARIO_DESLOGADO: "Usuário deslogado.",
  CAMPOS_OBRIGATORIOS_NULOS:
    "Existe(m) campo(s) obrigatório(s) não preenchidos na requisição.",
};
module.exports = message;
