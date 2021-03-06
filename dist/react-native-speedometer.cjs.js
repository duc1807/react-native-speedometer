'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactNative = require('react-native');
var PropTypes = _interopDefault(require('prop-types'));
var calculateDegreeFromLabels = _interopDefault(require('../src/utils/calculate-degree-from-labels.js'));
var calculateLabelFromValue = _interopDefault(require('../src/utils/calculate-label-from-value.js'));
var limitValue = _interopDefault(require('../src/utils/limit-value.js'));
var validateSize = _interopDefault(require('../src/utils/validate-size.js'));
var style = require('../src/style/index.js');
var style__default = _interopDefault(style);

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var Speedometer =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Speedometer, _Component);

  function Speedometer(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.speedometerValue = new reactNative.Animated.Value(props.defaultValue);
    return _this;
  }

  var _proto = Speedometer.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        value = _this$props.value,
        size = _this$props.size,
        minValue = _this$props.minValue,
        maxValue = _this$props.maxValue,
        easeDuration = _this$props.easeDuration,
        allowedDecimals = _this$props.allowedDecimals,
        labels = _this$props.labels,
        needleImage = _this$props.needleImage,
        wrapperStyle = _this$props.wrapperStyle,
        outerCircleStyle = _this$props.outerCircleStyle,
        halfCircleStyle = _this$props.halfCircleStyle,
        imageWrapperStyle = _this$props.imageWrapperStyle,
        imageStyle = _this$props.imageStyle,
        innerCircleStyle = _this$props.innerCircleStyle,
        labelWrapperStyle = _this$props.labelWrapperStyle,
        labelStyle = _this$props.labelStyle,
        labelNoteStyle = _this$props.labelNoteStyle,
        useNativeDriver = _this$props.useNativeDriver;
    var degree = 180;
    var perLevelDegree = calculateDegreeFromLabels(degree, labels);
    var label = calculateLabelFromValue(limitValue(value, minValue, maxValue, allowedDecimals), labels, minValue, maxValue);
    reactNative.Animated.timing(this.speedometerValue, {
      toValue: limitValue(value, minValue, maxValue, allowedDecimals),
      duration: easeDuration,
      easing: reactNative.Easing.linear,
      useNativeDriver: useNativeDriver
    }).start();
    var rotate = this.speedometerValue.interpolate({
      inputRange: [minValue, maxValue],
      outputRange: ['-90deg', '90deg']
    });
    var currentSize = validateSize(size, style.width - 20);
    return React__default.createElement(reactNative.View, {
      style: [style__default.wrapper, {
        width: currentSize,
        height: currentSize / 3 
      }, wrapperStyle]
    }, React__default.createElement(reactNative.View, {
      style: [style__default.outerCircle, {
        width: currentSize,
        height: currentSize / 2,
        borderTopLeftRadius: currentSize / 2,
        borderTopRightRadius: currentSize / 2
      }, outerCircleStyle]
    }, React__default.createElement(reactNative.Animated.View, {
      style: [style__default.imageWrapper, {
        top: -(currentSize / 200),
        transform: [{
          rotate: rotate
        }]
      }, imageWrapperStyle]
    }, React__default.createElement(reactNative.Image, {    //0------------
      style: [style__default.image, {
        width: currentSize * 1,
        height: currentSize * 1.01,
        marginTop: -20
      }, imageStyle],
      source: needleImage
    })), React__default.createElement(reactNative.View, {
      style: [style__default.innerCircle, {
        width: currentSize * 0.6,
        height: currentSize / 2 * 0.6,
        borderTopLeftRadius: currentSize / 2,
        borderTopRightRadius: currentSize / 2
      }, innerCircleStyle]
    })));
  };

  return Speedometer;
}(React.Component);

Speedometer.defaultProps = {
  defaultValue: 50,
  minValue: 0,
  maxValue: 100,
  easeDuration: 500,
  allowedDecimals: 0,
  labels: [{
    name: 'Pathetically weak',
    labelColor: '#ff2900',
    activeBarColor: '#ff2900'
  }, {
    name: 'Weak',
    labelColor: '#ff5400',
    activeBarColor: '#ff5400'
  }, {
    name: 'So-so',
    labelColor: '#f4ab44',
    activeBarColor: '#f4ab44'
  }, {
    name: 'Fair',
    labelColor: '#f2cf1f',
    activeBarColor: '#f2cf1f'
  }, {
    name: 'Strong',
    labelColor: '#14eb6e',
    activeBarColor: '#14eb6e'
  }, {
    name: 'Unbelievably strong',
    labelColor: '#00ff6b',
    activeBarColor: '#00ff6b'
  }],
  needleImage: require('../images/needle2.png'),
  wrapperStyle: {},
  outerCircleStyle: {},
  halfCircleStyle: {},
  imageWrapperStyle: {},
  imageStyle: {},
  innerCircleStyle: {},
  labelWrapperStyle: {},
  labelStyle: {},
  labelNoteStyle: {},
  useNativeDriver: true
};
Speedometer.propTypes = {
  value: PropTypes.number.isRequired,
  defaultValue: PropTypes.number,
  size: PropTypes.number,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  easeDuration: PropTypes.number,
  allowedDecimals: PropTypes.number,
  labels: PropTypes.array,
  needleImage: PropTypes.any,
  wrapperStyle: PropTypes.object,
  outerCircleStyle: PropTypes.object,
  halfCircleStyle: PropTypes.object,
  imageWrapperStyle: PropTypes.object,
  imageStyle: PropTypes.object,
  innerCircleStyle: PropTypes.object,
  labelWrapperStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  labelNoteStyle: PropTypes.object,
  useNativeDriver: PropTypes.bool
};

exports.default = Speedometer;
//# sourceMappingURL=react-native-speedometer.cjs.js.map
