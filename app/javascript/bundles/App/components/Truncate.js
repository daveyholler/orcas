export default function Truncate(string, length, ending) {
  if (length == null) {
    length = 100;
  }
  if (ending == null) {
    ending = '...';
  }
  if (string.length > length) {
    return string.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
};
