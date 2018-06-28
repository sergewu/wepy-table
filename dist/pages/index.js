'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _table = require('./../components/table.js');

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportHour = function (_wepy$page) {
  _inherits(ReportHour, _wepy$page);

  function ReportHour() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ReportHour);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReportHour.__proto__ || Object.getPrototypeOf(ReportHour)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'wepy table'
    }, _this.$repeat = {}, _this.$props = { "table": { "xmlns:v-bind": "", "v-bind:columns.once": "columns", "v-bind:rows.once": "rows", "v-bind:fixed.once": "tableFixed" } }, _this.$events = {}, _this.components = {
      table: _table2.default
    }, _this.data = {
      tableFixed: true,
      columns: [{ field: 'date', text: '日期', format: _this.dateFormat }, { field: 'newUser', text: '新增用户' }, { field: 'activeUser', text: '新增设备' }, { field: 'activeUser', text: '活跃用户' }, { field: 'activeUser', text: '新增付费数' }, { field: 'activeUser', text: '总付费数' }, { field: 'activeUser', text: '新用户充值额' }, { field: 'activeUser', text: '总充值额' }, { field: 'activeUser', text: '新用户付费率' }, { field: 'activeUser', text: '活跃付费率' }, { field: 'activeUser', text: 'ARPPU' }, { field: 'activeUser', text: 'ARPU' }],
      rows: [{ date: '2018-06-15', newUser: '1000,121', activeUser: '10' }, { date: '2018-06-16', newUser: '1000,121', activeUser: '100000' }, { date: '2018-06-17', newUser: '1000,121', activeUser: '100' }]
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ReportHour, [{
    key: 'onLoad',
    value: function onLoad(params, form) {
      this.gid = params.gid;
      this.gameName = params.gameName;
    }
  }, {
    key: 'dateFormat',
    value: function dateFormat(value, row, index) {
      console.log(value);
      if (value === null || value === '') {
        return '';
      }
      return value.substr(String(value).indexOf('-') + 1);
    }
  }]);

  return ReportHour;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(ReportHour , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlJlcG9ydEhvdXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwidGFibGUiLCJkYXRhIiwidGFibGVGaXhlZCIsImNvbHVtbnMiLCJmaWVsZCIsInRleHQiLCJmb3JtYXQiLCJkYXRlRm9ybWF0Iiwicm93cyIsImRhdGUiLCJuZXdVc2VyIiwiYWN0aXZlVXNlciIsIm1ldGhvZHMiLCJwYXJhbXMiLCJmb3JtIiwiZ2lkIiwiZ2FtZU5hbWUiLCJ2YWx1ZSIsInJvdyIsImluZGV4IiwiY29uc29sZSIsImxvZyIsInN1YnN0ciIsIlN0cmluZyIsImluZGV4T2YiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxTQUFRLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsdUJBQXNCLFNBQXpDLEVBQW1ELG9CQUFtQixNQUF0RSxFQUE2RSxxQkFBb0IsWUFBakcsRUFBVCxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxhQUFPQTtBQURDLEssUUFHVkMsSSxHQUFPO0FBQ0xDLGtCQUFZLElBRFA7QUFFTEMsZUFBUyxDQUNQLEVBQUVDLE9BQU8sTUFBVCxFQUFpQkMsTUFBTSxJQUF2QixFQUE2QkMsUUFBUSxNQUFLQyxVQUExQyxFQURPLEVBRVAsRUFBRUgsT0FBTyxTQUFULEVBQW9CQyxNQUFNLE1BQTFCLEVBRk8sRUFHUCxFQUFFRCxPQUFPLFlBQVQsRUFBdUJDLE1BQU0sTUFBN0IsRUFITyxFQUlQLEVBQUVELE9BQU8sWUFBVCxFQUF1QkMsTUFBTSxNQUE3QixFQUpPLEVBS1AsRUFBRUQsT0FBTyxZQUFULEVBQXVCQyxNQUFNLE9BQTdCLEVBTE8sRUFNUCxFQUFFRCxPQUFPLFlBQVQsRUFBdUJDLE1BQU0sTUFBN0IsRUFOTyxFQU9QLEVBQUVELE9BQU8sWUFBVCxFQUF1QkMsTUFBTSxRQUE3QixFQVBPLEVBUVAsRUFBRUQsT0FBTyxZQUFULEVBQXVCQyxNQUFNLE1BQTdCLEVBUk8sRUFTUCxFQUFFRCxPQUFPLFlBQVQsRUFBdUJDLE1BQU0sUUFBN0IsRUFUTyxFQVVQLEVBQUVELE9BQU8sWUFBVCxFQUF1QkMsTUFBTSxPQUE3QixFQVZPLEVBV1AsRUFBRUQsT0FBTyxZQUFULEVBQXVCQyxNQUFNLE9BQTdCLEVBWE8sRUFZUCxFQUFFRCxPQUFPLFlBQVQsRUFBdUJDLE1BQU0sTUFBN0IsRUFaTyxDQUZKO0FBZ0JMRyxZQUFNLENBQ0osRUFBRUMsTUFBTSxZQUFSLEVBQXNCQyxTQUFTLFVBQS9CLEVBQTJDQyxZQUFZLElBQXZELEVBREksRUFFSixFQUFFRixNQUFNLFlBQVIsRUFBc0JDLFNBQVMsVUFBL0IsRUFBMkNDLFlBQVksUUFBdkQsRUFGSSxFQUdKLEVBQUVGLE1BQU0sWUFBUixFQUFzQkMsU0FBUyxVQUEvQixFQUEyQ0MsWUFBWSxLQUF2RCxFQUhJO0FBaEJELEssUUFzQlBDLE8sR0FBVSxFOzs7OzsyQkFJSEMsTSxFQUFRQyxJLEVBQU07QUFDbkIsV0FBS0MsR0FBTCxHQUFXRixPQUFPRSxHQUFsQjtBQUNBLFdBQUtDLFFBQUwsR0FBZ0JILE9BQU9HLFFBQXZCO0FBQ0Q7OzsrQkFFVUMsSyxFQUFPQyxHLEVBQUtDLEssRUFBTztBQUM1QkMsY0FBUUMsR0FBUixDQUFZSixLQUFaO0FBQ0EsVUFBSUEsVUFBVSxJQUFWLElBQWtCQSxVQUFVLEVBQWhDLEVBQW9DO0FBQ2xDLGVBQU8sRUFBUDtBQUNEO0FBQ0QsYUFBT0EsTUFBTUssTUFBTixDQUFhQyxPQUFPTixLQUFQLEVBQWNPLE9BQWQsQ0FBc0IsR0FBdEIsSUFBNkIsQ0FBMUMsQ0FBUDtBQUNEOzs7O0VBL0NxQ0MsZUFBS0MsSTs7a0JBQXhCakMsVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgdGFibGUgZnJvbSAnLi4vY29tcG9uZW50cy90YWJsZSdcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwb3J0SG91ciBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ3dlcHkgdGFibGUnXG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ0YWJsZVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6Y29sdW1ucy5vbmNlXCI6XCJjb2x1bW5zXCIsXCJ2LWJpbmQ6cm93cy5vbmNlXCI6XCJyb3dzXCIsXCJ2LWJpbmQ6Zml4ZWQub25jZVwiOlwidGFibGVGaXhlZFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICB0YWJsZTogdGFibGVcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIHRhYmxlRml4ZWQ6IHRydWUsXG4gICAgICBjb2x1bW5zOiBbXG4gICAgICAgIHsgZmllbGQ6ICdkYXRlJywgdGV4dDogJ+aXpeacnycsIGZvcm1hdDogdGhpcy5kYXRlRm9ybWF0IH0sXG4gICAgICAgIHsgZmllbGQ6ICduZXdVc2VyJywgdGV4dDogJ+aWsOWinueUqOaItycgfSxcbiAgICAgICAgeyBmaWVsZDogJ2FjdGl2ZVVzZXInLCB0ZXh0OiAn5paw5aKe6K6+5aSHJyB9LFxuICAgICAgICB7IGZpZWxkOiAnYWN0aXZlVXNlcicsIHRleHQ6ICfmtLvot4PnlKjmiLcnIH0sXG4gICAgICAgIHsgZmllbGQ6ICdhY3RpdmVVc2VyJywgdGV4dDogJ+aWsOWinuS7mOi0ueaVsCcgfSxcbiAgICAgICAgeyBmaWVsZDogJ2FjdGl2ZVVzZXInLCB0ZXh0OiAn5oC75LuY6LS55pWwJyB9LFxuICAgICAgICB7IGZpZWxkOiAnYWN0aXZlVXNlcicsIHRleHQ6ICfmlrDnlKjmiLflhYXlgLzpop0nIH0sXG4gICAgICAgIHsgZmllbGQ6ICdhY3RpdmVVc2VyJywgdGV4dDogJ+aAu+WFheWAvOminScgfSxcbiAgICAgICAgeyBmaWVsZDogJ2FjdGl2ZVVzZXInLCB0ZXh0OiAn5paw55So5oi35LuY6LS5546HJyB9LFxuICAgICAgICB7IGZpZWxkOiAnYWN0aXZlVXNlcicsIHRleHQ6ICfmtLvot4Pku5jotLnnjocnIH0sXG4gICAgICAgIHsgZmllbGQ6ICdhY3RpdmVVc2VyJywgdGV4dDogJ0FSUFBVJyB9LFxuICAgICAgICB7IGZpZWxkOiAnYWN0aXZlVXNlcicsIHRleHQ6ICdBUlBVJyB9XG4gICAgICBdLFxuICAgICAgcm93czogW1xuICAgICAgICB7IGRhdGU6ICcyMDE4LTA2LTE1JywgbmV3VXNlcjogJzEwMDAsMTIxJywgYWN0aXZlVXNlcjogJzEwJyB9LFxuICAgICAgICB7IGRhdGU6ICcyMDE4LTA2LTE2JywgbmV3VXNlcjogJzEwMDAsMTIxJywgYWN0aXZlVXNlcjogJzEwMDAwMCcgfSxcbiAgICAgICAgeyBkYXRlOiAnMjAxOC0wNi0xNycsIG5ld1VzZXI6ICcxMDAwLDEyMScsIGFjdGl2ZVVzZXI6ICcxMDAnIH1cbiAgICAgIF1cbiAgICB9O1xuICAgIG1ldGhvZHMgPSB7XG5cbiAgICB9O1xuXG4gICAgb25Mb2FkKHBhcmFtcywgZm9ybSkge1xuICAgICAgdGhpcy5naWQgPSBwYXJhbXMuZ2lkXG4gICAgICB0aGlzLmdhbWVOYW1lID0gcGFyYW1zLmdhbWVOYW1lXG4gICAgfVxuXG4gICAgZGF0ZUZvcm1hdCh2YWx1ZSwgcm93LCBpbmRleCkge1xuICAgICAgY29uc29sZS5sb2codmFsdWUpXG4gICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiAnJ1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlLnN1YnN0cihTdHJpbmcodmFsdWUpLmluZGV4T2YoJy0nKSArIDEpXG4gICAgfVxuICB9XG4iXX0=