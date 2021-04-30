import {Metronom, MetronomTypes} from "./Metronom";
import {useEffect, useMemo} from "react";
import {useSelector} from "react-redux";
import {selectIsEvenUser} from "../store/user/user.selectors";

const useMetronom = (type?: MetronomTypes) => {
  // const isEvenUser = useSelector(selectIsEvenUser)
  const metronom = useMemo(() => new Metronom(35), []);
  const metronomManager = useMemo(() => {
    const defaultManager = {
      stop: () => metronom.stop(),
      get status() {
        return metronom.status
      }
    }

    switch (type) {
      case MetronomTypes.Normal:
        return Object.assign(defaultManager, {start: () => metronom.start()});
      case MetronomTypes.Random:
        return Object.assign(defaultManager, {start: () => metronom.startRandom()});
      default:
        return {start: () => void 0, stop: () =>  void 0, status: Metronom.Status.NotCreated};
    }
  }, [metronom, type]);

  useEffect(() => {
    return () => metronom.stop();
  }, [metronom]);
  return metronomManager;
};

export default useMetronom;
