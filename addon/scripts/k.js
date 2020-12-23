onload = function(images, t, i, j) {

    images = ['image/spring_addon.png','image/sun_addon.png','image/fell_addon.png','image/winter_addon.png']
    
    t = document.getElementsById('addon')
    
    i = Math.floor(((new Date().getMonth()+10)%12)/3)
    
    for (j = 0; j < t.length; ++j) {
    
    t[j].style.backgroundImage = 'url('+images[i]+')'
    
    }
    
    }