
# js说明

## 10进制转其他进制	
``` javascript	
// 10进制转其他进制	
var x = 110	
console.log(x.toString(8))	
console.log(x.toString(2))	
console.log(x.toString(16))	
```	

## 其他进制转10进制	

``` javascript	
// 其他进制转10进制	
var x = '110'	
console.log(parseInt(`${x}`, 2))  // 110此时是2进制数字符串	
console.log(parseInt(`${x}`, 8))  // 110此时是8进制数字符串	
console.log(parseInt(`${x}`, 16)) // 110此时是16进制数字符串	
```