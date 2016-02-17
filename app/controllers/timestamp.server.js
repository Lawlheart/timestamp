'use strict';

function natural(date) {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
}


function TimeStamp() {
  this.check = function(req, res) {
    
    var data = decodeURI(req.params.data);

    if(!isNaN(parseInt(data)) && data.indexOf(".") < 0) {
      var date = new Date(parseInt(data) * 1000);
    } else {
      var date = new Date(data);
    }
    
    res.json({
      "unix": (date.toString() !== 'Invalid Date' ? date.getTime()/1000 : null) ,
      "natural": (date.toString() !== 'Invalid Date' ? natural(date) : null)
    })
  }
}

module.exports = TimeStamp;