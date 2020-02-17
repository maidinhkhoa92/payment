import moment from 'moment';
import 'moment/locale/es';

const FormatTime = time => {
  return moment(time)
    .locale('es')
    .format('DD/MM/YYYY');
};

const FormatMonth = time => {
  return moment(time)
    .locale('es')
    .format('MMMM YYYY');
};

const FormatDateParams = time => {
  return moment(time)
    .locale('es')
    .format('YYYY-MM-DD');
};

const FormatPastTime = time => {
  return moment(time)
    .locale('es')
    .fromNow();
};

const FormatMonthYear = time => {
  return moment(time)
    .locale('es')
    .format('MM/YYYY');
};

export { FormatTime, FormatMonth, FormatDateParams, FormatPastTime, FormatMonthYear };
