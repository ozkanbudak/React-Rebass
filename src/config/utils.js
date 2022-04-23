import _ from "lodash";

export const _get = _.get;

export const setLocalStorage = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value));
}

export const getLocalStorage = (name) =>  {
  const value = JSON.parse(localStorage.getItem(name))
  return value;
}

export const removeLocalStorage = (name) => {
  localStorage.removeItem(name);
}

export const getPermissions = () => {
  let prms;
  prms = JSON.parse(localStorage.getItem('user_permissions'));
  if (prms && prms.length > 0) {
    prms = prms.map(x => x.code);
  }
  return prms;
};

export const checkPermissions = codes => {
  const ownPermissions = getPermissions();
  if (!ownPermissions) return false;
  for (let i = 0; i < codes.length; i += 1) {
    if (ownPermissions.includes(codes[i])) {
      return true;
    }
  }
  // return true;
  return false;
};

export const checkPermission = code => {
  if (getPermissions() && getPermissions().includes(code)) {
    return true;
  }
  return false;
};

export const randomId = () => {
  return Math.floor(Math.random(999) * Math.floor(9999999999))
}

export const convertFormElements = ({
  els,
  control,
}) => {
  console.log("34234123423424234")
  Object.keys(els).map((key) => {
    els[key].control = control;
    return '';
  });
  return els;
};

export const enumToArray = (enm) => {
  const arr = [];
  const keys = Object.keys(enm);
  keys.forEach((key) => {
    arr.push(enm[key]);
  });
  return arr;
};

export const getEnumValue = (enumData, key) => {
  if (key || key === 0) return enumData[key.toString()];
  return "";
};