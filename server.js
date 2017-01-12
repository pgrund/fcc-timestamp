var express = require('express');
var strftime = require('strftime');
var app = express();

function getJson(date) {
  return {
    unix: (date.getTime() ? date.getTime() : null),
    natural: (date.getTime() ? strftime('%B %d, %Y', date) : null)
    };
};

app.get('/:date(\\d+)', function (req, res) {
  var d = new Date();
  d.setTime(req.params.date);
  res.json(getJson(d));
});
app.get('/:date', function(req, res) {
  var d = new Date(req.params.date);
  res.json(getJson(d));
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
});