'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var zanTable = function (_wepy$component) {
  _inherits(zanTable, _wepy$component);

  function zanTable() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, zanTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = zanTable.__proto__ || Object.getPrototypeOf(zanTable)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      columns: Array,
      rows: {
        type: Array,
        default: []
      },
      fixed: Boolean
    }, _this.data = {
      _rows: [],
      columnMap: {},
      maxLength: 0
    }, _this.watch = {
      rows: function rows() {
        this.initTable();
      }
    }, _this.methods = {}, _this.event = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(zanTable, [{
    key: 'onLoad',
    value: function onLoad() {
      this.initTable();
    }
    // 初始化table

  }, {
    key: 'initTable',
    value: function initTable() {
      // 备份原始数据
      this._rows = this.rows;
      this.maxLength = 0;
      // 先根据表头计算列宽度
      for (var i in this.columns) {
        var col = this.columns[i];
        col.maxLength = this.getTextLength(String(col.text));
        this.columnMap[col.field] = col;
      }
      // 根据数据计算列宽度
      for (var _i in this._rows) {
        var row = this._rows[_i];
        for (var key in row) {
          var _col = this.columnMap[key];
          if (_col !== undefined) {
            var text = row[key];
            if (text != null) {
              if (_col.format !== undefined) {
                var r = _col.format(text, this.rows[_i], _i);
                if (r !== undefined) {
                  text = r;
                  row[key] = text;
                }
              }
              var colLength = this.getTextLength(String(text));
              if (colLength > _col.maxLength) {
                _col.maxLength = colLength;
              }
            }
          }
        }
      }
      // 计算最大宽度
      for (var _i2 = 0; _i2 < this.columns.length; _i2++) {
        var _col2 = this.columns[_i2];
        this.maxLength += _col2.maxLength;
      }
      // 减去左右padding
      var screenWidth = parseInt(wx.getSystemInfoSync().windowWidth * 0.99) - 10;
      // 根据屏幕宽度计算每一列的实际宽度
      for (var _i3 = 0; _i3 < this.columns.length; _i3++) {
        var _col3 = this.columns[_i3];
        var width = (_col3.maxLength / this.maxLength * screenWidth).toFixed(2);
        _col3.width = width;
        _col3.maxWidth = width;
        _col3.minWidth = width;
        // 最小列宽度为字符长度 * 8 + 6
        if (width < _col3.maxLength * 8 + 6) {
          _col3.minWidth = _col3.maxLength * 8 + 6;
          _col3.maxWidth = _col3.minWidth;
        }
        if (this.fixed) {
          if (_i3 > 0) {
            if (_i3 === 1) {
              _col3.left = parseFloat(this.columns[0].maxWidth);
            } else {
              _col3.left = 0;
            }
          }
        }
      }
      this.$apply();
    }
    // 获取文本长度

  }, {
    key: 'getTextLength',
    value: function getTextLength(text) {
      return text.replace(/[\u0391-\uFFE5]/g, 'aa').length;
    }
  }]);

  return zanTable;
}(_wepy2.default.component);

