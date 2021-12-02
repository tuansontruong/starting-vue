import http from "./http-common";
class DataService {
  getAll() {
    return http.get("https://jsonplaceholder.typicode.com/users");
  }
  getDetail(id) {
    return http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
  addOne(info) {
    return http.post(`https://jsonplaceholder.typicode.com/users`, info);
  }
  updateOne(info) {
    return http.put(
      `https://jsonplaceholder.typicode.com/users/${info.id}`,
      info
    );
  }
  deleteOne(id) {
    return http.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}

export default new DataService();
