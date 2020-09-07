import React, { Component } from 'react';
import {
  Animated, Easing, View, Image, Text,
} from 'react-native';
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

const Speedometer =
/* #__PURE__ */
(function (_Component) {
  _inheritsLoose(Speedometer, _Component);

  function Speedometer(props) {
    let _this;

    _this = _Component.call(this, props) || this;
    _this.speedometerValue = new Animated.Value(props.defaultValue);
    return _this;
  }

  const _proto = Speedometer.prototype;

  _proto.render = function render() {
    const _this$props = this.props;


    const value = _this$props.value;


    const size = _this$props.size;


    const minValue = _this$props.minValue;


    const maxValue = _this$props.maxValue;


    const easeDuration = _this$props.easeDuration;


    const allowedDecimals = _this$props.allowedDecimals;


    const labels = _this$props.labels;


    const needleImage = _this$props.needleImage;


    const wrapperStyle = _this$props.wrapperStyle;


    const outerCircleStyle = _this$props.outerCircleStyle;


    const halfCircleStyle = _this$props.halfCircleStyle;


    const imageWrapperStyle = _this$props.imageWrapperStyle;


    const imageStyle = _this$props.imageStyle;


    const innerCircleStyle = _this$props.innerCircleStyle;


    const labelWrapperStyle = _this$props.labelWrapperStyle;


    const labelStyle = _this$props.labelStyle;


    const labelNoteStyle = _this$props.labelNoteStyle;


    const useNativeDriver = _this$props.useNativeDriver;
    const degree = 180;
    const perLevelDegree = calculateDegreeFromLabels(degree, labels);
    const label = calculateLabelFromValue(limitValue(value, minValue, maxValue, allowedDecimals), labels, minValue, maxValue);
    Animated.timing(this.speedometerValue, {
      toValue: limitValue(value, minValue, maxValue, allowedDecimals),
      duration: easeDuration,
      easing: Easing.linear,
      useNativeDriver,
    }).start();
    const rotate = this.speedometerValue.interpolate({
      inputRange: [minValue, maxValue],
      outputRange: ['-90deg', '90deg'],
    });
    const currentSize = validateSize(size, width - 20);
    return React.createElement(View, {
      style: [style.wrapper, {
        width: currentSize,
        height: currentSize / 2,
      }, wrapperStyle],
    }, React.createElement(View, {
      style: [style.outerCircle, {
        width: currentSize,
        height: currentSize / 2,
        borderTopLeftRadius: currentSize / 2,
        borderTopRightRadius: currentSize / 2,
      }, outerCircleStyle],
    }, labels.map((level, index) => {
      const circleDegree = 90 + index * perLevelDegree;
      return React.createElement(View, {
        key: level.name,
        style: [style.halfCircle, {
          backgroundColor: level.activeBarColor,
          width: currentSize / 2,
          height: currentSize,
          borderRadius: currentSize / 2,
          transform: [{
            translateX: currentSize / 4,
          }, {
            rotate: `${circleDegree}deg`,
          }, {
            translateX: currentSize / 4 * -1,
          }],
        }, halfCircleStyle],
      });
    }), React.createElement(Animated.View, {
      style: [style.imageWrapper, {
        top: -(currentSize / 15),
        transform: [{
          rotate,
        }],
      }, imageWrapperStyle],
    }, React.createElement(Image, {
      style: [style.image, {
        width: currentSize,
        height: currentSize,
      }, imageStyle],
      source: needleImage,
    })), React.createElement(View, {
      style: [style.innerCircle, {
        width: currentSize * 0.6,
        height: currentSize / 2 * 0.6,
        borderTopLeftRadius: currentSize / 2,
        borderTopRightRadius: currentSize / 2,
      }, innerCircleStyle],
    })), React.createElement(View, {
      style: [style.labelWrapper, labelWrapperStyle],
    }, React.createElement(Text, {
      style: [style.label, labelStyle],
    }, limitValue(value, minValue, maxValue, allowedDecimals)), React.createElement(Text, {
      style: [style.labelNote, {
        color: label.labelColor,
      }, labelNoteStyle],
    }, label.name)));
  };

  return Speedometer;
}(Component));

Speedometer.defaultProps = {
  defaultValue: 50,
  minValue: 0,
  maxValue: 100,
  easeDuration: 500,
  allowedDecimals: 0,
  labels: [{
    name: 'Pathetically weak',
    labelColor: '#ff2900',
    activeBarColor: '#ff2900',
  }, {
    name: 'Very weak',
    labelColor: '#ff5400',
    activeBarColor: '#ff5400',
  }, {
    name: 'So-so',
    labelColor: '#f4ab44',
    activeBarColor: '#f4ab44',
  }, {
    name: 'Fair',
    labelColor: '#f2cf1f',
    activeBarColor: '#f2cf1f',
  }, {
    name: 'Strong',
    labelColor: '#14eb6e',
    activeBarColor: '#14eb6e',
  }, {
    name: 'Unbelievably strong',
    labelColor: '#00ff6b',
    activeBarColor: '#00ff6b',
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
  useNativeDriver: true,
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
  useNativeDriver: PropTypes.bool,
};

export default Speedometer;
// # sourceMappingURL=react-native-speedometer.esm.js.map
