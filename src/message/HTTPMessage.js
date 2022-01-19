/**
 * @author PabloFLanmarion
 *
 */
class HTTPMessage {
  constructor() {}
}

const httpMessage = {
  SUCESS_OK: { code: 200, desc: "OK", msg: "Requisição bem sucedida." },
  SUCESS_CREATED: {
    code: 201,
    desc: "Created",
    msg: "Requisição bem sucedida e um novo recurso foi criado.",
  },
  BAD_REQUEST: {
    code: 400,
    desc: "Bad Request",
    msg: "Requisição malformatada.",
  },
  UNAUTHORIZED: {
    code: 401,
    desc: "Unauthorized",
    msg: "A solicitação não foi aplicada porque não possui credenciais de autenticação válidas para o recurso de destino.",
  },
  FORBIDDEN: {
    code: 403,
    desc: "Forbidden",
    msg: "O servidor entendeu a solicitação, mas se recusa a autorizá-la.",
  },
  NOT_FOUND: {
    code: 404,
    desc: "Not Found",
    msg: "O servidor de origem não encontrou uma representação atual para o recurso de destino ou não está disposto a divulgar que existe.",
  },
  METHOD_NOT_ALLOWED: {
    code: 405,
    desc: "Method Not Allowed",
    msg: "O método recebido na linha de solicitação é conhecido pelo servidor de origem, mas não é suportado pelo recurso de destino.",
  },
  NOT_ACCEPTABLE: {
    code: 406,
    desc: "Not Acceptable",
    msg: "O recurso de destino não possui uma representação atual que seria aceitável para o agente do usuário, de acordo com os campos de cabeçalho de negociação proativa recebidos na solicitação1, e o servidor não está disposto a fornecer uma representação padrão.",
  },
  INTERNAL_SERVER_ERROR: {
    code: 500,
    desc: "Internal Server Error",
    msg: "O servidor encontrou uma condição inesperada que o impediu de atender à solicitação.",
  },
};
module.exports = httpMessage;
