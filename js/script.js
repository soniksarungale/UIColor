var material_color = new Array("#F44336","#9C27B0","#FF9800","#607D8B","#2196F3","#E91E63","#f1c40f","#4CAF50","#795548");
var social_color = new Array("#3b5998","#55acee","#dd4b39","#ff0000","#007bb5","#4dc247","#e95950","#fffc00","#cb2027","#000000","#ff4500","#32506d");

$(".changeformat").hover(function(){
    $(".formatlist").stop().fadeIn();
},function(){
    $(".formatlist").stop().fadeOut();
});
$(".contain").stop().click(function(){
    var clickcolor = $(this).find(".colorname");
    $("#copied span").text("");
    copyToClipboard(clickcolor[0]);
});
function hexToRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
function toHex(){
    if(validate("HEX")){
        $(".rgba-bar").fadeOut();
        $('.material-color .contain').each(function(i, obj) {
            $(this).find(".colorname").text(material_color[i]);
            $(this).css("background-color",material_color[i]);
        }); 
        $('.social-color .contain').each(function(i, obj) {
            $(this).find(".colorname").text(social_color[i]);
            $(this).css("background-color",social_color[i]);
        }); 
        $('#activeformat').removeAttr('id');
        $('.hexformat').attr('id', 'activeformat');
        $(".formatlist").stop().fadeOut();
        $(".currentformat span").text("HEX");
    }
}
var rgbacolor;
var fcolor;
function torgb(){
    if(validate("RGB")){
        $(".rgba-bar").fadeOut();
        $('.material-color .contain').each(function(i, obj) {
            rgbacolor = hexToRgb(material_color[i]);
            fcolor = "rgb("+rgbacolor.r+", "+rgbacolor.g+", "+rgbacolor.b+")";
            $(this).find(".colorname").text(fcolor);
            $(this).css("background-color",fcolor);
        }); 
        $('.social-color .contain').each(function(i, obj) {
            rgbacolor = hexToRgb(social_color[i]);
            fcolor = "rgb("+rgbacolor.r+", "+rgbacolor.g+", "+rgbacolor.b+")";
            $(this).find(".colorname").text(fcolor);
            $(this).css("background-color",fcolor);
        }); 
        $('#activeformat').removeAttr('id');
        $('.rgbformat').attr('id', 'activeformat');
        $(".formatlist").stop().fadeOut();
        $(".currentformat span").text("RGB");
    }
}
function torgba(){
    if(validate("RGBA")){
        $(".rgba-bar").fadeIn();
        $(".formatlist").stop().fadeOut();
        var curopacity = $(".input-range").val();
        opacity(curopacity);
        $('#activeformat').removeAttr('id');
        $('.rgbaformat').attr('id', 'activeformat');
        $(".currentformat span").text("RGBA");
    }
}
function opacity(val){
    $('.material-color .contain').each(function(i, obj) {
            rgbacolor = hexToRgb(material_color[i]);
            fcolor = "rgba("+rgbacolor.r+", "+rgbacolor.g+", "+rgbacolor.b+", "+val+")";
            $(this).find(".colorname").text(fcolor);
            $(this).css("background-color",fcolor);
    }); 
    $('.social-color .contain').each(function(i, obj) {
            rgbacolor = hexToRgb(social_color[i]);
            fcolor = "rgba("+rgbacolor.r+", "+rgbacolor.g+", "+rgbacolor.b+", "+val+")";
            $(this).find(".colorname").text(fcolor);
            $(this).css("background-color",fcolor);
    }); 
}
function validate(type){
    var materialnum = $('.material-color .contain').length;
    var socialnum = $('.social-color .contain').length;
    var materailarray = material_color.length;
    var socialarray = social_color.length;
    if(materialnum == materailarray && socialnum == socialarray){
        var clickname = $("#activeformat").text();
        if(clickname != type){
           return true;
        }
        else{      
            return false;
        }
    }
    else{
        if(materialnum!=materailarray){
            console.log("material array length and number of container doesn't match");
        }
        if(socialnum!=socialarray){
           console.log("social array length and number of container doesn't match");
        }
        return false;
    }
    
}
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    $("#copied span").text($(element).text());
    $("#blur").fadeIn();
	$("#copied").fadeIn();

    var delayMillis = 1000; 
    setTimeout(function() {
    $("#copied").fadeOut();
    $("#blur").fadeOut();

    }, delayMillis);
}