exports.default = zanTable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLmpzIl0sIm5hbWVzIjpbInphblRhYmxlIiwicHJvcHMiLCJjb2x1bW5zIiwiQXJyYXkiLCJyb3dzIiwidHlwZSIsImRlZmF1bHQiLCJmaXhlZCIsIkJvb2xlYW4iLCJkYXRhIiwiX3Jvd3MiLCJjb2x1bW5NYXAiLCJtYXhMZW5ndGgiLCJ3YXRjaCIsImluaXRUYWJsZSIsIm1ldGhvZHMiLCJldmVudCIsImkiLCJjb2wiLCJnZXRUZXh0TGVuZ3RoIiwiU3RyaW5nIiwidGV4dCIsImZpZWxkIiwicm93Iiwia2V5IiwidW5kZWZpbmVkIiwiZm9ybWF0IiwiciIsImNvbExlbmd0aCIsImxlbmd0aCIsInNjcmVlbldpZHRoIiwicGFyc2VJbnQiLCJ3eCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJ3aWR0aCIsInRvRml4ZWQiLCJtYXhXaWR0aCIsIm1pbldpZHRoIiwibGVmdCIsInBhcnNlRmxvYXQiLCIkYXBwbHkiLCJyZXBsYWNlIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxLLEdBQVE7QUFDTkMsZUFBU0MsS0FESDtBQUVOQyxZQUFNO0FBQ0pDLGNBQU1GLEtBREY7QUFFSkcsaUJBQVM7QUFGTCxPQUZBO0FBTU5DLGFBQU9DO0FBTkQsSyxRQVFSQyxJLEdBQU87QUFDTEMsYUFBTyxFQURGO0FBRUxDLGlCQUFXLEVBRk47QUFHTEMsaUJBQVc7QUFITixLLFFBS1BDLEssR0FBUTtBQUNOVCxVQURNLGtCQUNDO0FBQ0wsYUFBS1UsU0FBTDtBQUNEO0FBSEssSyxRQUtSQyxPLEdBQVUsRSxRQUVWQyxLLEdBQVEsRTs7Ozs7NkJBR0M7QUFDUCxXQUFLRixTQUFMO0FBQ0Q7QUFDRDs7OztnQ0FDWTtBQUNWO0FBQ0EsV0FBS0osS0FBTCxHQUFhLEtBQUtOLElBQWxCO0FBQ0EsV0FBS1EsU0FBTCxHQUFpQixDQUFqQjtBQUNBO0FBQ0EsV0FBSyxJQUFJSyxDQUFULElBQWMsS0FBS2YsT0FBbkIsRUFBNEI7QUFDMUIsWUFBSWdCLE1BQU0sS0FBS2hCLE9BQUwsQ0FBYWUsQ0FBYixDQUFWO0FBQ0FDLFlBQUlOLFNBQUosR0FBZ0IsS0FBS08sYUFBTCxDQUFtQkMsT0FBT0YsSUFBSUcsSUFBWCxDQUFuQixDQUFoQjtBQUNBLGFBQUtWLFNBQUwsQ0FBZU8sSUFBSUksS0FBbkIsSUFBNEJKLEdBQTVCO0FBQ0Q7QUFDRDtBQUNBLFdBQUssSUFBSUQsRUFBVCxJQUFjLEtBQUtQLEtBQW5CLEVBQTBCO0FBQ3hCLFlBQUlhLE1BQU0sS0FBS2IsS0FBTCxDQUFXTyxFQUFYLENBQVY7QUFDQSxhQUFLLElBQUlPLEdBQVQsSUFBZ0JELEdBQWhCLEVBQXFCO0FBQ25CLGNBQUlMLE9BQU0sS0FBS1AsU0FBTCxDQUFlYSxHQUFmLENBQVY7QUFDQSxjQUFJTixTQUFRTyxTQUFaLEVBQXVCO0FBQ3JCLGdCQUFJSixPQUFPRSxJQUFJQyxHQUFKLENBQVg7QUFDQSxnQkFBSUgsUUFBUSxJQUFaLEVBQWtCO0FBQ2hCLGtCQUFJSCxLQUFJUSxNQUFKLEtBQWVELFNBQW5CLEVBQThCO0FBQzVCLG9CQUFJRSxJQUFJVCxLQUFJUSxNQUFKLENBQVdMLElBQVgsRUFBaUIsS0FBS2pCLElBQUwsQ0FBVWEsRUFBVixDQUFqQixFQUErQkEsRUFBL0IsQ0FBUjtBQUNBLG9CQUFJVSxNQUFNRixTQUFWLEVBQXFCO0FBQ25CSix5QkFBT00sQ0FBUDtBQUNBSixzQkFBSUMsR0FBSixJQUFXSCxJQUFYO0FBQ0Q7QUFDRjtBQUNELGtCQUFJTyxZQUFZLEtBQUtULGFBQUwsQ0FBbUJDLE9BQU9DLElBQVAsQ0FBbkIsQ0FBaEI7QUFDQSxrQkFBSU8sWUFBWVYsS0FBSU4sU0FBcEIsRUFBK0I7QUFDN0JNLHFCQUFJTixTQUFKLEdBQWdCZ0IsU0FBaEI7QUFDRDtBQUNGO0FBQ0Y7QUFDRjtBQUNGO0FBQ0Q7QUFDQSxXQUFLLElBQUlYLE1BQUksQ0FBYixFQUFnQkEsTUFBSSxLQUFLZixPQUFMLENBQWEyQixNQUFqQyxFQUF5Q1osS0FBekMsRUFBOEM7QUFDNUMsWUFBSUMsUUFBTSxLQUFLaEIsT0FBTCxDQUFhZSxHQUFiLENBQVY7QUFDQSxhQUFLTCxTQUFMLElBQWtCTSxNQUFJTixTQUF0QjtBQUNEO0FBQ0Q7QUFDQSxVQUFJa0IsY0FBY0MsU0FBVUMsR0FBR0MsaUJBQUgsR0FBdUJDLFdBQXZCLEdBQXFDLElBQS9DLElBQXdELEVBQTFFO0FBQ0E7QUFDQSxXQUFLLElBQUlqQixNQUFJLENBQWIsRUFBZ0JBLE1BQUksS0FBS2YsT0FBTCxDQUFhMkIsTUFBakMsRUFBeUNaLEtBQXpDLEVBQThDO0FBQzVDLFlBQUlDLFFBQU0sS0FBS2hCLE9BQUwsQ0FBYWUsR0FBYixDQUFWO0FBQ0EsWUFBSWtCLFFBQVEsQ0FBQ2pCLE1BQUlOLFNBQUosR0FBZ0IsS0FBS0EsU0FBckIsR0FBaUNrQixXQUFsQyxFQUErQ00sT0FBL0MsQ0FBdUQsQ0FBdkQsQ0FBWjtBQUNBbEIsY0FBSWlCLEtBQUosR0FBWUEsS0FBWjtBQUNBakIsY0FBSW1CLFFBQUosR0FBZUYsS0FBZjtBQUNBakIsY0FBSW9CLFFBQUosR0FBZUgsS0FBZjtBQUNBO0FBQ0EsWUFBSUEsUUFBUWpCLE1BQUlOLFNBQUosR0FBZ0IsQ0FBaEIsR0FBb0IsQ0FBaEMsRUFBbUM7QUFDakNNLGdCQUFJb0IsUUFBSixHQUFlcEIsTUFBSU4sU0FBSixHQUFnQixDQUFoQixHQUFvQixDQUFuQztBQUNBTSxnQkFBSW1CLFFBQUosR0FBZW5CLE1BQUlvQixRQUFuQjtBQUNEO0FBQ0QsWUFBSSxLQUFLL0IsS0FBVCxFQUFnQjtBQUNkLGNBQUlVLE1BQUksQ0FBUixFQUFXO0FBQ1QsZ0JBQUlBLFFBQU0sQ0FBVixFQUFhO0FBQ1hDLG9CQUFJcUIsSUFBSixHQUFXQyxXQUFXLEtBQUt0QyxPQUFMLENBQWEsQ0FBYixFQUFnQm1DLFFBQTNCLENBQVg7QUFDRCxhQUZELE1BRU87QUFDTG5CLG9CQUFJcUIsSUFBSixHQUFXLENBQVg7QUFDRDtBQUNGO0FBQ0Y7QUFDRjtBQUNELFdBQUtFLE1BQUw7QUFDRDtBQUNEOzs7O2tDQUNjcEIsSSxFQUFNO0FBQ2xCLGFBQU9BLEtBQUtxQixPQUFMLENBQWEsa0JBQWIsRUFBaUMsSUFBakMsRUFBdUNiLE1BQTlDO0FBQ0Q7Ozs7RUEvRm1DYyxlQUFLQyxTOztrQkFBdEI1QyxRIiwiZmlsZSI6InRhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgemFuVGFibGUgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgcHJvcHMgPSB7XG4gICAgICBjb2x1bW5zOiBBcnJheSxcbiAgICAgIHJvd3M6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGRlZmF1bHQ6IFtdXG4gICAgICB9LFxuICAgICAgZml4ZWQ6IEJvb2xlYW5cbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIF9yb3dzOiBbXSxcbiAgICAgIGNvbHVtbk1hcDoge30sXG4gICAgICBtYXhMZW5ndGg6IDBcbiAgICB9XG4gICAgd2F0Y2ggPSB7XG4gICAgICByb3dzKCkge1xuICAgICAgICB0aGlzLmluaXRUYWJsZSgpXG4gICAgICB9XG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgfVxuICAgIGV2ZW50ID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgIHRoaXMuaW5pdFRhYmxlKClcbiAgICB9XG4gICAgLy8g5Yid5aeL5YyWdGFibGVcbiAgICBpbml0VGFibGUoKSB7XG4gICAgICAvLyDlpIfku73ljp/lp4vmlbDmja5cbiAgICAgIHRoaXMuX3Jvd3MgPSB0aGlzLnJvd3NcbiAgICAgIHRoaXMubWF4TGVuZ3RoID0gMFxuICAgICAgLy8g5YWI5qC55o2u6KGo5aS06K6h566X5YiX5a695bqmXG4gICAgICBmb3IgKGxldCBpIGluIHRoaXMuY29sdW1ucykge1xuICAgICAgICBsZXQgY29sID0gdGhpcy5jb2x1bW5zW2ldXG4gICAgICAgIGNvbC5tYXhMZW5ndGggPSB0aGlzLmdldFRleHRMZW5ndGgoU3RyaW5nKGNvbC50ZXh0KSlcbiAgICAgICAgdGhpcy5jb2x1bW5NYXBbY29sLmZpZWxkXSA9IGNvbFxuICAgICAgfVxuICAgICAgLy8g5qC55o2u5pWw5o2u6K6h566X5YiX5a695bqmXG4gICAgICBmb3IgKGxldCBpIGluIHRoaXMuX3Jvd3MpIHtcbiAgICAgICAgbGV0IHJvdyA9IHRoaXMuX3Jvd3NbaV1cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHJvdykge1xuICAgICAgICAgIGxldCBjb2wgPSB0aGlzLmNvbHVtbk1hcFtrZXldXG4gICAgICAgICAgaWYgKGNvbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsZXQgdGV4dCA9IHJvd1trZXldXG4gICAgICAgICAgICBpZiAodGV4dCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIGlmIChjb2wuZm9ybWF0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgciA9IGNvbC5mb3JtYXQodGV4dCwgdGhpcy5yb3dzW2ldLCBpKVxuICAgICAgICAgICAgICAgIGlmIChyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgIHRleHQgPSByXG4gICAgICAgICAgICAgICAgICByb3dba2V5XSA9IHRleHRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbGV0IGNvbExlbmd0aCA9IHRoaXMuZ2V0VGV4dExlbmd0aChTdHJpbmcodGV4dCkpXG4gICAgICAgICAgICAgIGlmIChjb2xMZW5ndGggPiBjb2wubWF4TGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29sLm1heExlbmd0aCA9IGNvbExlbmd0aFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyDorqHnrpfmnIDlpKflrr3luqZcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjb2wgPSB0aGlzLmNvbHVtbnNbaV1cbiAgICAgICAgdGhpcy5tYXhMZW5ndGggKz0gY29sLm1heExlbmd0aFxuICAgICAgfVxuICAgICAgLy8g5YeP5Y675bem5Y+zcGFkZGluZ1xuICAgICAgbGV0IHNjcmVlbldpZHRoID0gcGFyc2VJbnQoKHd4LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGggKiAwLjk5KSkgLSAxMFxuICAgICAgLy8g5qC55o2u5bGP5bmV5a695bqm6K6h566X5q+P5LiA5YiX55qE5a6e6ZmF5a695bqmXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29sdW1ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY29sID0gdGhpcy5jb2x1bW5zW2ldXG4gICAgICAgIGxldCB3aWR0aCA9IChjb2wubWF4TGVuZ3RoIC8gdGhpcy5tYXhMZW5ndGggKiBzY3JlZW5XaWR0aCkudG9GaXhlZCgyKVxuICAgICAgICBjb2wud2lkdGggPSB3aWR0aFxuICAgICAgICBjb2wubWF4V2lkdGggPSB3aWR0aFxuICAgICAgICBjb2wubWluV2lkdGggPSB3aWR0aFxuICAgICAgICAvLyDmnIDlsI/liJflrr3luqbkuLrlrZfnrKbplb/luqYgKiA4ICsgNlxuICAgICAgICBpZiAod2lkdGggPCBjb2wubWF4TGVuZ3RoICogOCArIDYpIHtcbiAgICAgICAgICBjb2wubWluV2lkdGggPSBjb2wubWF4TGVuZ3RoICogOCArIDZcbiAgICAgICAgICBjb2wubWF4V2lkdGggPSBjb2wubWluV2lkdGhcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5maXhlZCkge1xuICAgICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgaWYgKGkgPT09IDEpIHtcbiAgICAgICAgICAgICAgY29sLmxlZnQgPSBwYXJzZUZsb2F0KHRoaXMuY29sdW1uc1swXS5tYXhXaWR0aClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbC5sZWZ0ID0gMFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgICAvLyDojrflj5bmlofmnKzplb/luqZcbiAgICBnZXRUZXh0TGVuZ3RoKHRleHQpIHtcbiAgICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoL1tcXHUwMzkxLVxcdUZGRTVdL2csICdhYScpLmxlbmd0aFxuICAgIH1cbiAgfVxuIl19