
// (function () {
//     var supportsOrientationChange = 'onorientationchange' in window ? 'orientationchange' : 'resize';
//     var timeoutId;
//     function setRem() {
//         var clientWidth = document.documentElement.clientWidth;
//         var nowPX = clientWidth / 480 * 100;
//         document.documentElement.style.fontSize = nowPX + 'px';
//     }
//     setRem();
//     window.addEventListener(supportsOrientationChange, function () {
//         clearTimeout(timeoutId);
//         timeoutId = setTimeout(function () {
//             setRem();
//         }, 300);
//     }, false);
// })();
function setFont() {
    var uiW = 480;
    var winW = document.documentElement.clientWidth;
    var ratio = winW / uiW;

    document.documentElement.style.fontSize = ratio * 100 + 'px';
} setFont();
window.onresize = setFont;

