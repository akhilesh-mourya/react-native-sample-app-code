import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import materialTheme from './theme';

export const whiteFilterIcon = (
  <Icon name="filter" size={18} color={materialTheme.COLORS.WHITE} />
);
export const whiteSearchIcon = (
  <Icon name="search" size={18} color={materialTheme.COLORS.WHITE} />
);
export const whiteClearIcon = (
  <Icon name="times-circle" size={18} color={materialTheme.COLORS.WHITE} />
);
export const arrowRight = (
  <AntDesign name={'arrowright'} color={materialTheme.COLORS.BLACK} size={24} />
);
export const whiteBackIcon = (
  <Feather name={'arrow-left'} color={materialTheme.COLORS.WHITE} size={24} />
);

export const unCheckRadio = (
  <Feather name="circle" size={18} color={materialTheme.COLORS.ORANGE} />
);
export const checkRadio = (
  <Feather name="check-circle" size={18} color={materialTheme.COLORS.ORANGE} />
);
export const chevronDown = (
  <Feather name="chevron-down" size={24} color={materialTheme.COLORS.WHITE} />
);
export const chevronRight = (
  <Feather name="chevron-right" size={32} color={materialTheme.COLORS.BLACK} />
);
export const dotIcon = (
  <Feather name="disc" size={18} color={materialTheme.COLORS.BLACK} />
);
export const joinIcon = (
  <Feather name="arrow-right" size={24} color={materialTheme.COLORS.ORANGE} />
);
export const redDeselectIcon = (
  <Icon name="times-circle" size={22} color={'#f00'} />
);
export const transDeselectIcon = (
  <Icon name="times-circle" size={22} color={'transparent'} />
);
