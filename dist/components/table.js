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
      this._rows = JSON.parse(JSON.stringify(this.rows));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLmpzIl0sIm5hbWVzIjpbInphblRhYmxlIiwicHJvcHMiLCJjb2x1bW5zIiwiQXJyYXkiLCJyb3dzIiwidHlwZSIsImRlZmF1bHQiLCJmaXhlZCIsIkJvb2xlYW4iLCJkYXRhIiwiX3Jvd3MiLCJjb2x1bW5NYXAiLCJtYXhMZW5ndGgiLCJ3YXRjaCIsImluaXRUYWJsZSIsIm1ldGhvZHMiLCJldmVudCIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImkiLCJjb2wiLCJnZXRUZXh0TGVuZ3RoIiwiU3RyaW5nIiwidGV4dCIsImZpZWxkIiwicm93Iiwia2V5IiwidW5kZWZpbmVkIiwiZm9ybWF0IiwiciIsImNvbExlbmd0aCIsImxlbmd0aCIsInNjcmVlbldpZHRoIiwicGFyc2VJbnQiLCJ3eCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJ3aWR0aCIsInRvRml4ZWQiLCJtYXhXaWR0aCIsIm1pbldpZHRoIiwibGVmdCIsInBhcnNlRmxvYXQiLCIkYXBwbHkiLCJyZXBsYWNlIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxLLEdBQVE7QUFDTkMsZUFBU0MsS0FESDtBQUVOQyxZQUFNO0FBQ0pDLGNBQU1GLEtBREY7QUFFSkcsaUJBQVM7QUFGTCxPQUZBO0FBTU5DLGFBQU9DO0FBTkQsSyxRQVFSQyxJLEdBQU87QUFDTEMsYUFBTyxFQURGO0FBRUxDLGlCQUFXLEVBRk47QUFHTEMsaUJBQVc7QUFITixLLFFBS1BDLEssR0FBUTtBQUNOVCxVQURNLGtCQUNDO0FBQ0wsYUFBS1UsU0FBTDtBQUNEO0FBSEssSyxRQUtSQyxPLEdBQVUsRSxRQUVWQyxLLEdBQVEsRTs7Ozs7NkJBR0M7QUFDUCxXQUFLRixTQUFMO0FBQ0Q7QUFDRDs7OztnQ0FDWTtBQUNWO0FBQ0EsV0FBS0osS0FBTCxHQUFhTyxLQUFLQyxLQUFMLENBQVdE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QWEsQ0FBYixFQUFnQnNDLFFBQTNCLENBQVg7QUFDRCxhQUZELE1BRU87QUFDTG5CLG9CQUFJcUIsSUFBSixHQUFXLENBQVg7QUFDRDtBQUNGO0FBQ0Y7QUFDRjtBQUNELFdBQUtFLE1BQUw7QUFDRDtBQUNEOzs7O2tDQUNjcEIsSSxFQUFNO0FBQ2xCLGFBQU9BLEtBQUtxQixPQUFMLENBQWEsa0JBQWIsRUFBaUMsSUFBakMsRUFBdUNiLE1BQTlDO0FBQ0Q7Ozs7RUEvRm1DYyxlQUFLQyxTOztrQkFBdEIvQyxRIiwiZmlsZSI6InRhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgemFuVGFibGUgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgcHJvcHMgPSB7XG4gICAgICBjb2x1bW5zOiBBcnJheSxcbiAgICAgIHJvd3M6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGRlZmF1bHQ6IFtdXG4gICAgICB9LFxuICAgICAgZml4ZWQ6IEJvb2xlYW5cbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIF9yb3dzOiBbXSxcbiAgICAgIGNvbHVtbk1hcDoge30sXG4gICAgICBtYXhMZW5ndGg6IDBcbiAgICB9XG4gICAgd2F0Y2ggPSB7XG4gICAgICByb3dzKCkge1xuICAgICAgICB0aGlzLmluaXRUYWJsZSgpXG4gICAgICB9XG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgfVxuICAgIGV2ZW50ID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgIHRoaXMuaW5pdFRhYmxlKClcbiAgICB9XG4gICAgLy8g5Yid5aeL5YyWdGFibGVcbiAgICBpbml0VGFibGUoKSB7XG4gICAgICAvLyDlpIfku73ljp/lp4vmlbDmja5cbiAgICAgIHRoaXMuX3Jvd3MgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMucm93cykpXG4gICAgICB0aGlzLm1heExlbmd0aCA9IDBcbiAgICAgIC8vIOWFiOagueaNruihqOWktOiuoeeul+WIl+WuveW6plxuICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLmNvbHVtbnMpIHtcbiAgICAgICAgbGV0IGNvbCA9IHRoaXMuY29sdW1uc1tpXVxuICAgICAgICBjb2wubWF4TGVuZ3RoID0gdGhpcy5nZXRUZXh0TGVuZ3RoKFN0cmluZyhjb2wudGV4dCkpXG4gICAgICAgIHRoaXMuY29sdW1uTWFwW2NvbC5maWVsZF0gPSBjb2xcbiAgICAgIH1cbiAgICAgIC8vIOagueaNruaVsOaNruiuoeeul+WIl+WuveW6plxuICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLl9yb3dzKSB7XG4gICAgICAgIGxldCByb3cgPSB0aGlzLl9yb3dzW2ldXG4gICAgICAgIGZvciAobGV0IGtleSBpbiByb3cpIHtcbiAgICAgICAgICBsZXQgY29sID0gdGhpcy5jb2x1bW5NYXBba2V5XVxuICAgICAgICAgIGlmIChjb2wgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV0IHRleHQgPSByb3dba2V5XVxuICAgICAgICAgICAgaWYgKHRleHQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICBpZiAoY29sLmZvcm1hdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbGV0IHIgPSBjb2wuZm9ybWF0KHRleHQsIHRoaXMucm93c1tpXSwgaSlcbiAgICAgICAgICAgICAgICBpZiAociAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICB0ZXh0ID0gclxuICAgICAgICAgICAgICAgICAgcm93W2tleV0gPSB0ZXh0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxldCBjb2xMZW5ndGggPSB0aGlzLmdldFRleHRMZW5ndGgoU3RyaW5nKHRleHQpKVxuICAgICAgICAgICAgICBpZiAoY29sTGVuZ3RoID4gY29sLm1heExlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbC5tYXhMZW5ndGggPSBjb2xMZW5ndGhcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8g6K6h566X5pyA5aSn5a695bqmXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29sdW1ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY29sID0gdGhpcy5jb2x1bW5zW2ldXG4gICAgICAgIHRoaXMubWF4TGVuZ3RoICs9IGNvbC5tYXhMZW5ndGhcbiAgICAgIH1cbiAgICAgIC8vIOWHj+WOu+W3puWPs3BhZGRpbmdcbiAgICAgIGxldCBzY3JlZW5XaWR0aCA9IHBhcnNlSW50KCh3eC5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoICogMC45OSkpIC0gMTBcbiAgICAgIC8vIOagueaNruWxj+W5leWuveW6puiuoeeul+avj+S4gOWIl+eahOWunumZheWuveW6plxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbHVtbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGNvbCA9IHRoaXMuY29sdW1uc1tpXVxuICAgICAgICBsZXQgd2lkdGggPSAoY29sLm1heExlbmd0aCAvIHRoaXMubWF4TGVuZ3RoICogc2NyZWVuV2lkdGgpLnRvRml4ZWQoMilcbiAgICAgICAgY29sLndpZHRoID0gd2lkdGhcbiAgICAgICAgY29sLm1heFdpZHRoID0gd2lkdGhcbiAgICAgICAgY29sLm1pbldpZHRoID0gd2lkdGhcbiAgICAgICAgLy8g5pyA5bCP5YiX5a695bqm5Li65a2X56ym6ZW/5bqmICogOCArIDZcbiAgICAgICAgaWYgKHdpZHRoIDwgY29sLm1heExlbmd0aCAqIDggKyA2KSB7XG4gICAgICAgICAgY29sLm1pbldpZHRoID0gY29sLm1heExlbmd0aCAqIDggKyA2XG4gICAgICAgICAgY29sLm1heFdpZHRoID0gY29sLm1pbldpZHRoXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZml4ZWQpIHtcbiAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgIGlmIChpID09PSAxKSB7XG4gICAgICAgICAgICAgIGNvbC5sZWZ0ID0gcGFyc2VGbG9hdCh0aGlzLmNvbHVtbnNbMF0ubWF4V2lkdGgpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb2wubGVmdCA9IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG4gICAgLy8g6I635Y+W5paH5pys6ZW/5bqmXG4gICAgZ2V0VGV4dExlbmd0aCh0ZXh0KSB7XG4gICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC9bXFx1MDM5MS1cXHVGRkU1XS9nLCAnYWEnKS5sZW5ndGhcbiAgICB9XG4gIH1cbiJdfQ==