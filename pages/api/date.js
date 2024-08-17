module.exports = function(app) {
  app.get("/api/:date?", function (req, res) {
      let dateString = req.params.date;
      let date;

      // If no date parameter is provided, return the current date
      if (!dateString) {
          date = new Date();
      } else {
          // Check if the dateString is a valid Unix timestamp (i.e., a number)
          if (/^\d+$/.test(dateString)) {
              date = new Date(parseInt(dateString));
          } else {
              // Otherwise, treat it as a UTC date string
              date = new Date(dateString);
          }
      }

      // If the date is invalid, return an error message
      if (isNaN(date.getTime())) {
          return res.json({ error: "Invalid Date" });
      }

      const unixTimestamp = date.getTime();
      const utcDate = date.toUTCString();

      res.json({
          "unix": unixTimestamp,
          "utc": utcDate
      });
  });
};