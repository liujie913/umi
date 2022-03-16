/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState) {
  const { currentUser, pp } = initialState || {};
  console.log(111, currentUser)
  console.log(222, pp)
  return {
    canAdmin: currentUser && currentUser.access === 'admin',
    table: true,
  };
}
