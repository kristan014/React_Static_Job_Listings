

const api = {

     getData : async (setJobs,params) => {
      let url = params ? `http://localhost:3001/jobs?_limit=5${params}` : `http://localhost:3001/jobs?_page=2&_limit=3` 

      console.log(url)
        await fetch(url, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json",
          },
        })
          .then(function (response) {
            console.log(response.headers)
            return response.json();
          })
          .then(function (jobJson) {
            // console.log(jobJson);
            setJobs(jobJson);
          });
      },

      countRows : async (setTotalRows) => {
        let url = `http://localhost:3001/jobs` 
  
        console.log(url)
          await fetch(url, {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Accept: "application/json",
            },
          })
            .then(function (response) {
              console.log(response)
              return response.json();
            })
            .then(function (jobJson) {
              //  console.log(jobJson);
               setTotalRows(jobJson.length)
            });
        }

}

export default api