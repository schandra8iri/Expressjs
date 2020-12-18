const teamsjson = (req, res) => {
  res.json([
    { eid: 2313, name: "sandeep" },
    { eid: 2314, name: "john" },
  ]);
};

module.exports = teamsjson;
