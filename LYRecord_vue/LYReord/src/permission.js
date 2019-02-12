import router from './router'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.matched.some(r => r.meta.requireAuth)) {
    next();
  } else {
    next();
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
