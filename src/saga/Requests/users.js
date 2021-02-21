import axios from "axios";

export default function users() {
  return axios.request({
    url: "https://my-json-server.typicode.com/TwistYoFate/fakedb/users"
  });
}
