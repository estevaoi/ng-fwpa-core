/**
 *
 * @author PabloFLanmarion
 */
require("dotenv/config");

class Secret {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }
}

const secret = {
  publicKey: "fd7902f7840d0c9fc62516a618968dc98afc3c3cb75435445fc9d4b47a7da2c4", // public key DEV
  //publicKey:"98ebe4aa7ca8c588d54cb44fe5d1044e8113b8722e77743bf233b18fa5ee3b3686aafd652c20d89257c8ccdcb17db934b050539e0a188a09f4fbc58c5f927a39" // public key PROD
};

module.exports = secret;
