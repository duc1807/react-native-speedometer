(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('react-native'), require('prop-types')) :
  typeof define === 'function' && define.amd ? define(['react', 'react-native', 'prop-types'], factory) :
  (global = global || self, global.speedometer = factory(global.React, global.reactNative, global.PropTypes));
}(this, function (React, reactNative, PropTypes) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function calculateDegreeFromLabels(degree, labels) {
    var perLevelDegree = degree / labels.length;
    return perLevelDegree;
  }

  function calculateLabelFromValue(value, labels, minValue, maxValue) {
    var currentValue = (value - minValue) / (maxValue - minValue);
    var currentIndex = Math.round((labels.length - 1) * currentValue);
    var label = labels[currentIndex];
    return label;
  }

  /* eslint radix: ["error", "as-needed"] */

  /* eslint-disable no-restricted-globals */
  function limitValue(value, minValue, maxValue, allowedDecimals) {
    var currentValue = 0;

    if (!isNaN(value)) {
      if (!isNaN(allowedDecimals) && allowedDecimals > 0) {
        currentValue = parseFloat(value).toFixed(allowedDecimals < 4 ? parseInt(allowedDecimals) : 4);
      } else {
        currentValue = parseInt(value);
      }
    }

    return Math.min(Math.max(currentValue, minValue), maxValue);
  }

  /* eslint radix: ["error", "as-needed"] */

  /* eslint-disable no-restricted-globals */
  function validateSize(current, original) {
    var currentSize = original;

    if (!isNaN(current)) {
      currentSize = parseInt(current);
    }

    return currentSize;
  }

  /* eslint import/no-unresolved: [2, { ignore: ['react-native'] }] */

  var _Dimensions$get = reactNative.Dimensions.get('window'),
      width = _Dimensions$get.width;
  var style = reactNative.StyleSheet.create({
    wrapper: {
      marginVertical: 5,
      alignSelf: 'center'
    },
    // Circular Container
    circleWrapper: {
      overflow: 'hidden'
    },
    outerCircle: {
      justifyContent: 'flex-end',
      alignItems: 'center',
      overflow: 'hidden',
      borderColor: '#ffffff',
      backgroundColor: '#e6e6e6'
    },
    halfCircle: {
      position: 'absolute',
      top: 0,
      left: 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0
    },
    imageWrapper: {
      position: 'absolute',
      left: 0,
      zIndex: 10
    },
    image: {
      resizeMode: 'stretch',
      height: width - 20,
      width: width - 20
    },
    innerCircle: {
      overflow: 'hidden',
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      width: width * 0.6,
      height: width / 2 * 0.6,
      borderTopLeftRadius: width / 2 - 10,
      borderTopRightRadius: width / 2 - 10
    },
    labelWrapper: {
      marginVertical: 5,
      alignItems: 'center'
    },
    label: {
      fontSize: 25,
      fontWeight: 'bold'
    },
    labelNote: {
      fontSize: 16,
      fontWeight: 'bold'
    }
  });

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
      var currentSize = validateSize(size, width - 20);
      return React__default.createElement(reactNative.View, {
        style: [style.wrapper, {
          width: currentSize,
          height: currentSize / 2
        }, wrapperStyle]
      }, React__default.createElement(reactNative.View, {
        style: [style.outerCircle, {
          width: currentSize,
          height: currentSize / 2,
          borderTopLeftRadius: currentSize / 2,
          borderTopRightRadius: currentSize / 2
        }, outerCircleStyle]
      }, labels.map(function (level, index) {
        var circleDegree = 90 + index * perLevelDegree;
        return React__default.createElement(reactNative.View, {
          key: level.name,
          style: [style.halfCircle, {
            backgroundColor: level.activeBarColor,
            width: currentSize / 2,
            height: currentSize,
            borderRadius: currentSize / 2,
            transform: [{
              translateX: currentSize / 4
            }, {
              rotate: circleDegree + "deg"
            }, {
              translateX: currentSize / 4 * -1
            }]
          }, halfCircleStyle]
        });
      }), React__default.createElement(reactNative.Animated.View, {
        style: [style.imageWrapper, {
          top: -(currentSize / 15),
          transform: [{
            rotate: rotate
          }]
        }, imageWrapperStyle]
      }, React__default.createElement(reactNative.Image, {
        style: [style.image, {
          width: currentSize,
          height: currentSize
        }, imageStyle],
        source: needleImage
      })), React__default.createElement(reactNative.View, {
        style: [style.innerCircle, {
          width: currentSize * 0.6,
          height: currentSize / 2 * 0.6,
          borderTopLeftRadius: currentSize / 2,
          borderTopRightRadius: currentSize / 2
        }, innerCircleStyle]
      })), React__default.createElement(reactNative.View, {
        style: [style.labelWrapper, labelWrapperStyle]
      }, React__default.createElement(reactNative.Text, {
        style: [style.label, labelStyle]
      }, limitValue(value, minValue, maxValue, allowedDecimals)), React__default.createElement(reactNative.Text, {
        style: [style.labelNote, {
          color: label.labelColor
        }, labelNoteStyle]
      }, label.name)));
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
      name: 'Very weak',
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
    needleImage: require('../images/speedometer-needle.png'),
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

  return Speedometer;

}));
//# sourceMappingURL=react-native-speedometer.js.map
