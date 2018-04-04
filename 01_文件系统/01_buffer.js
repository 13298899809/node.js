/*
	Buffer(缓冲区)
		- Buffer的结构和数组很像，操作的方法也和数组类似
		- 数组中不能存储二进制的文件，而buffer就是专门用来存储二进制数据
		- 使用buffer不需要引入模块，直接使用即可
		- 在buffer中存储的都是二进制数据，但是在显示时都是以16进制的形式显示
			buffer中每一个元素的范围是从00 - ff   0 - 255
			00000000 - 11111111

			计算机 一个0 或一个1 我们称为1位（bit）

			8bit = 1byte（字节）
			1024byte = 1kb
			1024kb = 1mb
			1024mb = 1gb
			1024gb = 1tb
			buffer中的一个元素，占用内存的一个字节
		- Buffer的大小一旦确定，则不能修改，Buffer实际上是对底层内存的直接操作
 */
console.log(buf);
console.log(buf.length);  //占用内存的大小
console.log(name.length); // 字符串的长度
var buf2 = Buffer.alloc(6);
buf2[0] = "张三";
buf2[1] = 1;
buf2[2] = 2;
buf2[6] = 66;
console.log(buf2);
/*
	Buffer.from(str) 将一个字符串转换为buffer
	Buffer.alloc(size) 创建一个指定大小的Buffer
	Buffer.alloUnsafe(size) 创建一个指定大小的Buffer，但是可能包含敏感数据
 	buf.toString() 将缓冲区中的数据转换为字符串
 */
var name = "今天是个好日子";

var buf = Buffer.from(name);