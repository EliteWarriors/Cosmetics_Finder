window.shouldRotateToOrientation = function(degrees) {
    var deviceType = (navigator.userAgent.match(/iPad/i))  == "iPad" ? "iPad" : (navigator.userAgent.match(/iPhone/i))  == "iPhone" ? "iPhone" : (navigator.userAgent.match(/Android/i)) == "Android" ? "Android" : (navigator.userAgent.match(/BlackBerry/i)) == "BlackBerry" ? "BlackBerry" : "null";
    return true;
}

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady()
{

}
document.addEventListener("offline", onOffline, false);
function onOffline()
{
    myApp.addNotification({
        title: 'Warning',
        subtitle: '',
        message: 'No connection available',
        media: '<i class="icon demo-icon-1"></i>'
    });
}
