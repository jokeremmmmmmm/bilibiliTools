function press2speed(){
    let timer = undefined
    let mouseup = true
    let hadSetSpeed = false
    let originSpeed = $('.bilibili-player-video-btn-speed-menu .bilibili-player-active').data('value')
    return function(type){
        if(type == 'start'){
            console.log('start')
            mouseup = false
            timer = setInterval(()=>{
                // if(!mouseup) return
                console.log('setInterval')
                if(!hadSetSpeed){
                    console.log('hadSetSpeed')
                    $('.bilibili-player-video-btn-speed-menu [data-value="2"]').click(),hadSetSpeed=true
                }
            },500)
        }
        else if(type == 'stop'){
            console.log('stop')
            mouseup = true,hadSetSpeed = false,$('.bilibili-player-video-btn-speed-menu [data-value="'+originSpeed+'"]').click(),clearInterval(timer),timer=undefined
        }
    }
}
let p2s = press2speed()
document.getElementsByClassName('bilibili-player-dm-tip-wrap')[0].addEventListener('mousedown',()=>p2s('start'))
document.getElementsByClassName('bilibili-player-dm-tip-wrap')[0].addEventListener('mouseup',()=>p2s('stop'))