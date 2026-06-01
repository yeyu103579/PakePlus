window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// very important, if you don't know what it is, don't touch it
// 非常重要，不懂代码不要动，这里可以解决80%的问题，也可以生产1000+的bug
const hookClick = (e) => {
  const origin = e.target.closest('a')
  const isBaseTargetBlank = document.querySelector(
    'head base[target="_blank"]'
  )
  console.log('origin', origin, isBaseTargetBlank)
  if (
    (origin && origin.href && origin.target === '_blank') ||
    (origin && origin.href && isBaseTargetBlank)
  ) {
    e.preventDefault()
    console.log('handle origin', origin)
    location.href = origin.href
  } else {
    console.log('not handle origin', origin)
  }
}

window.open = function (url, target, features) {
  console.log('open', url, target, features)
  location.href = url
}

document.addEventListener('click', hookClick, { capture: true })


// ====== 要隐藏的所有元素 ======
const hideAll = () => {
  // 1. 隐藏"创作指引"菜单
  document.querySelectorAll("header li[role='menuitem']").forEach(el => {
    if (el.textContent.trim().includes("创作指引")) {
      el.style.setProperty('display', 'none', 'important')
    }
  })

  // 2. 隐藏首页中间元素
  const sel2 = "#root > div > div.ant-layout.css-4ffzax > div > main > div > div > div.flex.absolute.top-1\\/2.left-1\\/2.flex-col.gap-\\[6vh\\].justify-end.items-center.w-full.h-full.-translate-x-1\\/2.-translate-y-1\\/2 > div.flex.relative.gap-4.items-center > p"
  document.querySelector(sel2)?.style.setProperty('display', 'none', 'important')

  // 在这里继续加要隐藏的元素...
   const btnTextSel = "#root > div > div.ant-layout.css-4ffzax > div > main > div > div > div > div > div > div.css-42lqtx.ant-pro-page-container-children-container.ant-pro-page-container-children-container-no-header > div > div.h-\\[calc\\(100vh-94px\\)\\].max-h-\\[calc\\(100vh-94px\\)\\].ant-flex.css-42lqtx.ant-flex-align-stretch.ant-flex-vertical > div.flex.gap-\\[80px\\].justify-between.items-center.pl-2 > button > span"
  const btnText = document.querySelector(btnTextSel)
  if (btnText && btnText.textContent !== "朝晚agent") {
    btnText.textContent = "朝晚agent"
   }
  ///////////////////
 const sel4 = "#root > div > div.ant-layout.css-4ffzax > div > header.ant-layout-header.css-4ffzax.ant-pro-layout-header.ant-pro-layout-header-fixed-header.ant-pro-layout-header-fixed-header-action.ant-pro-layout-header-top-menu.ant-pro-layout-header-header.css-yrm7g7 > div > div > div.ant-pro-global-header-right-content.css-yrm7g7 > div > div > div > span > div > div:nth-child(2) > button"
document.querySelector(sel4)?.style.setProperty('display', 'none', 'important')
  ///////////////////////////
  // 5. 隐藏右上角第一个链接
  const sel5 = "#root > div > div.ant-layout.css-4ffzax > div > header.ant-layout-header.css-4ffzax.ant-pro-layout-header.ant-pro-layout-header-fixed-header.ant-pro-layout-header-fixed-header-action.ant-pro-layout-header-top-menu.ant-pro-layout-header-header.css-yrm7g7 > div > div > div.ant-pro-global-header-right-content.css-yrm7g7 > div > div > div > span > div > div:nth-child(1) > a"
  document.querySelector(sel5)?.style.setProperty('display', 'none', 'important')
  //////////////////////////////////
  // 6. 隐藏底部 footer
  document.querySelector("#root > div > div.ant-layout.css-4ffzax > div > main > div > footer")?.style.setProperty('display', 'none', 'important')
  }
// 等 body 出现再启动监听
const startObserver = () => {
if (!document.body) return setTimeout(startObserver, 50)
hideAll()
new MutationObserver(hideAll).observe(document.body, {
childList: true,
subtree: true
})
console.log('[隐藏脚本] 已启动')
}
startObserver()