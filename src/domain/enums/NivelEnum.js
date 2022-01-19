/**
 * @author PabloFLanmarion
 *
 */
class NivelEnum {
  constructor(code, name, abrev) {
    this.code = code;
    this.name = name;
    this.abrev = abrev;
  }
}

const nivelEnum = {
  USUARIO: { code: 1, name: "USUARIO", abrev: "U" },
  IGREJA: { code: 2, name: "IGREJA", abrev: "I" },
  AREA: { code: 3, name: "AREA", abrev: "A" },
  REGIAO: { code: 4, name: "REGIAO", abrev: "R" },
  TODOS: { code: 5, name: "TODOS", abrev: "T" },
};

module.exports = NivelEnum;
