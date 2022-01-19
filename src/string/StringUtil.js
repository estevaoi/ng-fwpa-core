/**
 * @author PabloFLanmarion
 */
var figlet = require("figlet");

/**
 * Printa a imagem em texto.
 *
 * @param {*} text
 */
exports.printLogo = (text) => {
  figlet(text, function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });
};

/**
 *
 * @param {*} text
 * @param {*} width
 */
exports.printLogoParam = (text,width) =>{
    figlet.text(text, {
        font: 'Standard',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: width,
        whitespaceBreak: true
    }, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data);
    });
}