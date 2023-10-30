const api = {
  // get all the jobs
  getData: async (setJobs, params, currentPage, rowsPerpage) => {
    // console.log(currentPage);

    let url = params
      ? `http://localhost:3001/jobs?_page=${currentPage}&_limit=${rowsPerpage}${params}`
      : `http://localhost:3001/jobs?_page=${currentPage}&_limit=${rowsPerpage}`;

    await fetch(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (jobJson) {
        // set the result to the setter state
        setJobs(jobJson);
      });
  },

  // count the number of rows of result
  countPages: async (setTotalPage, params) => {
    let url = params ? `http://localhost:3001/jobs?1=1${params}` : `http://localhost:3001/jobs`

    await fetch(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (jobJson) {
        // console.log(jobJson)
        setTotalPage(Math.ceil(jobJson.length / 3));
      });
  },
};

export default api;
