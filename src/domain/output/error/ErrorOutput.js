/**
 * @author PabloFLanmarion
 *
 */
class ErrorOutput {
  constructor() {}
}

module.exports = {
  getErrorOutput(cod, title, cause, detail) {
    const message = "Causa: " + cause + "; " + detail;
    const outPut = {
      error: {
        code: cod,
        title: title,
        detail: message,
      },
    };
    return outPut;
  },
};
