export default function getBaseUrl() {
  if (__DEV__) {
    return 'http://localhost:3000';
  }
  return window.origin;
}
