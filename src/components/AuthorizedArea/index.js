/* eslint-disable react/prop-types */
import React from 'react';
import { checkPermissions } from 'config/utils';

const AuthorizedArea = ({ permissions, children }) => {
  if (!permissions || permissions === null || checkPermissions(permissions))
    return <>{children}</>;
  return <></>;
};

export default AuthorizedArea;
