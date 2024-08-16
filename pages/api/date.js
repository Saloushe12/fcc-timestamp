//Date String API endpoint
module.exports = function(app) {
    app.get("/api/:date?", function (req, res) {
        let dateString = req.params.date;
        let date;
      
        // If no date parameter is provided, return the current date
        if (!dateString) {
          date = new Date();
        }
        else {
          // Try to parse the date string
          date = new Date(dateString);
        }
      
        // If the date is invalid, return an error message
        if (isNaN(date.getTime())) {
          return res.json({Error: "Invalid date"});
        }
      
        const unixTimestamp = date.getTime();
        const utcDate = date.toUTCString();
      
        res.json({
          "unix": unixTimestamp,
          "utc": utcDate
        });
      });
};