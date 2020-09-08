import React, { Component } from 'react';
import { Animated, Easing, View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import calculateDegreeFromLabels from './utils/calculate-degree-from-labels.js';
import calculateLabelFromValue from './utils/calculate-label-from-value.js';
import limitValue from './utils/limit-value.js';
import validateSize from './utils/validate-size.js';
import style, { width } from './style/index.js';

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
    _this.speedometerValue = new Animated.Value(props.defaultValue);
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
    Animated.timing(this.speedometerValue, {
      toValue: limitValue(value, minValue, maxValue, allowedDecimals),
      duration: easeDuration,
      easing: Easing.linear,
      useNativeDriver: useNativeDriver
    }).start();
    var rotate = this.speedometerValue.interpolate({
      inputRange: [minValue, maxValue],
      outputRange: ['-90deg', '90deg']
    });
    var currentSize = validateSize(size, width - 20);
    return React.createElement(View, {
      style: [style.wrapper, {
        width: currentSize,
        height: currentSize / 2
      }, wrapperStyle]
    }, React.createElement(View, {
      style: [style.outerCircle, {
        width: currentSize,
        height: currentSize / 2,
        borderTopLeftRadius: currentSize / 2,
        borderTopRightRadius: currentSize / 2
      }, outerCircleStyle]
    }, labels.map(function (level, index) {
      var circleDegree = 90 + index * perLevelDegree;
      return React.createElement(View, {
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
    }), React.createElement(Animated.View, {
      style: [style.imageWrapper, {
        top: -(currentSize / 80),
        transform: [{
          rotate: rotate
        }]
      }, imageWrapperStyle]
    }, React.createElement(Image, {
      style: [style.image, {
        width: currentSize,
        height: currentSize
      }, imageStyle],
      source: needleImage
    })), React.createElement(View, {
      style: [style.innerCircle, {
        width: currentSize * 0.6,
        height: currentSize / 2 * 0.6,
        borderTopLeftRadius: currentSize / 2,
        borderTopRightRadius: currentSize / 2
      }, innerCircleStyle]
    })), React.createElement(View, {
      style: [style.labelWrapper, labelWrapperStyle]
    }, React.createElement(Text, {
      style: [style.label, labelStyle]
    }, limitValue(value, minValue, maxValue, allowedDecimals)), React.createElement(Text, {
      style: [style.labelNote, {
        color: label.labelColor
      }, labelNoteStyle]
    }, label.name)));
  };

  return Speedometer;
}(Component);

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

export default Speedometer;
//# sourceMappingURL=react-native-speedometer.esm.js.map
