window.onload = ->
  cancelTop = false
  btn = document.getElementById "btn"
  timer = null
  window.onscroll = ->
    if cancelTop then clearInterval timer
    cancelTop = true
  btn.onclick = ->
    speed = 3
    timer = setInterval ->
          scrollTop = document.documentElement.scrollTop || document.body.scrollTop
          speed = scrollTop / 6
          nowPos = document.documentElement.scrollTop = document.body.scrollTop = scrollTop - speed
          console.log nowPos
          cancelTop = false
          if scrollTop <= 0 then clearInterval(timer)

        ,
          30

















