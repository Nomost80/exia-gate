export default (type, ...argNames) => (...args) => {
  let payload = {};

  if (argNames)
    argNames.forEach((argName, i) => payload[argName] = args[i]);
  else
    payload = { ...args };

  return {
    type,
    payload
  };
};