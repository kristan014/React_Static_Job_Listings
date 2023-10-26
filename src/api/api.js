
const api = {

     getData : async (setJobs,params) => {
        await fetch("http://localhost:3001/jobs?_limit=5", {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json",
          },
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (jobJson) {
            // console.log(jobJson);
            setJobs(jobJson);
          });
      }

}

export default api