const isIphone = /iPhone/.test(navigator.userAgent)
const isSafari = /Safari/.test(navigator.userAgent)

const environment = new Proxy({width: 0, height: 0}, {
  get: (target, key) => {
    if(key === "height"){
      if( isIphone && isSafari )
        return window.screen.height - 80
      return window.innerHeight
    }
    if(key === "width"){
      if( isIphone && isSafari )
        return window.screen.width
      return window.innerWidth
    }
    return undefined
  }
})

export default environment
