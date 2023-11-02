

socket.on('moveLeft', () => {
    $.keys.state.left = 1
    $.keys.state.right = 0
    $.keys.state.up = 0
    $.keys.state.down = 0
})
socket.on('moveRight', () => {
    $.keys.state.right = 1
    $.keys.state.left = 0
    $.keys.state.up = 0
    $.keys.state.down = 0
})
socket.on('moveUp', () => {
    $.keys.state.up = 1
    $.keys.state.left = 0
    $.keys.state.right = 0
    $.keys.state.down = 0
})
socket.on('moveDown', () => {
    $.keys.state.down = 1
    $.keys.state.left = 0
    $.keys.state.right = 0
    $.keys.state.up = 0
})

socket.on('stopMoving', () => {
    $.keys.state.left = 0
    $.keys.state.right = 0
    $.keys.state.up = 0
    $.keys.state.down = 0
})


socket.on('moveLeftUp', () => {
    $.keys.state.left = 1
    $.keys.state.right = 0
    $.keys.state.up = 1
    $.keys.state.down = 0
})
socket.on('moveRightUp', () => {
    $.keys.state.right = 1
    $.keys.state.left = 0
    $.keys.state.up = 1
    $.keys.state.down = 0
})
socket.on('moveLeftDown', () => {
    $.keys.state.left = 1
    $.keys.state.up = 0
    $.keys.state.right = 0
    $.keys.state.down = 1
})
socket.on('moveRightDown', () => {
    $.keys.state.down = 1
    $.keys.state.left = 0
    $.keys.state.right = 1
    $.keys.state.up = 0
})

socket.on('stopMoving', () => {
    $.keys.state.left = 0
    $.keys.state.right = 0
    $.keys.state.up = 0
    $.keys.state.down = 0
})

socket.on('rotate', ({x, y}) => {
    
	$.mouse.ax = x;
	$.mouse.ay = y;
	$.mouse.sx = $.mouse.ax - $.cOffset.left;
	$.mouse.sy = $.mouse.ay - $.cOffset.top;
	$.mouse.x = $.mouse.sx - $.screen.x;
	$.mouse.y = $.mouse.sy - $.screen.y;
})


setTimeout(() => {
    $.setState('play');
}, 1000);

setInterval(() => {
    // console.log($.hero.x)
    // console.log($.mouse.ax)
    // $.mouse.ax += 20
    // $.mouse.ay += 50
    // $.mouse.ay += 15
    // $.hero.direction += 0.5
    // $.mouse.sx = $.mouse.ax - $.cOffset.left;
    // $.mouse.sy = $.mouse.ay - $.cOffset.top;
    // $.mouse.x = $.mouse.sx - $.screen.x;
    // $.mouse.y = $.mouse.sy - $.screen.y;
}, 100);
// if( e === 38 || e === 87 ){ $.keys.state.up = 1; }
// if( e === 39 || e === 68 ){ $.keys.state.right = 1; }
// if( e === 40 || e === 83 ){ $.keys.state.down = 1; }
// if( e === 37 || e === 65 ){ $.keys.state.left = 1; }

// setInterval(() => {
//     socket.emit("test")
// }, 1000);
// socket.on("test", ()=> console.log('message'))

// socket.on('shoot', $.mousedowncb)

// console.log($.mousedowncb())x