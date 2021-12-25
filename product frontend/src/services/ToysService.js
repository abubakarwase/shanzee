import GenericService from "./GenericService";
class ToysService extends GenericService {
  constructor() {
    super();
  }
  addToy = (data) => this.post("toys", data);
  deleteToy = (_id) => this.delete("toys/" + _id);
  updateToy = (_id, data) => this.put("toys/" + _id, data);
  getToys = (page = 1, perPage = 10) =>
    this.get("toys?page=" + page + "&perPage=" + perPage);
  getSingleToy = (id) => this.get("toys/" + id);
}

let toyService = new ToysService();
export default toyService;
