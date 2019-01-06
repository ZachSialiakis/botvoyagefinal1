import superagent from "superagent";

const apiConfig = {
  apiParams: {
    client_id: "5ULN3XJD2YGDNHKP4XNE3O1V5VZ2RGYXWZCMZXH0U01CI5AA",
    client_secret: "C4PC4RVYXYEVWASSAUMOYEYR0GHSR1VDIMWGNZRHWT1SY0WC",
    v: "20170802"
  },
  getVenues(url, params) {
    return new Promise((resolve, reject) => {
      superagent
                .get(url)
                .query(params)
                .set("Accept", "application/json")
                .then((data) => {
                  resolve(data.body.response.venue);
                }, (err) => {
                  console.log(err.message);
                  reject(err);
                });
    });
  },
  getVenuePhotos(url, params) {
    return new Promise((resolve, reject) => {
      superagent
                .get(url)
                .query(params)
                .set("Accept", "application/json")
                .then((data) => {
                  resolve(data.body.response.photos.items);
                }, (err) => {
                  console.log(`OPS ${err.message}`);
                  reject(err);
                });
    });

  },
  getVenueTips(url, params) {
    return new Promise((resolve, reject) => {
      superagent
                .get(url)
                .query(params)
                .set("Accept", "application/json")
                .then((data) => {
                  resolve(data.body.response.venue.tips.groups[0].items);
                }, (err) => {
                  console.log(`OPS ${err.message}`);
                  reject(err);
                });
    });
  }
};

export default apiConfig;
