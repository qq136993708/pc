// 开发者
// callback  ===》函数
// 传入一个函数
function fn1(callback) {
    // console.log(typeof callback);
    // 函数使用  直接加（）
    callback("小小")
};
// 使用者
fn1(function (a,b) {
    console.log("第一个参数"+a); // 函数调用时传递的第一个参数   小小
    console.log("第二个参数"+b); // 函数调用时 传递的第二个参数  undefined

//     在这写东西  写代码
//     console.log("这是回调")
})
// 会打印出   这是回调
// 调用过程
// 1.调用 fn1这个函数



