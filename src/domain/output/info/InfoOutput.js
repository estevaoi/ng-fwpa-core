/**
 * @author PabloFLanmarion
 *
 */

module.exports = {
  getInfo(name, description, version) {
    const outPut = {
      info: {
        name: name,
        description: description,
        version: version,
      },
    };
    return outPut;
  },
};
