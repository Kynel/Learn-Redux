const myLogger = (store) => (next) => (action) => {
  console.log(action); // 액션 출력
  const result = next(action); // 다음 미들웨어 (혹은 리듀서) 에게 액션을 전달

  console.log("\t", store.getState());

  return result; // 반환하는 값은 dispatch(action)의 결과물이 된다. (기본값: undefined)
};

export default myLogger;
