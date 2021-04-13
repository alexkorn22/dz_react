
class View {
    constructor(el) {
        this.el = el || `<div></div>`;
    }

    set el(value) {
        this._el = value;
        this.$ = $(this._el); 
    }

    get el() {
        return this._el;
    }

    template(strTemplate, vars) {
        vars = vars || {};
        let func = _.bind(_.template(strTemplate), this, vars);
        return func();
    }

    setEvents() {

    }

    render() {
        this.setEvents();
        return this;
    }
}

class MainView extends View {
    constructor(el, data) {
        super(el);
        this.dataModel = data;

        this.render();
    }

    changeSelect(value) {
        this.searchView.setText('');

        if (value !== '-') {
            this.tableView.data = this.dataModel.getListByRegion(value);
        } else {
            this.tableView.data = this.dataModel.getList();
        }

        this.tableView.render();
    }

    changeSearchText(text) {
        this.selectView.setSelect('-');
        text = text.trim();
        if (text !== '') {
            this.tableView.data = this.dataModel.getListSearchText(text);
        } else {
            this.tableView.data = this.dataModel.getList();
        }

        this.tableView.render();
    }

    template(vars) {
        return super.template(`
            <div class="mt-2">
                <div class="row">
                    <div class="col-md-6" >
                        <div data-search-wrap></div>
                    </div>
                    <div class="col-md-6">
                        <div data-select-wrap></div>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12">
                        <div data-table-wrap></div>
                    </div>
                </div>   
            </div>
        `, vars);
    }

    render() {
        this.$.html(this.template());
        this.searchView = new SearchView(this.$.find('[data-search-wrap]')[0], this.changeSearchText.bind(this));
        this.selectView = new SelectView(this.$.find('[data-select-wrap]')[0], this.dataModel.getRegions(), this.changeSelect.bind(this));
        this.tableView = new TableView(this.$.find('[data-table-wrap]')[0], this.dataModel.getList());

        this.searchView.render();
        this.selectView.render();
        this.tableView.render();

        return this;
    }
}

class SearchView extends View {
    constructor(el, cbChange) {
        super(el);
        this.cbKeyup = cbChange;
    }

    template(vars) {
        return super.template(`
            <div class="row">
                <label for="inputSearch" class="col-sm-2 col-form-label">Search</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="inputSearch" value="">
                </div>
            </div>
        `, vars);
    }

    setText(text) {
        this.$.find('#inputSearch').val(text);
    }

    setEvents() {
        this.$.find('#inputSearch').keyup(el => {this.cbKeyup(el.target.value)});
    }

    render() {
        this.$.html(this.template());
        return super.render();
    }
}

class SelectView extends View {
    constructor(el, options, cbChange) {
        super(el);
        this.options = options;
        this.cbChange = cbChange;
    }

    template(vars) {
        return super.template(`
            <div class="row">
                <label for="selectSearch" class="col-sm-2 col-form-label">Search</label>
                <div class="col-sm-10">
                    <select class="form-select">
                      <option selected>-</option>
                      <% for (item in this.options) {%>
                        <option value="<%= item%>"><%= this.options[item]%></option>
                      <%}%>
                    </select>
                </div>
            </div>
        `, vars);
    }

    setSelect(value) {
        this.$.find('select').val(value);
    }

    setEvents() {
        this.$.find('select').on('change', (el)=>{
            this.cbChange(el.target.value);
        })
    }

    render() {
        this.$.html(this.template());
        return super.render();
    }
}

class TableView extends View {
    constructor(el, data) {
        super(el);
        this.data = data;
    }

    template(vars) {
        return super.template(`
            <table class="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Capital</th>
                  <th scope="col">Region</th>
                  <th scope="col">Population</th>
                  <th scope="col">Area</th>
                  <th scope="col">Currencies</th>
                </tr>
              </thead>
              <tbody>
                <% for (let item of this.data) {%> 
                    <tr>
                      <th scope="row"><%= item.number %></th>
                      <td><%= item.name %></td>
                      <td><%= item.capital %></td>
                      <td><%= item.region %></td>
                      <td><%= item.population %></td>
                      <td><%= item.area %></td>
                      <td><%= item.currencies %></td>
                    </tr>
                <% } %>
              </tbody>
            </table>
        `, vars);
    }

    render() {
        this.$.html(this.template());
        return super.render();
    }
}

class Data {
    constructor(data) {
        this.storage = data;
    }

    getList() {
        return this.storage.map(this.mapList);
    }

    mapList(value, index) {
        return {
            number: index +1,
            name: value.name,
            capital: value.capital,
            region: value.region,
            population: value.population,
            area: value.area,
            currencies: value.currencies.map(value => value.name).join(', '),
        }
    }

    getListByRegion(region) {
       return  this.storage.filter(item => item.region === region).map(this.mapList);
    }

    getListSearchText(value) {
        return  this.storage.filter(item => {
            value = value.toLowerCase();
            return item.name.toLowerCase().indexOf(value) !== -1 ||
                item.region.toLowerCase().indexOf(value) !== -1 ||
                item.capital.toLowerCase().indexOf(value) !== -1
        }).map(this.mapList);
    }

    getRegions() {
        let regions = {};
        for (let value of this.storage) {
            regions[value.region] = value.region ? value.region : 'No region';
        }
        return regions;
    }
}

$(document).ready(() => {
    $.ajax({
        url: "https://restcountries.eu/rest/v2/all",
        success: function (response) {
            $('.lds-ring').hide();
            new MainView(
                document.getElementById('app'),
                new Data(response)
            );
        },
        error: function (e) {
            console.error(e);
        }
    });
})