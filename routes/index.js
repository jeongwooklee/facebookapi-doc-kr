
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
    type: 'main'
  });
};
exports.reference = function(req, res){
  var type = req.params.type,
      name = req.params.name.replace(/\./g, '');
  res.render('reference/' + type + '/' + name, {
    type: type
  });
};
