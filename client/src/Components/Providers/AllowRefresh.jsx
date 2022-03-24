import { localUserProfile, useMainContext } from "./MainProvider";

export function allowRefresh(item) {
  const { userProfile} = useMainContext();
  if (!userProfile) {
    return localUserProfile[item];
  } else {
    return userProfile[item];
  }
}