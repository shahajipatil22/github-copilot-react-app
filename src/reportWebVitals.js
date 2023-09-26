import { reportWebVitals as report } from 'web-vitals';

function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    report(onPerfEntry);
  }
}

export default reportWebVitals;
