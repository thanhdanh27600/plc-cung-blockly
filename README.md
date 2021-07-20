# Lập trình PLC cùng Blockly

##### Chương trình xây dựng cùng lúc 2 dự án
* **blockly-webview**: Phần Webview cho ứng dụng mobile.
* **blockly-mobile**: Phần Mobile.

_Để chạy chương trình, bảo đảm rằng bạn đã cài đặt Nodejs._ <br />
**1.Chạy riêng phần webview chế độ debug**
1. `cd blockly-webview`
2. `npm start` </br>


_Lưu ý lần chạy đầu tiên, cài đặt các thư viện:_ </br>
1. `npm install`

**2.Chạy build production phần webview và dùng cho mobile**
1. `cd blockly-webview`
2. `npm run build`

**3.Chạy mobile chế độ debug (hiện tại chỉ hỗ trợ trên Android)**
1. `cd blockly-mobile`
2. `npx react-native run-android --variant=debug`</br>

_Lưu ý 1: Bạn phải có bản production của webview trong thư mục static_ <br/>
_Lưu ý 2: lần chạy đầu tiên, cài đặt các thư viện:_ <br/>
1. `npm install`

**4.Chạy build production mobile**
1. `cd blockly-mobile`
2. `npx react-native run-android --variant=release`


