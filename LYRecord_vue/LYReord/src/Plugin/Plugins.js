import {
  MessageBox,
}
from 'mint-ui'
const Plugins = {
  install(Vue, options) {
    /**
     * 提示信息窗
     */
    Vue.prototype.$InfoMessage = function (text) {
      MessageBox('提示', text);
    }
    /*
     *警告信息窗
     */
    Vue.prototype.$warnMessage = function (text) {
      MessageBox({
        title: '警告',
        message: text,
        showCancelButton: true
      });
    }
  }
}

export default Plugins;
