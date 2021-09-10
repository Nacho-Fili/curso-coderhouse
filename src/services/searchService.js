import lunr from "lunr";

class SearchService {
  instance;
  items;
  idx;

  constructor(items) {
    this.idx = lunr(function () {
      this.field("title");
      this.field("description");
      this.field("category");

      items.forEach((item) => {
        this.add(item);
      });
    });
    this.items = items;
  }

  static getInstance = function (items = null) {
    if (!items) return this.instance;
    if (!this.instance) this.instance = new SearchService(items);
    else
      this.instance.idx = lunr(function () {
        this.field("title");
        this.field("description");
        this.field("category");

        items.forEach((item) => {
          this.add(item);
        });
      });

    return this.instance;
  };

  searchByString = (str) => this.idx.search(str);
}

export default SearchService;
