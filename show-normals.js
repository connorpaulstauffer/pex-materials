var fs = require('fs');

var Vert = fs.readFileSync(__dirname + '/glsl/ShowNormals.vert', 'utf8');
var Frag = fs.readFileSync(__dirname + '/glsl/ShowNormals.frag', 'utf8');

module.exports = function(ctx) {
    return ctx.createProgram(Vert, Frag);
}

module.exports.Vert = Vert;
module.exports.Frag = Frag;
