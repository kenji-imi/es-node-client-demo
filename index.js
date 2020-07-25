var elasticsearch = require("elasticsearch");
var client = new elasticsearch.Client({
  host: "localhost:9200",
});

client.ping(
  {
    requestTimeout: 2000,
  },
  function (error) {
    if (error) {
      console.error("elasticsearch cluster is down");
    } else {
      console.log("elasticsearch cluster is all ok");
    }
  }
);

client
  .search({
    index: "blogs",
    body: {
      query: {
        match_all: {},
      },
    },
  })
  .then(
    function (resp) {
      console.log(resp.hits.hits);
    },
    function (err) {
      console.log(err.message);
    }
  );
